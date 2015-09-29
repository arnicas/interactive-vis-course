## Week 6: Line Charts, Simple Events, Tooltips

##Homework Review

###Axes issues

Bar chart axes issues...

How to add padding on scatterplots...


###Scatterplots

Class scatterplots - I removed the requirement for axis labels, including Y axis rotated label, so I gave extra points if you did those.

Original Scatterplots:
* http://bl.ocks.org/lwhitaker3/raw/255b0dca9a7a5ba1a995/
* http://bl.ocks.org/jowang0319/raw/75274174cfdb526195de/
* http://bl.ocks.org/yan2014/raw/47e20086272f8d492a0a/ (trend line, legend)
* http://bl.ocks.org/hmader/raw/887723d30971a07fcb05/ -- two highlights

Aside on connected dot plots...


### Bar Charts

* http://bl.ocks.org/lwhitaker3/c2683797e0f306d57e23
* http://bl.ocks.org/DimsumPanda/raw/f702266104b0316011c9/
* http://bl.ocks.org/lmelgar/raw/91856031a742c9cef45f/ - note the mean here.
* http://bl.ocks.org/hmader/raw/04952dfc17572734e5df/

###Dot Plots

* Great style: http://bl.ocks.org/lmelgar/raw/1b6ac17f21c091d7edcb/.
* Interesting data: http://bl.ocks.org/yan2014/raw/7f395595bae3afb95a71/
* http://bl.ocks.org/DimsumPanda/raw/377168164d5ab59bebad/
* http://bl.ocks.org/lwhitaker3/raw/a24f5ba9d2d84d29cc4b/
* http://bl.ocks.org/DimsumPanda/raw/9082525914a69bd29600/


Selections that don't collide with other elements of the same kind:

````
var textlabels = d3.svg.selectAll("text.labels")
    .data(myData)
    .enter()
    .append("text")
    .attr("class", "labels");

````



### Dates in D3:

D3 docs on time formatting: https://github.com/mbostock/d3/wiki/Time-Formatting

Read: http://learnjsdata.com/time.html

Optional Watch: Working with Dates in D3, Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=1

Example: Date formatting and parsing in d3_date_parsing.html.


##Line Charts (and Time)

Examples:

* emissions_time_scatterplot.html
* emissions_lineplot.html
* emissions_both.html

More data:

* multiple_lines.html
* multiple_lines_mouseover.html

Watch: Line charts video, Scott Murray: https://www.youtube.com/watch?v=QiNi2aYANUc&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=2


Clever line bisect mouseover label trick: http://bl.ocks.org/mbostock/3902569


## D3 Mouse Events

.on("mouseover")
.on("mouseout")
.on("mousemove")
.on("click")





## D3 Tooltips

There are lots of ways to do tooltips in D3 applications. Here is a simple way that uses HTML, which means you can put any content you want in the tooltip.  We just position it with the window.event location for where the cursor is when the mouseover event is fired.

Example: emissions_scatterplot_tooltip.html


Another method, very slightly different: http://bl.ocks.org/d3noob/a22c42db65eb00d4e369

And using a plugin: http://bl.ocks.org/yan2014/cd5fecb580b676f338cd

<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>




