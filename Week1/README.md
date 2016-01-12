
# Week 1: Getting Set Up, CSV Files

## What This Class Covers

Review repo's [home page](../index.html).


## Intro to Chrome Tools, the Console

* View Source. Let's do it. First at childmortality.org...
* Chrome Tools: Read a bit here about the console and trying stuff in it: http://jsforcats.com/#basics

## Github and Gists

### Github

Github is how you should get and keep the course files up to date. Make an account, if you haven't.

* Make sure you have git installed: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* If you are new to using the command line, read up here: http://cli.learncodethehardway.org/book/ (thanks Luis)

I recommend you clone my repo, so you can repull it as I add stuff. You will do `git clone [copied path]` (https is fine for now).  I'll show you in class.

Every week you should do `git pull` to get my updates. Do this from inside the directory made by cloning.  **If you want to make changes to class files, save them with new names or you will have merge conflicts. No one survives that.**

### Gists

You'll be doing homework in gists.  This makes it easier for me to review and check it and find issues. Also, the bl.ocks.org site makes things easy for visual display of gists.  See: http://bl.ocks.org/.

Make a directory for your files for a gist **NOT INSIDE THE COURSE FILES REPO DIRECTORY** and upload those by hand from the web page, or using the command line tool gistup. If you use the command line, make a directory for each gist, NOT INSIDE THE CLASS REPO YOU CLONED. (Your gists can't be inside another repo.)

Resources and tips on using gists:

* Read: Gists how-to:  https://help.github.com/articles/creating-gists/
* Command line gist tool info (optional): https://github.com/mbostock/gistup
* Optional: Watch [this video](https://www.youtube.com/watch?v=4WteFeHzkNQ&feature=youtu.be&list=PL0tDk-f4v1ujDIGTpXjsTxCnMdR5JBGyQ) from Scott Murray on using gists - but when you upload files (like your CSV), DON'T copy and paste it into a file -- you want to actually upload the CSV file.  (You won't be following his directions for his homework, so you can stop there.)

You can see all your gists by looking here - where you fill in your own user name where mine is: https://gist.github.com/arnicas. If you want to edit or delete it, click on the header for one from the list.

**Important Tips**:

* If you want your d3 visual code to show up in bl.ocks.org, you need to name your html file index.html.
* And you need to make sure you use a CDN path to D3, not refer to it locally on your own machine. That means, in the `<script>` tag, you want to reference: `<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>` instead of a local path.  A CDN is an online reference to a library file.

*Demo making a gist for a CSV file...*

## You and Your Local Server: You Need One.

You need one.  Otherwise Javascript code won't execute on your pages. So
set up your servers. If you haven't got one running (WAMP, MAMP, python, or otherwise), stick around and we'll set it up at the end. Use this to help: https://github.com/arnicas/d3-faq#running-a-server.


## Javascript Review

I expect everyone to be proficient with HTML and CSS and to know at least a bit of Javascript.  If you don't, this class will be very hard.  If you're already great at JS, I'll try to keep you entertained anyway.

Let's play with [console_javascript.html](console_javascript.html) now.

**Resources:**

* List here: https://www.javascript.com/resources.
* And http://learnxinyminutes.com/docs/javascript/.
* There are also links on the course [home page](../index.html).
* A super simple intro with gif demos is JS For Cats: http://jsforcats.com/. You should review everything in it except for the last part on callbacks now.
* Optional [video by Scott Murray](https://www.youtube.com/watch?v=3g1061kFrCs&index=4&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F) reviewing some Javascript concepts.


## Data in CSV (from Excel/Spreadsheets)

A good place to do an initial formatting of data for use in web apps is Excel (or Google Sheets). We often want to use csv files as data sources.

* Recommended read for general good advice: http://kbroman.org/dataorg/
* A good article arguing for "tidy" data in long format, with R code examp: http://vita.had.co.nz/papers/tidy-data.pdf (Note that D3 usually wants "wide" instead)

We'll go through a download and csv formatting example in class.  You'll need to do the same, so take notes!  Let's look at the infant_deaths data set from WHO first. (Walkthrough how I formatted it for use in javascript.)

Things to remember about data in CSV files for use in the browser:

* It's better to keep your variable names clear, but short, and with no spaces in them
* You want all columns labeled.
* You want to format numbers in them without commas

Read this for some tips: http://learnjsdata.com/read_data.html.

Comment from Scott Murray in the Knight D3 online class:

    I strongly recommend simplifying column titles so they do not include spaces.
    Why? JavaScript object notation is simpler without spaces. Let me give you an example.

    Say you define an object like so:

    var object = {
      Country: “USA”,
      “Number of Bananas per Capita (millions)”: “556”,
      ”Total Length of Peels if Laid End to End (kilometers)”: “412415123”
    }

    To get at the value “556”, you would need to type:

    object[“Number of Bananas per Capita (millions)”]

    However, if you excluded spaces from your column titles, so your object 
    looked like this:

    var object = { 
      country: “USA”,
      numBananas: “556”,
      peelLength: “412415123”
    }

    …well first of all, that is so much easier to read, but also then you can 
    use simplified object notation:

    object.numBananas  //returns “556”

    See, you don’t need the quotation marks or the brackets. So eliminating 
    spaces just saves you a lot of typing and headache later.

You can read this for more info on reading data in D3: http://learnjsdata.com/read_data.html.

A next step for data work is to do exploration with graphs in Excel or a tool like Tableau.  We'll go over those in a couple weeks.

## Load the Data with D3

Read in data with D3 and verify it's there in the console: [d3_load_csv_json.html](d3_load_csv_json.html).  JSON objects (javascript object notation) should be there for each row of your data set.

The contents of each data set are printed to the screen using a simple jquery text operation and `"JSON.stringify()."`


## Homework

Homework is due at 5pm on Monday the night before the next class. I have office hours on Monday if you have struggled!

Readings:

* Read Chapter 3 of IDVW: http://chimera.labs.oreilly.com/books/1230000000345/ch02.html. You can stop at the SVG part at the end of chapter 3, for now. (Chapter 2 may be nice background but is optional.)

* Loading data with D3, at http://learnjsdata.com/read_data.html.


**Homework:** Fix [js_errors.html](js_errors.html) so it displays correctly.  Send me the edited file, plus a screen cap of your console with the results of all the stages correctly showing. Subject line: "Week 1, JS errors".  If you can't do it all, send me as far as you got. (20pt)

**Homework**: Download a data set of interest to you and format in Excel or Google sheets for use in visualization. Follow the advice above. Keep a copy of the Excel file(s) for yourself, but save out a CSV file that can be loaded into javascript. Make a gist in which you load the CSV file and print it to the screen the way I did in [d3_load_csv_json.html](d3_load_csv_json.html).  (You don't need to do a JSON version.)  Make a gist with a page called index.html(!) and your data files send me the link: 'Week 1: CSV data.'  You'll need this file next week. (12pt)

**Homework**: Set up your server, github accounts, etc!
