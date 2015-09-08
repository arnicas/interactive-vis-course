##Week 3: Data Loading, Tables


##Homework Review

Discuss issues we had with the homeworks, High Charts, and/or data loading.

High Charts examples:

* Louise: http://bl.ocks.org/lwhitaker3/raw/8fb150421ff2ca7251be/
* Jo: http://bl.ocks.org/jowang0319/raw/0991b58b29039bfcbb56/
* Luis: http://bl.ocks.org/lmelgar/raw/7e3a21a905cae284cab8/
* Halina: http://bl.ocks.org/hmader/raw/7473839d1bbbedb7b291/


**Other charting libraries:**

Lots of you used Google Charts, probably because I said it wasn't that bad :)

* Louise: http://bl.ocks.org/lwhitaker3/9790e93bd61152bc01f4
* Luis tried a couple and ended with Zingchart.js: http://bl.ocks.org/lmelgar/3b1e7aa8a5889e396215 (notice the legend behavior differs)


About Readme.md files...  Tips on formatting in markdown, if you want: https://help.github.com/articles/github-flavored-markdown/

**Error issues:**

* Let's talk about data column names:
https://gist.github.com/DimsumPanda/1b8f5adcbf4d752cff0c

* Let's discuss the color palette.

* Let's discuss [jquery_error_on_load.html](jquery_error_on_load.html).
Remember, for JSON files check them with http://jsonlint.com/.


What took the most time?

The readings? What's Shneiderman's matra?


## Data Processing on Load

It's quite common to do things to your data right after you load it.

* Important: [d3_process_data.html](d3_process_data.html)
* Alternately, with new arrays: [d3_new_obj_data.html](d3_new_obj_data.html)

Very useful ways to iterate through data include `dataset.forEach(function (d,i) {...})` and map: `dataset.map(function (d,i) {...})`.  Have a look at http://learnjsdata.com/iterate_data.html.


###Sorting Data

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
    d3.ascending(a.value, b.value);
}
````

A trick to get your data to be numeric is to use a `+` in front of it, which is type coercion.You will see this *all the time* in D3 code.

````
data.sort(function (a, b) {
    d3.ascending(+a.value, +b.value);
}
````


###Dates in Your Data

Dates should be turned into Javascript date objects.  D3 has tools for this. A lot of the data we will work with from UNICEF includes dates (years, anyway).

* Dates example: [d3_process_data_dates.html](d3_process_data_dates.html)
* For input date handling, see: http://learnjsdata.com/time.html
* Help with format strings from @zanarmstrong: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95
* Video by Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B


####Scope

Remember that in d3, you need ALL your work on data to occur inside the d3.csv function call.  Otherwise, the data variables will not be visible to your code and you will get errors that things are undefined.

**Homework on data manips, see below**


## Selections and Data Binding in D3

To do the "right" thing with data in D3, you need to understand binding data to DOM elements.  This concept works with the "selectAll, data, enter, append" pattern.

**Important Readings**:

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/

If You Remain Confused, try these till you get a grip:

* Thinking with Joins: by Mike Bostock: http://bost.ocks.org/mike/join/
* Another intro article: http://code.hazzens.com/d3tut/lesson_1.html
* A nice overview on joins: http://animateddata.co.uk/articles/d3/datajoins/?utm_content=buffera16c8&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* Another review of selections: http://www.jeromecukier.net/blog/2013/03/05/d3-tutorial-at-strata-redux
* How Selections Work in more detail: http://bost.ocks.org/mike/selection/
* [D3 Data Binding by Kristw](http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
* Scott Murray's [video on binding data](https://www.youtube.com/watch?v=XtxfXcFDMaQ&index=2&list=PL0tDk-f4v1ujCTy4xgYIwzky0uFEm7wiY).


##Tables as an Intro to Deep D3 Thinking

We're starting with tables, because in my opinion they are an often overlooked part of the interactive vis landscape, and one of my favorites. Building them illustrate some key aspects of D3 DOM manipulation, they allow us to use JQuery and D3 together if we want; they transition nicely to heatmaps, an excellent visual display method for some types of data.

Reading: [IDVW Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html#_binding_data)

In increasing order of complexity:

* d3_table.html
    * You should review: http://bost.ocks.org/mike/nest/
    * How selections work demo: selectAll vs. select: http://prcweb.co.uk/lab/selection/
* d3_tabulate_function.html
* d3_tabulate_function_sortable.html - using a JQuery function with D3!
* A more advanced approach by Gregor Aisch: https://vis4.net/blog/posts/making-html-tables-in-d3-doesnt-need-to-be-a-pain/

**Homework**: See below.

## Examples of Interactive Tables and Style Advice

### D3 Table Examples

* A live NYT project ([Chicago Public Schools](http://www.nytimes.com/interactive/2012/09/14/us/how-the-chicago-public-school-district-compares.html)) with bars in a table
* D3 Sortable Table with bars http://bl.ocks.org/mbostock/3719724
* D3 Tablesort plugin https://github.com/ile/d3-tablesort
* Sorting and styling in D3: http://www.d3noob.org/2013/02/more-d3js-table-madness-sorting.html

### Live Examples

* Inline sparklines and graphs: https://www.safaribooksonline.
com/blog/2014/02/12/inline-visualization-d3-js/?utm_content=buffer980a1&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* A live project with this technique: http://stateofobesity.org/adult-obesity/

### Table UI

* Nice style tips (visual): https://darkhorseanalytics.com/blog/clear-off-the-table/
* Table UI Patterns - styling, interaction: http://www.jankoatwarpspeed.com/ultimate-guide-to-table-ui-patterns/

### JQuery Table Refs

* An article on styling in JQuery: http://code.tutsplus.com/tutorials/using-jquery-to-manipulate-and-filter-data--net-5351
* More JQuery tables: http://www.datatables.net/, http://www.dynatable.com/?sorts%5Bus-%24%5D=1, filtering and sorting UI options: http://www.unheap.com/section/user-interface/filter-sort/

## Just Cool

* Data Comb, http://www.bytemuse.com/post/data-comb-visualization/


## Helpful Dev Stuff

* Debugging with Dev Tools and D3: https://egghead.io/lessons/debugging-with-dev-tools


## Readings

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/
* Nested Selections and Tables: http://bost.ocks.org/mike/nest/

Plus anything else that I referenced above that helps you better understand d3 data selection and joins.


## Homeworks

Readings above.

**Homework 1** (30pts): Using the data in data/UN_RefugeesByOrigin_1990-2013.csv, 

* fix any column names you think should/could be improved
* load your data in d3 using d3.csv
* add a property to the data set in javascript that is the sum of the years' values for each
* add a property to the data set in javascript that is the difference between 2010 and 2013
* sort the data by the new value that is the sum of the refugees
* draw your <p>'s for each row of the fixed data set, using the sort order for sum of refugees (largest at the top)
* extra credit (6pts): draw your <p>'s using d3's enter().append() approach.

Send me the gist, "Week 3: Cleaned data file"

**Homework 2:** (10pt) Based on what you know about data binding now, how would you make your `<p>` creation from last week's homework the D3 way?  Redo the example in [create_p_from_data.html](../Week2/create_p_from_data.html) using a d3 "enter" approach in place of the forEach loop. Extra credit: Sort your data by one of the columns in the data before you make the `<p>` tags. (4pt)

Send me the gist, "Week 3: My Data the D3 Way." (10pt, extra 4pt)

**Homework 3**: (25pt, Build your own styled table from your CSV data, using the model in d3_tabulate_function.html, (or EXTRA EXTRA CREDIT, 8pt using d3_tabulate_function_sortable.html). Sort the data in a reasonable default way for display before it goes into the table.  Style it so it looks good, with tips from the articles and links above on style ideas (start using colors and styles from the UNICEF Style Guide.) Make the header on the page appropriately explain your data table.  Add more text to the page to help explain, identifying your source, etc. (25pts, XX Credit 8pts)  Send me the gist, "Week 3: Basic D3 Table."

**Homework 4**: Pick an interactive graphic somewhere that you'd like to know how to make. Remember I gave you resources on the home page of this repo...  Send it to me by email with a link and what you like about it: "Week 3: How do I do this?"  I'll try to find out for you! (5pt)

