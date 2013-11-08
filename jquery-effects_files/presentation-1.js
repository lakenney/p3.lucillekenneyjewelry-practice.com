/* Presentation.js
* 6 December 2011
* DCE
*
* Use in production offering presentation html *
* Updated to resize flashContent1 in separate function
* so that function can be overwritten (omitted) for DVD
* where it should not be resized (screen part of index in DVD)
* Modify 2012-9-13, fix single versus multi resize
* Modify 2012-12-01, enclose all functions
*/

var ISNAVBELOW = true;
var firstTimeResize = true;
var winWidth;
var winHeight;

//isolate single window resize
//single window slide frame iframe
var singleWindowResize = function (h, w) {
    if ($('#materials').length == 1) {
        $('#materials').height(h);
        $('#materials').width(w);
        
        // adjust the iframes surrounding div container
        if ($('#mainFrame').length == 1) {
            $('#mainFrame').width(winWidth);
            $('#mainFrame').height(h + 15);
            // + 15 stretch to put footer at bottom
        }
    }
};

//isolate multiwindow resize
var multiWindowResize = function (h, w) {
    // multi window flash content
    if ($('#flashContent1').length == 1) {
        //adjust width
        if (w >= flashWidth) {
            $('#flashContent1').width(w);
        } else {
            $('#flashContent1').width(flashWidth);
        }
        // adjust Height
        if (h >= flashHeight) {
            $('#flashContent1').height(h);
        } else {
            $('#flashContent1').height(flashHeight);
        }
        // adjust the flash object's container
        if ($('#mainFrame').length == 1) {
            $('#mainFrame').width($('#flashContent1').width());
            $('#mainFrame').height(($('#flashContent1').height()));
        }
    }
};

// from single & materials
// stretch the iframes
// resize the iframe section to current window size
var resizeMatBox = function () {   
	var defaultMinWidth = 350; // width of last resort
	
    // add header toggler to footer text
    if (firstTimeResize == true) {
        addHeaderToggleLink();
        firstTimeResize = false;
    }
    // get current window size
    winHeight = $(window).height();
    winWidth = $(window).width();

    // Check if minWidth is defined in the media page
    minWidth = minWidth || defaultMinWidth;
    
    // forces min document width for IE browsers
    if (winWidth < minWidth) {
        winWidth = minWidth;
        // force min width for IE
        $("#container").css("width", winWidth);
    } else {
        $("#container").css("width", "100%");
    }
    // min width to rearrange the nav extra div below course title
    if (winWidth < 700) {
        if (!(ISNAVBELOW)) putNavExtraBelow();
    } else {
        if (ISNAVBELOW) putNavExtraAbove();
    }
    
    // since fixed sections can wrap, get dynamic size
    // set inital size to zero incase section doesn't exist
    var bannerHeight = 0;
    var titleHeight = 0;
    var footerHeight = 0;
    // These global vars are in the presentation4x3 or 16x9:
    //    hBuffer, wBuffer, leftBuffer, flashHeight, flashWidth
    
    // Get the height if it exists and is displayed
    if ($("#header").length == 1) {
        // header id is old banner
        bannerHeight = document.getElementById("header").clientHeight;
    } else if ($(".banner").length == 1) {
        // get the header class (new banner)
        bannerHeight = $(".banner:first").height();
    }
    if (($("#page-head").length == 1) && ($("#content-header").length == 1)) {
        titleHeight = document.getElementById("content-header").clientHeight;
    }
    // footer is not initially displayed, so get its display height
    if ($("#footer").length == 1) {
        footerHeight = $("#footer").height();
    }
    var h = winHeight - (bannerHeight + titleHeight + footerHeight + hBuffer);
    // give room for header & footer
    var w = winWidth - wBuffer;
    
    // reset width if "left" flash iframe is present
    if ($('#left').length == 1) {
        w = winWidth - (wBuffer + leftBuffer);
        // margin
        $('#left').height(h + 15);
        // set the hieght
    }
    // execute the default setting
    // or overwrite elsewhere if needed
    // dvdSingleWindow sets to null
    // multi window flash content
    if ($('#flashContent1').length == 1) {
        multiWindowResize(h, w);
    } else {
        singleWindowResize(h, w);
    }
}

// toggle for nav-extra div
var putNavExtraBelow = function () {
    if ($('#nav-extras').length == 1) {
        if ($('#course-title').length == 1) {
            $('#nav-extras').insertAfter('#course-title');
        }
        $('#nav-extras').css('float', 'none');
        $('#nav-extras').css('width', '100%');
        $('#nav-extras').css('left', '0px');
        ISNAVBELOW = true;
    }
    if ($('#footer-copyright').length == 1) {
        $('#footer-copyright').insertAfter('#footer-privacy');
        $('#footer-copyright').css('float', 'none');
        $('#footer-copyright').css('width', '100%');
        $('#footer-copyright').css('left', '0px');
    }
}

var putNavExtraAbove = function () {
    if ($('#nav-extras').length == 1) {
        if ($('#course-title').length == 1) {
            $('#nav-extras').insertBefore('#course-title');
        }
        $('#nav-extras').css('float', 'right');
        $('#nav-extras').css('width', 'auto');
        $('#nav-extras').css('left', 'auto');
        ISNAVBELOW = false;
    }
    if ($('#footer-copyright').length == 1) {
        $('#footer-copyright').insertBefore('#footer-privacy');
        $('#footer-copyright').css('float', 'right');
        $('#footer-copyright').css('width', 'auto');
        $('#footer-copyright').css('left', 'auto');
    }
};

// close this window (& materials window) and focus on preference page if open
var ReturnToList = function () {
    // Find window with proper name or open a new one with the name
    var listRef = window.open("../../publicationListing.shtml",
    "publicationListingDCE");
    listRef.focus();
    self.close();
};

var CloseMaterialsWindow = function () {
    //make sure materials window is still opened before closing.
    if (window.materialsWindow != null && typeof (window.materialsWindow.closed) != 'unknown' && ! window.materialsWindow.closed) {
        window.materialsWindow.close();
    }
};

// add the toggle header link to end of the footer-privacy element
var addHeaderToggleLink = function () {
    if ($('#footer-privacy').length == 1) {
        $('#footer-privacy').append('&nbsp;|&nbsp;<a href="#" alt="toggle Header Display" class="toggleHeader" onclick="javascript:toggleHeader();return false;">Hide Header</a>');
    }
};

//function to display and hide header
// Purpose: to give more space to video
// "toggleHeader" HTML element class text is updated upon toggle
var toggleHeader = function () {
    if (window.location == window.parent.location) {
        // show banner
        if ($("#header").length > 0) {
            if ($("#header").css("display") == "block") {
                $("#header").css("display", "none");
                $(".toggleHeader").html("Show Header");
            } else {
                $("#header").css("display", "block");
                $(".toggleHeader").html("Hide Header");
            }
        } else if ($(".banner").length > 0) {
            if ($(".banner").css("display") == "block") {
                $(".banner").css("display", "none");
                $(".toggleHeader").html("Show Header");
            } else {
                $(".banner").css("display", "block");
                $(".toggleHeader").html("Hide Header");
            }
        }
        // course name and help buttons
        if ($("#content-header").length > 0) {
            if ($("#content-header").css("display") == "block") {
                $("#content-header").css("display", "none");
            } else {
                $("#content-header").css("display", "block");
            }
        }
        // resize the materials div
        resizeMatBox();
    }
};
