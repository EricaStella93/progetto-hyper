$(document).ready(function() {
    getSliderImages("http://pagineperilsito.altervista.org/ourcompanyslider.php?callback=p",1);
    
    completeContent();
    
    initialize();

    
});

function completeContent(){
                $.getJSON("http://pagineperilsito.altervista.org/ourcompany.php?callback=p")
        .done(function( json ) {
                    
            var contentArray = json[0].Content.split('+');
                    
            $("#content").append(contentArray[0]);
            $("#address").append('Home Sweet Home s.r.l.<br>Corso Cristoforo Colombo, 4<br>Milano (MI)<br>20144<br>Italy'); 
            $("#history").append(contentArray[1]);  
            $("#video").append('<iframe src="https://www.youtube.com/embed/dAa6bOWB8qY" frameborder="0" allowfullscreen></iframe>');
                    
		})
		  .fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			alert( "Request Failed: " + err );
		});
            
}

function initialize()
        {
            
                var myCenter=new google.maps.LatLng(45.454805,9.171710);
                var marker;
                var mapProp = {
                    center:myCenter,
                    zoom:18,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
                };

                var map=new google.maps.Map(document.getElementById("map"),mapProp);

                var marker=new google.maps.Marker({
                    position:myCenter,
                    animation:google.maps.Animation.BOUNCE
                });

                marker.setMap(map);
            
            google.maps.event.addListener(map,'center_changed',function() {

  window.setTimeout(function() {
    map.panTo(marker.getPosition());
  },50);
  });
                
                var infowindow = new google.maps.InfoWindow({
                    content:'<p>HSH<br>Home Sweet Home s.r.l.<br>Corso Cristoforo Colombo, 4<br>Milano (MI)<br>20144<br>Italy</p>'
  });
                
infowindow.open(map,marker);
            }




