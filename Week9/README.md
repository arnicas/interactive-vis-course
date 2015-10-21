## Week 9: Stacking Chart Types, Intro to Small Multiples

## Homework Issues

Scatterplot Transitions:

* Colors by Region and labels: http://bl.ocks.org/DimsumPanda/a94f6c0c3121ad2a4f17
* Cute colors and tooltips: http://bl.ocks.org/lmelgar/raw/086115f650545013a915/

###Color by Region

This is how I expected it, but some of you did it by hand:
````
var colorScale = d3.scale.category10();
circle.attr("fill", function(d) {return colorScale(d.region);})
````

Notice that if you don't like the category() colors in D3, you can set your own, as long as you have enough in the list for your different items:

````
var color = d3.scale.ordinal().range(["lightpink", "darkgray", "lightblue"]);
color.domain(["sepsis", "malaria", "typhoid"]);
...
color(d.illness)
or color(i)
````


## Area Chart

The area chart is a line chart, but filled in!  There is a new layout for it:

````
    var area = d3.svg.area()
        .x(function(d) {
            return xScale(dateFormat.parse(d.year));
        })
        .y0(height - margin.bottom)  // the bottom line!
        .y1(function(d) {
            return yScale(+d.amount); // the top line
        });
````

Example in area_plot.html.


## Stacked Area

We use the area layout and the stack function for this.

See http://chimera.labs.oreilly.com/books/1230000000345/ch11.html#_stack_layout.

The stacker adds elements to your dataset that say what "level" an item should go in. It calculates a y0, for the y base location, and a y, which is the height from the base position.  These get added to your dataset if they weren't there already.  (Note: A lot of stacked bar examples just construct the y and y0 by hand, instead of using the stack function.)

Read: https://github.com/mbostock/d3/wiki/Stack-Layout

See stacked_area.html, which uses the stack layout.

See also:

* Line to Stacked Area transitions (too flashy, but): http://bl.ocks.org/tswast/4390054


## Streamgraph

The streamgraph is a minor variant on the stacked area chart!

Here's a NYT example: http://www.nytimes.com/interactive/2008/02/23/movies/20080223_REVENUE_GRAPHIC.html?_r=0

A recent news example: https://www.foreignaffairs.com/infographics/2015-10-15/china-not-rogue-donor

The only difference is:

````
var stack = d3.layout.stack()
    .offset("silhouette") // <-- instead of zero!
    .values(function(d) { return d.values; })
    .x(function(d) { return formatDate.parse(d.Year);})
    .y(function(d) { return +d.Measles; });
````

Try this in stacked_area.html.

Another interactive streamgraph example (with highlights and fake tooltips): http://bl.ocks.org/WillTurman/4631136


### How would we transition between them?

How would we transition between these 2 forms?  It should be easy, right?  Let's discuss.

If you want to see a tutorial on changing between these forms, see this one by Jim Vallandingham on FlowingData:

* Demo: http://projects.flowingdata.com/tut/chart_transitions_demo/
* https://flowingdata.com/2013/01/17/how-to-animate-transitions-between-multiple-charts/

If you need access via account and password, let me know.


## Stacked Bar Chart

Again, see this section: http://chimera.labs.oreilly.com/books/1230000000345/ch11.html#_stack_layout.

See stacked_bar.html.

Tooltips for stacked bar charts: https://gist.github.com/mstanaland/6100713.

## Normalized Bar Chart

This is a very small variant, after you get the stacked_bar.html working.  See the `//` notes in the file.
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

### How would we transition between them?

See my example stacked_bar_transitions.html.  This includes a bunch of refactoring into functions, where there is repetition, too.  Let's discuss it.

See also http://bl.ocks.org/tmaybe/6144082.


## Aside on Javascript Keys and Mapping

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

Let's look at the stacked bar example in http://bl.ocks.org/mbostock/3886208.  He makes the data using a confusing, compressed few lines.

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


## Bar Groups

* Grouped bar chart example: http://bl.ocks.org/mbostock/3887051
* See my version in grouped_bars.html.

Fancier:

* Stacked to Grouped Bars Animation: http://bl.ocks.org/mbostock/3943967
* Stacked to multiples transition: http://bl.ocks.org/mbostock/4679202

## Small Multiples in D3

Three ways:
* http://bl.ocks.org/mbostock/1157787
* http://bl.ocks.org/mbostock/9490313 (uses 'each' and calls the drawing funct)
* http://bl.ocks.org/mbostock/9490516 (I find this one strange)

* Area Charts with a UI filter: http://flowingdata.com/2012/01/05/build-interactive-time-series-charts-with-filters/ (see old D3 Code alert below)

Tutorials by Jim Vallandingham (that unfortunately use Coffee Script):

* Small Multiples with Details on Demand http://vallandingham.me/small_multiples_with_details.html
* Linked Small Multiples: https://flowingdata.com/2014/10/15/linked-small-multiples/

* Small Multiple Maps tutorial: http://blog.webkid.io/multiple-maps-d3/

* Example: http://datatodisplay.com/blog/interactive-data-visualisation/premier-league-small-multiples/

* Tutorial with a brush: http://tympanus.net/codrops/2012/08/29/multiple-area-charts-with-d3-js/

We'll build some next week.  Think about data in your datasets that could be done with small mutiples.

### Note: Old D3 Code Alert

If you see this stuff (e.g., in some of Flowing Data's tutorials):

````
"svg:line"
"svg:svg"
"svg:rect"
````

it's old D3 code.  We used to have to say "svg" in front of all the svg DOM elements. Not necessary anymore.


## Recent Interesting Things

* Related vis yesterday: https://www.foreignaffairs.com/infographics/2015-10-15/china-not-rogue-donor

* Amazing scrollytelling animated story: http://www.theguardian.com/us-news/ng-interactive/2015/oct/19/homan-square-chicago-police-detainees

* World Bank tumblr: http://worldbank.tumblr.com/submit

* What is a Front-End Developer: https://frontendmasters.gitbooks.io/front-end-handbook/content/what-is-a-FD.html

* A friendly guide to debugging (but not about d3 per se): http://p5js.org/tutorials/debugging/


## Homework

Read this section: http://chimera.labs.oreilly.com/books/1230000000345/ch11.html#_stack_layout. You can see how some other layouts work in that same chapter.

Read: How We Made Failure Factories: https://source.opennews.org/en-US/articles/how-we-made-failure-factories/ and the original piece: http://www.tampabay.com/projects/2015/investigations/pinellas-failure-factories/chart-failing-black-students/

**Homework 1 (12pt)**: JS Practice.

Finish js_homework.html, all the TODOs. I gave you some links to stuff on d3.nest() a week or 2 ago, and you can search online. Send me a screencap of your console output and the gist with the file.  Week 9: "JS homework".

**Homework 2 (25pt)**: Stacked Bars Transition.

Make a stacked_bar_transitions using your own data.  It must transition between normalized and non-normalized like my example does. Try to make it data that you can use in your final project.  Send gist as "Stacked Bars."

**Homework 3 (20pt)**: Grouped Bars.

Make a grouped bars example with your own data. Send gist as "Grouped Bars."


