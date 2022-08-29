

let exampleSheet = {
    "sheetId": "1rRjYfECW_0w1bvLr-r8UgjWLWvFZdjFsXrqnfdmjH-4",
    "name": "exampleSheet",
    "newRows": [
        [
            "Hello",
            "It's",
            "Me"
        ],
        [
            "It's",
            "been",
            "long"
        ]
    ]
}

function translateSheet(sheet) {
    
    // <div class="table-container">
    // <div class="table-header">
    //     <h1>Table Name</h1>
    //     <span class="row-menu">&there4;</span>
    // </div>
    // <div class="table-body">
    //     <div class="row">
    //         <div class="row-object">
    //             <div class="row-object-header"><span>&or;	</span></div>
    //             <div class="row-object-body">
    //                 <div class="col-object">Name</div>
    //                 <div class="col-object">Surname</div>
    //             </div>
    //         </div>

    let tableContainer = document.createElement("div");
    tableContainer.className = "table-container"
    
    let tableHeader = document.createElement("div");
    tableHeader.className = "table-header"

    let tableName = document.createElement("h1");
    tableName.innerText = sheet.name;

    let rowMenu = document.createElement("span");
    rowMenu.className = "row-menu";
    rowMenu.innerHTML = "&there4;"

    let tableBody = document.createElement("div");
    tableBody.className = "table-body"

    let row = document.createElement("div");
    row.className = "row"
    
    let rowObject = document.createElement("div");
    rowObject.className = "row-object"

    let rowObjectHeader = document.createElement("div");
    rowObjectHeader.className = "row-object-header"
    rowObjectHeader.innerHTML = "<span>&or;</span>"

    let rowObjectBody = document.createElement("div");
    rowObjectBody.className = "row-object-body"

    // exampleSheet.newRows[0]
    for (let i = 0; i < sheet.newRows[0].length; i++) {
        let colObject = document.createElement("div");
        colObject.className = "col-object"
        colObject.innerText = sheet.newRows[0][i]

        rowObjectBody.appendChild(colObject)
    }

    rowObject.appendChild(rowObjectHeader)
    rowObject.appendChild(rowObjectBody)

    row.appendChild(rowObject)
    tableBody.appendChild(row)

    tableHeader.appendChild(tableName)
    tableHeader.appendChild(rowMenu)

    tableContainer.appendChild(tableHeader)
    tableContainer.appendChild(tableBody)

    let appBody = document.querySelector('#app-body')
    appBody.appendChild(tableContainer)
}

translateSheet(exampleSheet);