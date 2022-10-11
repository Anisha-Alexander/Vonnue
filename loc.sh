#!/bin/bash

date >> loc.txt
html=$(find . -name '*.html' -exec awk NF {} \; | wc -l)
css=$(find . -name '*.css' -exec awk NF {} \; | wc -l)
js=$(find . -type d -name node_modules -prune -o -name '*.js' -exec awk NF {} \; | wc -l)
echo "HTML   $html" >> loc.txt
echo "CSS    $css" >> loc.txt
echo "Java Script   $js" >> loc.txt
echo "TOTAL `expr $html + $css + $js`">> loc.txt