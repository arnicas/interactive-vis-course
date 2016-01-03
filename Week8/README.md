# Week 8: Data Updates, Data Binding by Key, More Transitions

## Homework Review


### Default Button Selection Style

If you have a default state for a display, such as a "currently selected" button state, you should set it to display as selected when the page loads.  That way the user knows the current state of the display.

Just set it to the correct class for the default view of your UI, in your main code.  You will have code in your `button.on("click")` function(s) that sets the appearance of the clicked button, too.  It should look similar.

````
d3.select("button#Female").classed("selected", true);
````

### Moving a Line to the Front

Get the parent, then append yourself to it.  Remember, D3 svg draws "in order" -- things drawn later are on top of things drawn earlier.

````
d.city.line.parentNode.appendChild(d.city.line);
````

### Getting to a Parent Selection / Sibling Selection

When you select a dot, you may also want your line to appear selected too.  One trick would be to class the dots and the lines in the same group with a matching identifier, so you can more easily select the line with the matching identifier.

Or, you can select it via DOM sibling relationship.

Suppose you have an SVG group, like a group with a line in it, a bunch of dots, and a text label.
Say you have a selected dot, but want the line that's in the same group.

````
<g>
    <path class="line"...>
    <circle ...>
    <circle ...>
    <circle ...>
</g>
````

From a selection, you can do .node() to get you the DOM element itself. Then from there you can do .parentNode to get the parent in the structure.  (The parent is the container 'g'.)


````
var mygroup = d3.select(this).node().parentNode;
d3.select(mygroup).select("path.line").classed("focused", true);
````

## Voronoi Again

It was actually pretty hard with a lot of lines.  I used the nest to make sure data points weren't overlapping. Code in **multiple_lines_voronoi.html**.


Mike updated his multi-line voronoi for 2015 data: http://bl.ocks.org/curran/6c0ce7a12c7d5497350d

Voronoi beer map: http://www.washingtonpost.com/news/wonkblog/wp/2015/10/06/find-out-which-beer-is-made-closest-to-you-with-this-crazy-map/?utm_content=buffer91ba0&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

Voronoi airport maps:
* US Airports: http://bl.ocks.org/mbostock/4360892
* Arc Aiport map: http://bl.ocks.org/mbostock/7608400, https://mbostock.github.io/d3/talk/20111116/airports.html
* World Airports: https://www.jasondavies.com/maps/voronoi/airports/
* World Capitals: https://www.jasondavies.com/maps/voronoi/capitals/


## More on Transitions

Not everything can transition with D3.  You'll see a lot of use of transform/translate to achieve transition effects with things that are hard to transition (including groups).

* Working with Transitions: http://bost.ocks.org/mike/transition/
* Optional Academic Research: http://vis.berkeley.edu/papers/animated_transitions/

### Axes Transitions

... Are incredibly easy.  If you have updated your scale with new data, the transition of an axis is trivial:

````
svg.transition().select(".x.axis") // select it, and recall the axis
      .call(xAxis);
````


##Data Binding, Update Pattern, Keys

* Reminder: Thinking With Joins: http://bost.ocks.org/mike/join/
* Read: (To the bottom of the page) http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_other_kinds_of_data_updates
* Recommended read: https://square.github.io/intro-to-d3/data-binding/

Demos:

* General Update Pattern 1: http://bl.ocks.org/mbostock/3808218
* Update Pattern 2: Key Functions: http://bl.ocks.org/mbostock/3808221
* Update Pattern 3: Transitions: http://bl.ocks.org/mbostock/3808234

* Another demo: http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

* My example, a simple enter, transition, exit example in bar_updates_no_key.html.

**For data keys:**

* Object Constancy Intro: http://bost.ocks.org/mike/constancy/  (Read this, but there are advanced details in the full source code for that example. See my simplified, commented version of the code in bostock_bar_updates_simpler.html.)

Examples with keys:

* My example, bars_updates_key.html.
* A more detailed example with dots, not bars: http://www.delimited.io/blog/2013/11/8/object-constancy-in-d3
* An example with Line Charts: http://bl.ocks.org/nsonnad/4175202
* Nice examples in this tutorial with temperature graphs: http://code.hazzens.com/d3tut/lesson_4.html


## Useful Javascript Tips For Vis

### Sort and Slice:

The slice function: get the first N items from the array as a new array:

````
topTen = data.sort(function(a, b) {
        return b.value - a.value; // descending order, biggest at the top!
  }).slice(0, 10); // cut off the top 10!

````


### How A Select Menu Works

There are drop-down select menus in bostock_bar_updates_simpler.html and scatter_data_update.html. In the Bostock example, he constructs the menu using D3 and the data set, in scatter_data_update.html I build it manually and use D3 to respond to its use.

````
<p id="menu">
            <select>
                <option value="all">All Countries</option>
                <option value="rich">10 Richest</option>
                <option value="poor">10 Poorest</option>
            </select>
        </p>
````

In the Javascript, I have:

````
var menu = d3.select("#menu select")
                .on("change", filter);
````

"Change" is the event that matters here.  "Filter" is the function to execute when it changes.

````
function filter() {
    // Get the current value of the menu.  This refers to what you set as your values in the HTML.

    var curSelection = menu.property("value");
    .... do something depending on your current value!

    if (curSelection === "poor") {
        var newData = data.sort(function(a,b) {
                            return a.poorToys - b.poorToys;
            })
            .slice(0, 10); // get the top 10
    }
    render(newData); // go redraw the data with this new dataset
}
````


### Good Code Structure - Functions for re(drawing)


A common structure for an updating D3 vis is:

1. Globally, set up your main vis variables: your margin, scale, ranges, format strings, your svg container creation.
2. Load the data, and inside that function, call the draw function - this will use the data you pass it to draw the graph.
3. In the draw function: Set your scale domains here too, based on current data values, then create graphs if they don't exist, update the data if they do with transitions and exit().

Examples:

* Simple bar_updates_no_key.html

* More complex bar_updates_key.html

* My scatter_data_update.html

In your homework, you will modify and use this structure for scatter_homework.html and bar_homework.html.



## Recent Interesting Things

NYT Hightlights of Digital Storytelling: http://www.nytimes.com/2015/10/07/business/using-innovative-storytelling-to-illuminate-the-world.html

Missed this last week: Smoothing out Lines - http://www.d3noob.org/2013/01/smoothing-out-lines-in-d3js.html?spref=tw


## Homework

Read: (To the bottom of the page) http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_other_kinds_of_data_updates.
Read anything else you need to get a grip on the enter/update/exit pattern in D3!


**Homework 1 (15pt)**: Finished Bar Homework.

In the file bar_homework.html, there are about a dozen //TODO items.  Fix all the //TODO items in it. Send to me with subject "Finished Bar Homework."

**Homework 2 (25pt)**: Scatter Homework.

Fix the scatter_homework.html to have a scatter plot that uses the x and y data values, axes (they don't need labels) and transitions between data sets.  It should use the enter/update/exit style of code.  The default button (for data1) needs to look selected when the user loads the page.  The axes need to transition too.

**Extra credit (5pt)**: Color the dots by region. (Hint: use either a class, or a category color scale.)

Sent gist to me as "Scatter Homework."

**Homework 3: Project Data Exploration (20pt)**

Send me some graphic data explorations (3 different charts at least!) of data you may want to use in your project. This is NOT meant to be D3 work, but Excel charts, or Tableau images, or Google Charts, or whatever charting tool you want to use.  Use actual data from UNICEF/World Bank/Other sources. Show me some graphical examples that you may want to explore in the project. Explain in text what each graph shows and why it is interesting, with perhaps some ideas on how to make it interactive.

Put them in a document you can send me -- either email images & text, or Word, or a PDF...  This is exploration stage!

Email as "Exploration."

**Homework Extra Extra Credit**: If you have extra time and want to fix up something in one of your previous week's exercises (like last week's), I will take it and give you a few points depending on what you do to it. This is good because you want your gists to be great for portfolio work. :) Make sure it's a new gist and send me the old one as well, so I can compare.


