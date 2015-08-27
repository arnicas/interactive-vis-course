##Week 2:

## Review Homework

* Styling project examples.
* JS problems?
* Data download and formatting issues?

Gists reminders: Upload files with the add button; name your web pages index.html so they will work in bl.ocks.org.  Use of a CDN.

## Client Project Brief

What problems did we find of interest in the brief and other data sources?  Let's discuss interesting data questions.


## There Are So Many Charting Libraries Out There

See, e.g.,

* https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_frameworks
* http://www.sitepoint.com/15-best-javascript-charting-libraries/

**Homework**: See below.


## Intro to High Charts

Let's look at this project in some detail: http://datatools.urban.org/Features/wealth-inequality-charts/. Look at the source code, too.

Looking at how it's made -- an excerpt is in [highcharts_switch.html](highcharts_switch.html).

Resources:

* Install the JQuery way: http://www.highcharts.com/docs/getting-started/installation
* Tutorial for first bar chart: http://www.highcharts.com/docs/getting-started/your-first-chart
* Trellis Chart example: http://jsfiddle.net/highcharts/VqruM/
* Scatterplot example: http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/scatter/
* Using data in csv's: http://www.highcharts.com/docs/working-with-data/data-module (but this is super mysterious to me - hard to tell what controls what!)

Trying to use data in CSV's with High Charts required me to reformat the CSV data into different structures.  Long, wide, and somewhere in between. Be aware that how you structure your data will impact how easily you can use it in your Javascript without having to do rewriting of objects after you load it.  (Have a look at this on wide vs long data: https://en.wikipedia.org/wiki/Wide_and_narrow_data.)


More of my local examples:
* [highcharts_dot.html](highcharts_dot.html) and [highcharts_dot_csv.html](highcharts_dot_csv.html]
* [highcharts_slope.html](highcharts_slope.html) - my attempt at a slopegraph! Not using CSV data, but embedded data.


**Homework**: See below.


## Loading Data, and Very Simple D3 Intro

Read in data with D3 and verify it's there in the console: [d3_load_csv_json.html](d3_load_csv_json.html).  JSON objects (javascript object notation) should be there for each row of your data set.

Let's look at [d3_simple_append.html](d3_simple_append.html) and how that works.

Create `<p>` tags for each row of your data, using the template in the [create_p_from_data.html](create_p_from_data.html) file.

Resources:

* A [video from Scott Murray explaining d3.csv loading of objects](https://www.youtube.com/watch?v=KqEm-3tofBA&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F&index=6)
* Here is the JQuery doc on append, if you want it: http://api.jquery.com/append/

**Homework**: See below.

## Interactive Vis Techniques - Readings

Some of the reading for this week will motivate the interactive vis techniques we are going to cover in this class.

* [When Telling Data Driven Stories, Let Readers Ask Questions Too](http://mediashift.org/2015/08/when-telling-data-driven-stories-let-readers-ask-questions-too/) (Tableau examples that motivate interaction and data sharing; we won't make our final projects in Tableau, but you're welcome to prototype with it.)
* [The Eyes Have It (1996)](shneidermanEyesHaveIt.pdf), Ben Shneiderman - a classic article that features the mantra everyone must memorize:

    *Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.*

* Video by Scott Murray [introducing D3](https://www.youtube.com/watch?v=DRIlogs5vzw&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F&index=5) for his course, not all of which applies (we aren't using his files)-- but which reviews selections. And reviews the console use and method chaining.  SVG will be introduced  bit at the end, which we will start on in a couple weeks.

### Homeworks

Do the readings/videos list just above.  Plus these:

**Homework**: Using the structure and switch button functionality in [highcharts_switch.html](highcharts_switch.html), plug in 2 of your own related charts, using UNICEF data. Adjust the text, labels, tooltips, etc. to match your data and data source.  Be sure it has tooltips.  Add a paragraph of text with the chart that explains it a bit more, using appropriate styling.

Change the style to use style attributes from the [UNICEF style guide]("../UNICEF Brand Toolkit ENG Sept 2012.pdf").

Points:

* 30pts for charts and styling and your own (UNICEF) data
* Extra credit (6pt): Use at least one other type of chart, aside from the line charts in the example.
* Extra credit (5pt): Load your data from variables in a separate JS included file, instead of inlining the data values in the highcharts code directly. Use variables in the Highcharts code instead.
* OR Extra-Extra credit (not required of grad students, but 10pt): Use CSV input data, instead of inline data. You may be asked to present how you did this.

For your gist: Be sure the html page is called index.html.  Be sure your path to highcharts is a CDN, not local, link.  Check it in as a gist and send me the link to the gist, "Week2: High Charts."

**Homework**: Reproduce one of the charts you made with Highcharts in another JS charting library. It must have tooltips. Include a "Readme.md" file with your gist that explains what it was like to work with this library in comparison to Highcharts.  Gist link by email: "Week 2: Another JS library."  Be sure to use a CND path to the library again. (12pt)

**Homework**: Read in one of your data files and verify your objects are there as expected. Prove it to me by creating `<p>`'s on the page using d3 in a forEach loop (you can remove the jquery approach). Make a gist, and send me your gist link, "Week 2: Paragraph Data load." (15pt)  *Name the web page itself index.html so it will work in a blocks example!* 

**Homework**: Pick an interactive graphic somewhere that you'd like to know how to make. Remember I gave you resources on the home page of this repo...  Send it to me by email with a link and what you like about it: "Week 3: How do I do this?"  I'll try to find out for you! (5pt)


