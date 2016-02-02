# Week 3: Data Loading, Tables


## Homework Review


### Two Charts


Nice comparisons:

* http://bl.ocks.org/captainelaine/raw/878de9e89e87cfb5b33e/
* http://bl.ocks.org/jashcny/raw/a0ad931aac8a8e6960d5/
* http://bl.ocks.org/JenHLab/raw/f3be2719dc714d82cf92/

Nice text:

* http://bl.ocks.org/NERD-rat-LAB/raw/0ce43f1e0c366814d3a4/
* http://bl.ocks.org/SHewitt95/raw/8bbaeb1d9284db6b5a72/
* http://bl.ocks.org/hfreitas92/raw/ba8a83bde86d429021bd/


But note: **the dual-axis problem** is a real one: https://www.perceptualedge.com/articles/visual_business_intelligence/dual-scaled_axes.pdf

Try to avoid using them!


What was hard about this homework?



### An In-Class Debugging Problem

Let's look at the error in [jquery_error_on_load.html](jquery_error_on_load.html) together.


## Some Javascript Manipulations on Data

### Data Processing on Load (and Scope)

It's quite common to do things to your data right after you load it. Very useful ways to iterate through data include `dataset.forEach(function (d,i) {...})` and map: `dataset.map(function (d,i) {...})`.  Have a look at http://learnjsdata.com/iterate_data.html.

Remember that in d3, you need ALL your work on data to occur inside the d3.csv() function call.  Otherwise, the data variables will not be visible to your code and you will get errors that things are undefined.

````
d3.csv('myfile.csv', function(error, data) {

    if (error) {
        console.log("Error on load:", error);
    }

// in here, data is defined! Unless you had an error on
// load.


});
````

* Review: [d3_process_data.html](d3_process_data.html)
* Alternately, making new arrays: [d3_new_obj_data.html](d3_new_obj_data.html)


### Sorting Data Arrays

Useful javascript for sorting, by the way - and the sort order depends on whether you do a-b or b-a.  This notation works with sorting an array of objects, which means they have the attribute "difference" on them:

````
data.sort(function(a,b) {
    return b.difference-a.difference;
});
````

The sort function will sort an array in place - meaning, the data array is now sorted for you after you call this function (it persists).

Also, in d3, there are some utility methods - if you use these, make sure your data values are numeric, though (unless you want sorting by string value, or alphabetic).  This shows us sorting an array of objects by the attribute "value":

````
data.sort(function (a, b) {
    return d3.ascending(a.value, b.value);
}
````

A trick to get your data to be numeric is to use a `+` in front of it, which is type coercion.You will see this *all the time* in D3 code.

````
data.sort(function (a, b) {
    return d3.ascending(+a.value, +b.value);
}
````

If you have an array of numbers or strings, not objects, your sort needs to work differently:

````
    arrays = [
        [2,4,5,6,8, "china"],
        [1,4,7,8,90,4, "australia"],
        [34,44,23,54,65,5, "belgium"],
        [3,4,54,2,4,5,6,"france"]
    ];

    //To sort by the item in the 3rd column:

    arrays.sort(function(a, b) {
        return b[2] - a[2];
    })

    //or

    arrays.sort(function(a,b) {
        return d3.descending(a[2], b[2]);
        })
````

Again, alphabetic sorting can use the same d3 helper functions!


### Dates in Your Data (a First Glance)

Dates should be turned into Javascript date objects.  D3 has tools for this.  A lot of the data from UNICEF includes dates (years, anyway).

The thing to remember is that you need to "parse" a date string to make a Javascript date object.  You can then convert it to another format to print out a human readable string.

* Dates example: [d3_process_data_dates.html](d3_process_data_dates.html)

````
    var dateParser = d3.time.format("%Y"); // this is 2007 etc, as in the file.
    var outputDate = d3.time.format(" '%y "); // this is '07 format - with spaces around it
````

We "parse" using the `.parse()` function on the dateParser we set up with a format:

````
    // you apply the function with parse, to read it in:
    d.parsed_year = dateParser.parse(d.year);
````

To print it, we just wrap the parsed year in the output format we want:

````
console.log("output string:", outputDate(d.parsed_year));
````

For more:

* For input date handling, see: http://learnjsdata.com/time.html
* Help with format strings from @zanarmstrong: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95
* Video by Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B

We'll come back to dates in an upcoming week, too.


## Intro to Selections and Data Binding in D3

To do the "right" thing with data in D3, you need to understand binding data to DOM elements.  This concept works with the "selectAll, bind data, enter, append what you selected" pattern.

Data binding in D3 uses a pattern in which we select a non-existent element on the page, bind the data to it with a `.data()` statement, `enter()` it, and then append the thing we selected, for each row of data.

The pattern for multiple rows of data in a file is always:

````
var table = d3.select("#table");  // select the thing on the page you are attaching to

// we use the svg element to attach our 
table.selectAll("p") // or whatever svg or DOM element you want to create!
    .data(myData) // using your data set here - this is the binding
    .enter() // this is used to "enter" each row of your data
    .append("p") // now create a p for it
    .text(function(d) {  //  use a data element to fill in the text here. function(d) is always your data item.
        return d.SomeProperty;
    });

````

For data and charts that will be updated, the best pattern to follow is to bind the data separately from the enter stage - because you might be also calling transition and exit on that data selection.  (You'll see that later.)

````
var mytable = table.selectAll("p")
    .data(myData); // this is a data binding in a separate step.

mytable.enter()
    .append("p")
    .text(function(d) {
        return d.someProperty;
    });
````


**Important Readings**:

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/

If you remain confused, try these till you get a grip:

* Another intro article: http://code.hazzens.com/d3tut/lesson_1.html
* Thinking with Joins: by Mike Bostock: http://bost.ocks.org/mike/join/
* A nice overview on joins: http://animateddata.co.uk/articles/d3/datajoins/?utm_content=buffera16c8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* Another review of selections: http://www.jeromecukier.net/blog/2013/03/05/d3-tutorial-at-strata-redux
* How Selections Work in more detail: http://bost.ocks.org/mike/selection/
* [D3 Data Binding by Kristw](http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
* Scott Murray's [video on binding data](https://www.youtube.com/watch?v=XtxfXcFDMaQ&index=2&list=PL0tDk-f4v1ujCTy4xgYIwzky0uFEm7wiY).


## Tables as an Intro to "Deep" D3 Thinking

We're starting with tables, because in my opinion they are an often overlooked part of the interactive vis landscape, and one of my favorites. Building them illustrate some key aspects of D3 DOM manipulation, they allow us to use JQuery and D3 together if we want; they transition nicely to heatmaps, an excellent visual display method for some types of data.

* You should review: [http://bost.ocks.org/mike/nest/](http://bost.ocks.org/mike/nest/)
* How selections work demo: selectAll vs. select: http://prcweb.co.uk/lab/selection/
* **Example:** Start with a simple table with "p" rows: [d3_simplePTable.html](d3_simplePTable.html): This example uses data binding and also a datum header row.

There is a special case for binding a single item of data, using `datum()` instead of the `data()` with the select/enter pattern.  Datum will bind one item, and does not use an "enter()" function; you can still access the data in subsequent chained clauses using an append and the `function(d)` accessor to get attributes of the data.  This is an example:

````
var table = d3.select("#data"); // we will work from the #table div on the page, and attach data to it.
var header = table.append("p").attr("class", "header");

// then we attach a single data item to it - an array of strings.
header
    .datum(["Region", "1990", "2015", "Difference"])
    .text(function(d) {
        return d.join(" ");  // this is the same as making a string like:
                             // d[0] + ' ' + d[1] + ' ' + d[2] + ' ' + d[3], 
                             //except we don't need to know how many items are in the array!
    });
````

For more on the `data()` vs. `datum()` difference, see the [datum documentation](https://github.com/mbostock/d3/wiki/Selections#datum) and [this thread on SO](http://stackoverflow.com/questions/13728402/what-is-the-difference-d3-datum-vs-data).


* More complicated, real table: [d3_table.html](d3_table.html).  This example uses nested selections.  Try to use breakpoints and logging to understand it.  This is pretty advanced D3!  This version uses an array of arrays that you create from your data, but you can rename your column headers however you like.

A little more complex in the packaging:

* [d3_tabulate_function.html](d3_tabulate_function.html): Uses a function to set up the table.  This function requires the actual column names that are in the data to create the table, and uses an array of objects, not arrays!  The downside is that the column names can't be prettied up in your code, it uses what's in the csv file.



## Homework

Readings:

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/
* Nested Selections and Tables: http://bost.ocks.org/mike/nest/

Plus anything else that I referenced above that helps you better understand d3 data selection and joins.


**Homework**: (25pt), Build your own styled table from your own CSV data, using the model in [d3_tabulate_function.html](d3_tabulate_function.html).

* Sort the data in Javascript in a reasonable default way (by one of the columns) for display before it goes into the table.
* Create one calculated column out of the data in your file - e.g., adding, subtracting, percentage, in a forEach loop after you load the data.
* Style it so it doesn't look plain (i.e., make it better than mine).
* Make the title header on the page appropriately explain your data table.  Add more text to the page to help explain it and identify your source, etc. (25pts)

When you make the gist, you will need to upload the file tabulate.js too!

Send me the gist: "Week 3: D3 Table."

