# Week 9: Stacking Chart Types, Intro to Small Multiples

## Homework Review

* Cibonay's Hispanic/White Students: http://bl.ocks.org/cibonaydames/raw/beebedbe445d75132320/
* Han's Guns: https://bl.ocks.org/jashcny/raw/9d9f6423aff9cdf7ef54/
* Hyan's Education: http://bl.ocks.org/hfreitas92/raw/b110ef723f6fa524eb76/
* Josh's Tickets: http://bl.ocks.org/CafeConVega/raw/d50192a1505b5adc44f4/
* Sunny's Meat: http://bl.ocks.org/sunnyuxuan/4485a768738421cc78cb
* Sherman's split line: http://bl.ocks.org/Shewitt95/3cff111dceeb17cce275
* Jennifer's commuters: http://bl.ocks.org/JenHLab/7dccd8f9e80b8659f2d3
* Zhou's drivers: http://bl.ocks.org/captainelaine/879ed6a6364d6831ea24
* Luying's Men-Women Drama: http://bl.ocks.org/luluwuluying/ed843a39eb2883e32911
(there is a subtle but important bug in here. Let's review.)


### Final Bar Homework Code

* See it here: [bar_homework_done_safe.html](bar_homework_done_safe.html)


### Human Menus

Make the menu items human-friendly when you can, like here - don't just duplicate the data column:

````
<option value="HIV_AIDS">HIV_AIDS</option>
````


### Key Functions

You should review this article: https://bost.ocks.org/mike/constancy/

This is not a filter or subset operation. It is a way to tell your data what is the "constant" item that ties it to a piece of the DOM, so update transitions will work right and move the right elements.

````
var labels = svg.selectAll("text.labels")
            .data(data, function (d) { return d.Country; });
````

I know it looks like this is just getting the d.Country values for the data binding, but it's not; it's using the whole data set but saying "remember each one by the country field."

You do NOT want to say `d[column]` here. That will just make the updates confused.

### Another Reminder: d[column]

Syntax in Javascript objects:

`d.white` is the same as `d["white"]`

`d.column` is the same as `d["column"]`

If `column` is a variable that changes value, you want to use `d[column]`. (NO QUOTES AROUND `column`.)  That means it will fill in the string that is the variable value!

This is an example of how you might use this -- get a column of data from a UI menu:

````
var myVariable = d3.select("#menu").property("value"); // get select menu's current value
console.log(myVariable, data[myVariable]);
````

If you are still confused, I recommend reading more about Javascript object notation.


### Updates Are Important

Let's review this code example of the update function: http://bl.ocks.org/mbostock/3808221

And then this on transitions: http://bl.ocks.org/mbostock/3808234

Always put the attributes you are **changing** in the update transition, not in the enter() itself. Otherwise they won't get updated on the old items that were already created!

DON'T DO THIS:

````
labels
            .enter()
            .append("text")
            .attr("transform", function(d) {  // bad - will not get updated!
             return "translate(" + xScale(+d.AvgHourWomen) + "," + yScale(+d.AvgHourMen) + ")";
            })
            .text(function()...);

labels.transition()
    .duration(1000);
````

What's wrong with that is the "transform(translate)" will not **move** the existing items to a new location. You need to put that in the transition update if you want them ALL to move.

DO THIS:

````
labels
    .enter()
    .append("text")
    .text(function()...);

labels.transition()
    .duration(1000)
    .attr("transform", function(d) { // good- this will happen on all items, new and old
     return "translate(" + xScale(+d.AvgHourWomen) + "," + yScale(+d.AvgHourMen) + ")";
    });

````

### Review Refactor

I posted the refactor of Han's example here: [refactor.html](Week8/refactor.html). There are still a few things that can be DRYed out, but it's much better.


## New Chart Types

### Area Charts

The area chart is a line chart, but filled in!  There is a new layout for it:

````
    var area = d3.svg.area()
        .x(function(d) {
            return xScale(dateFormat.parse(d.year));
        })
        .y0(height)  // the bottom line, if you use the margin convention correctly
        .y1(function(d) {
            return yScale(+d.amount); // the top line
        });
````

Example in [area_plot.html](area_plot.html), based off a Scotty Murray example.


### Stacked Area

We use the area layout and the stack function for this.

The stacker adds elements to your dataset that say what "level" an item should go in. It calculates a y0, for the y base location, and a y, which is the height from the base position.  These get added to your dataset if they weren't there already.  (Note: A lot of stacked bar examples just construct the y and y0 by hand, instead of using the stack function. But if you use the stack layout, you can do transitions very easily!)

Reference:

* https://github.com/mbostock/d3/wiki/Stack-Layout
* IDVW: http://chimera.labs.oreilly.com/books/1230000000345/ch11.html#_stack_layout.
* See: Line to Stacked Area transitions (too flashy, but): http://bl.ocks.org/tswast/4390054

See [stacked_area.html](stacked_area.html), which uses the stack layout.


### Streamgraph

The streamgraph is a minor variant on the stacked area chart!  If you've used the stack layout, you can transition to it easily.

Reference:

* Here's a NYT example: http://www.nytimes.com/interactive/2008/02/23/movies/20080223_REVENUE_GRAPHIC.html?_r=0
* A recent news example: https://www.foreignaffairs.com/infographics/2015-10-15/china-not-rogue-donor
* Another interactive streamgraph example (with highlights and fake tooltips): http://bl.ocks.org/WillTurman/4631136
* A famous one by Pitch Interactive: http://www.wired.com/2010/11/ff_311_new_york/all/1

The only difference is:

````
var stack = d3.layout.stack()
    .offset("silhouette") // <-- instead of zero!
    .values(function(d) { return d.values; })
    .x(function(d) { return formatDate.parse(d.Year);})
    .y(function(d) { return +d.Measles; });
````


#### How would we transition between them?

I have edited [stacked_area.html](stacked_area.html) to add a button to switch between the two views.  Notice how the code has to be re-architected to support the toggle. See it in [stacked_area_to_stream.html](stacked_area_to_stream.html).

The code structure changes to have a "setup" function for when the data is loaded, and a "redraw" for when the button is toggled.  This includes the transition to the new layout offset type.

There's a slightly more complex example of this written in CoffeeScript by Jim Vallandingham on FlowingData (Nathan Yau's site):

* Demo: http://projects.flowingdata.com/tut/chart_transitions_demo/
* https://flowingdata.com/2013/01/17/how-to-animate-transitions-between-multiple-charts/

If you need access via account and password, let me know.


### Stacked Bar Chart


Reference:

* Read this in http://chimera.labs.oreilly.com/books/1230000000345/ch11.html#_stack_layout.

See [stacked_bar.html](stacked_bar.html).  Some things to notice here:

* We nest the data by the thing you want in the legend - the illnesses.
* The colors in the legend would be in reverse order from the way the bars are built (bottom up), so we reverse those.
* Adding tooltips is a HUGE help for this kind of chart. Consider it mandatory.


### Normalized Stacked Bar Chart

This is a very small variant, after you get the [stacked_bar.html](stacked_bar.html) working.  See the `//` notes in the file.
Just add offset "expand" to the layout!  (The default offset is "zero".)

````
var stack = d3.layout
    .stack()
    .offset("expand");
````

You have to be sure you change your labels on the Y axis to be %'s too:

````
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .tickFormat(d3.format(".2s")); // for the stacked totals version
    //.tickFormat(d3.format("%")); // for the normalized version
````

#### How would we transition between them?

See my example [stacked_bar_transitions.html](stacked_bar_transitions.html).  This includes a bunch of refactoring into functions, where there is repetition, too.  Let's discuss it.

See also http://bl.ocks.org/tmaybe/6144082.  Might be overkill!


### Aside on Javascript Keys and Mapping

We need to get serious about data munging with map.  A lot of the online examples for this week used mapping to make the data for the stacked layouts. Mike Bostock says "it's just as easy to make the y0, y1 by hand" for the stacked bars.  Note if you don't use the stack layout, you can't easily switch to a normalized view when you want.

But we should try to understand some of the code for doing it "by hand" because so many examples use it.  And some of them are really terse.

Reminder about a map:

````
var array = [{a: 10, b: 20, c: 30}, {a: 14, b: 2, c: 31}];
var the_a = array.map(function (d) { return d.a;});
the_a
[10, 14]
````

Maps return arrays. They are like forEach function loops, except those don't return arrays explicitly. (Although you can use them to create new arrays like we've seen with "push").

Let's look at the stacked bar example in **http://bl.ocks.org/mbostock/3886208**.  He makes the data using a confusing, compressed few lines.

The data in the CSV looks like this:

````
State,Under 5 Years,5 to 13 Years,14 to 17 Years,18 to 24 Years,25 to 44 Years,45 to 64 Years,65 Years and Over
AL,310504,552339,259034,450818,1231572,1215966,641667
AK,52083,85640,42153,74257,198724,183159,50277
AZ,515910,828669,362642,601943,1804762,1523681,862573
AR,202070,343207,157204,264160,754420,727124,407205
....
````

First, note we have:
````
var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
````

This sets up specific colors to use.

Then:

````
color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));
````

What does this do?  Any guesses?  Starting from data[0], the "keys" are the attribute names, like "State."

````
>data[0]
Object {State: "AL", Under 5 Years: "310504", 5 to 13 Years: "552339", 14 to 17 Years: "259034", 18 to 24 Years: "450818"…}
````

Now guess...  d3.keys() returns the object attribute names, which are keys.

So the color domain:

````
>color.domain()
["Under 5 Years", "5 to 13 Years", "14 to 17 Years", "18 to 24 Years", "25 to 44 Years", "45 to 64 Years", "65 Years and Over"]
````

Then this madness, to create the format for the stacking manually, instead of using a stack layout:

````
data.forEach(function(d) {
    var y0 = 0;
    d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });
````

All the action is in the ages array creation.  It's the same as:

````
data.forEach(function (d) {
    var y0 = 0;
    d.ages = ["Under 5 Years", "5 to 13 Years", "14 to 17 Years", "18 to 24 Years", "25 to 44 Years", "45 to 64 Years", "65 Years and Over"].map(function(name) {
        var height = y0 + +d[name];
        var obj = { label: name,
                    y0: y0,
                    y1: height };
        y0 = height;
        return obj;
    });
    d.total = d.ages[d.ages.length - 1].y1; // last y1, which is the total height
})
````

Because his `{name: name, y0: y0, y1: y0 += +d[name]};` is incrementing the y0 each time through the map loop, so that each time it is the sum of the value of d[name] and the previous y0.


### Bar Groups

* Grouped bar chart example: http://bl.ocks.org/mbostock/3887051
* See my version in [grouped_bars.html](grouped_bars.html).

Fancier - Animations!

* Stacked to Grouped Bars Animation: http://bl.ocks.org/mbostock/3943967
* Stacked to multiples transition: http://bl.ocks.org/mbostock/4679202
* **Bonus Fancy**: Conversion of Mike's example to using real data! [bostock_stacked_to_group.html](bostock_stacked_to_group.html).


### Intro to Small Multiples in D3

Three ways:

* http://bl.ocks.org/mbostock/1157787
* http://bl.ocks.org/mbostock/9490313 (uses 'each' and calls the drawing funct)
* http://bl.ocks.org/mbostock/9490516 (I find this one strange)
* Area Charts with a UI filter: http://flowingdata.com/2012/01/05/build-interactive-time-series-charts-with-filters/ (see old D3 Code alert below)

Tutorials by Jim Vallandingham (that unfortunately use CoffeeScript):

* Small Multiples with Details on Demand http://vallandingham.me/small_multiples_with_details.html
* Linked Small Multiples: https://flowingdata.com/2014/10/15/linked-small-multiples/
* Small Multiple Maps tutorial: http://blog.webkid.io/multiple-maps-d3/
* Example: http://datatodisplay.com/blog/interactive-data-visualisation/premier-league-small-multiples/
* Tutorial with a brush: http://tympanus.net/codrops/2012/08/29/multiple-area-charts-with-d3-js/

We'll build some next week.  Think about data in your datasets that could be done with small mutiples.

**Reminder: Old D3 Code Alert in Some Tutorials**

If you see this stuff (e.g., in some of Flowing Data's tutorials):

````
"svg:line"
"svg:svg"
"svg:rect"
````

it's old D3 code.  We used to have to say "svg" in front of all the svg DOM elements. Not necessary anymore.


## Recent Interesting Things

* Malofiej awards for online vis (last week): http://www.maartenlambrechts.be/malofiej24-the-awards/
    * First place: Amazing scrollytelling animated story: http://www.theguardian.com/us-news/ng-interactive/2015/oct/19/homan-square-chicago-police-detainees
* Related vis yesterday: https://www.foreignaffairs.com/infographics/2015-10-15/china-not-rogue-donor
* What is a Front-End Developer: https://frontendmasters.gitbooks.io/front-end-handbook/content/what-is-a-FD.html
* A friendly guide to debugging (but not about d3 per se): http://p5js.org/tutorials/debugging/
* How We Made Failure Factories: https://source.opennews.org/en-US/articles/how-we-made-failure-factories/ and the original piece: http://www.tampabay.com/projects/2015/investigations/pinellas-failure-factories/chart-failing-black-students/

* NICAR data journalism tutorial links: http://blog.chryswu.com/2016/03/08/nicar16-slides-links-tutorials-resources/


## Homework

Readings:

* Read this section: http://chimera.labs.oreilly.com/books/1230000000345/ch11.html#_stack_layout. You can see how some other layouts work in that same chapter.

**Homework 1 (20pt)**: JS Practice.

Finish [js_homework.html](js_homework.html), all the TODOs. I gave you some links to stuff on d3.nest() a week or 2 ago, and you can search online. Send me a screencap of your console output and the gist with the files. Gist: "Week 9: JS homework".

**Homework 2 (25pt)**: Stacked Bars or Streamgraphs Transition

Make a stacked_bar_transitions.html using your own data.  It must transition between normalized and non-normalized like my example does. Try to make it data that you can use in your final project.  You need real D3 tooltips on this, too.

If you have timeseries data and want to do stacked area / streamgraph instead, you can use my model in stacked_area_to_stream.html.  Add tooltips (real D3 ones, not title fields).

Send the gist as "Week9: Stacked Transition."

