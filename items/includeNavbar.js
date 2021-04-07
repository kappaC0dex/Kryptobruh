//  JQUERY IS A JAVASCRIPT LIBRARY WHICH IMPORTS THE NAVBAR
// FROM THE './items/navbar.html'
// FILE.So to make changes
// to the navbar edit that file.

// THIS SCRIPT IMPORTS THE NAVBAR FILE 
$(function () {
    $("#includedContent").load("/items/navbar.html");
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/src/favicon.jpg';

    document.getElementsByTagName('head')[0].appendChild(link);
}); 
