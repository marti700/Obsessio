$(window).ready(function(){
    $('.thumbnail', this).hover(function(){
        eWidth = parseInt($(this).css('width').match(/\d/g).join(""));
        eWidth += 2;
        var stylesin = {width: eWidth.toString(), height: "+2%"};
        //eWidth = $(this).css('width').match(/\d/g).join(""));
        $(this).css(stylesin);
    },function(){
        eWidth = parseInt($(this).css('width').match(/\d/g).join(""));
        eWidth -= 2;
        var stylesout = {width: eWidth.toString(), height: "-2%"};
        $(this).css(stylesout);
    });
    $('td', this).click(function(){
        console.log(this);
        //ajouté l'information a la lightbox
        $('#lightbox-container>object').attr('data', './html/' + this.getAttribute('call'));
        $('#lightbox-container').css('display', 'block'); //afficher la lightbox
    });

    $('#lightbox-container').click(function(){
        $('#lightbox-container').css('display', 'none'); // masquer la lightbox
        $('#lightbox-container>object').removeAttr('data'); // supprimer l'intégré page
    });
});


