# Week 8: Data Updates, Data Binding by Key, More Transitions

## Homework Review

Sherman's lines: http://bl.ocks.org/SHewitt95/raw/dbc08c4a141ad3b6783d/
Jennifer's epic voronoi: http://bl.ocks.org/JenHLab/fabb713c310663d7e60f
Zhou's teams: http://bl.ocks.org/captainelaine/raw/89cbd2aa709e3848d1e4/
Sunny's Lines with Highlights: http://bl.ocks.org/sunnyuxuan/raw/4455c6faa134084c9377/
Eric's Transitions: http://bl.ocks.org/suneric1/raw/b76051e23a8efc89947f/


### Reminder: Bootstrap and Tooltips

Reminder: Don't use a ".tooltip" class for your D3 tooltips with Bootstrap. Change it to ".mytooltip" or something else.  Bootstrap highjacks ".tooltip" away from you.


### Highlighting a Line and a Dot in a Mouseover


See [multiple_lines_labels_tooltips.html](../Week7/multiple_lines_labels_tooltips.html). In this example, I used an id to label the lines and circles by the same thing, so that a mouseover function can refer to the same id.

Note that in the groups for the line, I had to access the first data element's country attribute to get the data for the id -- the data array needs to have your group identity in it for this to work.  Also, I have to check if the array is defined, in case of errors.  I then use a javascript regular expression replacement to remove illegal characters.  See section [below](#string-replacements-with-regexs) on regex string replacements.

````
groups.selectAll("path")
    .data(function(d) { // because there's a group with data already...
        return [ d.emissions ]; // it has to be an array for the line function
    })
    .enter()
    .append("path")
    .attr("class", "line")
    .attr("classed", "unfocused") // they are not focused till mouseover
    .attr("id", function(d) {
        // we are attaching an id to the line using the countryname, replacing
        // spaces, commas, periods with underscores so it's a valid id.
        // this will be useful when we do the mouseover and want to highlight a line too.
        if (d[0] && d[0].length != 0) {
            // this if-test makes sure there is an array and it's not empty.
            return d[0].country.replace(/ |,|\./g, '_');
        }
    })
    .attr("d", line);
````


### Default Button Selection Style

If you have a default state for a display, such as a "currently selected" button state, you should set it to display as selected when the page loads.  That way the user knows the current state of the display.

Just set it to the correct class for the default view of your UI, in your main code.  You will have code in your `button.on("click")` function(s) that sets the appearance of the clicked button, too.  It should look similar.

````
d3.select("button#Female").classed("selected", true);
````

### DRY Code

DRY stands for Don't Repeat Yourself. If you have a lot of code that looks very similar, it can usually be restructured using functions and data arguments.  Code with a lot of cut-and-paste stuff leads to errors, too.  It's easier to debug smaller code.

Let's talk about this:

* http://blockbuilder.org/arnicas/307ea2a3f4c80ad7239e
* Take a look at [refactor.html](refactor.html) for the contrast.



## Useful Tips For Vis

### Sort and Slice Arrays

The slice function: get the first N items from the array as a new array:

````
topTen = data.sort(function(a, b) {
        return b.value - a.value; // descending order, biggest at the top!
  }).slice(0, 10); // cut off the top 10!

````

### String Replacements with Regex's

In order to create an id (like "path.line#Afgahnistan") that's valid on a DOM element from a data entity, you might have to "fix" the string to remove illegal characters. This syntax replaces an empty space, a common, and a period with an underscore character:

````
return d.country.replace(/ |,|\./g, '_');
````

You can read about regex replacements here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions.


### Using a Select Menu

There are drop-down select menus in [bostock_bar_updates_simpler.html](bostock_bar_updates_simpler.html) and [scatter_data_update.html](scatter_data_update.html). In the Bostock example, he constructs the menu using D3 and the data set, in [scatter_data_update.html](scatter_data_update.html) I build it manually and use D3 to respond to its use.

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


### Moving a Line (or Dot) to the Front

Get the parent, then append yourself to it.  Remember, D3 svg draws "in order" -- things drawn later are on top of things drawn earlier. An example:

````
d.city.line.parentNode.appendChild(d.city.line);
````

The general function for moveToFront() is:

````
d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
        this.parentNode.appendChild(this);
    });
}

// invoke with a d3 selection -- remember, "this" is what your mouse is over!
d3.select(this).moveToFront();
````

You can see this implemented in [multiple_lines_voronoi.html](../Week7/multiple_lines_voronoi.html). In order to get it to work with the voronoi, I had to create a parent container "group" (g#lines) for the lines (and text labels), because that's the parentNode we want to work within for moving things to the front.  (Otherwise, we will move lines on top of the voronoi grid, which messes up mouseovers and other things.)


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

You could use this approach instead of using an id on the lines and circles, if you wanted to highlight a line this way.


## More on D3 Transitions

Not everything can transition with D3.  You'll see a lot of use of transform/translate to achieve transition effects with things that are hard to transition (including groups).

Reference:

* Working with Transitions: http://bost.ocks.org/mike/transition/
* Optional Academic Research: http://vis.berkeley.edu/papers/animated_transitions/

### Axes Transitions

... Are incredibly easy.  If you have updated your scale with new data, the transition of an axis is trivial:

````
svg.transition().select(".x.axis") // select it with whatever class you assigned, 
                                    // and re-"call" the axis
      .call(xAxis);
````


### Data Binding, Update Pattern, Keys

Reference:

* Reminder: Thinking With Joins: http://bost.ocks.org/mike/join/
* Read: (To the bottom of the page) http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_other_kinds_of_data_updates
* Recommended read: https://square.github.io/intro-to-d3/data-binding/

Demos:

* General Update Pattern 1: http://bl.ocks.org/mbostock/3808218
* Update Pattern 2: Key Functions: http://bl.ocks.org/mbostock/3808221
* Update Pattern 3: Transitions: http://bl.ocks.org/mbostock/3808234
* Another demo: http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer


My example, a simple enter, transition, exit example in [bar_updates_no_key.html](bar_updates_no_key.html).  This is an illustration of WHAT NOT TO DO.  There is no object constancy.


Use of a key function is **CRITICAL** if you are using multiple data sets in a single visualization.  Otherwise, your items won't transition properly when you add and remove data.

The key function is used like this:

````

var bars = d3.selectAll("rect")
    .data(mydata, function(d) {
        return d.key; // or whatever thing you want to be constant and identifying
    });

// the function above it not filtering the data set, or reducing it, or searching it!
// Now you can join your data:

bars
    .enter()
    .append("rect")
    ....

// and from here you probably do a bars.exit() and bars update, too.

````

Let's walk through my examples, [bar_updates_key.html](bar_updates_key.html), and with sorting:
[bar_updates_key_sorted.html](bar_updates_key_sorted.html).


References:

* Object Constancy Intro: http://bost.ocks.org/mike/constancy/  (Read this, but there are advanced details in the full source code for that example. See my simplified, commented version of the code in [bostock_bar_updates_simpler.html](bostock_bar_updates_simpler.html).)
* A more detailed example with dots, not bars: http://www.delimited.io/blog/2013/11/8/object-constancy-in-d3
* An example with Line Charts: http://bl.ocks.org/nsonnad/4175202
* Nice examples in this tutorial with temperature graphs: http://code.hazzens.com/d3tut/lesson_4.html


## Good Code Structure - Functions for re(drawing)


A common structure for an updating D3 vis is:

    1. Globally, set up your main vis variables: your margin, scale, ranges, format strings, your svg container creation.

        var fullwidth, fullheight, xScale, yScale, svg, etc...
        Hook up your UI with on-click or on-change events if you can without data yet.

    2. Load the data and call a function to do things with it.

        Do any initial calculations or refinements on the data you need
        Draw any UI that needs data to be drawn (like menu items)
        Call a re-usable draw function with your initial data values

    3. The draw() function:
        Set your scale domains here too, based on current data values;
        use a data join, enter, update transitions, and exit().
        This should all be designed so it works with different data sets and is reusable.


A good example of this is in [bostock_bar_updates_simpler.html](bostock_bar_updates_simpler.html).

In your homework, you will modify and use this structure for [bar_homework.html](bar_homework.html) and in your own version.


## Multiple Data Files with Queue()

To load multiple files, you can use queue; be sure to include the library:

````
<script src="https://d3js.org/queue.v1.min.js"></script>
````

Then use it like this-- at the global level, list the files...

````
queue()
    .defer(d3.csv, "data/countries.csv")  // this will become "world" in doStuff args
    .defer(d3.csv, "data/stunting_by_wealth.csv") // this will be "stunting"
    .await(doStuff);

function doStuff(error, world, stunting) {
// after "error", the second arg is the first file you loaded, the next is the 2nd file
...
}
````


## Homework


**Read**: (To the bottom of the page) http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_other_kinds_of_data_updates.
Read anything else you need to get a grip on the enter/update/exit pattern in D3!

You should also be planning for your final project now... Get your data sets in order, start looking for the data pictures you want to show and interactions that will help.


**Homework 1 (15pt)**: Finish Bar Homework

In the file [bar_homework.html](bar_homework.html), there are about a dozen //TODO items.  Fix all the //TODO items in it. Send to me with subject "Finished Bar Homework."  Make sure you fill in the select menu!

**Homework 2 (35pt)**: An Updating Plot With 2+ Datasets

Make a plot that transitions between 2 or more data sets, and includes:

1. axes that transition
2. the enter, update, exit pattern with transitions, in a function like "draw"
3. UI control (button or select menu) to switch between the data sets
4. d3 tooltips
5. labels on some interesting points (or all of them if it's only a few)

This can be a bar chart, a line chart, a scatterplot... use your own datasets!  You can use subsets of a big data set if you want (like top 10, bottom 10, all of them) or different data values (different columns).  Or combine data sets if they have the same key (like country/state).

Send this as "My Update Plot."
