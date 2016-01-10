//Load in contents of CSV file
d3.csv("data/test_data.csv", function(data) {

    //Now CSV contents have been transformed into
    //an array of JSON objects.
    console.log("The first file is csv...")
    //Log 'data' to the console, for verification.
    console.log(data);

});

d3.json("data/test_data.json", function(data2) {

    //Now json contents have been loaded into
    //an array of JSON objects.

    console.log("This file is json!")
    //Log 'data' to the console, for verification.
    console.log(data2);

});

// Notice that the objects look the same. d3.csv() parses rows as objects.
// Also this is a good point to talk about scope and breakpoints.
