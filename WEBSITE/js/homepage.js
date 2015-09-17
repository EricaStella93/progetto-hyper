$(document).ready(function() {
    
    getSliderImages("http://pagineperilsito.altervista.org/homepage.php?callback=p", 1);
    getHomePageContent();                                  
}); 

function getHomePageContent() {

    $.getJSON("http://pagineperilsito.altervista.org/homepagecontent.php?callback=p")
        .done(function( json ) {
        
        var data1 = "";
        var data2 = "";
        
        for(var i = 0; i<Object.keys(json).length; i++){
            
            if(i<3){
                
                data1 += '<div class="col-xs-12 col-sm-4"><a href="'+json[i].LinkTo+'"><img src="'+json[i].ImagePath+'" class="img-responsive"><p>'+json[i].Phrase+'</p></a></div>';
            } 
            else{
            
                if(i == 3){
                    data2 += '<div class="col-xs-0 col-sm-2"></div><a href="'+json[i].LinkTo+'"><div class="col-xs-12 col-sm-4"><img src="'+json[i].ImagePath+'" class="img-responsive"><p>'+json[i].Phrase+'</p></a></div>';
                }
                else{
                    data2 += '<div class="col-xs-12 col-sm-4"><a href="'+json[i].LinkTo+'"><img src="'+json[i].ImagePath+'" class="img-responsive"><p>'+json[i].Phrase+'</p></a></div><div class="col-xs-0 col-sm-2"></div>';
                }
            }
        }
        
        $("#firstrow").prepend(data1);
        $("#secondrow").prepend(data2);
        
		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
	}
    


