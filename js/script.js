// Team slider
new Splide( '#splide1', {
    type: "loop",
    perPage: 4,
    autoScroll: {
        speed: 1.5,
    },
    arrows: false,
    pagination: false,
    autoWidth: true,
} ).mount(window.splide.Extensions);
