$(document).ready(function() {

    var data = "<ul class=\"nav navbar-nav\">";
    
    data += '<li><a href="homepage.html"><p class ="navlink">HOMEPAGE</p></a></li>';
    data += '<li><a href="ourcompany.html"><p class ="navlink">OUR COMPANY</p></a></li>';
    data += '<li><a href="#"><p class ="navlink">SETTINGS</p></a></li>';
    data += '<li><a href="producttypes.html"><p class ="navlink">PRODUCTS</p></a></li>';
    data += '<li><a href="events.html"><p class ="navlink">EVENTS</p></a></li>';
    data += '<li><a href="#"><p class ="navlink">DESIGNERS</p></a></li>';
    data += '<li><a href="#"><p class ="navlink">SHOWROOMS</p></a></li>';
    data += '<li><a href="#"><p class ="navlink">OUR SERVCES</p></a></li>';
    
    data += "</ul>";
    
    $("#bs-example-navbar-collapse-1").prepend(data);
    
    $('header').prepend('<img src="img/logo-hsh.jpg">');
    
    $('footer').prepend('<p> Copyright Home Sweet Home 2015 </p><p><a href="contact us.html">CONTACT US</a></p>');
}); 
