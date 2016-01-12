# Week 2: Highcharts, Loading CSV Data With D3.js

## Review Homework

Gists reminders: Upload files with the add button (or drag and drop, don't paste in CSV data); name your web pages index.html so they will work in bl.ocks.org!


## "Switchers" for Changing the View on the Data

This is a trick you get with interactives -- the "recast" the problem in a new way, or "switch" the view of the data.  This can mean scale change, or annotation/highlighting different data.  Here's a couple examples:

* A log scale switch: log vs. normal (Exoplanets interactive from NatGeo link is broken, so let's use this now: http://bl.ocks.org/phoebebright/4124200)
* [A Surge in Asylum Applications](http://www.nytimes.com/interactive/2015/08/28/world/europe/countries-under-strain-from-european-migration-crisis.html?smid=tw-nytimes&_r=0) - Total vs. Population switch
* [How Democrats vs Republicans See Friday's Job Numbers](http://www.nytimes.com/interactive/2012/10/05/business/economy/one-report-diverging-perspectives.html?_r=2&), NYT Graphics


## Intro to Highcharts

Let's look at this project in some detail: http://datatools.urban.org/Features/wealth-inequality-charts/. Look at the source code, too.

**Resources**:

* Install the JQuery way: http://www.highcharts.com/docs/getting-started/installation
* Tutorial for first bar chart: http://www.highcharts.com/docs/getting-started/your-first-chart
* Trellis Chart example: http://jsfiddle.net/highcharts/VqruM/
* Scatterplot example: http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/scatter/
* Using data in csv's: http://www.highcharts.com/docs/working-with-data/data-module (but this is super mysterious to me - hard to tell what controls what!)

Trying to use data in CSV's with High Charts required me to reformat the CSV data into different structures.  Long, wide, and somewhere in between. Be aware that how you structure your data will impact how easily you can use it in your Javascript without having to do rewriting of objects after you load it.  (Have a look at this on wide vs long data: https://en.wikipedia.org/wiki/Wide_and_narrow_data.)

More of my local examples:

* [highcharts_dot.html](highcharts_dot.html) and [highcharts_dot_csv.html](highcharts_dot_csv.html)
* [highcharts_slope.html](highcharts_slope.html): my attempt at a slopegraph! Not using CSV data, but embedded data.
* Here is a useful excerpt you can use in the homework for a "switcher": [highcharts_switch.html](highcharts_switch.html). (This is extracted from the [Urban Institute project](http://datatools.urban.org/Features/wealth-inequality-charts/)).

![switcher](img/highcharts_switch.png)



## Hem, There Are So Many Charting Libraries Out There

See, e.g.,

* https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_frameworks
* http://www.sitepoint.com/15-best-javascript-charting-libraries/
* And now this epic tool/book browser: http://keshif.me/demo/VisTools

Let's look at Dimple.js now. It's built on top of D3.
(TODO: Add an example.)


## Loading Data, and Very Simple D3 Intro

Last week you loaded a data file from CSV into a web page. Now we're going to do a simple DOM operation using that data file.

Let's look at [d3_simple_append.html](d3_simple_append.html) and how that works.

For your homework, create `<p>` tags for each row of your data, using the template in the [create_p_from_data.html](create_p_from_data.html) file.

**Resources**:

* A [video from Scott Murray explaining d3.csv loading of objects](https://www.youtube.com/watch?v=KqEm-3tofBA&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F&index=6)
* Here is the JQuery doc on append, if you want it: http://api.jquery.com/append/


## Interactive Vis Techniques - Readings

Some of the reading for this week will motivate the interactive vis techniques we are going to cover in this class.

* Skim this - [When Telling Data Driven Stories, Let Readers Ask Questions Too](http://mediashift.org/2015/08/when-telling-data-driven-stories-let-readers-ask-questions-too/) (Tableau examples that motivate interaction and data sharing; we won't make our final projects in Tableau, but you're welcome to prototype with it.)
* [The Eyes Have It (1996)](shneidermanEyesHaveIt.pdf), Ben Shneiderman - a classic article that features the mantra everyone must memorize:

    *Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.*

* Video by Scott Murray [introducing D3](https://www.youtube.com/watch?v=DRIlogs5vzw&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F&index=5) for his course, not all of which applies (we aren't using his files)-- but which reviews selections. And reviews the console use and method chaining.  SVG will be introduced  bit at the end, which we will start on in a couple weeks.

## Homeworks

Do the readings/videos list just above.  Memorize the mantra. Plus these:

**Homework 1**: Using the structure and switch button functionality in [highcharts_switch.html](highcharts_switch.html), plug in 2 of your own related High Charts charts, using your data. Adjust the text, labels, tooltips, etc. to match your data and data source.  Be sure it has useful tooltips.  Add a paragraph of text with the chart that explains it a bit more, using appropriate styling.

Points: (35pts) for charts and styling and your own data, points included for originality (not just mean/median) in the data you chart and compare. Use at least one other type of chart, aside from the line charts in the example.

For your gist: *Be sure the html page is called index.html.*  Be sure your path to highcharts is a CDN, not local, link.
My examples show the CDN path you should use in your code.

  Check it in as a gist and send me the link to the gist, "Week2: High Charts."

**Homework 2**: Read in one of your csv data files and verify your objects are there as expected. Prove it to me by creating `<p>`'s on the page using d3 in a forEach loop (you can remove the jquery approach). Make a gist, and send me your gist link, "Week 2: Paragraph Data load." (15pt)  *Name the web page itself index.html so it will work in a blocks example!*


