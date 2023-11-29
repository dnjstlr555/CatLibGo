document.addEventListener("DOMContentLoaded", function() {
  const redirectButton = document.getElementById("redirect-button");
  redirectButton.addEventListener("click", async function() {
    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    let originalUrl = currentTab[0].url;
    let proxy = "https://libproxy.catholic.ac.kr/_Lib_Proxy_Url/";
    if (originalUrl.includes('libproxy.catholic.ac.kr')) {
        proxy = 'https://sci-hub.se/';
        originalUrl = originalUrl.replace('.libproxy.catholic.ac.kr', '');
        let splited = originalUrl.substr(originalUrl.indexOf("https://") + "https://".length).split("/");
        splited[0] = splited[0].replaceAll("-", ".");
        originalUrl = "https://" + splited.join("/");
    }
    const redirectUrl = proxy + originalUrl;
    browser.tabs.create({ url: redirectUrl });
  });
});
