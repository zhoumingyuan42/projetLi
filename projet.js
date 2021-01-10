$(document).ready(function(){
  //cacher list et grid, commencer par carrousel par défaut
  $(".list-affichage,.grid-affichage").hide();
  //quand on click sur le button on affiche la partie respective et cahcer les autres
  $(".list").click(function(){
      $(".grid-affichage,#carouselExampleIndicators").hide();
      $(".list-affichage").show();

  });
  $(".grid").click(function(){
      $(".list-affichage,#carouselExampleIndicators").hide();
      $(".grid-affichage").show();
  });
  $(".slide").click(function(){
      $(".grid-affichage,.list-affichage").hide();
      $("#carouselExampleIndicators").show();
  });
  //la partie suivant est pour controller le l'affiche de contenu à l'intérieur de list avec le menu vertical

  // j'affiche le prmier par défaut (cacher les autres)
  $(".list-anything, .list-blow, .list-art, .list-video").hide();


  $(".btn-monthly").click(function(){
    $(".list-colonne p").removeClass("clicked");
    $(".btn-monthly").addClass("clicked");
    $(".list-anything, .list-blow, .list-art, .list-video").hide();
    $(".list-monthly").show();
  });
  $(".btn-anything").click(function(){
    $(".list-colonne p").removeClass("clicked");
    $(".btn-anything").addClass("clicked");
    $(".list-monthly, .list-blow, .list-art, .list-video").hide();
    $(".list-anything").show();
  });
  $(".btn-blow").click(function(){
    $(".list-colonne p").removeClass("clicked");
    $(".btn-blow").addClass("clicked");
    $(".list-monthly, .list-anything, .list-art, .list-video").hide();
    $(".list-blow").show();
  });
  $(".btn-art").click(function(){
    $(".list-colonne p").removeClass("clicked");
    $(".btn-art").addClass("clicked");
    $(".list-monthly, .list-anything, .list-blow, .list-video").hide();
    $(".list-art").show();
  });
  $(".btn-video").click(function(){
    $(".list-colonne p").removeClass("clicked");
    $(".btn-video").addClass("clicked");
    $(".list-monthly, .list-anything, .list-blow, .list-art").hide();
    $(".list-video").show();
  });


});
