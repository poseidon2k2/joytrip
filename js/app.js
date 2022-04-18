const images = document.querySelectorAll(".img-click");
      images.forEach((el) => el.addEventListener("click", handleChangeImage));
      function handleChangeImage(e) {
        const source = e.target.getAttribute("src");
        const featureImage = document.querySelector(".feature-image");
        featureImage.setAttribute("src", source);
	  }
	  

$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    draggable: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".image-slider-2").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    draggable: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


function nav1Function() {
  var nav1 = document.getElementById("icon-nav-1");
  nav1.classList.toggle("active-nav");
}

function nav2Function() {
  var nav2 = document.getElementById("icon-nav-2");
  nav2.classList.toggle("active-nav");
}