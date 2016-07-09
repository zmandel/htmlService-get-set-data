# htmlService-get-set-data
for Google Apps Script HtmlService. Set and get a data object on an htmlOutput. It safely stores any serializable javascript object and takes care of possible issues regarding security (code injection) and formatting (conflicts with html special characters in data)

# Author
Zig Mandel https://developers.google.com/experts/people/zig-mandel

# Licence
Free to use under the MIT Licence https://opensource.org/licenses/MIT

# Usage
appendDataToHtmlOutput: append a javascript object to an htmlOutput from your .gs file. Sample: doGet in code.gs
getDataFromHtml: get your stored data from your html file script. Sample: initialize in html-sample.html
