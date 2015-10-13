
$(function () {
    var chrome = $(".item.chrome");
    var firefox = $(".item.firefox");
    var safari = $(".item.safari");
    var edge = $(".item.edge");
    var ie = $(".item.ie");
    var ie7 = $(".item.ie-7");
    var ie8 = $(".item.ie-8");
    var ie9 = $(".item.ie-9");
    var ie10 = $(".item.ie-10");
    var ie11 = $(".item.ie-11");
    var os = $(".item.os");
    var browser = $(".item.browser");
    var version = $(".item.versions");
    var mobile = $(".item.mobile");
    var language = $(".item.language");

    browser.find(".result").text($$.browser.name);
    version.find(".result").text($$.browser.version);
    language.find(".result").text($$.browser.lan);
    os.find(".result").text($$.browser.os);

    if ($$.browser.mobile()) {
        mobile.addClass("actived");
        mobile.find(".result").text("Yes");
    } else {
        mobile.find(".result").text("No");
    }
    if ($$.browser.chrome()) {
        chrome.addClass("actived");
        chrome.find(".result").text("Yes");
    } else {
        chrome.find(".result").text("No");
    }
    if ($$.browser.safari()) {
        safari.addClass("actived");
        safari.find(".result").text("Yes");
    } else {
        safari.find(".result").text("No");
    }
    if ($$.browser.firefox()) {
        firefox.addClass("actived");
        firefox.find(".result").text("Yes");
    } else {
        firefox.find(".result").text("No");
    }
    if ($$.browser.edge()) {
        edge.addClass("actived");
        edge.find(".result").text("Yes");
    } else {
        edge.find(".result").text("No");
    }
    if ($$.browser.msie()) {
        ie.addClass("actived");
        ie.find(".result").text("Yes");
    } else {
        ie.find(".result").text("No");
    }
    if ($$.browser.msie(7)) {
        ie7.addClass("actived");
        ie7.find(".result").text("Yes");
    } else {
        ie7.find(".result").text("No");
    }
    if ($$.browser.msie(8)) {
        ie8.addClass("actived");
        ie8.find(".result").text("Yes");
    } else {
        ie8.find(".result").text("No");
    }
    if ($$.browser.msie(9)) {
        ie9.addClass("actived");
        ie9.find(".result").text("Yes");
    } else {
        ie9.find(".result").text("No");
    }
    if ($$.browser.msie(10)) {
        ie10.addClass("actived");
        ie10.find(".result").text("Yes");
    } else {
        ie10.find(".result").text("No");
    }
    if ($$.browser.msie(11)) {
        ie11.addClass("actived");
        ie11.find(".result").text("Yes");
    } else {
        ie11.find(".result").text("No");
    }
});