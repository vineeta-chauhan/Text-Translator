function onPageDetailsReceived(details) {
		var txt = details.summary;
            var url ="https://translate.yandex.net/api/v1.5/tr.json/translate?key=//paste your yandix translation key here//&text="+txt+"&lang=en-hi&format=plain";
            $.get(url,function(data,status){
               $("span").html(data.text);
            });
}


			
// When the popup HTML has loaded

window.addEventListener('load', function(evt) {
	
    // Get the event page
	
    chrome.runtime.getBackgroundPage(function(eventPage) {
		
		
        // Call the getPageInfo function in the event page, passing in 
		
        // our onPageDetailsReceived function as the callback. This injects 
		
        // content.js into the current tab's HTML
		
		
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
