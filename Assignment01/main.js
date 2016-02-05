$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
});

var toggleMenu = function(){
	var navigationMenu = document.getElementById("main-navigation");
	if(navigationMenu.className == 'open'){
		navigationMenu.className = "closed";
	} else {
		navigationMenu.className = "open";
	}
}
