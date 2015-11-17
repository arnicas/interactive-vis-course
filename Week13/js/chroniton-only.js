
var handleRadius = 6,
  handleHeight = 8,
  caretHeight = 5,
  handleD = 'M' + [
    -handleRadius, -handleHeight,
    handleRadius, -handleHeight,
    handleRadius, handleHeight - caretHeight,
    0, handleHeight,
    -handleRadius, handleHeight - caretHeight,
    -handleRadius, -handleHeight].join(','),
  playWidth = 10,
  playD = 'M' + [
    0, 0,
    playWidth/1.2, playWidth/2,
    0, playWidth,
    0, 0].join(','),
  pauseD = 'M' + [
    0, 0,
    playWidth/3, 0,
    playWidth/3, playWidth,
    0, playWidth
  ].join(',') + 'Z M' + [
    (playWidth / 2) + 0, 0,
    (playWidth / 2) + playWidth/3, 0,
    (playWidth / 2) + playWidth/3, playWidth,
    (playWidth / 2) + 0, playWidth
  ].join(',');

function chroniton() {
  var margin = {top: 10, right: 20, bottom: 20, left: 20},
    domain = [new Date('1/1/2000'), new Date()],
    width = 660,
    height = 50,

    // configurable options
    keybindings = true,
    playButton = false,
    play = false,
    noLabel = false,
    loop = false,
    playbackRate = 1,

    // internal state
    playLastTick = null,

    labelFormat = d3.time.format("%Y-%m-%d"),

    // scales
    xScale = d3.time.scale().clamp(true),
    xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickSize(10, 0),

    brush = d3.svg.brush(),
    events = d3.dispatch('change', 'setValue');

  function chart(selection) {

    if (selection instanceof HTMLElement) selection = d3.select(selection);

    selection.each(function() {
      if (playButton) { margin.left = 30; }
      if (noLabel) { margin.top = 0; }

      xScale
        .domain(domain)
        .range([0, width - margin.left - margin.right]);

      brush.x(xScale)
        .extent([domain[0], domain[0]])
        .on('brush', brushed);

      var svg = d3.select(this)
        .selectAll('svg').data([0]);

      var gEnter = svg.enter()
        .append('svg')
        .attr('class', 'chroniton')
        .attr('tabindex', 1) // make this element focusable
        .on('keydown', keydown)
        .append('g');

      gEnter
        .append('g')
        .attr('class', 'x axis');

      svg .attr('width', width)
      .attr('height', height);

      var g = svg.select('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      g.select('.x.axis')
        .attr('transform', 'translate(0,' + (height - margin.bottom - margin.top) + ')')
        .call(xAxis);

      var domainNode = g.select('.x.axis .domain')
        .remove()
        .node();

      var axisNode = g.select('.x.axis').node();
      axisNode.insertBefore(domainNode, axisNode.childNodes[0]);

      g.select('.domain')
        .select(function() { return this.parentNode.insertBefore(this.cloneNode(true), this.parentNode.childNodes[0]); })
          .attr('class', 'halo');

      g.select('.x.axis .domain')
        .on('click', function() {
          setValue(xScale.invert(d3.mouse(this)[0]));
        });

      if (playButton) {
        var playButtonG = svg.append('g')
          .attr('transform', 'translate(' + [8, margin.top + 13] + ')');
        var playIcon = playButtonG.append('path')
          .attr('transform', 'translate(2, 2)')
          .attr('d', playD)
          .attr('class', 'play-button');
        var playRect = playButtonG.append('rect')
          .attr('fill', 'none')
          .attr('pointer-events', 'visible')
          .attr('width', 15)
          .attr('height', 15)
          .on('click', function() {
            chart.playPause();
            playIcon.attr('d', chart.playing() ? pauseD : playD);
          });
      }

      var slider = g.append('g')
        .attr('class', 'slider')
        .attr('transform', 'translate(' + [0, height - margin.bottom - margin.top + 2] + ')')
        .call(brush);

      var handle = slider.append('path')
        .attr('d', handleD)
        .attr('class', 'handle');

      var textG = slider.append('g')
        .attr('transform', 'translate(0, -35)');

      var labelText = textG
        .append('text')
        .attr('class', 'label');

      slider.call(brush.event);

      brush.on('brushstart', function() {
        slider.classed('brushing', true);
      }).on('brushend', function() {
        slider.classed('brushing', false);
      });

      function setValue(value, transition) {
        var v = new Date(Math.min(Math.max(+domain[0], +value), +domain[1]));
        var s = slider;
        if (transition) {
          s = slider.transition();
          if (transition.ease) s.ease(transition.ease);
          if (transition.duration) s.duration(transition.duration);
        }
        s.call(brush.extent([v, v]))
            .call(brush.event);
      }

      events.on('setValue', setValue);

      function brushed() {
        var value = brush.extent()[0];

        if (d3.event && d3.event.sourceEvent &&
            d3.event.sourceEvent.type !== 'keydown') { // not a programmatic event
          value = xScale.invert(d3.mouse(this)[0]);
          brush.extent([value, value]);
        }

        handle.attr('transform', function(d) {
          return 'translate(' + [xScale(value), 0] + ')';
        });

        labelText
          .text(labelFormat(value))
          .attr('text-anchor', 'left');

        var textRadius = labelText.node().getComputedTextLength() / 2,
          leftEdge = xScale(value) - textRadius,
          rightEdge = xScale(value) + textRadius;

        labelText.attr('transform', function(d) {
          if (leftEdge < -margin.left) {
            return 'translate(' + [-margin.left, 20] + ')';
          } else if (rightEdge > width - margin.left) {
            return 'translate(' + [width - margin.left - textRadius * 2, 20] + ')';
          } else {
            return 'translate(' + [xScale(value) - textRadius, 20] + ')';
          }
        });

        events.change(value);
      }
    });
  }

  function jumpSize() { return +xScale.invert(10) - domain[0]; }

  function ticker() {
    if (!play) return;
    var now = new Date().getTime();
    if (playLastTick === null) playLastTick = now;
    var playSinceLastTick = now - playLastTick,
      tenthPx = (+xScale.invert(0.1) - +domain[0]) * playbackRate,
      increment = playSinceLastTick * tenthPx;
    chart.setValue(new Date(+brush.extent()[0] + increment));
    playLastTick = now;
    if (loop && chart.isAtEnd()) chart.setValue(domain[0]);
  }

  function keydown() {
    if (!keybindings) return;
    // right
    switch (d3.event.which) {
      case 39:
        setValue(new Date(+brush.extent()[0] + jumpSize()));
        d3.event.preventDefault();
        break;
      case 37:
        setValue(new Date(+brush.extent()[0] - jumpSize()));
        d3.event.preventDefault();
        break;
    }
  }

  chart.playbackRate = function(_) {
    if (!arguments.length) return playbackRate;
    if (typeof _ !== 'number') throw new Error('argument must be a number of pixels per second');
    playbackRate = _;
    return chart;
  };

  chart.play = function() {
    play = true;
    return chart;
  };

  chart.playing = function() {
    return play;
  };

  chart.playPause = function() {
    if (play) chart.pause();
    else chart.play();
    return chart;
  };

  chart.pause = function() {
    playLastTick = null;
    play = false;
    return chart;
  };

  chart.stop = function() {
    chart.pause();
    chart.setValue(domain[0]);
    return chart;
  };

  chart.loop = function(_) {
    if (!arguments.length) return loop;
    if (typeof _ !== 'boolean') throw new Error('argument must be a boolean for whether to loop');
    loop = _;
    return chart;
  };

  chart.width = function(_) {
    if (!arguments.length) return width;
    width = _;
    xScale
      .domain(domain)
      .range([0, width - margin.left - margin.right]);
    return chart;
  };

  chart.tapAxis = function(_) {
    _(xAxis);
    if (typeof _ !== 'function') throw new Error('argument must be a function');
    return chart;
  };

  chart.height = function(_) {
    if (!arguments.length) return height;
    if (typeof _ !== 'number') throw new Error('argument must be a numeric width');
    height = _;
    return chart;
  };

  chart.domain = function(_) {
    if (!arguments.length) return domain;
    domain = _;
    xScale
     .domain(domain)
     .range([0, width - margin.left - margin.right]);
    return chart;
  };

  chart.labelFormat = function(_) {
    if (!_) return labelFormat;
    if (typeof _ !== 'function') throw new Error('argument must be a label formatter function');
    noLabel = false;
    margin.top = 10;
    height = 50;
    labelFormat = _;
    return chart;
  };

  chart.hideLabel = function() {
    labelFormat = d3.functor('');
    noLabel = true;
    margin.top = 0;
    height = 27;
    return chart;
  };

  chart.getValue = function() {
    return brush.extent()[0];
  };

  chart.isAtStart = function() {
    return +brush.extent()[0] === +domain[0];
  };

  chart.isAtEnd = function() {
    return +brush.extent()[0] === +domain[1];
  };

  chart.getScale = function() {
    return xScale.copy();
  };

  chart.getMargin = function() {
    return JSON.parse(JSON.stringify(margin));
  };

  chart.setValue = function(_, transition) {
    events.setValue(_, transition);
    return chart;
  };

  chart.playButton = function(_) {
    if (_ === undefined) return playButton;
    if (typeof _ !== 'boolean') throw new Error('argument must be a boolean setting');
    playButton = _;
    return chart;
  };

  chart.keybindings = function(_) {
    if (_ === undefined) return keybindings;
    if (typeof _ !== 'boolean') throw new Error('argument must be a boolean setting');
    keybindings = _;
    return chart;
  };

  var timer = d3.timer(ticker);
  var bound = d3.rebind(chart, events, 'on');

  return bound;
}
