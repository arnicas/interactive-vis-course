##Week 4: Scales, Bar and Line Charts in D3

## Homework Review

## SVG

SVG stands for "scaleable vector graphics."  D3 can create DOM elements that can be manipulated like you've been manipulating other HTML elements, such as `<p>` and `<table>`.  SVG elements include shapes like circles and rectangles, which is why it's useful for creating charts.

D3 can manipulate and draw SVG, which is how many interactive data graphics are created. (An alternative is to use canvas for drawing shapes, but things drawn on canvas can't be manipulated as DOM elements like SVG items can, leading to some downsides.)

A Few Resources:

* Here's a [video introduction to SVG by Scott Murray](https://www.youtube.com/watch?v=qwiRkXnbLtU&feature=youtu.be&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F)
* Basics on SVG shapes in D3: https://www.dashingd3js.com/svg-basic-shapes-and-d3js


### Some Resources
* [Pocket Guide to Writing SVG](http://svgpocketguide.com/book/)
* [SVG2D3 tool](http://billautomata.github.io/svg2d3/) by Bill Automata - not good looking D3, but will give you an idea of the relationship and how D3 "builds" SVG.
* A tool to clean up SVG exported from Inkscape or Illustrator: http://codedread.com/scour/

## Bar Charts in D3

A reminder on binding data:
http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

## D3 Scales

Even independent of the rest of D3, the scales are incredibly powerful and useful tools.  Scales map numbers from a domain into a range. In particular, we need to turn numbers that are in our input data into pixel locations on the screen.  Or into colors.

* Read: http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_creating_a_scale
* Supplementary: http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/
* Videos: [Scott Murray's linear scales](https://www.youtube.com/watch?v=5EZSOsBXdS0&list=PL0tDk-f4v1uh4s33k1qJ7Xl96cOySkLnt), [ordinal scales](https://www.youtube.com/watch?v=WxtJ7VfP_VE&list=PL0tDk-f4v1uh4s33k1qJ7Xl96cOySkLnt&index=2)

Look at [d3_table_heatmap.html](d3_table_heatmap.html), where we add a color range to one column of numbers.

Here's a cool related recent vis in NYT: http://www.nytimes.com/interactive/2015/08/06/upshot/2016-republican-presidential-candidates-dashboard.html?smid=tw-share&_r=0

Here's a nice heatmap: http://www.washingtonpost.com/graphics/business/jobs-report/

Scales with SVG sizes:

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

Look at the file and result in [d3_dynamic_domain.html](d3_dynamic_domain.html).

Note that with chaining, you can put your domain and range in any order on your scale function.  d3.scale.linear().domain([]).range([]) is fine, and so is d3.scale.linear.range([]).domain([]).


Using nested data/ resources:

* Grouped Bar Charts: http://bl.ocks.org/mbostock/3887051
* Nathan's great post on 0 baseline: http://flowingdata.com/2015/08/31/bar-chart-baselines-start-at-zero/

## Line Charts



## Readings

* [A Tour Through The Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128)- some examples of less common visualization techniques, possible in D3.


**Homework 1**: Add a color heatmap to one or more of your table columns, paying attention to text readability and also the [UNICEF style guide](https://github.com/arnicas/interactive-vis-course/blob/master/UNICEF%20Brand%20Toolkit%20ENG%20Sept%202012.pdf). (15pts) Be sure to identify data source on the page! Gist: "Week 3: Heatmap table"

**Homework**: Make a bar chart

**Homework**: Make a line chart

