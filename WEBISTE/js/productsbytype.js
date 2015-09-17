$(document).ready(function() {
    
    var type = getQueryVariable("id");

    getProductsContent(type);
    
});

function getProductsContent(type) {
    
    var data2 = 'id='+type;
                $.getJSON("http://pagineperilsito.altervista.org/productsbytypecontent.php?callback=p&"+data2)
        .done(function( json ) {
          
            $(".breadcrumb").append('<li class="active">'+json[0].ProductType+'</li>');
                    
            $('content').append('<div class="row"><div class="col-xs-12 col-sm-12"><p id="intro">'+json[0].Content+'</p></div></div>');
            
            var dataToAppend = '<div class="row">';
                    
            for(var i = 0; i < Object.keys(json).length; i++){
                
                var param = '?id='+json[i].ProductName;
                
                dataToAppend += '<div class="col-xs-4 col-sm-3"><a href="product.html'+param+'" class="productname"><img src="'+json[i].Images+'" class="img-responsive product"><p class="desc">'+json[i].ProductName+'</p></a></div>';
            }
                    
            dataToAppend += '</div>';
                    
            $('content').append(dataToAppend);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
        
}

