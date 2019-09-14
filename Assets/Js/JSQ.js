$ (document).ready(function(){

// this is for smooth scoll transition between inner linkes
	$(function(){
		$('a[href*="#"]:not([href="#"])').click(function(){

			if (location.pathname.replace(/^\//,'')== this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1)+']');

				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});


// this is manual scrolling paralex
(function(){

	var documentEl = $(document),
		parallaxBg = $("header");
		

		documentEl.on("scroll", function(){

			var currScrollPos = documentEl.scrollTop();
			parallaxBg.css("background-position" , "0" + -currScrollPos/2 + "px");

		});

})();

	$("#intro").slideDown(2000);
	$("nav").slideDown(5000);

	$("#btn-one").click(function(){
		$("#Design-images").show(1000);

	});	


// project images display
	$("#back-one").click(function(){
		$("#Design-images").hide(1000);
	});
	

	$("#btn-two").click(function(){
		$("#Brand-images").show(1000);

	});	

	$("#back-two").click(function(){
		$("#Brand-images").hide(1000);
		$("")
	});
	

	$("#btn-three").click(function(){
		$("#UXUI-images").show(1000);

	});	

	$("#back-three").click(function(){
		$("#UXUI-images").hide(1000);
	});
	

	$("#back-to-top").click(function(){
		$("body").animate({
			scrollTop:0
		},1000);
		return false;
	});

	$(".submit").click(function() {

		alert("Message sent")
	});
	
});

baguetteBox.run('.tz-gallery');


