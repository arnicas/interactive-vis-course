
# All Local Examples in the Course

## Week1: Intro

* [console_javascript.html](Week1/console_javascript.html): Console action only.
* [d3_load_csv_json.html](Week1/d3_load_csv_json.html): Loading simple CSV (and JSON) files with d3.

## Week2: Loading Data, Highcharts, Other Libs

* [highcharts_dot.html](Week2/highcharts_dot.html): A not great hack at a dot plot in Highcharts, using data in the chart object.
* [highcharts_dot_csv.html](Week2/highcharts_dot_csv.html): Another attempted dot plot in Highcharts using external csv data, which is kind of hard.
* [highcharts_slope.html](Week2/highcharts_slope.html): A not terrible slope chart hacked up in Highcharts.
* [simpler_switcher.html](Week2/simpler_switcher.html): A simple demo for the logic in the next example, but using 2 buttons.
* [highcharts_switch.html](Week2/highcharts_switch.html): Template example for a button switch between Highcharts charts, extracted from <a href=http://datatools.urban.org/Features/wealth-inequality-charts/">Urban Institute wealth inequality project.</a>
* [dimple_barchart.html](Week2/dimple_barchart.html): Making a bar chart with Dimple.js.
* [dimple_dotplot.html](Week2/dimple_dotplot.html): A dotplot with Dimple.js.
* [d3_simple_append.html](Week2/d3_simple_append.html): Appending to the DOM with d3.
* [create_p_from_data.html](Week2/create_p_from_data.html): Create paragraphs from csv data and append to the DOM - not using a good D3 enter() method yet.


## Week3: More Data Loading, Tables in D3

* [jquery_error_on_load.html](Week3/jquery_error_on_load.html): This errors, needs fixing.
* [d3_process_data.html](Week3/d3_process_data.html): Processing data on load.
* [d3_new_obj_data.html](Week3/d3_new_obj_data.html): Making new objects with loaded data.
* [d3_process_data_dates.html](Week3/d3_process_data_dates.html): Doing some data handling in data.
* [d3_simplePTable.html](Week3/d3_simplePTable.html): Create a bunch of rows using d3's enter/append and a datum header. P elements without real table structure.
* [d3_table.html](Week3/d3_table.html): A D3 table with real table structure.
* [d3_tabulate_function.html](Week3/d3_tabulate_function.html): A function to draw a table with.


## Week4: Tables, Scales, SVG

* [d3_data_datum.html](Week4/d3_data_datum.html): Some demos of data joins and selection gotchas.
* [d3_tabulate_function_sortable.html](Week4/d3_tabulate_function_sortable.html): A sortable table using jquery after D3 table creation.
* [scale_examples.html](Week4/scale_examples.html): Showing some d3 scale code.
* [d3_table_heatmap.html](Week4/d3_table_heatmap.html): A table with a color heatmap shading.
* [SVG_example.html](Week4/SVG_example.html): An intro to SVG shapes.
* [svg_to_fix.html](Week4/svg_to_fix.html): SVG homework.
* [d3_dynamic_domain.html](Week4/d3_dynamic_domain.html): First bar chart! Using scales in D3 for bar size.


## Week5: Bar Charts, Axes, Text Labels, Scatterplots

* [bar_axes_labels.html](Week5/bar_axes_labels.html): Labeling axes in bar charts
* [scatter_formatting_ticks.html](Week5/scatter_formatting_ticks.html): Formatting ticks
* [scatter_skeleton.html](Week5/scatter_skeleton.html): A starter scatterplot to fix
* [dot_plot.html](Week5/dot_plot.html): A dot plot example


## Week6: Line Charts, Events, Tooltips

* [scatter_skeleton_fixed.html](Week6/scatter_skeleton_fixed.html): The finished version of the scatterplot to fix
* [bar_axes_labels_on_data.html](Week6/bar_axes_labels_on_data.html): Ordinal axis for Y, data labels on ends of bars
* [d3_date_parsing.html](Week6/d3_date_parsing.html): Handling dates in your data (read and format)
* [emissions_time_scatterplot.html](Week6/emissions_time_scatterplot.html): Scatterplot
* [emissions_lineplot.html](Week6/emissions_lineplot.html): Plotting a line or two
* [emissions_lineplot_label.html](Week6/emissions_lineplot_label.html): Labeling the end of a single line
* [multiple_lines.html](Week6/multiple_lines.html): Plotting a lot of lines
* [multiple_lines_mouseover.html](Week6/multiple_lines_mouseover.html): Just bold the moused-over line
* [emissions_scatterplot_tooltip.html](Week6/emissions_scatterplot_tooltip.html): Tooltips
* [multiple_lines_mouseover_tooltip.html](Week6/multiple_lines_mouseover_tooltip.html): More tooltips (on entire line, not point)



## Week7: Improved Line Charts, Transitions

*  [emissions_linescatterplot.html](Week7/emissions_linescatterplot.html): Dots and lines in the lineplot, with tooltips. Single line.
* [multiple_lines_labels.html](Week7/multiple_lines_labels.html): Labels on ends of specific lines, with tooltip on data points. Many lines.
* [multiple_lines_labels_tooltips.html](Week7/multiple_lines_labels_tooltips.html): Tooltips on dots, plus a highlight of the line itself when you mouse over the dots.
* [multiple_lines_labels_hover.html](Week7/multiple_lines_labels_hover.html): Labels on some lines, plus a hover effect to bold line and reveal hidden labels.
* [lines_d3nest.html](Week7/lines_d3nest.html): Nesting data to plot lines with d.values
* [lines_with_more_data.html](Week7/lines_with_more_data.html): Structure for the data that makes access to values easier for interaction
* [multiple_lines_voronoi.html](Week7/multiple_lines_voronoi.html): Using voronoi overlay to make it easier to target points
* [scatter_transition_in.html](Week7/scatter_transition_in.html): Delay on arriving dots
* [scatter_transition_move_in_slow.html](Week7/scatter_transition_move_in_slow.html): A different arrival method, all moving up from origin.
* [emissions_linescatterplot.html](Week7/emissions_linescatterplot.html): Mouseover triggers a transition
* [scatter_data_transition.html](Week7/scatter_data_transition.html): Click causes data change and animation (only works once)
* [scatter_data_transition_toggle.html](Week7/scatter_data_transition_toggle.html): Buttons toggle between data sets, with animation.  Just uses an if-check.
* [lines_transition.html](Week7/lines_transition.html): Button clicks change line chart data, multiple series. (Map is static.)


## Week8: Updates to Data, More Transitions

* [bar_updates_no_key.html](Week8/bar_updates_no_key.html): Update the dumb way, without object constancy
* [bostock_bar_updates_simpler.html](Week8/bostock_bar_updates_simpler.html): Simplified example of Mike Bostock's Object Constancy example
* [bar_updates_key.html](Week8/bar_updates_key.html): Updated using a key and coloring by "remaining" bar
* [bar_updates_key_sorted.html](Week8/bar_updates_key_sorted.html): Data values sorted, update with key, change color to consistent final color.
* [scatter_data_update.html](Week8/scatter_data_update.html): Restructure to show update pattern with select menu, and new ones come from the "right" direction.
* [scatter_homework.html](Week8/scatter_homework.html): Finish this.
* [bar_homework.html](Week8/bar_homework.html): Finish this.


## Week9: Stacking Chart Types, Grouped Bars

* [bar_homework_done_safe.html](Week9/bar_homework_done_safe.html): Final bar homework.
* [area_plot.html](Week9/area_plot.html): Area plot.
* [stacked_area.html](Week9/stacked_area.html): Using stacked layout, you can switch easily to the streamgraph display.
* [stacked_area_to_stream.html](Week9/stacked_area_to_stream.html): UI to do the switch to stream with transition.
* [stacked_bar.html](Week9/stacked_bar.html): Using a stack for the bar display.
* [stacked_bar_transitions.html](Week9/stacked_bar_transitions.html): Normalizing is easy with a transition.
* [grouped_bars.html](Week9/grouped_bars.html): Bars in groups. 
* [bostock_stacked_to_group.html](Week9/bostock_stacked_to_group.html): Transition from stacked to grouped and back!
* [js_homework.html](Week9/js_homework.html): Homework on js.


## Week10: Small Multiples

* [stacked_area_invert.html](Week10/stacked_area_invert.html): Shows how to use an invert on a scale and a bisect to look up values for a tooltip.
* [small_multiples_simple.html](Week10/small_multiples_simple.html): Static small multiple area charts.
* [small_multiples_each.html](Week10/small_multiples_each.html): Drawn another way, using "each".
* [linked_small_mults.html](Week10/linked_small_mults.html): Linked, using code from Jim Vallandingham and a jquery plugin (Isotope) for sorting them.
* [linked_small_mults_d3pure.html](Week10/linked_small_mults_d3pure.html): No plugin for sorting, done in pure d3 with absolute positions.
* [small_multiples_each_trans.html](Week10/small_multiples_each_trans.html): Code based on Nathan Yau example, shared scale for axes.
* [small_multiples_each_trans_diffaxis.html](Week10/small_multiples_each_trans_diffaxis.html): Updated code to have unique scale for each, shows change over time but on local scale.
* [africa_map.html](Week10/africa_map.html): Map starter code.


## Week11: Maps (D3, Leaflet, CartoDB)

* [africa_map.html](Week11/africa_map.html): Map of borders only.
* [africa_map2.html](Week11/africa_map2.html): Using country features now.
* [africa_map3.html](Week11/africa_map3.html): Using a data file, choropleth it.
* [world_map_regions.html](Week11/word_map_regions.html): Countries colored by regions - data bugs remain! Also d3.legend.
* [carto_db_example.html](Week11/carto_db_example.html): Using Carto DB!
* [africa_map_clicker.html](Week11/africa_map_clicker.html): Click on a map to trigger stuff
* [rats_in_NYC.html](Week11/rats_in_NYC.html): Pure d3 dots on boroughs, no undermap
* [rats_in_NYC_leaflet.html](Week11/rats_in_NYC_leaflet.html): pure Leaflet map of recent rats
* [coloring_us_counties.html](Week11/coloring_us_counties.html): US Counties
* [coloring_us_counties_with_data.html](Week11/coloring_us_counties_with_data.html): Using data to color counties on click
* [coloring_florida_with_data.html](Week11/coloring_florida_with_data.html): Using data to color Florida counties on click
* [us_states_data.html](Week11/us_states_data.html): Simple US choropleth plus markers
* [us_states_data_leaflet.html](Week11/us_states_data_leaflet.html): Same as above but svg layers on top of a Leaflet base map.
* [world_comparisons.html](Week11/world_comparisons.html): Example based on a Nathan Yau tutorial, complex tooltips too


## Week12: Storytelling (Scrollers and Steppers)

* [scroller_template.html](Week12/scroller_template.html): An inadequate first pass at a scrollying vis.
* [scroller_template_lines2.html](Week12/scroller_template_lines2.html): Improved, with more page context and moveToFront() in action.


## Week13: Animation in UI

* [animated_lines.html](Week13/animated_lines.html): A variety of methods for animated line drawing.
* [animated_map_path.html](Week13/animated_map_path.html): A dot travels across a map with a play/pause button.
* [africa_map_slider.html](Week13/africa_map_slider.html): Change data on choropleth map by year, using a play button/slider
* [africa_map3_responsive.html](Week13/africa_map3_responsive.html): A responsive map example.
* [africa_map_tooltips_graph.html](Week13/africa_map_tooltips_graph.html): Tooltips have a line chart in them.


## Week14: Reusable Charts, Map Click

* [lines_transition_map.html](Week14/lines_transition_map.html): Click on a map to update the line.
* [using_reusable_barchart.html](Week14/using_reusable_barchart.html): Reusable barchart code in use.


