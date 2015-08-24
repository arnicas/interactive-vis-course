##Week 2:

## Review Homework

* Styling project.
* JS problems.
* Data download and format issues.

## Client Project Brief

What problems did we find of interest in the brief?  Let's discuss.

## Intro to High Charts

Let's look at this project in some detail: http://datatools.urban.org/Features/wealth-inequality-charts/. Look at the source code, too.

* Install the JQuery way: http://www.highcharts.com/docs/getting-started/installation
* Tutorial for first bar chart: http://www.highcharts.com/docs/getting-started/your-first-chart
* Barchart example with jquery: http://jsfiddle.net/highcharts/kh5jY/
* Trellis Chart example: http://jsfiddle.net/highcharts/VqruM/
* Scatterplot example: http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/scatter/
* Using data in csv's: http://www.highcharts.com/docs/working-with-data/data-module (but this is super mysterious to me - hard to tell what controls what.)

Trying to use data in CSV's with High Charts required me to reformat the CSV data into different structures.  Long, wide, and somewhere in between. Be aware that how you structure your data will impact how easily you can use it in your Javascript without having to do reformatting of objects after you load it.

My examples:
* [highcharts_dot.html](highcharts_dot.html) and [highcharts_dot_csv.html](highcharts_dot_csv.html] Extra credit if you can figure out how to turn off the rollover effect on the dots! (5pt)  Ideally there would be a line between the 2 at the same row, instead.
* [highcharts_slope.html](highcharts_slope.html) - my attempt at a slopegraph! Not using CSV data.

Have a look at this on wide vs long data: https://en.wikipedia.org/wiki/Wide_and_narrow_data.

**Homework**: Make a line chart or bar chart with your data in High Charts using their tutorial or any of the examples. Check it in as a gist and send me the link to the gist. It must have a useful tooltip. Extra credit: Make 2 kinds of graphs.

## Loading Data, and Very Simple D3 Intro

Read in data with D3 and verify it's there in the console: [d3_load_csv_json.html](d3_load_csv_json.html).  JSON objects (javascript object notation) should be there for each row of your data set.

Let's look at [d3_simple_append.html](d3_simple_append.html) and how that works.

Create <p> tags for each row of your data, using the template in the [create_p_from_data.html](create_p_from_data.html) file.

Resources:

* Here is the JQuery doc on append, if you want it: http://api.jquery.com/append/
* A [video from Scott Murray explaining d3.csv loading of objects](https://www.youtube.com/watch?v=KqEm-3tofBA&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F&index=6)


## Interactive Vis Techniques - Readings

Some of the reading for this week will motivate the interactive vis techniques we are going to cover in this class.

* Reading: http://mediashift.org/2015/08/when-telling-data-driven-stories-let-readers-ask-questions-too/ (Tableau examples that motivate interaction and data sharing)
* [A Tour Through The Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128)- some examples of less common visualization techniques, possible in D3.
* [The Eyes Have It (1996)](shneidermanEyesHaveIt.pdf), Ben Shneiderman - a classic article that features the mantra everyone must memorize:

    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.
    Overview first, zoom and filter, then details on demand.

### Homeworks

See the readings list just above.  Plus these:

**Homework**: Make a line chart or bar chart with your data in HighCharts using their tutorial or any of the examples. Check it in as a gist and send me the link to the gist, "Week2: High Charts." (20pt, Extra credit: Make 2 graph types, 10pt)

**Homework**: Read in one of your data files and verify your objects are there as expected. Prove it to me by creating `<p>`'s on the page using d3 in a forEach loop (you can remove the jquery approach).  Make a gist, and send me your gist link, "Week2: Data load." (15pt)


