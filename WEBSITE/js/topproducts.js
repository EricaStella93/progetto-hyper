$(document).ready(function() {
    
    getHead();
    
    gatherContent();

});

function getHead(){
                    $.getJSON("http://pagineperilsito.altervista.org/topproductscontent.php?callback=p")
        .done(function( json ) {

            $("#content").append(json[0].Content);
                        
		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
        
    
}


function gatherContent(){
    
    $.getJSON("http://pagineperilsito.altervista.org/topproducts.php?callback=p")
        .done(function( json ) {
        
        var data = '<div class="row">';
        
        for(var i = 0; i < Object.keys(json).length; i++){
            data += '<div class="col-xs-4 col-sm-3"><a href="product.html?id='+json[i].ProductName+'" class="links"><img src="'+json[i].Images+'" class="img-responsive polla" ><p class="prod-name">'+json[i].ProductName+'</p></a></div>';
        }
        
        data += '</div>';
        
        $('content').append(data);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});

}