openOfficialSite = function()
{
 window.open("https://goodcitychicago.org/investchicago/");
};

openLearnMore =  function() {
window.open("https://goodcitychicago.org/donations/invest/");
}

openDonate =  function() {
window.open("https://goodcitychicago.org/donate/");
}

openTimeTalents = function() {  window.open("https://goodcitychicago.org/volunteer/");
}

openPortfolioSite = function() {
    window.open("http://investchicago.org/");
}

$('.nav.navbar-nav > li').on('click', function(e) {
    $('.nav.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
});    