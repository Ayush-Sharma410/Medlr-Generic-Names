d3.csv("Generic Name Drug Listing.csv").then(function (data) {
    console.log(data);
    var Generic_Names= data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", function() { d3.event.preventDefault(); });

var i=1;
    // Defining the function
function runEnter() {

    // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
    d3.select("tbody").html("") 
    
    // This code is needed to prevent the page from reloading.
    d3.event.preventDefault(); 
    
    // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
    var inputValue = d3.select("#user-input").property("value");
    
    // This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
    var findGenericName =Generic_Names.filter((Generic_Name) => (Generic_Name.BrandName.includes(inputValue)));
    var tbody = d3.select("tbody");

var rows = tbody.selectAll("tr")
  .data(findGenericName)
  .enter()
  .append("tr");

rows.append("td")
  .text(function(d) { return i });  
  i=i+1;
rows.append("td")
  .text(function(d) { return d.BrandName; });

rows.append("td")
  .text(function(d) { return d.GenericName; });
    
   
    
   
   
     
    
    };
});
