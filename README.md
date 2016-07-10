# htmlService-get-set-data
for Google Apps Script [HtmlService](https://developers.google.com/apps-script/guides/html/). Set and get a data object on an [HtmlOutput](https://developers.google.com/apps-script/reference/html/html-output). It safely stores any serializable javascript object and takes care of possible issues regarding security (code injection) and formatting (conflicts with html special characters in data)

# Licence
Free to use under the MIT Licence https://opensource.org/licenses/MIT

# Usage
Simply copy these two functions to your apps script project files.<br>
**appendDataToHtmlOutput**: append a javascript object to an htmlOutput. Use from a .gs file. Sample: 'doGet' in code.gs
<br>**getDataFromHtml**: get your stored data. Use from a html file script. Sample: 'initialize' in html-sample.html

# Working sample script (identical to this repo)
https://script.google.com/d/1bXkZpXnFlw9PUc10ecnb7Scq6ubXfGIrFy8xj33ffen4hw5s-STABaZY/edit?usp=sharing

# Author
Zig Mandel https://developers.google.com/experts/people/zig-mandel
