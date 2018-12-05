/*
Available as a WordPress plugin - https://wordpress.org/plugins/snow-flurry/
Reference to https://codepen.io/html5andblog/pen/pjKvgG
*/

jQuery(document).ready(function($){

  $(document).snowFlurry({
        maxSize:  7,
        numberOfFlakes: 50,
        minSpeed: 5,
        maxSpeed: 15,
        color: '#fff',
        timeout: 0
    });

});
