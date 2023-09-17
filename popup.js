document.getElementById('redirectButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      const currentTab = tabs[0];
      const originalUrl = currentTab.url;
      const redirectUrl = 'https://libproxy.catholic.ac.kr/_Lib_Proxy_Url/' + encodeURIComponent(originalUrl);
      chrome.tabs.create({ url: redirectUrl });
    }
  });
});
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

document.getElementById('redirectButton').addEventListener('click', animateButton, false);