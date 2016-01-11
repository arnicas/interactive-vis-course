# Week 3: Data Loading, Tables


## Homework Review

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

Useful javascript for sorting, by the way - and the sort order depends on whether you do a-b or b-a:

````
data.sort(function(a,b) {
    return b.difference-a.difference;
});
````

This function will sort it in place - meaning, the data array is now sorted for you after you call this function (it persists).

Also, in d3, there are some utility methods - if you use these, make sure your data values are numeric, though (unless you want sorting by string value, or alphabetic).

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

### Dates in Your Data (a First Glance)

Dates should be turned into Javascript date objects.  D3 has tools for this. A lot of the data we will work with from UNICEF includes dates (years, anyway).

* Dates example: [d3_process_data_dates.html](d3_process_data_dates.html)
* For input date handling, see: http://learnjsdata.com/time.html
* Help with format strings from @zanarmstrong: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95
* Video by Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B

We'll come back to dates in an uncoming week, too.


## Intro to Selections and Data Binding in D3

To do the "right" thing with data in D3, you need to understand binding data to DOM elements.  This concept works with the "selectAll, data, enter, append" pattern.

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

* Reading: [IDVW Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html#_binding_data)
* Review [d3_table.html](d3_table.html).  Try to use breakpoints and logging to understand it.
* You should review: [http://bost.ocks.org/mike/nest/](http://bost.ocks.org/mike/nest/)
* How selections work demo: selectAll vs. select: http://prcweb.co.uk/lab/selection/


## Homework

Readings:

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/
* Nested Selections and Tables: http://bost.ocks.org/mike/nest/

Plus anything else that I referenced above that helps you better understand d3 data selection and joins.


**Homework 1**: (25pt), Build your own styled table from your own CSV data, using the model in d3_table.html.

* Sort the data in javascript in a reasonable default way (by one of the columns) for display before it goes into the table.
* Create one calculated column out of the data in your file - e.g., adding, subtracting, percentage, etc.
* Style it so it doesn't look plain (i.e., better than mine).
* Make the title header on the page appropriately explain your data table.  Add more text to the page to help explain, identifying your source, etc. (25pts)

Send me the gist, "Week 3: Basic D3 Table."

