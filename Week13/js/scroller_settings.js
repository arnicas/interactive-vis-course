
// For use with scroller_template.html and mfreeman_scroller.js.

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
}

var data = []; // make this global

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

// ******* Change the showX and showY function for some cases ********
var update = function(value) {
  var country = null;
  var localdata = data;
  switch(value) {
    case 1:
      console.log("in case", value);
      localdata = data;
      //yScale = d3.scale.linear().range([margin.top, height - margin.bottom]);
      break;
    case 2:
      console.log("in case 2");
      //yScale = d3.scale.sqrt().range([margin.top, height - margin.bottom]);
      localdata = data;
      country = "Nigeria";
      break;
    case 3:
      console.log("in case 3");
      //yScale = d3.scale.sqrt().range([margin.top, height - margin.bottom]);
      localdata = data;
      country = "Bosnia and Herzegovina";
      break;
    case 4:
      console.log("in case 4");
      country = null;
      localdata = data.filter(function(d) {return d.country == "Haiti" || d.country == "Rwanda";});
      break;
    default:
      country = null;
      focus_country(country);
      draw_lines(localdata);
      break;
  }
  focus_country(country); // this applies a highlight on a country.
  draw_lines(localdata); // we can update the data if we want in the cases.
}
// setup scroll functionality


function display(error, mydata) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);

    data = make_data(mydata); // assign to global; call func in line_chart_refactor.js

    console.log("after makedata", data);

    var scroll = scroller()
      .container(d3.select('#graphic'));

    // pass in .step selection as the steps
    scroll(d3.selectAll('.step'));

    // Pass the update function to the scroll object
    scroll.update(update)
  }
}

queue()
  .defer(d3.csv, "data/median-U5MRbyCountry.csv")
  .await(display);

