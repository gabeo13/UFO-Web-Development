// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

    // Get the value property of the input element
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");
    var inputValue5 = inputElement5.property("value");

    var inputArray = [{ key: 'datetime', value: inputValue1 },
    { key: 'city', value: inputValue1 },
    { key: 'state', value: inputValue1 },
    { key: 'country', value: inputValue1 },
    { key: 'shape', value: inputValue1 }]

    // Console log variables stepwise to ensure functionality
    console.log(inputArray);
    console.log(tableData);

    // Assign filted data to a variable
    var filteredData = tableData.filter(ufo => ufo.key === inputArray.value);

    // Console log filtered data to ensure the filter worked
    console.log(filteredData);

    // Push filtered results to html table
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
