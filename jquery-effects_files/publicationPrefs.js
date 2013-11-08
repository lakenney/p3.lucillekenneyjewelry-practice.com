



	// href prefix for the index page
	// add seg1/lecture number/media type
	//(i.e. least matching first to most matching (dialup) last)
	//http://cm.dce.harvard.edu/2011/01/12070/L01/seg1/index_FlashSingleHighBandwidth.shtml
	var LINK = 'http://cm.dce.harvard.edu/2014/01/14291/';
	var SEG =  '/'; 
	var COOKIENAME = 'HarvardDCEPref-20140114291'; // prefs cookie name
	
	

	// statusKey is used by schedule 
	// Both used in liveClassroomPrefs.js for liveClassroom.shtml only 
	var statusKey = ["Ready", "Not ready"];
	var schedule = {};
        

	//Array is ordered by next best match order
	//Array contents map to PREFMAP table
	// The index (i.e. "L01") MUST match the id attribute 
	// of the dd class "list-type:

	var prodMedia = {};
	
	// default preference option
	prodMedia["default"] = [0,1,2,3] ;
	

	prodMedia["L09"] = [0,1,2,3];
        
	// prodSize identifies what file name to use when launching the media
	// - for publication/pubListing pages:
	// "PUB_DESCRIPTOR_GROUP_NAME" = array of html page names for the pub descriptor group
	// - for live pages:
	// SESSION_NUMBER = array of html page names for each encoding format
	var prodSize = {};

	prodSize["L09"] = "VideoWithSlides16x9_H264";
        

	//Maps the html file name to use for an offering
	var prodFileName = {};
	
	prodFileName["VideoWithOutSlides16x9_Flash"] = ["screen_FlashLargeTalkingHead-16x9.shtml",,"screen_FlashHighBandwidthTalkingHead-16x9.shtml","screen_FlashAudioOnlyTalkingHead.shtml"];
	
	prodFileName["VideoWithOutSlides16x9_H264"] = ["screen_H264LargeTalkingHead-16x9.shtml",,"screen_H264HighBandwidthTalkingHead-16x9.shtml","screen_H264AudioOnlyTalkingHead.shtml"];
	
	prodFileName["VideoWithOutSlides4x3_Flash"] = ["screen_FlashLargeTalkingHead.shtml",,"screen_FlashHighBandwidthTalkingHead.shtml","screen_FlashAudioOnlyTalkingHead.shtml"];
	
	prodFileName["VideoWithOutSlides4x3_H264"] = ["screen_H264LargeTalkingHead.shtml",,"screen_H264HighBandwidthTalkingHead.shtml","screen_H264AudioOnlyTalkingHead.shtml"];
	
	prodFileName["VideoWithSlides16x9_Flash"] = ["screen_FlashMultipleHighLTH-16x9.shtml","screen_FlashMultipleHighBandwidth-16x9.shtml","index_FlashSingleHighBandwidth-16x9.shtml","index_FlashSingleAudioOnly.shtml"];
	
	prodFileName["VideoWithSlides16x9_H264"] = ["screen_H264MultipleHighLTH-16x9.shtml","screen_H264MultipleHighBandwidth-16x9.shtml","index_H264SingleHighBandwidth-16x9.shtml","index_H264SingleAudioOnly.shtml"];
	
	prodFileName["VideoWithSlides4x3_Flash"] = ["screen_FlashMultipleHighLTH.shtml","screen_FlashMultipleHighBandwidth.shtml","index_FlashSingleHighBandwidth.shtml","index_FlashSingleAudioOnly.shtml"];
	
	prodFileName["VideoWithSlides4x3_H264"] = ["screen_H264MultipleHighLTH.shtml","screen_H264MultipleHighBandwidth.shtml","index_H264SingleHighBandwidth.shtml","index_H264SingleAudioOnly.shtml"];
        
          
	//Enum for the COOKIE PREFMAP
	//ordered by hierarchy of next best media match
	var prefmapSize = 4;
	var PREFMAP = {
          		LANCAM: {
          			index: 0,	// index referenced by the prodMedia array 
          			equiv:0, 	// group equivalence id e.g. dsl single is equivalent to dsl multi-window
          			displayOrder:0,	// order to display on the screen
          			cookie: "LANCampusNetwork",	// cookie name
          			displayName: "LAN/Campus Network Users",	
					desc:"large video window display",
					image: "pref-lan"},
          		CABLEM: {
          			index: 1, 
          			equiv:1,
          			displayOrder:2,
          			cookie: "DSLCableMultiWindow",
          			displayName: "DSL/CABLE Users",
          			desc: "multi-window display",
          			image: "pref-multi-window"},
          		CABLES: {
          			index: 2, 
          			equiv:1,
          			displayOrder:1,
          			cookie: "DSLCableSingleWindow",
          			displayName: "(default) DSL/Cable Users",
          			desc: "single-window display",
          			image: "pref-default"},
          		AUDIO: {
          			index: 3, 
          			equiv:2,
          			displayOrder:3,
          			cookie: "DialUp",
          			displayName: "Dial-Up Users",
          			desc:"audio only",
          			image: "pref-dialup"}
	};
          
	//Get the enum index value from a name value 
	function cookieToIndex(cookie){
		for (var item in PREFMAP) {
			if (PREFMAP[item].cookie  == cookie){
				return PREFMAP[item].index;
			}
		} // otherwise, no match
		return -1; //false
	}
	
	//Get the enum index value from a name value 
	function indexToCookie(index){
		for (var item in PREFMAP) {
			if (PREFMAP[item].index  == index){
				return PREFMAP[item].cookie;
			}
		} // otherwise, no match
		return -1; //false
	}
	
	//Get the equiv value from an index value 
	function indexToEquiv(index){
		for (var item in PREFMAP) {
			if (PREFMAP[item].index  == index){
				return PREFMAP[item].equiv;
			}
		} // otherwise, no match
		return -1; //false
	}

	function cookToName(cook){
		for (var item in PREFMAP) {
			if (PREFMAP[item].cookie  == cook){
				return PREFMAP[item].desc;
			}
		} // otherwise, no match
		return -1; //false
	}
          
	//Get the dt dd combination for the default view  
	function defaultModes(){ 
		var modesDL = '';
		var count = 0;
		for(var count = 0; count < prefmapSize; count++){
			for (var item in PREFMAP) {
				// get the right mode to display 
				if (PREFMAP[item].displayOrder == count){
					modesDL += '<dt class="'+ PREFMAP[item].image +'"><label>'
						+'<input type="radio" name="video-type" value="'+ PREFMAP[item].cookie+'" />'
						+ PREFMAP[item].desc +'</label></dt>' ;
					modesDL += '<dd>'+ PREFMAP[item].displayName +'</dd>' ;
				}
			}		  
		}
		return modesDL;
	}

         
	//Get the name from an index num 
	function indexToDisplayName(index){
		for (var item in PREFMAP) {
			if (PREFMAP[item].index  == index){
				return PREFMAP[item].displayName;
			}
		} // otherwise, no match
		return -1; //false
	}
	
	//Get the desc from an index num 
	function indexToDisplayDesc(index){
		for (var item in PREFMAP) {
			if (PREFMAP[item].index  == index){
				return PREFMAP[item].desc;
			}
		} // otherwise, no match
		return -1; // false
	}

