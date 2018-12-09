//checking data

var tableData = data;

//console.log(data);


var tableBody = d3.select("tbody");


//looping through objects in data

    

tableData.forEach((dataRow) => {
        
    //console.log(dataRow);    
            //appending table rows
        var tableRow = tableBody.append("tr");

        Object.values(dataRow).forEach((info) => {

            var cell = tableRow.append("td");
                cell.text(info);
    
    });

});




//set up event listeners for page interaction

function handleClick() {

    var dateInput = d3.select("#datetime");

    var userDate = dateInput.property("text");
   // console.log(userDate);

    let selectedData = tableData;

    d3.event.preventDefault();

    if (userDate) {

        selecteddData = selectedData.filter(row => row.datetime === userDate);
  }

  createTable(selectedData);
}

d3.selectAll("#filter-btn").on("click", handleClick);


