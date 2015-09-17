$(document).ready(function() {
    
    var startfrom = getQueryVariable("startfrom");
    
    getListOfEvents(startfrom);
        
});

function getListOfEvents(startfrom) {
    
    $.getJSON("http://pagineperilsito.altervista.org/events.php?callback=p&startfrom="+startfrom)
        .done(function( json ) {
        
        var pagination = '<ul class="pagination">';
        
        if(startfrom == undefined || startfrom == 1){
        
            pagination += '<li class="disabled">';
        }
        else{
            pagination += '<li>';
        }
        
        pagination += '<a href="events.html?startfrom='+(startfrom-1)+'" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
        
        if((Object.keys(json).length % 4) == 0){
            for(var i = 0; i < (Object.keys(json).length / 4); i++){
                
                if(i == 0 && startfrom == undefined){
                    pagination += '<li class="active" id="'+(i+1)+'"><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                }
                
                if((i+1) == startfrom) {
                    pagination += '<li class="active" id="'+(i+1)+'"><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                }
                else{
                    pagination += '<li id="'+(i+1)+'"><a href="events.html?startfrom='+(i+1)+'">'+(i+1)+'</a></li>';
                }
                
            }
            
            if(startfrom == (Object.keys(json).length / 4)){
                pagination += '<li class="disabled"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>';
            }
            else{
                pagination += '<li><a href="events.html?startfrom='+(startfrom+1)+'" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>';
            }
            
        }
        else{
            for(var i = 0; i <= (Object.keys(json).length / 4); i++){
                
                if(i == 0 && startfrom == undefined){
                    pagination += '<li class="active" id="'+(i+1)+'"><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                }
                else{
                              
                    if((i+1) == startfrom) {
                        pagination += '<li class="active" id="'+(i+1)+'"><a href="#">'+(i+1)+'<span class="sr-only">(current)</span></a></li>';
                    }
                    else{
                        pagination += '<li id="'+(i+1)+'"><a href="events.html?startfrom='+(i+1)+'">'+(i+1)+'</a></li>';
                    }
                }
                
            }
            
            var ultimo = (Object.keys(json).length / 4)*1;
            
            if(startfrom >= ultimo){
                pagination += '<li class="disabled"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>';
            }
            else{
                
                var next = startfrom*1+1;
                
                pagination += '<li><a href="events.html?startfrom='+next+'" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>';
            }
            
        }
        
        var content = '<div class="row"><div class="col-xs-12 col-sm-12">';
        
        content += '<p id="intro">'+json[0].Content+'</p></div></div>';
        
        var i;
        var end;
        
        if(startfrom == undefined){
            i = 0;
            end = 4;
        }
        else{
            i = ((startfrom*4)-4);
            end= startfrom*4;
        }
        
        
        for(i; i< Math.min(Object.keys(json).length, end); i++){
            
            var url = "singleevent.html?id="+encodeURIComponent(json[i].Fair);
            
            content += '<div class="row"><a href="'+url+'" class="title"><h3>'+json[i].Fair+' '+json[i].Date+'</h3></a><div class="col-xs-12 col-sm-5"><img src="'+json[i].Banner+'" class="img-responsive"></div><div class="col-xs-12 col-sm-7"><p class="address">'+json[i].Info+'</p></div></div>';
        }
        
        content += '</div>'+pagination+'</div>';
        
        $('content').append(content);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
    
}

