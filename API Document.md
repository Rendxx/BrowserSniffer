# API Document

## Get Browser property
#### $$.browser.name
Get browser name.

#### $$.browser.version
Get browser version. Only available for IE.

#### $$.browser.lan
Get browser language.

#### $$.browser.os
Get browser operation system name.

#### $$.browser.mobile()
Return whether the browser is in a Mobile device.

#### $$.browser.language.ZH()
Return whether the browser language is Chinese.

#### $$.browser.language.EN()
Return whether the browser language is English.

#### $$.browser.language.ES()
Return whether the browser language is Spanish.

#### $$.browser.language.FR()
Return whether the browser language is French.

<h3>&nbsp;</h3>

## Detect Browser 
#### $$.browser.msie(version)
Return whether the browser is IE (of special version if **version** is given).  

- **version** ```number```  
Including 7/8/9/10/11  

#### $$.browser.edge()
Return whether the browser is Edge

#### $$.browser.chrome()
Return whether the browser is Chrome 

#### $$.browser.safari()
Return whether the browser is Safari 

#### $$.browser.firefox()
Return whether the browser is Firefox
