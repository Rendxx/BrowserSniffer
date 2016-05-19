# Browser Sniffer
Detect infomation of browser / browser-version / operation system / browser-language.  
Support: **Chrome, Fire Fox, Safari, Edge, IE 9-11, IE 7,8**.

*Sample: [http://www.rendxx.com/Lib/Sample/10](http://www.rendxx.com/Lib/Sample/10 "Sample")*  
*Download: [Browser Sniffer v0.4.5](https://github.com/Rendxx/BrowserSniffer/releases/tag/0.4.5 "Download")*

## Install
Download the package from bower
```
bower install BrowserSniffer --save
```

Including the file in your webpage
```HTML
<script type="text/javascript" src="/node_modules/BrowserSniffer/js/BrowserSniffer.js"></script>
```

See **Code Sample** below for more details.

## API
[API Document](https://github.com/Rendxx/BrowserSniffer/blob/master/API%20Document.md)

#Code Sample
Code in JavaScript:

```javascript
    var browser_name = $$.browser.name; // get browser name
    var isChrome = $$.browser.chrome(); // true if using Chrome
    var isMobile = $$.browser.mobile(); // true if using mobile device
```

## Compatibility
```Chrome``` ```Fire Fox``` ```Safari``` ```Opera``` ```Edge``` ```IE 9-11``` ```IE 7,8```

## License 
Copyright &copy; 2015, Rendxx. (MIT License)  
See [LICENSE][] for more info.

[LICENSE]: https://github.com/Rendxx/BrowserSniffer/blob/master/LICENSE