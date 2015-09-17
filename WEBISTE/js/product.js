$(document).ready(function() {
    
    var id = getQueryVariable("id");
    
    getHeadContent(id);
    
    getLeftSideContent(id);
    
});
                  
function getLeftSideContent(param) {
    
    var data = 'id='+param;
    
    $.getJSON("http://pagineperilsito.altervista.org/productleftside.php?callback=p&"+data)
        .done(function( json ) {
            
        for(var i = 0; i<Object.keys(json).length; i++) {
            
            if(i == 0){
                $("#left-firstrow").prepend('<div class="col-xs-12 col-sm-12"><img src="'+json[i].ImagePath+'" class="img-responsive" id="biggest"></div>'); 
                $("#left-secondrow").prepend('<div class="col-xs-4 col-sm-4"><a href="'+json[i].ImagePath+'" class="change-image" onclick="changeImage(this); return false;"><img src="'+json[i].ImagePath+'" class="img-responsive small" /></a></div>');
            }
                                            
            if(i > 0 && i < 3){
                $("#left-secondrow").prepend('<div class="col-xs-4 col-sm-4"><a href="'+json[i].ImagePath+'" class="change-image" onclick="changeImage(this); return false;"><img src="'+json[i].ImagePath+'" class="img-responsive small" /></a></div>');
            }
            
            if(i > 2) {
                $("#left-thirdrow").prepend('<div class="col-xs-4 col-sm-4"><a href="'+json[i].ImagePath+'" class="change-image" onclick="changeImage(this); return false;"><img src="'+json[i].ImagePath+'" class="img-responsive small" /></a></div>');
            }
            
        }
        
        $("#left-fourthrow").prepend('<div class="col-xs-12 col-sm-12"><a href="#"><img src="img/settingsbutton.png" class="img-responsive" id="button"></a></div>');
                
        })
        .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			$("#left-column").append("Product data not available");
		});
}

function getHeadContent(param) {
    
        var data = 'id='+param;
            $.getJSON("http://pagineperilsito.altervista.org/productcontent.php?callback=p&"+data)
        .done(function( json ) {
                
                var breadcrumbData = '<li><a href="productsbytype.html?id='+json[0].Id+'">'+json[0].ProductType+'</a></li><li class="active">'+param+'</li>';
                
                $(".breadcrumb").append(breadcrumbData);
                                
                var contentData = '<p id="description">'+json[0].Content+'</p>';
                
                if(json[0].Awards != null){
                    var awards = json[0].Awards.split('+');
                    
                    contentData += '<div class="row"><div class="col-xs-2 col-sm-2"><img src="img/top products rounded.png" class="img-responsive" id=""top-img"></div><div class="col-xs-10 col-sm-10">';
                    
                    for(var i = 0; i<awards.length; i++){
                        contentData += '<p class="award">'+awards[i]+'<br></p>';
                    }
                    
                    contentData += '</div></div>';
                    
                }
                
                contentData += '<h3 class="separator"> Designed by </h3><div class="row"><div class="col-xs-3 col-sm-4"></div><div class="col-xs-6 col-sm-4" id="designer"><a href="#" class="desc"><img src="'+json[0].Image+'" class="img-responsive"><p class="link">'+json[0].Designers+'</p></a></div><div class="col-xs-3 col-sm-4"></div></div>';
                
                if(json[0].TopProduct == 'Y'){
                
                if(json[0].Event1 != null){
                    
                    contentData += '<h3 class="separator"> Promoted in </h3><div class="row">';
                    
                    if(Object.keys(json).length == 1){
                        
                        contentData += '<div class="col-xs-0 col-sm-4"></div><div class="col-xs-12 col-sm-4"><a href="singleevent.html?id='+json[0].Event1+'" class="desc"><img src="'+json[0].Banner+'" class="img-responsive"><p class="link">'+json[0].Event1+'</p></a></div><div class="col-xs-0 col-sm-4"></div>';
                    }
                    
                    if(Object.keys(json).length == 2){
                        
                        contentData += '<div class="col-xs-0 col-sm-2"></div><div class="col-xs-12 col-sm-4"><a href="singleevent.html?id='+json[0].Event1+'" class="desc"><img src="'+json[0].Banner+'" class="img-responsive"><p class="link">'+json[0].Event1+'</p></a></div><div class="col-xs-12 col-sm-4"><a href="singleevent.html?id='+json[1].Event2+'" class="desc"><img src="'+json[1].Banner+'" class="img-responsive"><p class="link">'+json[1].Event2+'</p></a></div><div class="col-xs-0 col-sm-2"></div>';
                    }
                    
                    if(Object.keys(json).length == 3){
                        
                        contentData += '<div class="col-xs-4 col-sm-4"><a href="singleevent.html?id='+json[0].Event1+'" class="desc"><img src="'+json[0].Banner+'" class="img-responsive"><p class="link">'+json[0].Event1+'</p></a></div><div class="col-xs-4 col-sm-4"><a href="singleevent.html?id='+json[1].Event2+'" class="desc"><img src="'+json[1].Banner+'" class="img-responsive"><p class="link">'+json[1].Event2+'</p></a></div><div class="col-xs-4 col-sm-4"><a href="singleevent.html?id='+json[2].Event3+'" class="desc"><img src="'+json[2].Banner+'" class="img-responsive"><p class="link">'+json[2].Event3+'</p></a></div>';
                    }
                    
                    contentData += '</div>';
                }
                    
                }
                
                $("#right-column").append(contentData);

		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			$("#right-column").append("Product data not available");
		});
    
    
    $("#title").append(param);
    
    
}

function changeImage(caller) {
    var smallerpath = $(caller).attr("href");;
    $("#biggest").attr("src", smallerpath);
}