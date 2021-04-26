// from data.js
var tableData = data;

//Select table body
var tbody =  d3.select("tbody");

//1 .function for building table

function Tablebuildingfun(data) {
  tbody.html("");
  // Adding table row
  data.forEach((dataRow) => {
    var trow = tbody.append("tr");
    // Adding table cell data
    Object.values(dataRow).forEach((cell) => {
      var Tcell = trow.append("td");
        Tcell.text(cell);  
      }
      );
  });
}


//2. Add serch function in the page

function ONclick() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputdate = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // if date is entered then apply fileter
  if(inputdate){
    filteredData = filteredData.filter(row => row.datetime === inputdate);
  }
  //Apply the function using filtered data
  Tablebuildingfun(filteredData); 
}

//Listen to button
d3.selectAll("#filter-btn").on("click", ONclick);

//Applying the talbe building function

Tablebuildingfun(tableData); 

