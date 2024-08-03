


$('.slideText').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
  });


// accordian 
document.addEventListener('DOMContentLoaded', function() {
  var headers = document.querySelectorAll('.accordian');
  
  headers.forEach(function(header) {
      var content = header.nextElementSibling;
      var icon = header.querySelector('i');
      content.style.display = 'none'; 
      icon.classList.add('fa-chevron-up'); 

      header.addEventListener('click', function() {
          if (content.style.display === 'none' || content.style.display === '') {
              content.style.display = 'block';
              icon.classList.remove('fa-chevron-up');
              icon.classList.add('fa-chevron-down');
          } else {
              content.style.display = 'none';
              icon.classList.remove('fa-chevron-down');
              icon.classList.add('fa-chevron-up');
          }
      });
  });
});




