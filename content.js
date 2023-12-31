chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length > 0) {
          const currentTab = tabs[0];
          let originalUrl = currentTab.url;
          let proxy='https://libproxy.catholic.ac.kr/_Lib_Proxy_Url/'
          if(originalUrl.includes('libproxy.catholic.ac.kr')) {
            proxy='https://sci-hub.se/'
            originalUrl = originalUrl.replace('.libproxy.catholic.ac.kr', '');
            let splited=originalUrl.substr(originalUrl.indexOf("https://")+"https://".length).split("/")
            splited[0]=splited[0].replaceAll("-",".")
            originalUrl="https://"+splited.join("/")
          }
          const redirectUrl = proxy + originalUrl;
          chrome.tabs.create({ url: redirectUrl });
        }
      });
});