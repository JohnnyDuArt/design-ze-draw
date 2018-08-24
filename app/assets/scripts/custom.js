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
        $('.img-dubois').fadeIn(1500); //css('opacity', '1').css('scale', '100%');
        $('.selected-projects').css('opacity', '0');
        $('.separator-line').css('opacity', '0');
        $(this).css('z-index', '0');
        $('#jemimah').css('opacity', '0.3');
        $('#polar').css('opacity', '0.3');
        $('#invitly').css('opacity', '0.3');
        $('#lexani').css('opacity', '0.3');
        $('.section-about').css('opacity', '0').css('transform', 'translateY(200%)');
      
        return false;

    });

    $('a.roger').on('mouseleave', function(){
        $('.black-effect').fadeOut(1000);
        $('.img-dubois').fadeOut(500); //css('opacity', '0').css('scale', '0%');
        $('.selected-projects').css('opacity', '1');
        $('.separator-line').css('opacity', '1');
        $(this).css('z-index', '0');
        $('#jemimah').css('opacity', '1');
        $('#polar').css('opacity', '1');
        $('#invitly').css('opacity', '1');
        $('#lexani').css('opacity', '1');
        $('.section-about').css('opacity', '1').css('transform', 'translateY(0%)');   
      
        return false;

    });

    $('a.jemimah').on('mouseenter', function(){
        $('.black-effect').fadeIn(500);
        $('.img-jemimah').fadeIn(1500); //css('opacity', '1').css('scale', '100%');
        $('.selected-projects').css('opacity', '0');
        $('.separator-line').css('opacity', '0');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '0.3');
        $('#polar').css('opacity', '0.3');
        $('#invitly').css('opacity', '0.3');
        $('#lexani').css('opacity', '0.3');
        $('.section-about').css('opacity', '0').css('transform', 'translateY(200%)');

        return false;

    });

    $('a.jemimah').on('mouseleave', function(){
        $('.black-effect').fadeOut(1000);
        $('.img-jemimah').fadeOut(500); //css('opacity', '0').css('scale', '0%');
        $('.selected-projects').css('opacity', '1');
        $('.separator-line').css('opacity', '1');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '1');
        $('#polar').css('opacity', '1');
        $('#invitly').css('opacity', '1');
        $('#lexani').css('opacity', '1');
        $('.section-about').css('opacity', '1').css('transform', 'translateY(0%)');  
      
        return false;

    });

    $('a.polar').on('mouseenter', function(){
        $('.black-effect').fadeIn(500);
        $('.img-polar').fadeIn(1500); //css('opacity', '1').css('scale', '100%');
        $('.selected-projects').css('opacity', '0');
        $('.separator-line').css('opacity', '0');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '0.3');
        $('#jemimah').css('opacity', '0.3');
        $('#invitly').css('opacity', '0.3');
        $('#lexani').css('opacity', '0.3');
        $('.section-about').css('opacity', '0').css('transform', 'translateY(200%)');
      
        return false;

    });

    $('a.polar').on('mouseleave', function(){
        $('.black-effect').fadeOut(1000);
        $('.img-polar').fadeOut(500); //css('opacity', '0').css('scale', '0%');
        $('.selected-projects').css('opacity', '1');
        $('.separator-line').css('opacity', '1');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '1');
        $('#jemimah').css('opacity', '1');
        $('#invitly').css('opacity', '1');
        $('#lexani').css('opacity', '1');
        $('.section-about').css('opacity', '1').css('transform', 'translateY(0%)');   
      
        return false;

    });

    $('a.invitly').on('mouseenter', function(){
        $('.black-effect').fadeIn(500);
        $('.img-invitly').fadeIn(1500); //css('opacity', '1').css('scale', '100%');
        $('.selected-projects').css('opacity', '0');
        $('.separator-line').css('opacity', '0');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '0.3');
        $('#jemimah').css('opacity', '0.3');
        $('#polar').css('opacity', '0.3');
        $('#lexani').css('opacity', '0.3');
        $('.section-about').css('opacity', '0').css('transform', 'translateY(200%)');
      
        return false;

    });

    $('a.invitly').on('mouseleave', function(){
        $('.black-effect').fadeOut(1000);
        $('.img-invitly').fadeOut(500); //css('opacity', '0').css('scale', '0%');
        $('.selected-projects').css('opacity', '1');
        $('.separator-line').css('opacity', '1');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '1');
        $('#jemimah').css('opacity', '1');
        $('#polar').css('opacity', '1');
        $('#lexani').css('opacity', '1');
        $('.section-about').css('opacity', '1').css('transform', 'translateY(0%)');   
      
        return false;

    });

    $('a.lexani').on('mouseenter', function(){
        $('.black-effect').fadeIn(500);
        $('.img-lexani').fadeIn(1500); //css('opacity', '1').css('scale', '100%');
        $('.selected-projects').css('opacity', '0');
        $('.separator-line').css('opacity', '0');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '0.3');
        $('#jemimah').css('opacity', '0.3');
        $('#polar').css('opacity', '0.3');
        $('#invitly').css('opacity', '0.3');
        $('.section-about').css('opacity', '0').css('transform', 'translateY(200%)');
      
        return false;

    });

    $('a.lexani').on('mouseleave', function(){
        $('.black-effect').fadeOut(1000);
        $('.img-lexani').fadeOut(500); //css('opacity', '0').css('scale', '0%');
        $('.selected-projects').css('opacity', '1');
        $('.separator-line').css('opacity', '1');
        $(this).css('z-index', '0');
        $('#roger').css('opacity', '1');
        $('#jemimah').css('opacity', '1');
        $('#polar').css('opacity', '1');
        $('#invitly').css('opacity', '1');
        $('.section-about').css('opacity', '1').css('transform', 'translateY(0%)');   
      
        return false;

    });


});
