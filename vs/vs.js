let dt;

const colProperties = [
    ["weapon", 9],
    ["passive", 12],
    ["evo", null]
];

function mapColProp( [name,width] ) {
    return  {
        title: name,
        data: name,
        width: width ? width + "em" : "auto"
    }
}
const dtColumns = colProperties.map( mapColProp );

function loadData(data) {
    dt = new DataTable("table", {
        order: [],
        paging: false,
        layout: {
            topStart: {
                search: true
            },
            topEnd: null
        },
        autoWidth: false,
        data: data,
        columns: dtColumns
    });
}

function focusSearch() {
    let searchInput = document.querySelector(".dt-search .dt-input[type='search']");
    searchInput.focus();
}

function onLoad(e) {
    loadData(data);
    focusSearch();
}

window.addEventListener("load", onLoad);