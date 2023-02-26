var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


// TOGGLE BETWEEN LIGHT AND DARK THEME
var html = document.getElementsByTagName('html')[0];
var themeToggler = document.querySelector('.theme-toggle');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark')
} else {
    html.classList.remove('dark')
}

themeToggler.onclick = () => {
    html.classList.toggle('dark');

    const event = new Event('themeChanged');
    document.dispatchEvent(event);
};



// TOGGLE TOP MENU 
var menuToggler = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');

menuToggler.onclick = () => {
    menu.classList.toggle('is-open');
    menuToggler.classList.toggle('is-open');
}

// CLOSE MENU WHEN CLICKED OUTSIDE
window.onclick = function (event) {
    if (event.target.contains(menu) && event.target !== menu) {
        menuToggler.classList.remove('is-open');
        menu.classList.remove('is-open');
    } 
}


// TOGGLE SEARCH  
var searchOpen = document.querySelector('.search-toggle');
var searchClose = document.querySelector('.search-close');
var search = document.querySelector('.search');

searchOpen.onclick = () => {
    search.classList.toggle('is-open');
    document.getElementById('search-input').focus({preventScroll: true});
}
searchClose.onclick = () => {
    search.classList.toggle('is-open');
}


// DETECT AD BLOCKER
async function detectAdBlock(){
    if (document.querySelectorAll('.pub').length){
        let adBlockEnabled = false

        if (document.querySelector('.pub').clientHeight < 20) {
            adBlockEnabled = true;
            html.classList.add('ad-blocker-enabled');
        }
        console.info(`AdBlock Enabled: ${adBlockEnabled}`)
    }
}
// setTimeout(detectAdBlock(), 2000);


if (document.querySelectorAll('header.bg-transparent').length){
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;

        if (scrollPosition >= 30) {
            header.classList.add('js-invert');
        } else {
            header.classList.remove('js-invert');
        }
    });
}

var elements = document.querySelectorAll('.score');
window.addEventListener('scroll', function (event) {
    Array.prototype.forEach.call(elements, function(el, index, array){
        if (isInViewport(el)) {
            el.classList.add('js-animate');
        }
    });
}, false);


// var element = document.querySelector('.score');
// window.addEventListener('scroll', function (event) {
// 	if (isInViewport(element)) {
// 		element.classList.add('js-animate');
// 	}
// }, false);


// FILTERS  
if (document.querySelectorAll('#filters').length){
    var filtersToggler = document.querySelector('.filters-toggle');
    var filterWrapper = document.querySelector('#filters');
    var clearFilters = document.querySelector('.clear-filters');
    var applyFilters = document.querySelector('.apply-filters');
    var checkboxes = document.querySelectorAll('#filters input[type=checkbox]');
    var iconFilter = document.querySelector('.icon-filters');
    var iconClose = document.querySelector('.icon-close');
    var numFiltersApplied = 0;

    filtersToggler.onclick = () => {
        filterWrapper.classList.toggle('hidden');
        filtersToggler.classList.toggle('is-open');
        iconFilter.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    }

    clearFilters.onclick = () => {
        Array.prototype.forEach.call(checkboxes, function(el, index, array){
            el.checked = false;
        });
        numFiltersApplied = 0;
        filtersToggler.getElementsByTagName('span')[0].innerHTML = filtersToggler.attributes['data-label'].value;
    }

    applyFilters.onclick = () => {
        filterWrapper.classList.toggle('hidden');
        filtersToggler.classList.toggle('is-open');
        numFiltersApplied = 0;

        Array.prototype.forEach.call(checkboxes, function(el, index, array){
            if (el.checked){
                numFiltersApplied++;
            };
        });
        if (numFiltersApplied > 0){
            filtersToggler.getElementsByTagName('span')[0].innerHTML = filtersToggler.attributes['data-label'].value + ' ('+numFiltersApplied+')';
        } 

        iconFilter.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    }
}

//CARROUSEL
const swiper = new Swiper('.carrousel', {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
    },
});

swiper.init();