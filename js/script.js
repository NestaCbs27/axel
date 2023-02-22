// Team slider
new Splide( '#splide1', {
    type: "loop",
    perPage: 6,
    autoScroll: {
        speed: 2,
    },
    arrows: false,
    pagination: false,
    autoWidth: true,
} ).mount(window.splide.Extensions);

function displayCGU(){
    if($('.cgu').hasClass('hidden')){
      $('.cgu').removeClass('hidden')
      document.getElementById("cgu").scrollIntoView();
    }else{
      $('.cgu').addClass('hidden')
    }
    
  }
