

var margin = {
top: 50,
right: 10,
bottom: 70,
left: 70
};

var width = 600;
var height = 500;

//Set up date formatting and years
var dateFormat = d3.time.format("%Y");

//Set up scales
var xScale = d3.time.scale()
.range([margin.left, width - margin.right - margin.left]);

var yScale = d3.scale.sqrt()
.range([margin.top, height - margin.bottom]);

//Configure axis generators
var xAxis = d3.svg.axis()
.scale(xScale)
.orient("bottom")
.ticks(15)
.tickFormat(function (d) {
    return dateFormat(d);
})
.innerTickSize(0);

var yAxis = d3.svg.axis()
.scale(yScale)
.orient("left")
.innerTickSize(0);

//Configure line generator
// each line dataset must have a d.year and a d.rate for this to work.
var line = d3.svg.line()
.x(function (d) {
    return xScale(dateFormat.parse(d.year));
})
.y(function (d) {
    return yScale(+d.rate);
});


//Create the empty SVG image
var svg = d3.select("#vis")
.append("svg")
.attr("width", width)
.attr("height", height);

// Add axes

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (height - margin.bottom) + ")")
    .call(xAxis)
    .append("text")
    .attr("x", width - margin.left - margin.right)
    .attr("y", margin.bottom / 3)
    .attr("dy", "1em")
    .style("text-anchor", "end")
    .attr("class", "label")
    .text("Year");

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -margin.top)
    .attr("y", -2*margin.left / 3)
    .attr("dy", "1em")
    .style("text-anchor", "end")
    .attr("class", "label")
    .text("Under 5 Mortality Rate");

var years = [];

function make_data(rawdata) {

    years = d3.keys(rawdata[0]).slice(1, 65);
    console.log(years);

    //Create a new, empty array to hold our restructured dataset
    var dataset = [];

    //Loop once for each row in data
    rawdata.forEach(function (d, i) {

        var IMRs = [];

        years.forEach(function (y) { //Loop through all the years - and get the rates for this data element

            if (d[y]) { /// What we are checking is if the "y" value - the year string from our array, which would translate to a column in our csv file - is empty or not.

                IMRs.push({ //Add a new object to the new rates data array - for year, rate. These are OBJECTS that we are pushing onto the array
                    year: y,
                    rate: d[y], // this is the value for, for example, d["2004"]
                    Country: d.Country
                });
            }

        });
        dataset.push({ // At this point we are accessing one index of data from our original csv "data", above and we have created an array of year and rate data from this index. We then create a new object with the Country value from this index and the array that we have made from this index.
            country: d.Country,
            rates: IMRs // we just built this from the current index.
        });

    });

    return dataset;
}

function draw_lines(dataset) {

    console.log(dataset);

    //Set scale domains - max and min of the years
    xScale.domain(
        d3.extent(years, function (d) {
            return dateFormat.parse(d);
        }));

    // max of rates to 0 (reversed, remember)
    yScale.domain([
        d3.max(dataset, function (d) {
            return d3.max(d.rates, function (d) {
                return +d.rate;
            });
        }),
        0
    ]);

    //Make a group for each country
    var groups = svg.selectAll("g.lines")
        .data(dataset, function(d) {return d.country;}); // key value!

    groups
        .enter()
        .append("g")
        .attr("class", "lines")
        .attr("id", function (d) {
            return d.country.replace(/\s/g, '_');
        });

    groups.exit().transition().duration(1000).attr("opacity", 0).remove();

    //Within each group, create a new line/path,
    //binding just the rates data to each one
    var lines = groups.selectAll("path")
        .data(function (d) { // because there's a group with data already...
            return [d.rates]; // it has to be an array for the line function
        });

    lines
        .enter()
        .append("path")
        .attr("class", "line")
        .attr("d", line)
        .classed("normal", true)
        .classed("focused", false); // gives gray color

    lines.exit().transition().duration(1000).attr("opacity", 0).remove();

    svg.select('.x.axis').transition().duration(300).call(xAxis);

    // same for yAxis but with more transform and a title
    svg.select(".y.axis").transition().duration(300).call(yAxis);

}






