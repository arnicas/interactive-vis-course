d3.select("body").append("h1").text("My Data");

var body = d3.select("body");

// Open the console to see this. You may need to reload if you
// didn't have it open when you first loaded the page.
console.log("D3 Selection of body:", body);

// The selection via jquery returns something different:
console.log("Jquery selection:", $("body"));

d3.csv("data/water_improvement_data.csv", function(error, mydata) {

    if (error) { console.log("error loading ", error); }

    console.log("My first object:", mydata[0]);

    // This is not the real D3 'way.' This is a javascript
    // loop that will add p elements for each item in the data set
    // manually. In D3, you will use enter() eventually for this.

    mydata.forEach(function (d) {
        console.log("In this loop, d is now", d);
        // we defined body with a var d3 selection before we loaded the data file!
        body.append("p").text(d.name + " " + d.year1990 + " " + d.year2015);
    });

    // The jquery approach -- you don't need to do this in homework.

    body.append("h2").text("JQuery is below:");

    mydata.forEach(function (d) {
        $("body").append("<p>" + d.name + "</p>");
    });
});
