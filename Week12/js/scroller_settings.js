// Settings object

// For use with scroller_template.html and mfreeman_scroller.js.

var settings = {
  // could be used to save settings for styling things.
}

function focus_country(country) {
  console.log("in focus", country);
  // unfocus all, then focus one if given a name.
    d3.selectAll("path.line").classed("focused", false);
    if (country) {
        var country = country.replace(/\s/g, '_');
        d3.select("g.lines#" + country + " path.line")
        .classed("focused", true);
    }
}

// ******* Change the showX and showY function for some cases ********
var update = function(value) {
  var country = null;
  switch(value) {
    case 0:
      console.log("in case", value);
      country = null;
    case 1:
      console.log("in case", value);
      break;
    case 2:
      console.log("in case 2");
      country = "France";
      break;
    case 3:
      console.log("in case 3");
      country = "Bosnia and Herzegovina";
      break;
    case 4:
      console.log("in case 4");
      country = null;
      break;
    default:
      country = null;
      focus_country(country);
      break;
  }
  focus_country(country); // this applies a highlight on a country.
}
// setup scroll functionality

var data = []; // make this global

function display(error, mydata) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    data = mydata; // assign to global

    draw_lines(data);

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

