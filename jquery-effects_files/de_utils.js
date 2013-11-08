/*
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
*/

// Reads and returns cookie whose name was passed.
function readCookie(name) {
//alert("readCookie: " + name);
//alert("document.cookie: " + document.cookie);
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// Returns the window url
function getWindowURL() {
// alert("window.top.location.href: " + window.top.location.href);
	return window.top.location.href;
}

// Closes this window; used by the de_examtool
function closeWindow() {
        window.close();
}

// Opens a new window; used by the PresentationPlayer when opening
// the 'report a problem' url window to make sure the HTTP referer is passed
// correctly (because window.open does not passes the HTTP referer in IE!)
function openWindowWithReferer(url, windowName) {
	// Very simple test because we only care about IE...
	if (navigator.appName == "Microsoft Internet Explorer") {
        var href = "<a href='" + url + "' target='" + windowName + "' style='display: none;' />";
//alert(href);
        var aElement = document.createElement(href);
//alert("after createElement");
        document.body.appendChild(aElement);
//alert("after appendChild");
        aElement.click();
	} else {
	    window.open(url, windowName);
	}
}

// showSlide() and showUrlInMaterialsFrame() are used by the DVD presentations.
function showSlide(url) {
//    alert("url showSlide: " + url);
    if (window.parent != null) {
		parent.showUrlInMaterialsFrame(url);
	}
}

function showUrlInMaterialsFrame(url) {
//    alert("url showUrlInMaterialsFrame: " + url);
	materials.location.href = url;
}

function getUserAgent() {
	return navigator.userAgent;
}
