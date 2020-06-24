var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
var tableData = document.getElementById('table-data');
var inputBar = document.getElementById('search-box');
var mainTable = document.getElementById('main-table');
var tableBody = document.getElementById('table-body');
var infoContent = document.getElementById('info-content');


function getDataFrombackend() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            var response = JSON.parse(xhttp.responseText);
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                createTable(response[i]);
            }
        }
    }
}

getDataFrombackend();


function createTable(response) {

    var tableRow = document.createElement('tr');
    tableRow.id = response.id;
    tableRow.classList.add('data-row');
    var tableDataOne = document.createElement('td');
    tableDataOne.classList.add('column1');
    var todoText1 = document.createTextNode(response.id);
    tableDataOne.appendChild(todoText1);

    var tableDataTwo = document.createElement('td');
    tableDataTwo.classList.add('column2');
    var todoText2 = document.createTextNode(response.firstName);
    tableDataTwo.appendChild(todoText2);
    var tableDataThree = document.createElement('td');
    tableDataThree.classList.add('column3');
    var todoText3 = document.createTextNode(response.lastName);
    tableDataThree.appendChild(todoText3);

    var tableDataFour = document.createElement('td');
    tableDataFour.classList.add('column4');
    var todoText4 = document.createTextNode(response.email);
    tableDataFour.appendChild(todoText4);
    var tableDataFive = document.createElement('td');
    tableDataFive.classList.add('column5');
    var todoText5 = document.createTextNode(response.phone);
    tableDataFive.appendChild(todoText5);

    tableRow.appendChild(tableDataOne);
    tableRow.appendChild(tableDataTwo);
    tableRow.appendChild(tableDataThree);
    tableRow.appendChild(tableDataFour);
    tableRow.appendChild(tableDataFive);
    tableBody.appendChild(tableRow);
    mainTable.appendChild(tableBody);
    tableData.appendChild(mainTable);

    tableRow.addEventListener('click', function () {
        allTableData = document.getElementsByClassName("data-row");
        var allColumns = mainTable.getElementsByTagName('td');

        for (i = 0; i < allTableData.length; i++) {
            allTableData[i].style.backgroundColor = "#fff";
            allColumns[i].style.color = "#808080";
        }
        console.log(tableRow.children[0]);
        document.getElementById(tableRow.id).style.backgroundColor = "#20b2aa";
        for (var i = 0; i < tableRow.children.length; i++) {
            tableRow.children[i].style.color = "#000";
        }
        var nameSection = "<div><b>User selected:</b>" + response.firstName + " " + response.lastName + "</div>";
        var descriptionSection = "<div><b> Description: </b><textarea cols='50' rows='5' readonly>" + response.description
            + "</textarea></div >";
        var street = "<div><b>Address:</b>" + response.address["streetAddress"]
            + "</div>";
        var city = "<div><b>City:</b>" + response.address["city"] + "</div>";
        var state = "<div><b>State:</b>" +
            response.address["state"] + "</div>";
        var zip = "<div><b>Zip:</b>" + response.address["zip"] + "</div>";
        var allData = nameSection + descriptionSection + street + city + state + zip;
        infoContent.innerHTML = allData;
        infoContent.style.display = "block"


    });

}


inputBar.addEventListener('keyup', function () {
    var filter = document.getElementById('search-box').value.toUpperCase();
    var myTable = document.getElementById('main-table');
    var tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            var textValue = td.textContent || td.innerHTML;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";

            }
        }
    }

});
