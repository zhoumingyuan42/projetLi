$(document).ready(function(){

  //js pour la validation

  // Initialize form validation on the registration form.
  // It has the name attribute "contact-form"
  $("form[name='contact-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      nom: "required",
      prénom: "required",
      mail: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      portable:"required"
    },
    // Specify validation error messages
    messages: {
      nom: "Veuillez saisir votre nom",
      prénom: "Veuillez saisir votre prénom",
      mail: "Veuillez saisir une adresse valide",
      portable: "Veuillez saisir votre numéro de portable",
    }
  });
  //je commence par cacher les parties optionelles
  $(".partenariat, .invitation").hide();
  // vérifier la valeur d'input qui déclanche l'affichage de la partie caché lorsqu'on click dessus.
  $("input[name='type']").click(function(){
    var type = $("input[name='type']:checked").val();//récupérér la valeur
    if (type === 'partenariat'){ // comparer la valeur
      $(".partenariat").show(); // et afficher/cacher les partie selon la valeur
      $(".invitation").hide();
    }
    else if (type === 'invitation'){ // idem
        $(".invitation").show();
        $(".partenariat").hide();
    }
  });
  // je commence par cacher la partie 2 et 3, donc afficher que la partie 1 du formulaire.
  $(".form_p2, .form_p3").hide();

  $(".btn-12").click(function(){ // les buttons qui ont la class .btn-12 control l'affichage de la partie 1 et 2
    $(".form_p1, .form_p2").toggle(); // soit on cache 1 et affiche 2 soit cache 2 affiche 1, j'utilise donc toggle.
  });
  $(".btn-23").click(function(){ // item;
    $(".form_p2, .form_p3").toggle();
  });

  //ensuite c'est pour générer la récap
  $(".gen-récap").click(function(){ // lorsqu'on click uniquement sur le button enregistrer.
    $(".récap-text").empty();//pour être sûr que la zone de récap est vide pour commencer
    var nom =  "<p>Nom : " + $(".input-nom").val() + "</p>";
    var prenom =  "<p>Prénom : " + $(".input-prenom").val() + "</p>";
    var mail =  "<p>Mail : " + $(".input-mail").val() + "</p>";
    var num =  "<p>Numéro : " + $(".input-num").val() + "</p>";
    var nature = "<p>Vous êtes : " + $(".nature").val() + "</p>";

    var type = $("input:radio[name=type]:checked").val();

    var company = "<p>Votre Company : " + $(".company").val() + "</p>";
    var détail = "<p>Détails du Partenariat : " + $(".detail").val() + "</p>";

    var date = "<p>Date d'Évenement : " + $(".date").val() + "</p>";
    var lieu = "<p>Lieu d'Évenement : " + $(".lieu").val() + "</p>";
    var sujet = "<p>Sujet d'Évenement : " + $(".theme").val() + "</p>";
    $(".récap-text").append(//j'ajoute des partie dans le zone récap
      nom,
      prenom,
      mail,
      num,
      nature
    );
    //je vérifie la valeur d'input type pour décider quelle partie affiché
    if (type === 'inscription'){
      $(".récap-text").append("<p>Vous voudriez vous insctire aux Newsletters</p>");
    } else if (type === 'partenariat'){
      $(".récap-text").append("<p>Vous me contactez pour une proposition de partenariat commercial</p>");
      $(".récap-text").append(company, détail);
    } else if (type === 'invitation'){
      $(".récap-text").append("<p>Vous me contactez pour une invitation à une exposition</p>");
      $(".récap-text").append(date, lieu, sujet);
    }
  });
  var nameOptions = {data:["Zhou", "Manéo", "Kerouac","Andréa","Pala"]};
  var pnameOptions = {data:["Mingyuan", "Kilian", "Jack", "Paul", "Joan"]};
  $('.input-nom').easyAutocomplete(nameOptions);
  $('.input-prenom').easyAutocomplete(pnameOptions);



});
