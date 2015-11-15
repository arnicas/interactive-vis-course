
## Week 13: Animation with a Timer, "Play" buttons, UI


Gapminder animation in d3: http://bost.ocks.org/mike/nations/


Animated Paths on Maps:

* on Leaflet, zev ross: http://bl.ocks.org/zross/6a31f4ef9e778d94c204

* http://mtaptich.github.io/d3-lessons/d3-extras/


Animated Line charts:

* Tutorial: Unrolling line charts http://big-elephants.com/2014-06/unrolling-line-charts-d3js/


Animated Bar Chart:

* Animate bars in: http://bl.ocks.org/RandomEtc/cff3610e7dd47bef2d01

Note that again, we set up the page, then load the data, and call a "replay" function that is a timer that calls the "draw" function with new data.

The draw function sets the domains based on current data set, transitions the axes, and does the data binding, exiting, entering, and updating, with transitions.


UI Sliders:

* Brush as slider: http://bl.ocks.org/zanarmstrong/ddff7cd0b1220bc68a58
* D3 slider examples: http://thematicmapping.org/playground/d3/d3.slider/

Timer:

setInterval(function() {
  redraw();  // call the function you created to update the chart
}, 1500);

Redraw function:

function redraw() {
  // Update…
  chart.selectAll("rect")
      .data(data)
    .transition()
      .duration(1000)
      .attr("y", function(d) { return h - y(d.value) - .5; })
      .attr("height", function(d) { return y(d.value); });
}


Play/Pause audio + animation: https://www.bignerdranch.com/blog/music-visualization-with-d3-js/

Animated borders with a control: https://github.com/maptime-ams/animated-borders-d3js/
Demo: http://maptime-ams.github.io/animated-borders-d3js/tutorial/13/
Tom's control: http://www.macwright.org/chroniton/example/

## Recent Interesting Things

* Mercator Puzzle: http://gmaps-samples.googlecode.com/svn/trunk/poly/puzzledrag.html


