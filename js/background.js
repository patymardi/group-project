console.log('Hello World!')
var backgrounds = ['africa', 'asia-china', 'category-north-america','Oceania', 'tmg-article_default_mobile']
$( document ).ready(function(){
  $('h1').on('africa', function () {
    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var imageUrl = "url('./images/" + randomBackground + ".jpg')"
$('body').css('background', imageUrl)
var artist = randomBackground.replace(/-/g,'');
$('span').text(artist)
  })
})
