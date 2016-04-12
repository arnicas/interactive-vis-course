
# Week 12: Storytelling Tools: Scrolling, Steppers


## Homework Review


### Chroniton.js Slider Moved###

FYI: New home for the chroniton.js play/pause d3 slider control is here:

* http://xaranke.github.io/chroniton/example/index.html


### Reminders about Bugs

Things to check for:

* Are your data values numeric. (Did you use + to change them).
* In the console, if you see paths with NaNs in them, you have a scale wrong, probably, or your data is wrong.
* Does your data have commas in it -- get rid of them.  Numbers must have no commas.
* Is your d3 selection valid or not?  Check at the console window to see if you are actually selecting something if your data isn't showing up.
* Don't select too "generically" -- make sure you use a class, like `d3.selectAll("path.line")` and then create paths with classes to match this.
* Use console.log.
* Use breakpoints to see what your data looks like.


### Reminders about Git Workflow

You should be working from your local files, using your local server, and committing and pushing to the repo. DO NOT EDIT FILES ON THE GITHUB SITE.  You will be out of sync then.  See week13 for reminders about commands to use when pushing your code.


### Reminder about Good Code Structure


Please avoid having a page structure that mixes html for the body with script elements -- We don't want this sequence of sections:

````
<div id="chart"></div>
<p>Text here</p>

<script>
...js Code for chart 1...
</script>

<div id="chart2"></div>
<p>More text here</p>

<script>
.... more js decode
</script>
````

Just don't do that, it's bad form to mix the html markup and script this way

Make your HTML and CSS to reflect the full project -- a single page app. Your html should have placeholder elements for the charts in divs, for example: `<div id="chart1"></div>`.  Then you will use d3 to select that element and append the svg for the chart.

Load all your data in queue, and then use a function to call the functions to draw your charts.

````
// we use queue because we have 2 data files to load.
queue()
    .defer(d3.json, "data/file1.json")
    .defer(d3.csv, "data/file2.csv")
    .await(loadedData);

function loadedData(error, file1data, file2data) {
  // after the data is all in, we can draw the charts with it.

  // you might have another function or series of steps that manipulate data here.
  // then, call the code to draw the charts.

  drawChart1(file1data);
  drawChart2(file2data);

}

function drawChart1(data) {
  // nicely encapsulated code that takes the first data set to draw...

  var fullwidth = 600;
  etc.

  var svg = d3.select("#chart1").append("svg")...

}

function drawChart2(data) {
  // using the second data set for the next chart...

  var fullwidth = 300;
  etc.

  var svg = d3.select("#chart2").append("svg")...
}
````

You will probably want to have multiple files for your javascript code.
Remember, a file is not a function -- all the variables and code in one `file.js` will be in your global namespace after you load it.

One way to do this is to have a structure like:

* main.js: contains the data loading, maybe data processing functions. Calls functions that are in the other js files to draw charts.
* linechart.js (for example): contains a function that does a line chart
* scatterplot.js (for example): contains a function that does a scatterplot


## Storytelling Structure Techniques

### A Good Paper to Read

This is a smart paper on story telling in journalistic data vis.  Journalists should read it.

* [Telling Stories with Data](http://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf)


### Steppers ("Slideshow")

These are button-based stories, where the button changes the data view and the text, usually.

Reference Examples:

* http://www.nytimes.com/interactive/2013/05/07/education/college-admissions-gap.html
* Budget Forecast Compared to Reality: http://www.nytimes.com/interactive/2010/02/02/us/politics/20100201-budget-porcupine-graphic.html


A Tutorial:

* http://vallandingham.me/stepper_steps.html (includes a jquery version and a pure D3 version)

Btw, useful CSS Designs for Buttons:

* https://css-tricks.com/examples/ButtonMaker/#


There's an example you could modify in:

* Example: [stepper_buttons.html](stepper_buttons.html).


### Scroll-Triggered: "Scrollytelling"

The example that influenced a lot of folks when it came out:
* Snow Fall: http://www.nytimes.com/projects/2012/snow-fall/#/?part=tunnel-creek


Jim Vallandingham's tutorial material:

* His Openvis talk: http://vallandingham.me/think_you_can_scroll.html
* His demo app: http://vallandingham.me/scroll_demo/
* His tutorial: http://vallandingham.me/scroller.html

Based on Jim's tutorial and talk, a Mike Freeman tutorial, but with a slightly modified code library:

* http://mfviz.com/scrollytelling/#/
* His code: https://github.com/mkfreeman/scrolling (I saved a copy as mfreeman_scroller.js in our js dir)

Truth: I spent a lot of time trying to adapt 2 graphs to these techniques in both the Bloomberg framework in graph-tools.io and Jim's.

The example for the homework is much simpler, a combo using Mike Freeman's modified version of Jim's scroller:

* [scroller_template_lines2.html](scroller_template_lines2.html)
  * requires js/line_chart_refactor.js
  * js/scroller_settings2.js
  * js/mfreeman_scroller.js
  * line.css


Some issues that came up in "real examples": going backwards has to be handled too. This causes a lot more complexity than one would hope.  Also, the beginning and end states are annoyingly placeholdery.


### Some Simpler Layout Demos

Even if you don't do charts in it, this is a useful toy/demo:

* http://tympanus.net/codrops/2013/05/02/fixed-background-scrolling-layout/


### Examples of Scrollytelling

**Jim's list**:

* http://vallandingham.me/scroll_talk/examples/
* The Receession in 255 Charts: http://www.nytimes.com/interactive/2014/06/05/upshot/how-the-recession-reshaped-the-economy-in-255-charts.html
* Bloomberg What's Really Warming the World? http://www.bloomberg.com/graphics/2015-whats-warming-the-world/  (using the graph-scroll lib)

**Position-based scrolling** (as Mike Bostock calls it):

* Shark and Minnow: http://www.nytimes.com/newsgraphics/2013/10/27/south-china-sea/
* Ted Ligety: http://www.nytimes.com/newsgraphics/2014/sochi-olympics/giant-slalom.html

**Scrolling with steppers**:

* English vs. Chinese Colors: http://muyueh.com/greenhoney/
* http://www.nytimes.com/interactive/2014/03/31/science/motorcycle-helmet-laws.html
* The Making-of: https://source.opennews.org/en-US/articles/behind-scenes-fewer-helmets-more-deaths/

**Yet more scrolly goodness**:

* Dark Side of Comments: https://www.theguardian.com/technology/2016/apr/12/the-dark-side-of-guardian-comments
* A Visual Intro to Machine Learning: http://www.r2d3.us/visual-intro-to-machine-learning-part-1/
* Let's Free Congress: http://letsfreecongress.org/,
  * And a post about the transitions: http://blog.tonyhschu.ca/post/49488608263/technical-write-up-scroll-linked-animations
* Battle of the Berrics, linked text too: http://www.georgelmurphy.com/berrics/
* http://www.bloomberg.com/graphics/2015-auto-sales/ - "Martini glass style" of storytelling
* CA is getting Fracked by Anna Flagg: http://www.facesoffracking.org/data-visualization/


### Zoomytelling, a subgenre?

* Jeter: http://www.nytimes.com/interactive/2014/09/14/sports/baseball/jeter-swings.html?_r=0
* Greenland: http://www.nytimes.com/interactive/2015/10/27/world/greenland-is-melting-away.html

* What is this... Active Satellites: http://qz.com/296941/interactive-graphic-every-active-satellite-orbiting-earth/

### Design Tip: Avoid Scolljacking

Read: http://bost.ocks.org/mike/scroll/

"Scrolljacking" is bad.

Contrast this MacPro page: http://www.apple.com/mac-pro/?afid=p238%7Csf9lg0Y3B-dc_mtid_1870765e38482_pcrid_91262087647_&cid=aos-us-kwg-mac-slid-
with the pencil examination in http://www.fiftythree.com/pencil.

In the latter, and in most of the good scrollytelling examples, the user can speed up and reverse to control their movement.  Motion is dependent on the mouse, they aren't hijacked and forced into someone else's pace.


### Other Related Scrolly Tools

graph-scroll.js from Bloomberg/Adam R Pearce (even he says he has to read his source to use it :( ):

* http://1wheel.github.io/graph-scroll/

Scrollmagic (I couldn't get it to work well with a simple chart case.  It's aimed at animating things on scroll, but not d3):

* http://scrollmagic.io/

Mobile Touch Slider

* http://www.idangero.us/swiper/#.Vjz8ia6rSRs

Storytelling With Maps Tool:

* http://cartodb.github.io/odyssey.js/
* http://www.pleens.com/
* http://v.isits.in/

Storytelling with Pageflow.io:

* http://pageflow.io/en

Example: http://pageflow.ericmakswitat.de/research



##Javascript Tips

### Switch Statement (and a Functional Alternative)

You'll see this in the Mike Freeman example and the homework based on his slides. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch.

````
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}
````

However, notice that a lot of Javascript developers argue against switch statements in favor of using objects.

* https://javascriptweblog.wordpress.com/2010/03/08/caseagainstswitch/
* http://encosia.com/first-class-functions-as-an-alternative-to-javascripts-switch-statement/


### String Character Replacements Reminder

A useful string replace function -- replace spaces in a country name with underscore:

````
var country = country.replace(/\s/g, '_');
````

This comes in useful for creating id's on SVG elements for later reference in code.


## Recent Interesting Things

* http://polygraph.cool/films/ - scrollytelling vis
* https://www.theguardian.com/technology/2016/apr/12/the-dark-side-of-guardian-comments


## Schedule Notes and Grading

I'm busy this Thursday and Friday with visitors, but can be available Wed 11-1.30.

I'm away the last Mon-Tues of classes, April 25-26.

If you want your project to get review comments before I grade it, I'd like it by April 29.  Projects are due on Thursday May 5.

Project reminders:
* What We've Done: http://arnicas.github.io/interactive-vis-course/Week11/#recap-so-far-project-ahead
* Grading plan: http://arnicas.github.io/interactive-vis-course/Week14/#project-grading


##Homework

Readings:

* [Telling Stories with Data](http://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf)
* Mike's piece: http://bost.ocks.org/mike/scroll/
* Read/skim in this order if you plan to use scrollytelling: http://vallandingham.me/think_you_can_scroll.html, http://mfviz.com/scrollytelling/#/


**Homework 1 (15pt): Make Progress**

Send me the link to your updated repo, with:

 * at least 3 charts on a page,
 * code in functions and different js files as we discussed today,
 * and some text/layout that outlines the story you will tell in your project.
 * In other words, show me progress.


