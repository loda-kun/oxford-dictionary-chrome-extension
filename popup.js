chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString();"
  },
  function(selection) {
    if (!isBlank(selection[0])) {
      var query = encodeURIComponent(selection[0].trim().toLowerCase());
      var url = "https://www.oxfordlearnersdictionaries.com/definition/english/" + query;
      document.querySelector("iframe").src = url;
    } else {
      window.close();
    }
  }
);

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}
