$(document).ready(function(){
    
    getContent();
    getProductTypes();
    
});

function getContent(){
    
    $.getJSON("http://pagineperilsito.altervista.org/producttypescontent.php?callback=p")
        .done(function( json ) {
        
        var dataToAppend = '<ol class="breadcrumb"><li><a href="homepage.html">Home</a></li><li class="active">Products</li></ol><div class="row"><div class="col-xs-12 col-sm-12">';
        
        dataToAppend += '<p id="content">'+json[0].Content+'</p></div></div><div class="row"><div class="col-xs-0 col-sm-3"></div><div class="col-xs-12 col-sm-6"><a href="topproducts.html"><img src="'+json[0].Image+'" class="img-responsive" id="top-products"></a><div class="col-xs-0 col-sm-3"></div></div></div>';
        
        $('content').prepend(dataToAppend);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
}

function getProductTypes() {
    
    $.getJSON("http://pagineperilsito.altervista.org/producttypes.php?callback=p")
        .done(function( json ) {
        
        var dataToAppend = '<div class="row">';
        
        for( var i = 0; i < Object.keys(json).length; i++){
            
            var param = '?id='+json[i].Id;
            
            dataToAppend += '<div class="col-xs-6 col-sm-4 background" style="background-image: url('+json[i].Image+')"><a href="'+json[i].Link+param+'" class="types"><div class="transbox"><p>'+json[i].ProductType+'</p></div></a></div>';    
            
            console.log(json[i].Link+param);
        }
        
        dataToAppend += '</div>';
        
        $('content').append(dataToAppend);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
    
    
    
}