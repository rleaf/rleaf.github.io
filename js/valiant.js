$(document).ready(function() {

   $(window).scroll(function() {

      if ($(window).scrollTop() > 50) {
         $('.nav-bar').addClass('nav-bar-scrolled');
      } else {
         $('.nav-bar').removeClass('nav-bar-scrolled');
      }
   });

   let modal = $('.custom-modal-body')[0];

   // For X in the corner
   // $(document).on('click', '.modal-close', function() {
   //    console.log('toads');
   //    modal.style.display = 'none';
   // })

   modal.addEventListener('click', function() {
      this.style.display = 'none';
   });

   $(document).on('click', '.img-text', function() {
      // console.log('atads');
      let imageSrc = $(this).parents('.col-md-4').find('img').attr('src');
      console.log(imageSrc);

      $('.modal-content').attr('src', imageSrc);

      // $(this).toggleClass('active');
      modal.style.display = 'block';
      console.log('block');
   });
});
