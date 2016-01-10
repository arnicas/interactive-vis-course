#!/bin/bash

for f in Week*/README.md
do
 DIR="$( dirname "$f")";
 echo "$DIR";
 pandoc --from markdown_github --to html $f --toc -H pandoc/pandoc_header_weeks.txt -B pandoc/pandoc_before.txt > $DIR/index.html
done

echo "Doing top level index and examples..."
pandoc --from markdown_github --to html README.md --toc -H pandoc/pandoc_header.txt -B pandoc/pandoc_before.txt > index.html
pandoc --from markdown_github --to html examples.md -H pandoc/pandoc_header.txt -B pandoc/pandoc_before_examples.txt > examples.html