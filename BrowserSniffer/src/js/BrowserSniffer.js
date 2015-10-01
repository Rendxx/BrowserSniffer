/************************************************ 
Browser Sniffer
Copyright (c) 2014-2015 Dongxu Ren  http://www.rendxx.com/

License: MIT (http://www.opensource.org/licenses/mit-license.php)
Version: 3.0
Update: 2015-09-14
   
Description:
   Detect infomation of browser / browser-version / operation system / browser-language
   
Compatibility:
    Chrome; Fire Fox; Safari; Edge; IE 9-11; IE 7,8;

API:
   $$.browser.browser
    - (string) Get browser name

   $$.browser.version
    - (string) Get browser version
    
   $$.browser.os
    - (string) Get operation system name
    
   $$.browser.lan
    - (string) Get browser language (in lower case)
    
   $$.browser.msie(version)
    - (bool) Get whether the browser is IE (of special version if [version] is given) or not.
    - version including 7/8/9/10/11/Edge 

   $$.browser.chrome()
    - (bool) Get whether the browser is Chrome or not.

   $$.browser.safari()
    - (bool) Get whether the browser is Safari or not.

   $$.browser.firefox()
    - (bool) Get whether the browser is Firefox or not.

   $$.browser.edge()
    - (bool) Get whether the browser is Firefox or not.
    
   $$.browser.mobile()
    - (bool) Get whether the browser is in a Mobile device or not.

   $$.browser.language.[ZH/EN/ES/FR]()
    - (bool) Get whether the browser language is Chinese/English/Spanish/French.

************************************************/
(function () {
    var _initBrowserSniffer = function (dataBrowser, dataOS) {
        var that = this;
        this.browser;
        this.version;
        this.os;
        this.lan;

        var versionSearchString;

        this.msie = function (version) {
            if (this.browser == "Explorer") {
                if (version == null) return true;
                return (Number(this.version) == version);
            }
            return false;
        };
        this.chrome = function () {
            return this.browser == "Chrome";
        };
        this.safari = function () {
            return this.browser == "Safari";
        };
        this.firefox = function () {
            return this.browser == "Firefox";
        };
        this.edge = function () {
            return this.browser == "Edge";
        };
        this.mobile = function () {
            return this.os == "Android" || this.os == "iPhone/iPod" || this.os == "iPad" || this.os == "BlackBerry" || this.os == "Windows Phone";
        };

        this.language = {
            ZH: function () { return that.lan.indexOf("zh") == 0; },
            EN: function () { return that.lan.indexOf("en") == 0; },
            ES: function () { return that.lan.indexOf("es") == 0; },
            FR: function () { return that.lan.indexOf("fr") == 0; }
        };

        var searchString = function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        };

        var searchVersion = function (dataString) {
            var index = dataString.indexOf(versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + versionSearchString.length + 1));
        };

        var _init = function () {
            that.browser = searchString(dataBrowser) || "Unknown browser";
            that.version = searchVersion(navigator.userAgent)
                        || searchVersion(navigator.appVersion)
                        || "Unknown version";
            that.os = searchString(dataOS) || "Unknown OS";
            that.lan = (navigator.language || navigator.browserLanguage).toLowerCase();
        }();
    };

    // Browser parameter
    var dataBrowser = [
        {
            string: navigator.userAgent,
            subString: "Trident\/7\.",
            versionSearch: "rv",
            identity: "Explorer"
        },
        {
            string: navigator.userAgent,
            subString: "Edge\/",
            identity: "Edge"
        },
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {		// for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { 		// for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ];
    var dataOS = [
        {
            string: navigator.userAgent,
            subString: "Android",
            identity: "Android"
        },
        {
            string: navigator.userAgent,
            subString: "webOS",
            identity: "webOS"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.userAgent,
            subString: "iPad",
            identity: "iPad"
        },
        {
            string: navigator.userAgent,
            subString: "BlackBerry",
            identity: "BlackBerry"
        },
        {
            string: navigator.userAgent,
            subString: "IEMobile",
            identity: "Windows Phone"
        },
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ];

    window.$$ = window.$$ || {};
    window.$$.browser = new _initBrowserSniffer(dataBrowser, dataOS);
})();
