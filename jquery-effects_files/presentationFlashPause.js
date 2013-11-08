/**
* presentationFlashPause.js
* Created 8/20/2011 to solve PDF slide & preference popup display problem
* The functions pause & play flash "flashContent1" element
*            AND hide and reveal "materials" element
* PROBLEM: PDF files in an iframe show over the Preferences Popup overlay
* Solution: Hide the Materials iframe on single window display when
*                the preference popup is displayed.
*                Flash has to be paused to prevent it looking for the
*                materials iframe
* Dependency: flash viewer comments: isVideoPlaying, playVideo, pauseVideo
* Modify 12/03/2012 enclose functions 
*/

var FLASH_ELEM_NAME = "flashContent1";
var MATERIAL_IFRAME_ID = "materials";

// global variable to identify if pause paused flash or it was already paused
var isPausedByPrefPopup = false;

// retrieve flash viewer DOM object
// Flash is in an iframe named  "left"
// Flash is in a div named flashContent1
// retrieve flash viewer DOM object
// Uses 3 known ways to DOM navigate through an iframe
var getFlashViewer = function () {
    var viewer = null;
    var viewerDiv = null;
    // 1. Screen, try outright to get the flash element
    viewer = document.getElementById("flashContent1");
    // 2. Single window, get the "left" element
    if (top.left != null) {
        viewerDiv = top.left;
    }
    if ((viewer == null) && (viewerDiv != null)) {
        // IE html DOM
        if (viewerDiv.document != null) {
            viewer = viewerDiv.document.getElementById("flashContent1");
        }
        // FF html DOM
        if ((viewer == null) && (viewerDiv.contentDocument != null)) {
            viewer = viewerDiv.contentDocument.getElementById("flashContent1");
        }
        if ((viewer == null) && (viewerDiv.contentWindow != null) && (viewerDiv.contentWindow.document != null)) {
            viewer = viewerDiv.contentWindow.document.getElementById("flashContent1");
        }
        if (viewer == null) {
            alert("FlashViewer not found");
        }
    }
    if (viewer == null) {
        // not good, the flash viewer iframe element not found
        alert("There was an Error. Please report the" + " following message to http://cm.dce.harvard.edu/forms/report.shtml: " + "\n\n Error: the flash viewer HTML element was not found.");
    }
    return viewer;
};


//Force pauses video
var pauseVideo = function () {
    var viewer = getFlashViewer();
    // "xyz != null" covers cases of uninitialized var and undefined var
    if (viewer != null && (viewer.isVideoPlaying !== undefined)) {
        var isPlay = viewer.isVideoPlaying();
        if (isPlay == true && (viewer.pauseVideo  !== undefined)) {
            viewer.pauseVideo();
        }
    }
};

//Force plays video
var playVideo = function () {
    var viewer = getFlashViewer();
    if (viewer != null && (viewer.playVideo !== undefined)) {
        viewer.playVideo();
    }
};


// Only pauses flash if flash is running
var popupPauseVideo = function () {
    //alert("pauseVideo()");
    var viewer = getFlashViewer();
    if (viewer != null && (viewer.isVideoPlaying !== undefined)) {
        var isPlay = viewer.isVideoPlaying();
        // alert("pauseVideo(), viewer playing = " + isPlay);
        if ((isPlay == true) && (viewer.pauseVideo !== undefined)) {
            isPausedByPrefPopup = true;
            viewer.pauseVideo();
        }
        detachMaterials();
    } else {
        // DEBUG: alert("Viewer is null");
    }
};

// Only plays flash if paused by pauseVideo
var popupPlayVideo =function () {
    var viewer = getFlashViewer();
    if (((viewer != null) && (viewer.playVideo !== undefined)) && (isPausedByPrefPopup == true)) {
        viewer.playVideo();
        isPausedByPrefPopup = false;
    }
    reAttachMaterials();
};

// hides material element
var detachMaterials = function () {
    var matt = top.document.getElementById(MATERIAL_IFRAME_ID);
    if (matt != null) {
        matt.style.display = "none";
    }
};

// Displays materials element
var reAttachMaterials = function () {
    var matt = top.document.getElementById(MATERIAL_IFRAME_ID);
    if (matt != null) {
        matt.style.display = "";
    }
};