# Week 7: Improving Line Charts, Click Events, Data Transitions


## Homework Review

## More D3/JS Convenience Functions

### Gridlines How To

See this article: http://www.d3noob.org/2013/01/adding-grid-lines-to-d3js-graph.html

````
var xAxis = d3.svg.axis()
    .scale(xScale)
    .tickSize(-myHeight) // this trick makes the inner ticks into lines!
    .orient("bottom")
    .ticks(8)
    .tickFormat(function(d) {
        return dateFormat(d);
    })
    .outerTickSize([0]);

var yAxis = d3.svg.axis()
    .scale(yScale)
    .tickSize(myWidth) // also here!
    .orient("right")
    .outerTickSize([0])
    .ticks(5);
````

###D3 Nest

This data set is long-form, with a column for country, and another for year.  Grouping by country is the most useful way to handle it for plotting it.  You can see an excerpt in **[data/deaths_04yearsold_excerpt.csv](data/deaths_04yearsold_excerpt.csv).**

````
var dataset =  d3.nest()
                .key(function(d) {
                    return d.Country;
                })
                .sortValues(function (a, b) { return dateFormat.parse(a.Year) - dateFormat.parse(b.Year)})
                .entries(data);
````

The result is objects that look like:

<img src="img/nested_data.png">

See **[example lines_d3nest.html](example lines_d3nest.html)** for how to deal with this, to group by country and then plot the lines.

There are also d3 functions to return just the keys -- d3.keys(), and just the values: d3.values().

Reference:

* Read: http://learnjsdata.com/group_data.html
* See examples here: http://bl.ocks.org/phoebebright/raw/3176159/.
* See another working code example in **lines_transition.html.**


### array.filter

````
// reduces the dataset to only items that match the 'test':
var angolaObj = dataset.filter(function (d) {
                            return d.key == "Angola"
                        });
// result is an array with a single object: [Object]
````

### More Data Munging Help

Don't forget to browse through the D3 arrays help page: https://github.com/mbostock/d3/wiki/Arrays.
And you can always use http://learnjsdata.com.

For really professional data "munging" helpers, you can use lodash.js (an extension of the popular underscore.js library): https://lodash.com/docs.


## More on Lines: Improving the UI

### Labeling Lines

This was harder than expected, because of the data being at the "group" level.

See my [multiple_lines_labels.html](multiple_lines_labels.html) for the data-attachment solution using datum, following Mike Bostock's example.  It requires checking for empty values in the data set, or it errors. I also used a y-axis threshold to set which lines get labelled, which works with this data because those "high" lines are quite separate from each other.

The alternate way is to use the data in the group `g` level, and just append text if the country names matches the ones you know are outliers, as in http://bl.ocks.org/theopenwindow/raw/71372a9217c2053febd2/

### Replicating the NYT David Bowie Vis: Labels Appear on Hover

I decided to add an example showing you how to remake the [NYT David Bowie songs piece](http://www.nytimes.com/interactive/2016/01/12/upshot/david-bowie-songs-that-fans-are-listening-most-heroes-starman-major-tom.html?_r=0) I showed last week.

See [multiple_lines_labels_hover.html](multiple_lines_labels_hover.html).  The trick here is that the mouse actions are on the "g" parent that contains the line and the text label.  Because we detect the mouseover at the "g", it makes it easy to select(this) and then select the line and text underneath:

````
var groups = svg.selectAll("g")
                    .data(dataset)
                    .enter()
                    .append("g")
                    .on("mouseover", mouseoverFunc)  // putting these on the g nodes gets us a lot!
                    .on("mouseout", mouseoutFunc);

....
function mouseoverFunc(d) {
    // the "this" is the g parent node.  That means we can select it, and then select
    // the child nodes and style the]m as we want for the hover effect!
    d3.select(this).select("path").attr("id", "focused"); // overrides the class
    d3.select(this).select("text").classed("hidden", false);  // show it if "hidden"
    d3.select(this).select("text").classed("bolder", true);
    }

function mouseoutFunc(d) {
    d3.select(this).select("path").attr("id", null); // remove the focus style
    d3.select(this).select("text").classed("bolder", false); // remove the bolding on label
    // rehide the ones that are in the low numbers
    if (+d.emissions[d.emissions.length-1].amount <= 700000) {
        d3.select(this).select("text").classed("hidden", true);
    }
}
````

Notice how we select something, and then we can select something more specific under it!


### Lines with Dots and Paths, for Improved Tooltips

The file **[emissions_linescatterplot.html](emissions_linescatterplot.html)** has both dots and the line connecting them. The dots allow more detailed tooltips, if we want them. Check them out.

You have the option of having your dots be visible or not on the line.  Just change the dot opacity as you like.

I also added the dots on **[multiple_lines_labels.html](multiple_lines_labels.html).**  Notice it's hard to grab the dots and lines sometimes. See the next section below for the advanced tool trick to deal with that.

Here's another alternative, tricky way to add a dot on the line at the point closest to the mouse:

* Clever line bisect mouseover label trick from Mike Bostock: http://bl.ocks.org/mbostock/3902569
* More explanation: http://www.d3noob.org/2014/07/my-favourite-tooltip-method-for-line.html

### An Alternate Line Data Structure

Because it's hard to deal with lines without any attributes, especially for styling, another way to structure the file is shown in **[lines_with_more_data.html](lines_with_more_data.html).**  This structure made it easier to style one line based on country name.

````
var lines = svg.selectAll("path.line")
                .data(dataset) // it has to be an array for the line function
                .enter()
                .append("path")
                .attr("d", function (d) {
                    return line(d.emissions); // the line is given the array it needs now
                })
                .attr("class", function (d) {
                    if (d.country === "China") {
                        return "highlight";
                    } else {
                        return "line";
                    }
                });
````

(There are still tooltips on dots, but those are in separate groups, handled as you saw above.)


### Usability Advanced Maneuvers: Lines and Scatters with Voronoi

The problem of lots of lines and/or dots is that it's hard to pick them out of the mess.  There is a technique to improve this problem, but it requires restructuring your vis quite a bit.

Reference and how-to's:

* Read: http://www.visualcinnamon.com/2015/07/voronoi.html (notice she uses another tooltip method, the Bootstrap lib's jquery method.)
* Demo: Multi-Line Voronoi: http://bl.ocks.org/mbostock/8033015, updated to http://bl.ocks.org/curran/6c0ce7a12c7d5497350d. (He has to nest data at the same points to prevent issues with coincident points. We may have this issue in our data too.)
* An update for 2015 data: http://bl.ocks.org/curran/6c0ce7a12c7d5497350d
* Demo: Zan Armstrong's temperature lines: http://bl.ocks.org/zanarmstrong/38d7f79f61a03acc0ef0
* Demo: Picking on a bubble chart, plus animated transition: http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html
* Example: Voronoi beer map: http://www.washingtonpost.com/news/wonkblog/wp/2015/10/06/find-out-which-beer-is-made-closest-to-you-with-this-crazy-map/?utm_content=buffer91ba0&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

Voronoi airport maps:

* US Airports: http://bl.ocks.org/mbostock/4360892
* Arc Aiport map: http://bl.ocks.org/mbostock/7608400, https://mbostock.github.io/d3/talk/20111116/airports.html
* World Airports: https://www.jasondavies.com/maps/voronoi/airports/
* World Capitals: https://www.jasondavies.com/maps/voronoi/capitals/

Example by me: [multiple_lines_voronoi.html](multiple_lines_voronoi.html).


### Fun: Lines with Interpolation

If you want smooth lines, you can use interpolation functions. Here is a demo of line interpolators in d3: http://bl.ocks.org/mbostock/4342190

Beware: Smoothing lines will distort the "true" values.  Sometimes this matters.

See data examples here: http://www.d3noob.org/2013/01/smoothing-out-lines-in-d3js.html?spref=tw

We will do animated lines in an upcoming week.


## Transitions in D3 and Click Events


### D3 Transitions

Transitions allow us to animate changes of properties in code.

**Read**:

* Updating data, transitions, etc: http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_updating_data (as far as "Other Kinds of Data Updates")
* Optional: http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/
* Working with Transitions: http://bost.ocks.org/mike/transition/
* Optional Academic Research: http://vis.berkeley.edu/papers/animated_transitions/

See the transition with a delay by dot in **[scatter_transition_in.html](scatter_transition_in.html)**:

````
// adding a silly intro animation to catch the eye -- using transition:
circles.sort(function(a, b) {
        return d3.ascending(+a.educationalAttainment, +b.educationalAttainment);
    })
    .transition()
    .delay(function(d, i) {
        return i * 10;
    })
    .duration(500)
    .attr("r", dotRadius);
````

In the file **[emissions_linescatterplot.html](emissions_linescatterplot.html)**, we have added a mouseover transition:

````
// grow the dot to larger radius on mouseover
    circles.on("mouseover", function(d) {
        d3.select(this)
            .transition()
            .duration(50)
            .attr("r", 7);
    })
// go back to the old size on mouseout!
    .on("mouseout", function (d) {
        d3.select(this)
            .transition()
            .attr("r", 3);
    });
````

There are more data-oriented transitions in **[scatter_data_transition.html](scatter_data_transition.html)** and **[lines_transition.html](lines_transition.html)**.  See below for the click events part.


### On "Click" Events

For a first, simple click event transition, look at **[scatter_data_transition.html](scatter_data_transition.html).**

When the paragraph element with the class is clicked, a transition changes the data elements in the scatter plots.

Then let's look at the more complex **[lines_transition.html](lines_transition.html)**.

In it we use buttons that swap the data on a line chart!  (We're also using Bootstrap for some CSS layout and a map image.)

````
d3.selectAll("button").on("click", function() {
    var selectedline = d3.select("path.line");
    var thisButton = d3.select(this);  // "this" is what was clicked
    // Here we get the id value for the button, and use that to get a new data set!
    var newdata = get_values_for_country(thisButton.attr("id"));  // the id has to match the country name for this to work.

    // style the selected button only
    d3.selectAll("button").classed("selected", false);
    thisButton.classed("selected", true);
    // transition the line to the new dataset:
    selectedline.transition().attr("d", line(newdata));
````

Review: **[lines_transition.html](lines_transition.html)**


### Country Regions Line Chart Example

This is much prettier than my mockup above, and does similar things to what some of you wanted to do in the homework and now is possible with our buttons (or other UI elements).

**Nathan Yau**: http://projects.flowingdata.com/life-expectancy/.

The tutorial requires membership; see me. (Also, the code is a little out of date.)

He uses jquery for the "button" fiters - we will use d3 below, but either is fine.

````
    $('#filters a').click(function() {
        var countryId = $(this).attr("id");
        $(this).toggleClass(countryId);
        showRegion(countryId);
    });
````
And the code for showing regions is going to look familiar:

````
function showRegion(regionCode) {
    var countries = d3.selectAll("path."+regionCode);
    if (countries.classed("highlight")) {
        countries.attr("class", regionCode);
    } else {
        countries.classed("highlight", true);
    }
}
````

He uses a variable with lookups for the region full names:
````
var regions = { "SAS": "South Asia" , "ECS": "Europe and Central Asia", "MEA": "Middle East & North Africa", "SSF": "Sub-Saharan Africa", "LCN": "Latin America & Caribbean", "EAS": "East Asia &amp; Pacific", "NAC": "North America" },
````

And he builds a lookup table for each country / region using the abbreviations. Then he can use the country code to get the region code and use it as a class on the line:

````
vis.append("svg:path")  // this is out of date - we don't need to append "svg:" anymore
            .data([currData])
            .attr("country", countries[i][1])
            .attr("class", countries_regions[countries[i][1]]) // <-- the lookup table
            .attr("d", line)
            .on("mouseover", onmouseover)
            .on("mouseout", onmouseout);

````

In more modern D3 code, we'd use a d3.map() hash lookup for the country code region lookup. You'll see some examples in upcoming weeks.

I've put the country-region codes table in **[data/country-regions.csv](data/country-regions.csv)**.  Come see me if you want help using it and can't figure out how to do the lookup part.


## FYI: Bootstrap for CSS layouts

Have a look at Bootstrap, in very common usage in industry:

* http://getbootstrap.com/
* http://getbootstrap.com/css/
* http://getbootstrap.com/css/#grid

You will use it in one of your homeworks.  I used it for the [lines_transition.html](lines_transition.html) layout.


## Recent Interesting Things

* Connected Scatterplot with Transitions: http://www.nytimes.com/interactive/2015/09/30/business/how-the-us-and-opec-drive-oil-prices.html
* Line charts in the news, the infamous Planned Parenthood graph: http://emschuch.github.io/Planned-Parenthood/

Things to encourage you, I hope:

* https://medium.com/@meandvan/how-i-learned-to-stop-worrying-and-love-the-code-af1a809457c7
* Learning D3 tips from Mike Bostock: https://medium.com/volt-data-lab/to-learn-data-visualization-look-for-small-problems-first-df34fc4630a0  (ignore all the js frameworks and buzzwords if you want, most news graphics teams that publish data insights don't use them)


## Homework

Reading

* Updating data, transitions, etc: http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_updating_data (up to "Other Kinds of Data Updates," we'll finish next week)


**Homework 1: Dots on Lines** (25pt):

Add dots to your personal line charts (not my data!), following the model in [emissions_linescatterplot.html](emissions_linescatterplot.html) and [multiple_lines_labels.html](emissions_linescatterplot.html).  They can be visible or not, animated or not - but they should have tooltips attached that show at least the x and y data values visible in them.
Send me the gist with subject/label "Dots on Lines."

Exra Credit (10pt): If you want to try to do that with voronoi, to make it easier to pick lines/dots, you'll get an extra 10pt.  Beware data points that are at the same point, you may need to use d3.nest() like Mike does in his blocks example.


**Homework 2: Transition Plot With Button** (35pt):

Choose a few interesting lines to plot (2 or 3, not a zillion), or a couple nice scatterplot examples. Bars would work too if you want. Pick at least 2.

You will compare the data using transitions between data set variables.  The 2 comparisons must have the same number of points (at this point in the class), no missing or extra data in one set.

Using the concepts in [lines_transition.html](lines_transition.html) or [scatter_data_transition.html](scatter_data_transition.html) and in Scott's chapter on transitions, make transitions between the data sets.  Use buttons to control them.  Use a flexible 2 column Bootstrap layout (like I did in [lines_transition.html](lines_transition.html)), with your chart in one column, and put useful text or imagery or both in the other column.  Use your own data and style.

Ideas for comparisons: urban vs. rural, male vs. female, countries like I did, differences for one date vs. the next data...  Points will be awarded for sensible comparions that are interesting!

Send me the gist with subject "Transition Plot."


