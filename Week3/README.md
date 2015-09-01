##Week 3: Data Loading, Tables


##Homework Review

Discuss issues we had with the homeworks, High Charts, and/or data loading.

The readings? What's Shneiderman's matra?


## Data Processing on Load

It's quite common to do things to your data right after you load it.

* [d3_process_data.html](d3_process_data.html)
* [d3_new_obj_data.html](d3_new_obj_data.html)

Very useful ways to iterate through data include `dataset.forEach(function (d,i) {...})` and map: `dataset.map(function (d,i) {...})`.  Have a look at http://learnjsdata.com/iterate_data.html.  For some other utility functions to make working with data easier, I recommend lodash.js: https://lodash.com/docs.


###Dates in Your Data

Dates should be turned into Javascript date objects.  D3 has tools for this. A lot of the data we will work with from UNICEF includes dates (years, anyway).

* Dates example: [d3_process_data_dates.html](d3_process_data_dates.html)
* For input date handling, see: http://learnjsdata.com/time.html
* Help with format strings from @zanarmstrong: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95
* Video by Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B


## Selections and Data Binding in D3

To do the "right" thing with data in D3, you need to understand binding data to DOM elements.  This concept works with the "selectAll, data, enter, append" pattern.

**Important Readings**:

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/

If You Remain Confused:

* How Selections Work in more detail: http://bost.ocks.org/mike/selection/
* [D3 Data Binding by Kristw](http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
* Thinking with Joins: by Mike Bostock: http://bost.ocks.org/mike/join/
* Another intro article: http://code.hazzens.com/d3tut/lesson_1.html
* Another review of selections: http://www.jeromecukier.net/blog/2013/03/05/d3-tutorial-at-strata-redux
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

Useful javascript for sorting, by the way:

````
data.sort(function(a,b) {
            return b.difference-a.difference;
});
````


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

## If We Get to It Today -- D3 Scales

Even independent of the rest of D3, the scales are incredibly powerful and useful tools.  Scales map numbers from a domain into a range. In particular, we need to turn numbers that are in our input data into pixel locations on the screen.  Or into colors.

* Read: http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_creating_a_scale
* Supplementary: http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/
* Videos: [Scott Murray's linear scales](https://www.youtube.com/watch?v=5EZSOsBXdS0&list=PL0tDk-f4v1uh4s33k1qJ7Xl96cOySkLnt), [ordinal scales](https://www.youtube.com/watch?v=WxtJ7VfP_VE&list=PL0tDk-f4v1uh4s33k1qJ7Xl96cOySkLnt&index=2)

Look at [d3_table_heatmap.html](d3_table_heatmap.html), where we add a color range to one column of numbers.

Here's a cool related recent vis in NYT: http://www.nytimes.com/interactive/2015/08/06/upshot/2016-republican-presidential-candidates-dashboard.html?smid=tw-share&_r=0


**Homework**: See below.


## Helpful Dev Stuff

* Debugging with Dev Tools and D3: https://egghead.io/lessons/debugging-with-dev-tools


## Readings

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.
* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/
* Nested Selections and Tables: http://bost.ocks.org/mike/nest/
* Read: http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_creating_a_scale


## Homeworks

Readings above.

**Homework 1:** Based on what you know about data binding now, how would you make your `<p>` creation from last week's homework the D3 way?  Redo the example in [create_p_from_data.html](../Week2/create_p_from_data.html) using a d3 "enter" approach in place of the forEach loop. Send me the gist, "Week 3: P's the D3 Way." (10pt)

**Homework 2**: Build your own styled table from your CSV data, using the model in d3_tabulate_function.html, or (EXTRA CREDIT, 5pt) using d3_tabulate_function_sortable.html. Sort the data in a reasonable default way for display.  Style it so it looks good, with tips from the articles and links above on style ideas (start using colors and styles from the [UNICEF style guide](../UNICEF Brand Toolkit ENG Sept 2012.pdf).) Make the header on the page appropriately explain your data table.  Add more text to the page to help explicate, identifying your source, etc. (25pts, extra credit 5pts)  Send me the gist, "Week 3: Basic Table."

**Homework 3**: Add a color heatmap to one or more of your table columns, paying attention to text readability and also the [UNICEF style guide](../UNICEF Brand Toolkit ENG Sept 2012.pdf). (15pts) Be sure to identify data source on the page! Gist: "Week 3: Heatmap table"


**Homework 4**: Pick an interactive graphic somewhere that you'd like to know how to make. Remember I gave you resources on the home page of this repo...  Send it to me by email with a link and what you like about it: "Week 3: How do I do this?"  I'll try to find out for you! (5pt)

NOTE: You can combine 2 and 3 in one if you prefer.


