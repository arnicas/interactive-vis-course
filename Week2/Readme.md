##Week 2:


## Review Homework

* Styling project
* JS problems.
* Data issues.

## Presentation on Interactive Vis Techniques

This section contains an overview of the things we'll be doing in this class.
My slides: [InteractiveDataVisDesign.pdf](InteractiveDataVisDesign.pdf)
We'll look at about half of this now, the rest later.

## Intro to High Charts

Look at this project in some detail: http://datatools.urban.org/Features/wealth-inequality-charts/
Look at the source code, too.

* Install the JQuery way: http://www.highcharts.com/docs/getting-started/installation
* Tutorial for first bar chart: http://www.highcharts.com/docs/getting-started/your-first-chart
* Barchart example with jquery: http://jsfiddle.net/highcharts/kh5jY/
* Trellis Chart example: http://jsfiddle.net/highcharts/VqruM/
* Scatterplot example: http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/scatter/
* Using data in csv's: http://www.highcharts.com/docs/working-with-data/data-module (but this is super mysterious to me - hard to tell what controls what.)

Trying to use data in CSV's with High Charts required me to reformat the CSV data into different structures.  Long, wide, and somewhere in between. Be aware that how you structure your data will impact how easily you can use it in your Javascript without having to do reformatting of objects after you load it.

Have a look at this on wide/long data: 

**Homework**: Make a line chart or bar chart with your data in HC using their tutorial or any of the examples. Check it in as a gist and send me the link to the gist.

## Very Simple D3 Intro:

Read in data with D3 and verify it's there in the console: [d3_load_csv_json.html](d3_load_csv_json.html).

Let's look at [d3_simple_append.html](d3_simple_append.html) and how that works.

Create <p> tags for each row of your data, using the template in the [create_p_from_data.html](create_p_from_data.html) file.

* Here is the Jquery doc on append, if you want it: http://api.jquery.com/append/


##Reading for Next Week

* [A Tour Through The Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128)
* [The Eyes Have It (1996)](shneidermanEyesHaveIt.pdf), Ben Shneiderman
* IDVW Chapter 5: http://chimera.labs.oreilly.com/books/1230000000345/ch05.html


### Homeworks

**Homework**: Make a line chart or bar chart with your data in HighCharts using their tutorial or any of the examples. Check it in as a gist and send me the link to the gist, "Week2: High Charts."

**Homework**: Read in one of your data files and verify your objects are there as expected. Prove it to me by creating `<p>`'s on the page using d3 in a forEach loop (you can remove the jquery approach).  Make a gist, and send me your gist link, "Week2: Data load."

**Homework**: Pick a static graphic you think could be improved as an interactive.  Email me the link by Monday end of the day with subject: "Week2: Static for Redesign." We will discuss some of them in class.

**Homework**: Pick an interactive graphic somewhere that you'd like to know how to make. Send it to me as "Week2: How do I do this."  I'll try to find out for you!


