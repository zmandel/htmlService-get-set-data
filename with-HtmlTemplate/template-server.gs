
// sample usage with templates
// does not use appendDataToHtmlOutput
function doGetWithTemplates() {
    var htmlTemplate = HtmlService.createTemplateFromFile('template-client');

    htmlTemplate.dataFromServerTemplate = { first: "hello", last: "world" };

    var htmlOutput = htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle('sample');
    return htmlOutput;
}
