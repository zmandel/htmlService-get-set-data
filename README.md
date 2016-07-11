# htmlService-get-set-data
for Google Apps Script [HtmlService](https://developers.google.com/apps-script/guides/html/). Set and get a data object on an [HtmlOutput](https://developers.google.com/apps-script/reference/html/html-output) or [HtmlTemplate](https://developers.google.com/apps-script/reference/html/html-template). It safely stores any serializable javascript object and takes care of possible issues regarding security (code injection) and formatting (conflicts with html special characters in data)

# Licence
Free to use under the MIT Licence https://opensource.org/licenses/MIT

# Usage
Two different ways to send initialization data to your html (server to client).
<br>
Method #1, using templates:
How? Sets a template variable, then evaluates the template.
Advantages: if data is very large, this might be more efficient as it copies less data to the html output.
disadvantages: requires to evaluate the template first (might be more server overhead).
Sample: doGetWithTemplates in template-server.gs and template-client.html.
<br>
<br>
Method #2, without templates.
This method only uses htmlOutput, which it modifies by adding a new hidden element containing your data.
How? data is stored to avoid conflicts with special HTML characters or code injection.
Advantages: does not require to use templates.
Disadvantages: If the data is very large, it will increase the HTML file size (about 30% overhead in the stored data).
Sample: doGetWithHtmlOutput in output-server.gs and output-client.html.
* appendDataToHtmlOutput: append a javascript object to an htmlOutput from your .gs file.
* getDataFromHtml: call it from your html file script to get your stored data

# Working sample script (identical to this repo)
https://script.google.com/d/1bXkZpXnFlw9PUc10ecnb7Scq6ubXfGIrFy8xj33ffen4hw5s-STABaZY/edit?usp=sharing

# Author
Zig Mandel https://developers.google.com/experts/people/zig-mandel
