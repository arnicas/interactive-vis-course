/*
Code by Shawn Allen (@shawnbot) repro'd in d3noob's book,
http://www.d3noob.org/2013/02/add-html-table-to-your-d3js-graph.html,
but with minor modification by Lynn.
*/

function tabulate(data, columns, headers, id) {
    // columns is the actual object column in the CSV
    // headers is what i want on the top of the table
    var table = d3.select(id).append("table"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(headers)
        .enter()
        .append("th")
            .text(function(column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // create a cell in each row for each column
    // At this point, the rows have data associated.
    // So the data function accesses it.
    var cells = rows.selectAll("td")
        .data(function(row) {
            // he does it this way to guarantee you only use the
            // values for the columns you provide.
            return columns.map(function(column) {
                // return a new object with a value set to the row's column value.
                return { value: row[column] };
            });
        })
        .enter()
        .append("td")
        .text(function(d) { return d.value; });
    return table;
}

// render the table
// var peopleTable = tabulate(data, ["date", "close"]);