
##Week 1:

Lots of getting set up and review exercises.

## What This Class Covers, the General Plan...

Review repo's [README](../README.md).

## The Client Project: UNICEF (Child and Maternal Mortality)

* Readings: The [client brief](../APromiseRenewed_Brief_March2015.pdf). And their 1024 Key Findings Report. Look for any open questions you may have after looking at their report and website.  Take a few notes, we'll discuss next week.
* A storytelling interactive by JanWillem Tulp (http://tulpinteractive.com/): http://www.apromiserenewed.org/infographics/
* Play with their Dashboard for more data insights and questions: http://www.apromiserenewed.org/dashboard/


## Data Formatting in Excel

* Recommended read for general good advice: http://kbroman.org/dataorg/
* A good article arguing for "tidy" data in long format, with R code examp: http://vita.had.co.nz/papers/tidy-data.pdf (Note that D3 usually wants "wide" instead)

We'll go through a download and csv formatting example in class.  You'll need to do the same, so take notes!

Let's look at the infant_deaths data set from WHO first. (Walkthrough how I formatted it for use in javascript.)

**Homework**: See below.

## Intro to Chrome Tools, the Console

* View Source. Let's do it. First at childmortality.org...
* Look at a newspaper site too, and view the styling on an article. You'll need this for a homework project. Remember news online includes newspapers as well as sites like Slate, Buzzfeed, etc.
* Chrome Tools: Read a bit here about the console and trying stuff in it: http://jsforcats.com/#basics

## Github and Gists

### Github

Github is how you should get and keep the course files up to date.
Make an account, if you haven't.

* Make sure you have git installed: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* If you are new to using the command line, read up here: http://cli.learncodethehardway.org/book/ (thanks Luis)

I recommend you clone my repo, so you can repull it as I add stuff. You will do `git clone [copied path]` (https is fine for now).  I'll show you in class.

Every week you should do `git pull` to get my updates. Do this from inside the directory made by cloning.  **If you want to make changes to class files, save them with new names.**

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
* And you need to make sure you use a CDN path to D3, not refer to it locally on your own machine. That means, in the `<script>` tag, you want to reference: `<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>` instead of a local path.

*Demo making a gist for a CSV file...*

## Review of HTML/CSS

Have a look at this fun project, Tufte CSS: http://www.daveliepmann.com/tufte-css/.

A refresher on HTML and CSS is necessary -- you can't afford to NOT be good at CSS with interactive graphics.  It's as important as Javascript. There's a refresher in Ch 3 of IDVW.

**Homework**: See below.


## Javascript Review

I sent you some stuff over the summer, and here is a list of teaching references again: https://www.javascript.com/resources. And http://learnxinyminutes.com/docs/javascript/.

A super simple intro with gif demos is JS For Cats: http://jsforcats.com/
You should review everything in it except for the last part on callbacks now.

If we have time, we'll play with [console_javascript.html](console_javascript.html) now.

* Optional [video by Scott Murray](https://www.youtube.com/watch?v=3g1061kFrCs&index=4&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F) reviewing some Javascript concepts.

**Homework:** See below.


## Loading Data with JS/D3

You will use the data you downloaded and formatted in D3 next week.

**Recommended Reading**: Loading data with D3, at http://learnjsdata.com/read_data.html.


## You and Your Local Server

You need one.  Otherwise Javascript code won't execute on your pages. So
set up your servers. Depending on time, we'll do it in class. Use this to help: https://github.com/arnicas/d3-faq#running-a-server.


## Homeworks Collected Up

Homework is due at 5pm on Monday the night before the next class. I have office hours on Monday if you have struggled.

Readings:

* Read Chapter 3 of IDVW: http://chimera.labs.oreilly.com/books/1230000000345/ch02.html. You can stop at the SVG part at the end of chapter 3, for now. (Chapter 2 may be nice background but is optional.)

* [The client brief](../APromiseRenewed_Brief_March2015.pdf) and Key Findings from 2014: Look for any open questions you may have after looking at their report and website.  Take a few notes, we'll discuss next week.

* Loading data with D3, at http://learnjsdata.com/read_data.html.

**Homework**:  Style [this page](wapo_debates_article.html) to look like the news website of your choice or like Tufte.  Don't get out of control - just headlines, byline, paragraph/body text, and images.  Make a gist and send me the link: "Week 1: Style article."  (30pt, Extra credit: make your style sheet external, 5pt)

**Homework:** Fix [js_errors.html](js_errors.html) so it displays correctly.  Send me the edited file, plus a screen cap of your console with the results of all the stages correctly showing. Subject line: "Week 1, JS errors".  If you can't do it all, send me as far as you got. (20pt, Extra credit 10pt see end of the file. Partial credit given!)

**Homework**: Download a UNICEF data set (or related one on child/maternal mortality) of interest to you and format in Excel for use in visualization. Keep a copy of the Excel file(s) for yourself, but save out a CSV file that can be loaded into javascript. Make a gist with the csv file and send me the link: 'Week 1: CSV data.' (10pt, Extra credit: Add a calculated value column, 5pt)

**Homework**: Set up your server, github accounts, etc!
