/* Thomas Mulloy, thomasmulloy.com */
/* video as fullscreen background, maintained aspect ratio, centered */

(function($){

  $.fn.fullscreen = function(){

    var $el = this,
      w = $el.width(),
      h = $el.height(),
      ar = w/h,
      scr_w,
      scr_h,
      scr_ar;

    function scale(){
      scr_w = $(window).width();
      scr_h = $(window).height();
      scr_ar = scr_w/scr_h;

      var tmp_h, tmp_w;

      if(scr_ar < ar){
        tmp_w = Math.ceil(scr_h*ar);
        $el.height(scr_h).width(tmp_w).css({
          'margin-top': 0,
          'margin-left': -Math.floor((tmp_w-scr_w)/2)
        });
      }else{
        tmp_h = Math.ceil(scr_w/ar);
        $el.height(tmp_h).width(scr_w).css({
          'margin-top':-Math.floor((tmp_h-scr_h)/2),
          'margin-left': 0
        });
      }

    }

    $(window).on('resize', scale).trigger('resize');

    return false;
  };

}(jQuery));