function doGet(request) {
  return HtmlService.createTemplateFromFile('TalkBot')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
