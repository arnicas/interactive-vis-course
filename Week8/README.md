# Week 8: Data Updates, Data Binding by Key, More Transitions



## Javascript Tips:

The slice function: get the first N items from the array as a new array:

````
topTen = data.sort(function(a, b) {
        return b.value - a.value; // descending order, biggest at the top!
  }).slice(0, 10); // cut off the top 10!
````

Data Binding with Keys

Read: (To the bottom of the page) http://chimera.labs.oreilly.com/books/1230000000345/ch09.html#_other_kinds_of_data_updates


For the data keys part:

* Object Constancy Intro: http://bost.ocks.org/mike/constancy/  (Read this, but there are advanced details in the full source code for that example.)
* A more detailed example: http://www.delimited.io/blog/2013/11/8/object-constancy-in-d3
* An example with Line Charts, another example: http://bl.ocks.org/nsonnad/4175202

* http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

* Nice examples in this tutorial: http://code.hazzens.com/d3tut/lesson_4.html


Some more explanation, Read: https://square.github.io/intro-to-d3/data-binding/


## Good Code Structure - Functions for draw and update.

Draw or Redraw/Update Functions

A common structure for an updating D3 vis is:

1. Globally, set up your main vis variables: your margin, scale, ranges, format strings, your svg container width.
2. Load the data, call the "draw" or "update" function.
3. In a function or two, draw the graphs with the data: Set your scale domains here too, based on current data values, then create graphs if they don't exist, update the data if they do with transitions and exit().




## Scraps:


Grouped bar charts now?  Stacked?
Area charts?

A reminder on binding data with key values, update, and exit:


color dots by type: http://bl.ocks.org/mbostock/3887118


## Legends

Use a legend plugin!


## Recent Interesting Things

NYT Hightlights of Digital Storytelling: http://www.nytimes.com/2015/10/07/business/using-innovative-storytelling-to-illuminate-the-world.html


Smoothing out Lines - http://www.d3noob.org/2013/01/smoothing-out-lines-in-d3js.html?spref=tw

Voronoi beer map:
Voronoi airport map:

