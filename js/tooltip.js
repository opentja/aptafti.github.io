this.imagePreview = function(){
		xOffset = 10;
		yOffset = 30;
	$("a.preview").hover(function(e){		
		$("body").append("<p id='imagePreview'><img src='../image_preview/"+ this.href +"' alt='' /></p>");								 
		$("#imagePreview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		$("#imagePreview").remove();
    });	
	$("a.preview").mousemove(function(e){
		$("#imagePreview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};
this.tooltip = function(){	
		xOffset = 10;
		yOffset = 30;
	$("a.tooltip").hover(function(e){		
		$("body").append("<p id='tooltip'>"+ this.title +"</p>");
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		$("#tooltip").remove();
    });	
	$("a.tooltip").mousemove(function(e){
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};

$(document).ready(function(){
	imagePreview();
	tooltip();
});