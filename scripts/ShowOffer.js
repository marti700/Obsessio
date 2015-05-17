$(document).ready(function(){
    $('td', this).click(function(){
        //ajouté l'information a la lightbox
        $('#lightbox-container>object').attr('data', './html/elimon.html');
        $('#lightbox-container').css('display', 'block'); //afficher la lightbox
    });

    $('#lightbox-container').click(function(){
        $('#lightbox-container').css('display', 'none'); // masquer la lightbox
        $('#lightbox-container>object').removeAttr('data'); // supprimer l'intégré page
    });
});


