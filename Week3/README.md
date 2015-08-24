##Week 3


##Homework Review

Discuss issues we had with the homeworks.


## Data Processing on Load

It's quite common to do things to your data right after you load it.

* [d3_process_data.html](d3_process_data.html)
* [d3_new_obj_data.html](d3_new_obj_data.html)

For some other utility functions to make working with data easier, I recommend lodash.js: https://lodash.com/docs.


**Dates in Your Data**:

Dates should be turned into Javascript date objects.  D3 has tools for this.

* Dates example: [d3_process_data_dates.html](d3_process_data_dates.html)
* For input date handling, see: http://learnjsdata.com/time.html
* Help with format strings from @zanarmstrong: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95


### Selections and Data Binding in D3:

* How selections work demo: selectAll vs. select: http://prcweb.co.uk/lab/selection/

* [Interactive Data Visualization for the Web (IDVW) Chapter 5](http://chimera.labs.oreilly.com/books/1230000000345/ch05.html) introducing D3 binding and loading data.

* Three Little Circles, By Mike Bostock: http://bost.ocks.org/mike/circles/
* How Selections Work in more detail: http://bost.ocks.org/mike/selection/
* [D3 Data Binding by Kristw](http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
* Thinking with Joins, by Mike Bostock: http://bost.ocks.org/mike/join/
* Another intro article: http://code.hazzens.com/d3tut/lesson_1.html
* Another review of selections: http://www.jeromecukier.net/blog/2013/03/05/d3-tutorial-at-strata-redux/



##Tables as an Intro to D3 Thinking

We're starting with tables, because in my opinion they are an often overlooked part of the interactive vis landscape, and one of my favorites. Building them illustrate some key aspects of D3 DOM manipulation, they allow us to use JQuery and D3 together if we want, and they are closely related to heatmaps, an excellent visual display method for some types of data.

d3_table.html

Useful javascript for sorting, by the way:

````
data.sort(function(a,b) {
            return b.difference-a.difference;
});
````


**Homework:** Based on what you know about data binding now, how would you make your `<p>` creation from last week's homework the D3 way?  Redo the example in [create_p_from_data.html](../Week2/create_p_from_data.html) using a d3 "enter" approach in place of the forEach loop.

**Homework**: Build your own styled table from your CSV data, using the model in d3_tabulate_function.html, or (EXTRA CREDIT) d3_tabulate_function_sortable.html. Sort the data in a reasonable default way for display.  Style it so it looks good. Make the header on the page appropriately explain your data table.  Add more text to the page to help explicate, identifying your source, etc.

Examples:

* Understanding Selections: http://prcweb.co.uk/lab/selection/
* Mike's article on d3 nested selections: http://bost.ocks.org/mike/nest/


* Gregor Aisch's more advanced maneuvers: https://vis4.net/blog/posts/making-html-tables-in-d3-doesnt-need-to-be-a-pain/


## More On Interactive Tables

### JQuery

* An article on styling in JQuery: http://code.tutsplus.com/tutorials/using-jquery-to-manipulate-and-filter-data--net-5351
* More JQuery tables: http://www.datatables.net/, http://www.dynatable.com/?sorts%5Bus-%24%5D=1, filtering and sorting UI options: http://www.unheap.com/section/user-interface/filter-sort/

### D3

* D3 Sortable Table with bars http://bl.ocks.org/mbostock/3719724
* D3 Tablesort plugin https://github.com/ile/d3-tablesort
* Sorting and styling in D3: http://www.d3noob.org/2013/02/more-d3js-table-madness-sorting.html

### Live Examples

* Inline sparklines and graphs: https://www.safaribooksonline.
com/blog/2014/02/12/inline-visualization-d3-js/?utm_content=buffer980a1&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* A live project with this technique: http://stateofobesity.org/adult-obesity/


### Table UI

* A cool interactive UI proposal: Data Comb, http://www.bytemuse.com/post/data-comb-visualization/
* Table UI Patterns - styling, interaction: http://www.jankoatwarpspeed.com/ultimate-guide-to-table-ui-patterns/


## D3 Scales

Even independent of the rest of D3, the scales are incredibly powerful and useful tools.  Scales map numbers from a domain into a range. In particular, we need to turn numbers that are in our input data into pixel locations on the screen.  Or into colors.

* Read: http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_creating_a_scale
* Supplementary: http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/

Look at [d3_table_heatmap.html](d3_table_heatmap.html), where we add a color range to one column of numbers.

**Homework**: Add a color heatmap to your sorted table.


## Helpful Dev Stuff

* Debugging with Dev Tools and D3: https://egghead.io/lessons/debugging-with-dev-tools

## Homeworks


**Homework**: Pick an interactive graphic somewhere that you'd like to know how to make. Send it to me as "Week2: How do I do this."  I'll try to find out for you!





