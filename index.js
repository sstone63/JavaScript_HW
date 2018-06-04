// get variable references to tbody, date/time input, and search button
var $tbody = document.querySelector("tbody");
var $date_timeSearch = document.querySelector("#date-time");
var $searchBtn = document.querySelector("#search");

// add event listener for click of search button

$searchBtn.addEventListener("click", handleSearchButtonClick);

// set filtered dates to ufo data

var filteredDates = dataSet;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredDates.length; i++) {
        var ufo = filteredDates[i];
        var fields = Object.keys(ufo);
        var row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = row.insertCell(j);
            $cell.innerText = ufo[field];
        }
    }
}

function handleSearchButtonClick() {
    var filterDate = $date_timeSearch.value.trim();

    filteredDates = dataSet.filter(function(ufo){
        var ufoDate = ufo.datetime;

        return ufoDate === filterDate;
    });

    renderTable();
}

renderTable();
