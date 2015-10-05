# API Document

## Get Browser Information
     $$.browser.name
     $$.browser.version
     $$.browser.lan
     $$.browser.os
Browser name / version / language / operation system name

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

## Detect Browser

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