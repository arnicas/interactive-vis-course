
# Week 14: Reusable Charts, More Layouts, Project Help

## Homework Review


## Project Grading

Project is 40% of the course grade total (base points, not the extra credit points).

Here is the breakdown:

* 20% for using 4 chart types we covered in class (can include small multiples as one)
* 20% for good interactivity: Transitions, highlights, tooltips, filter/sort, animation...
* 15% on text: Connective text holding the story together, intro and conclusion, annotations on graphs, good explanations, good writing (good English style)
* 10% on storytelling: You create a useful, interesting data story flow using a mix of text, steppers/buttons, highlights, scrollytelling. (You don't have to use all of them.)
* 10% on graph/chart elements: Good labeling of values/axes, tooltips, readability of chart contents and labels
* 10% on visual style overall: Color scheme, attractiveness, clarity in graphs, use of UNICEF style somewhere in page
* 10% for good data analysis: Interesting findings/results, nice use of top 10s, relating data sets to each other intelligently
* 5% for page layout/design: Good visual and functional CSS, useful external links, resume/CV link, header/footer with info about the project and data as needed.

Extra-extra credit options will include:

* Using interesting/new interactions or graph types we didn't cover in class (including layouts below)
* Anything else that makes it stand out as a great project (my perogative, and class feedback during demos)


## Helpful Stuff (I Hope)

Joining files in Excel using VLOOKUP:
https://support.office.com/en-us/article/VLOOKUP-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1

See the worksheets in scatter_data_plus_codes.xlsx and in deaths_04yearsold_codes.xlsx.

Click on map to update line chart: **[lines_transition_map.html](lines_transition_map.html)**  This takes a while to load, and the spinner isn't working right.

TODO: Fix the loading gif.



## A Useful Thing for Pre-Debugging and Interviewing: Linting

Linting is running an app over your code to check for style and obvious errors, like variable conflicts or unused variables.  Linters will often help you avoid bugs and save time.

* http://jshint.com/about/
* http://jshint.com/install/

You can run jshint from the command line. Also look at "JS Beautifiers."

A former colleague has written a great blog post on better ways to lint and check for formatting errors in JS:  http://glebbahmutov.com/blog/1-2-3-linted/

This requires you to have node installed and do a bunch of other modules installs.  I set it up for myself, and I can help.


## D3's "Reusable Chart Pattern"

You've seen that D3 is a pretty "manual" process.  There is one proposal for better code encapsulation and re-usability in the "reusable charts" closure paradigm.

Reference:

* http://bost.ocks.org/mike/chart/
* a further refinement: Towards Reusable Charts: http://www.toptal.com/d3-js/towards-reusable-d3-js-charts
* Final Code: http://bl.ocks.org/rcmoore38/9f2908455355c0589619

Note: This is the style Jim Vallandingham uses in his tutorial code.

**See example using it in [using_reusable_barchart.html](using_reusable_barchart.html).**


## Other D3 Layouts

Other layouts we haven't covered are listed in Chapter 11: http://chimera.labs.oreilly.com/books/1230000000345/ch11.html.

Also see the D3 docs: https://github.com/mbostock/d3/wiki/Layouts

* **Tree / dendrogram**: http://bl.ocks.org/mbostock/4063570, with a how-to (untested) here: http://www.meccanismocomplesso.org/en/dendrogramma-d3-parte1/

* **Treemap**: https://github.com/mbostock/d3/wiki/Treemap-Layout, http://bl.ocks.org/mbostock/4063582, zoomable treemap: http://bost.ocks.org/mike/treemap/

* **Network (force layout)**: http://bl.ocks.org/mbostock/4062045 (see also Jim Vallandingham's talk at OpenVis: http://vallandingham.me/abusing_the_force.html)

* **Chord diagram**: https://github.com/mbostock/d3/wiki/Chord-Layout, http://bl.ocks.org/mbostock/4062006, tutorial: http://www.delimited.io/blog/2014/11/18/interactive-chord-diagrams-in-d3

* **Pie chart**: http://bl.ocks.org/mbostock/3887235, (see Scott's book chapter 11, too)

* **Histogram**: http://bl.ocks.org/mbostock/3048450

Ones that might work in your project: pie (for small number of wedges), treemap (to drill into causes of illness), histogram (to see distribution of death causes and rates, etc).


##Recent Interesting Things

* Y Axis critique: http://www.vox.com/2015/11/19/9758062/y-axis-zero-chart?utm_campaign=vox&utm_content=chorus&utm_medium=social&utm_source=twitter
* Interactive Strip Plots: http://www.maartenlambrechts.be/interactive-strip-plots-for-visualizing-demographics/
* Data Vis catalogue: http://www.datavizcatalogue.com/
* Gender Ratio in the World - relevant to UNICEF data: http://qz.com/335183/heres-why-men-on-earth-outnumber-women-by-60-million/
* Climate Change: https://www.washingtonpost.com/graphics/national/gauging-climate-change/
* Bret Victor's page on climate change: http://worrydream.com/ClimateChange/
* Sign up for the DashingD3 newsletter if you haven't: https://www.dashingd3js.com/


##Homework

More progress!  Nothing due, but send me your bugs/hangups.

Project is due on December 15.  Make sure your github.io link works, that you have committed and pushed it all.


