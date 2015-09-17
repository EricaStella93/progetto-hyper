$(document).ready(function() {
    
    var id = getQueryVariable("id");
    
    makeBreadCrumb(id);
    
    retrieveContent(id);
    
});

function makeBreadCrumb(id) {
    
    $(".breadcrumb").append('<li class="active">'+id+'</li>');
}

function retrieveContent(id) {
        getSliderImages("http://pagineperilsito.altervista.org/eventslider.php?callback=p&id="+encodeURIComponent(id), 0);
    
    $.getJSON("http://pagineperilsito.altervista.org/eventcontent.php?callback=p&id="+encodeURIComponent(id))
        .done(function( json ) {
        
        $("#title").append(id+' '+json[0].Date);
        
        var dataToAppend = '<div class="row"><div col-xs-12 col-sm-12><p class="info">'+json[0].Description+'</p><p class="info">'+json[0].Info+'</p><h3>Our products promoted in this event:</h3></div>';  
        
        for(var i = 0; i < Object.keys(json).length; i++) {
            	dataToAppend += '<div class="col-xs-6 col-sm-4"><a href="product.html?id='+json[i].ProductName+'" class="linking"><img src="'+json[i].Images+'" class="img-responsive"><p class="desc">'+json[i].ProductName+'</p></a></div>';      
        }
        
        dataToAppend += '</div>';
        
        $('content').append(dataToAppend);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
    
}





