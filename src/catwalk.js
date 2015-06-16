(function($) {

  $.catwalk = function(options) {

    var settings = $.extend({
        image: [
          'http://i.imgur.com/boxEFA9.png',
          'http://i.imgur.com/hXZxcvS.png',
          'http://i.imgur.com/dRIRNEf.png'
        ],
        height: 300, // image height
        width: 500, // image width
        comein_position: 80, // show cat after scroll more than percent of page height
        enter_from: 'left', // options: left, right
        enter_distance: -50 // the distance to window side
    }, options);

    meow(settings);

    var container = $('#catwalk_container');

    $(window).scroll(function(){
      var scroll = $(window).scrollTop(),
          window_h = $(window).height(),
          page_h = $(document).height(),
          come_in = {},come_out = {};
      come_in[settings.enter_from] = settings.enter_distance+'px';
      come_out[settings.enter_from] = '-'+(settings.width)+'px';

      if((scroll+window_h) > (page_h*(settings.comein_position/100))) {
        if(container.css(settings.enter_from) == '-'+settings.width+'px') {
          container.animate(come_in, 100);
        }
      }
      else {
        if(container.css(settings.enter_from) == settings.enter_distance+'px') {
          container.animate(come_out, 100);
        }
      }
    });
  };

  function meow(settings){
    var img_src;
    if($.isArray(settings.image) == true) {
      img_src = settings.image[Math.floor(Math.random() * (settings.image.length))];
    } else {
      img_src = settings.image;
    }
    var object = '<div id="catwalk_container" style="width:'+settings.width+'px; height:'+settings.height+'px; '+settings.enter_from+':-'+settings.width+'px; bottom:0;"><img src="'+img_src+'" style="width:'+settings.width+'px; height:'+settings.height+'px;"></div>';
    $('body').append(object);
  }

}(jQuery));
