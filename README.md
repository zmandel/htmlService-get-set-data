# htmlService-get-set-data
Send initialization data from server .gs to client .html.
<br>For Google Apps Script [HtmlService](https://developers.google.com/apps-script/guides/html/).
<br>
<br>This github contains simple, small functions and samples you can copy and paste to your projects.
<br>
<br>Two different methods: for [HtmlOutput](https://developers.google.com/apps-script/reference/html/html-output) and [HtmlTemplate](https://developers.google.com/apps-script/reference/html/html-template).
<br>Both methods safely store any (serializable) javascript object taking care of possible issues regarding security (code injection) or formatting (conflicts with html special characters in the data).
<br>
<br>Both methods are more efficient than having the client call the server to get the data after your initial Javasctipt+html skeleton loads in the client, which requires an aditional client-side call. See [google.script.run](https://developers.google.com/apps-script/guides/html/reference/run). You can use google.script.run to further communicate with the server (after a user action for example).

# Licence
Free to use under the MIT Licence https://opensource.org/licenses/MIT

# Usage
**Method #1, using templates**
<br>How? Sets a template variable from .gs, then evaluates the template, which inserts the variable inside html javascript.
<br>Advantages: if data is very large, this might be more efficient as it copies less data to the html output.
<br>Disadvantages: requires to evaluate the template first (might be more server overhead). This disadvantage is not relevant if you are already using templates.
<br>Sample: doGetWithTemplates in template-server.gs and template-client.html.
<br>
<br>
**Method #2, without templates**
<br>This method only uses htmlOutput.
<br>How? Stored in an appended, hidden div. Data is stringified plus encoded in base64 to avoid conflicts with special HTML characters.
<br>Advantages: does not require templates.
<br>Disadvantages: If the data is very large, it will increase the HTML file size (about 33% overhead of data size in html compared with method #1).
<br>Sample: doGetWithHtmlOutput in output-server.gs and output-client.html.
* appendDataToHtmlOutput: append a javascript object to an htmlOutput from your .gs file.
* getDataFromHtml: call it from your html file script to get your stored data

# Working sample script (identical to this repo)
https://script.google.com/d/1bXkZpXnFlw9PUc10ecnb7Scq6ubXfGIrFy8xj33ffen4hw5s-STABaZY/edit?usp=sharing

# Author
Zig Mandel https://developers.google.com/experts/people/zig-mandel
