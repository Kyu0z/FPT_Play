var main = {

    // header: function () {

    // },

    // slider: function () {
    //     var sliderHomeTrasfer = document.querySelector('.slider__home--box').clientWidth;

    //     var sliderHomeLink = document.querySelector('.slider__home--link')

    //     var fullImg = sliderHomeLink.getElementsByClassName('slider__home--img');

    //     var totalSlider = sliderHomeTrasfer * fullImg.length;

    //     totalSlider -= sliderHomeTrasfer;

    //     var nextBtn = document.querySelector('.slider__transfer--next');

    //     var prevBtn = document.querySelector('.slider__transfer--prev');


    //     var slider = 0;

    //     function nextSlider() {
    //         if (slider < totalSlider) {
    //             slider += sliderHomeTrasfer;
    //         } else {
    //             slider = 0;
    //         }

    //         sliderHomeLink.style.marginLeft = '-' + slider + 'px';
    //     }

    //     setInterval(nextSlider, 10000)

    //     nextBtn.addEventListener('click', nextSlider)

    //     function prevSlider() {
    //         if (slider == 0) {
    //             slider = totalSlider;
    //         } else {
    //             slider -= sliderHomeTrasfer;
    //         }
    //         sliderHomeLink.style.marginLeft = '-' + slider + 'px';
    //     }

    //     prevBtn.addEventListener('click', prevSlider)
    // },

    product: function () {
        var productBtnNext = document.querySelector('.next__product--next');
        var productBtnPrev = document.querySelector('.prev__product--prev');
        var product = document.querySelector('.container__product--item');

        productBtnNext.addEventListener('click', function () {
            product.style.transform = 'translateX(-100%)';
            productBtnNext.style.display = 'none';
            productBtnPrev.style.display = 'block';
        })

        productBtnPrev.addEventListener('click', function () {
            product.style.transform = 'translateX(0)';
            productBtnNext.style.display = 'block';
            productBtnPrev.style.display = 'none';
        })

    },

    // hotProduct: function () {
    //     var nextHot = document.querySelector('.hot-transfer-next');

    //     var prevHot = document.querySelector('.hot-transfer-prev');

    //     var Hot = document.querySelector('.hot-movies-app-item');

    //     nextHot.addEventListener('click', function () {
    //         Hot.style.transform = 'translateX(-100%)';
    //         nextHot.style.display = 'none';
    //         prevHot.style.display = 'block';
    //     })

    //     prevHot.addEventListener('click', function () {
    //         Hot.style.transform = 'translateX(0)';
    //         nextHot.style.display = 'block';
    //         prevHot.style.display = 'none';
    //     })
    // },

    // animeProduct: function () {
    //     var nextAnime = document.querySelector('.anime-next');

    //     var prevAnime = document.querySelector('.anime-prev');

    //     var anime = document.querySelector('.anime');

    //     nextAnime.addEventListener('click', function () {
    //         anime.style.transform = 'translateX(-100%)';
    //         nextAnime.style.display = 'none';
    //         prevAnime.style.display = 'block';
    //     })

    //     prevAnime.addEventListener('click', function () {
    //         anime.style.transform = 'translateX(0)';
    //         nextAnime.style.display = 'block';
    //         prevAnime.style.display = 'none';
    //     })
    // },

    // hboProduct: function () {
    //     var nextHbo = document.querySelector('.hbo-next');

    //     var prevHbo = document.querySelector('.hbo-prev');

    //     var HBO = document.querySelector('.HBO');

    //     nextHbo.addEventListener('click', function () {
    //         HBO.style.transform = 'translateX(-100%)';
    //         nextHbo.style.display = 'none';
    //         prevHbo.style.display = 'block';
    //     })

    //     prevHbo.addEventListener('click', function () {
    //         HBO.style.transform = 'translateX(0)';
    //         nextHbo.style.display = 'block';
    //         prevHbo.style.display = 'none';
    //     })

    // },

    // menuMobileChild: function () {
    //     var showMenuChild = document.querySelector('.header__menu--box-item-fixx');

    //     var menuChild = document.querySelector('.header__menu--show');

    //     var hideMenuChild = document.querySelector('.header__menu--item-hide');



    //     showMenuChild.addEventListener('click', function () {
    //         menuChild.classList.add('block-menu')
    //         hideMenuChild.style.display = 'block';
    //     })

    //     hideMenuChild.addEventListener('click', function () {
    //         menuChild.classList.remove('block-menu')
    //         hideMenuChild.style.display = 'none';
    //     })
    // },

    // showMenuMobile: function () {
    //     var menu = document.querySelector('.header__menu--icon');

    //     var boxMenu = document.querySelector('.header__menu--box');

    //     var closeMenu = document.querySelector('.close')

    //     menu.addEventListener('click', function () {
    //         boxMenu.classList.add('header__menu--box-block')
    //     })

    //     closeMenu.addEventListener('click', function () {
    //         boxMenu.classList.remove('header__menu--box-block')
    //     })
    // },

    // home: function () {
    //     window.addEventListener('scroll', function () {
    //         var topHome = document.querySelector('.back-to-top');

    //         topHome.classList.toggle('top-home', this.window.scrollY > 600)
    //     })
    // },

    start: function () {
        // this.header();
        // this.slider();
        this.product();
        // this.hotProduct();
        // this.animeProduct();
        // this.hboProduct();
        // this.menuMobileChild();
        // this.showMenuMobile();
        // this.home();
    }
}

main.start();