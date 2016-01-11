# Week 4: More Tables, Scales, SVG

## Homework Review

Alphabetic sorting:  If you sort strings, you get ascending alphabetic order by default.  This is why you have to be careful to convert strings read in by d3 to numbers, if you don't want text sort order.

### Disappearing Data Elements

the selectAll `<p>` problem, the select body append problem...

You can do `d3.select("body").data()` or generally `D3 SELECTIONS.data()` to see what data is attached to the selection.  Remember to use something to identify your new elements as different from any existing ones... we want a one-to-one mapping between data and DOM elements.

### Var and JS Scope

Let's peek at http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
especially: http://jsbin.com/lewufuroqi/3/edit?js,console,output

We should review this for the general code structuring in your project.  Don't be worried if you are getting tripped up on it, it took me a long time to figure it out at first too.

````
var scale;
var data = [];

scale = d3.scale.linear().range([0, width]);

function doSomething(arg1, arg2) {
    var var1 = scale;
    var data = arg2;

    scale.domain(d3.extent(data, function(d) {return d.value;}));

    data = data.filter(function(d) {return d.country == "United States";});
}

````

Let's discuss that snippet. What's happening in it?

TODO: Make code snippet to walk through. Move this earlier in course.

Reminders:

* Variables declared outside of functions are global.
* If you refer to a variable without "var" in front of it, and it was already declared with a "var" declaration, you are changing the value.
* Variables declared inside a function are visible inside that function only.
* arguments to a function call are variables visible in the function call only, as well.
* Code you import from external `<script>` files add functions and variables to your workspace, just like if you wrote them in a `<script>` tag in the index.htmnl page.
* You will have name collisions if you use multiple code files that have the same variable names in them.  Be careful and rename things so they aren't the same, unless you protect them inside functions.


### A Peak at Style in D3

Assigning a style in d3:

````
    d3.select(<element>).style("color", "#eeeeee");
````


## Examples of Interactive Tables and Style Advice

### More Table Code

Let's review these:

* [d3_tabulate_function.html](d3_tabulate_function.html): Uses a function to set up the table.
* [d3_tabulate_function_sortable.html](d3_tabulate_function_sortable.html) - using a JQuery function with D3, after creating the table in D3.

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

### Cool Things

Supplementary FYI reading:

* A more advanced approach by Gregor Aisch: https://vis4.net/blog/posts/making-html-tables-in-d3-doesnt-need-to-be-a-pain/

A very cool project:

* Data Comb, http://www.bytemuse.com/post/data-comb-visualization/

## SVG

SVG stands for "scaleable vector graphics."  D3 can create DOM elements that can be manipulated like you've been manipulating other HTML elements, such as `<p>` and `<table>`.  SVG elements include shapes like circles and rectangles, which is why it's useful for creating charts.

D3 can manipulate and draw SVG, which is how many interactive data graphics are created. (An alternative is to use canvas for drawing shapes, but things drawn on canvas can't be manipulated as DOM elements like SVG items can, leading to some downsides.)

* My Example file: [SVG_example.html](SVG_example.html)
* And also [svg_to_fix.html](svg_to_fix.html).


### Some Resources for SVG

* Here's a [video introduction to SVG by Scott Murray](https://www.youtube.com/watch?v=qwiRkXnbLtU&feature=youtu.be&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F)
* Basics on SVG shapes in D3: https://www.dashingd3js.com/svg-basic-shapes-and-d3js
* [Pocket Guide to Writing SVG](http://svgpocketguide.com/book/)
* [SVG2D3 tool](http://billautomata.github.io/svg2d3/) by Bill Automata - not good looking D3, but will give you an idea of the relationship and how D3 "builds" SVG.
* A tool to clean up SVG exported from Inkscape or Illustrator: http://codedread.com/scour/

## D3 Scales

Even independent of the rest of D3, the scales are incredibly powerful and useful tools.  Scales map numbers from a domain into a range. In particular, we need to turn numbers that are in our input data into pixel locations on the screen.  Or into colors.

Reference:

*  Quantitative Scales: https://github.com/mbostock/d3/wiki/Quantitative-Scales
* Ordinal Scales: https://github.com/mbostock/d3/wiki/Ordinal-Scales
* Time Scales: https://github.com/mbostock/d3/wiki/Time-Scales

* My example file: [scale_examples.html](scale_examples.html)

* Read: http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_creating_a_scale
* Supplementary: http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/
* Videos: [Scott Murray's linear scales](https://www.youtube.com/watch?v=5EZSOsBXdS0&list=PL0tDk-f4v1uh4s33k1qJ7Xl96cOySkLnt), [ordinal scales](https://www.youtube.com/watch?v=WxtJ7VfP_VE&list=PL0tDk-f4v1uh4s33k1qJ7Xl96cOySkLnt&index=2)

###Color Scales

Look at [d3_table_heatmap.html](d3_table_heatmap.html), where we add a color range to one column of numbers.  You could have done this on the font itself, of course.

* Here's a cool related recent vis in NYT: http://www.nytimes.com/interactive/2015/08/06/upshot/2016-republican-presidential-candidates-dashboard.html?smid=tw-share&_r=0
* Here's a nice heatmap: http://www.washingtonpost.com/graphics/business/jobs-report/
* Another great heatmap on vaccines: http://graphics.wsj.com/infectious-diseases-and-vaccines/


### Size Scales

This is a common pattern in D3:

````
    // set up the size of the SVG container for the graph (later we'll add margins)
    var height = 350;
    var width = 300;

    var widthScale = d3.scale.linear().range([ 0, width ]);

    // load the data file

    d3.csv("data/water_improvement_data.csv", function(error, data) {

    // set the domain of the scale, based on the data in the file:

        widthScale.domain([ 0, d3.max(data, function(d) {
            return +d.year2015;
    }) ]);
````

Look at [d3_dynamic_domain.html](d3_dynamic_domain.html).

Note that with chaining, you can put your domain and range in any order on your scale function.  ```d3.scale.linear().domain([]).range([])``` is fine, and so is ```d3.scale.linear.range([]).domain([])```.



## Homework

Readings:

* [A Tour Through The Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128)- some examples of less common visualization techniques, possible in D3.
* Read: http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_creating_a_scale


**Homework 1 (35pt):**

Make a table like the one in d3_table_heatmap.html for your data.  It should be sortable using stupidtable.js. Make a color scale for one of your numeric columns. You can use the scale on a font or the background.
Same rules as above:

* Style it (with CSS or in d3).
* Make the column names nice ones for people to read in the table.
* Sort the data in javascript for a default sort order that's sensible.
* Make sure the headers have a cursor that looks like it's a pointer, that indicates you can click.
* Be sure to add text identifying source and explaining the data.

Send me the gist: "Week4: Heatmap table"


**Homework 2 (20pt):**

Using the file in [svg_to_fix.html](svg_to_fix.html), I want you to add some styling, using d3 and style sheets.  You might need to look up stuff in the SVG references.

* Using d3 to select all the ellipses, re-style all the ellipses so their fill is blue.
* Using d3 to select all the rectangles, re-style them so their stroke width is 2px instead.
* Use d3 to style all the rectangles so they are pink.
* Then use d3 to style the first rectangle so it is blue.
* Use d3 to select the rectangle with id svg_2 and make the color of the stroke orange.
* Use a CSS style to set the background color of the SVG to a light gray.
* Use a CSS style to set the line stroke to 3px instead.
* Use a d3 category10() color scale to set the color of the lines.
*  Use d3 to remove the text on top! Will require internet searching.

Send me the gist with "Week 4: SVG fixes"

**Homework 3 (20pt)**:

Using the model in [d3_dynamic_domain.html](d3_dynamic_domain.html), make your own barchart for your own data.  Pick one of your numeric columns, and resize the SVG container to fit it.  You can adjust range etc. as you like. Add text to the page saying what it is showing.


