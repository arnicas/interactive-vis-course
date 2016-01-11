
// For use with scroller_template2.html and mfreeman_scroller.js.

// function to move a selection to the front/top, from
// https://gist.github.com/trtg/3922684
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

// Settings object

var settings = {
  // could be used to save settings for styling things.
};

var data = []; // make this global

var vis = d3.select("#vis");

function focus_country(country) {
  console.log("in focus", country);
  // unfocus all, then focus one if given a name.
    d3.selectAll("path.line").classed("focused", false);
    if (country) {
        var country = country.replace(/\s/g, '_');
        var line = d3.select("g.lines#" + country + " path.line");
        line.classed("focused", true);
        var lineGroup = d3.select("g.lines#" + country);
        lineGroup.moveToFront();
    }
}

var update = function(value) {
  var country = null;
  var localdata = data;
  var show_vis = true;
  switch(value) {
    case 0:
      console.log("in case", value);
      show_vis = false;
      break;
    case 1:
      console.log("in case", value);
      localdata = data;
      break;
    case 2:
      console.log("in case", value);
      localdata = data;
      country = "Nigeria";
      break;
    case 3:
      console.log("in case", value);
      //yScale = d3.scale.sqrt().range([margin.top, height - margin.bottom]);
      localdata = data;
      country = "Bosnia and Herzegovina";
      break;
    case 4:
      console.log("in case", value);
      country = null;
      localdata = data.filter(function(d) {return d.country == "Haiti" || d.country == "Rwanda";});
      break;
    case 5:
      console.log("in case", value);
      show_vis = false;
      localdata = data.filter(function(d) {return d.country == "Haiti" || d.country == "Rwanda";});
      country = null;
      break;
    default:
      country = null;
      show_vis = true;
      focus_country(country);
      draw_lines(localdata);
      break;
  }
  console.log("show viz", show_vis);
  if (show_vis) {
    vis.style("display", "inline-block");
  } else {
    vis.style("display", "none");
  }
  draw_lines(localdata); // we can update the data if we want in the cases. Draw before focus!
  focus_country(country); // this applies a highlight on a country.
};
// setup scroll functionality

function display(error, mydata) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);

    var vis = d3.select("#vis");

    data = make_data(mydata); // assign to global; call func in line_chart_refactor.js

    //console.log("after makedata", data);

    var scroll = scroller()
      .container(d3.select('#graphic'));

    // pass in .step selection as the steps
    scroll(d3.selectAll('.step'));

    // Pass the update function to the scroll object
    scroll.update(update);

    // This code hides the vis when you get past it.
    // You need to check what scroll value is a good cutoff.

    var oldScroll = 0;
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      console.log("scroll", scroll);
      if (scroll >= 1500 && scroll > oldScroll) {
          vis.style("display", "none");
       } else if (scroll >= 1500 && scroll < oldScroll) {
        vis.style("display", "inline-block"); // going backwards, turn it on.
       }
      oldScroll = scroll;
    });

  }
} // end display

queue()
  .defer(d3.csv, "data/median-U5MRbyCountry.csv")
  .await(display);

