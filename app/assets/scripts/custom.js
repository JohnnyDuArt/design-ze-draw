/*

$(document).ready(
    
    $("a.roger").on("mouseover", function(){
        $("body").css("background-color", "yellow").window.innerWidth;
    })
);




$("a.roger").mouseover( function(){
    $(this).addClass("imagem").fadeIn;
    $("imagem").window.innerWidth;
    $("imagem").window.innerHeight;

});
*/

// 1. criar classe no CSS e puxar a imagem
// 2. em Hover, associar a classe CSS ao elemento.
// 3. este elemento tem que ter um z-index mais alto do que a img, e a img tem que ter mais alto que o restante


$(document).ready(function(){

    $('a.roger').on('mouseenter', function(){
        $('.black-effect').fadeIn(500);
        $('.img-projeto').fadeIn(2000); //css('opacity', '1').css('scale', '100%');
        $('.selected-projects').css('opacity', '0').css('transform', 'translateX(-300%)');
        $('.separator-line').css('opacity', '0').css('transform', 'translateX(300%)');
        $(this).css('z-index', '0');
        $('#jemimah').css('opacity', '0.3');
        $('#polar').css('opacity', '0.3');
        $('#invitly').css('opacity', '0.3');
        $('#lexani').css('opacity', '0.3');
        $('.section-about').css('opacity', '0').css('transform', 'translateY(200%)');

      
        return false;

    })

    $('a.roger').on('mouseleave', function(){
        $('.black-effect').fadeOut(2000);
        $('.img-projeto').fadeOut(500); //css('opacity', '0').css('scale', '0%');
        $('.selected-projects').css('opacity', '1').css('transform', 'translateX(0%)');
        $('.separator-line').css('opacity', '1').css('transform', 'translateX(0%)');
        $(this).css('z-index', '0');
        $('#jemimah').css('opacity', '1');
        $('#polar').css('opacity', '1');
        $('#invitly').css('opacity', '1');
        $('#lexani').css('opacity', '1');
        $('.section-about').css('opacity', '1').css('transform', 'translateY(0%)');
        

      
        return false;

    })

});
/*
$('a.roger').on('mouseleave', function(){
    $('.img-projeto').fadeOut(1500)
})
*/