$(document).ready(function(){
    $('td', this).click(function(){
        //ajouté l'information a la lightbox
        $('#lightbox-container').append('<object width="400" height="400" data="./html/elimon.html"> </object>');
        $('#lightbox-container').css('display', 'block'); //afficher la lightbox
    });

    $('#lightbox-container').click(function(){
        $('#lightbox-container').css('display', 'none'); // masquer la lightbox
        $('#lightbox-container').empty(); // supprimer enfant
    })
});


