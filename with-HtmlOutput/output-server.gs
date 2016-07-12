/**
* appendDataToHtmlOutput
*
* Appends data to the given htmlOutput
*
* Inputs
* data: object to append
* htmlOutput: where to append
* idData: optional. id for the data element. defaults to "mydata_htmlservice"
*
* Returns
* the same htmlOutput (for chaining)
*/
function appendDataToHtmlOutput(data, htmlOutput, idData) {
    if (!idData)
        idData = "mydata_htmlservice";

    // data is encoded after stringifying to guarantee a safe string that will never conflict with the html.
    // downside: increases the storage size by about 30%. If that is a concern (when passing huge objects) you may use base94
    // or even base128 encoding but that requires more code and can have issues, see http://stackoverflow.com/questions/6008047/why-dont-people-use-base128
    var strAppend = "<div id='" + idData + "' style='display:none;'>" + Utilities.base64Encode(JSON.stringify(data)) + "</div>";
    return htmlOutput.append(strAppend);
}


// sample usage of appendDataToHtmlOutput
function doGetWithHtmlOutput() {
    var htmlOutput = HtmlService.createHtmlOutputFromFile('output-client.html')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle('sample');

    // data can be any (serializable) javascript object.
    // if your data is a native value (like a single number) pass an object like {num:myNumber}
    var data = { first: "hello", last: "world" };

    // appendDataToHtmlOutput modifies the html and returns the same htmlOutput object
    return appendDataToHtmlOutput(data, htmlOutput);
}

