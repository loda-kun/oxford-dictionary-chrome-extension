chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString();"
  },
  function(selection) {
    var url = "https://www.oxfordlearnersdictionaries.com/us/definition/english/";
    if (selection && !isBlank(selection[0])) {
      var query = encodeURIComponent(selection[0].trim().toLowerCase());
      url = url + query;
    }
    document.querySelector("iframe").src = url;
  }
);

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}
