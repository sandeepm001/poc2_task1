document.addEventListener('DOMContentLoaded', function () {
  var fetchTitleButton = document.getElementById('fetchTitleButton');

  fetchTitleButton.addEventListener('click', function () {
    //current tab title
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentTabTitle = tabs[0].title;
      // title update 
      document.getElementById('title').innerText = currentTabTitle;
    });
  });
});
