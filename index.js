$(document).ready(function() {


  //changer img de fond lors qu'on met le souris sur les buttons

  $('.btn-pre').hover(function(){
    $('.acceuil-bg').attr("src", "img/presentation_bg.jpg");
  });

  $('.btn-projet').hover(function(){
    $('.acceuil-bg').attr("src", "img/projet_bg.jpg");
  });

  $('.btn-contact').hover(function(){
    $('.acceuil-bg').attr("src", "img/contact_bg.jpg");
  });

  $('.slogan').hover(function(){
    $('.acceuil-bg').attr("src", "img/acuille_bg.jpg");
  });






});
