     //        _____________________________________________JS for slider main
     var countSlide = 0;
     setInterval(findNextSlider, 6000);

     var __l = parseInt($('.slide').length);

     findNextSlider();

     function findNextSlider() {

         if (countSlide < __l) {
             $('.slide').css('opacity', '0');
             $('.slide').eq(countSlide).css('opacity', '1');

             $('.slide-content').removeClass('slide-content-move');
             $('.slide-content').eq(countSlide).addClass('slide-content-move');
             countSlide++;
         } else if (countSlide == __l) //make counter 0 to start over dynamically
         {
             countSlide = 0;
             findNextSlider();
         }
     }
     //        _____________________________________________JS for slider bot
     _c = 0;
     $(document).ready(function() {
         _licount = $('.mini-slide').length;
         _outerwidth = $('.mini-slide').outerWidth();
         console.log(_licount, _outerwidth)
         $('.slide-roll').css('width', (_licount * _outerwidth) + (_licount * 50))
     })


     setInterval(slider1, 4000)



     function slider1() {

     }

     function rightClick() {

     }

     function leftClick() {

     }