function getSliderImages(phpPageAddress, hasCaption){
    
    var indicators = '<ol class="carousel-indicators">';
    var wrappers = '<div class="carousel-inner" role="listbox">';
    
    $.getJSON(phpPageAddress)
        .done(function( json ) {
        
        for(var i = 0; i<Object.keys(json).length; i++){
            
            if(i == 0){
                indicators += '<li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>';
                wrappers += '<div class="item active">';
            }
            else{
                indicators += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
                wrappers += '<div class="item">';
            }
            
            wrappers += '<img src="'+json[i].ImagePath+'">';
            
            if(hasCaption == 1){
            wrappers += '<div class="carousel-caption"><p>';
            wrappers += json[i].Phrase+"</p></div></div>";
            }
            else{
                wrappers += '</div>';
            }
        }
        
        indicators += "</ol>";
        wrappers += "</div>";
        
        var controls = '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>';
    
        var dataToAppend = "";
        dataToAppend += indicators;
        dataToAppend += wrappers;
        dataToAppend +=controls;
        
        
        $("#myCarousel").prepend(dataToAppend);
		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
	};

function getQueryVariable(variable) {
    
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    
    for (var i = 0; i < vars.length; i++) {
        
        var pair = vars[i].split('=');
        
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    
 return undefined;
}