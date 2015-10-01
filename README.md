# BrowserSniffer
Detect infomation of browser / browser-version / operation system / browser-language.  
Support: **Chrome, Fire Fox, Safari, Edge, IE 9-11, IE 7,8**.

*Download: [Browser Sniffer v4.0](https://github.com/Rendxx/BrowserSniffer/releases/tag/4.0 "Download")*

#API
     $$.browser.name
     $$.browser.version
     $$.browser.lan
     $$.browser.os
Browser name / version / language / operation system name

<div><br></div>

     $$.browser.msie(version)
Return whether the browser is IE (of special version if **version** is given).  

- **version**: including 7/8/9/10/11  

<div><br></div>

     $$.browser.edge()
     $$.browser.chrome()
     $$.browser.safari()
     $$.browser.firefox()
Return whether the browser is Edge  /Chrome / Safari / Firefox.

<div><br></div>

     $$.browser.mobile()
Return whether the browser is in a Mobile device.

<div><br></div>

     $$.browser.language.ZH()
     $$.browser.language.EN()
     $$.browser.language.ES()
     $$.browser.language.FR()
Return whether the browser language is Chinese / English / Spanish / French.

<div><br></div>

#Code Sample
Code in JavaScript:

    var browser_name = $$.browser.name; // get browser name
    var isChrome = $$.browser.chrome(); // true if using Chrome
    var isMobile = $$.browser.mobile(); // true if using mobile device

# Compatibility
- Chrome
- Fire Fox
- Safari
- Edge
- IE 9-11
- IE 7,8