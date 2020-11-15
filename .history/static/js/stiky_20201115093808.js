$(window).scroll(function(){
    var y = $(window).scrollTop();
    
    console.log(y);
    
    //container
    if(y > 600 && y < 1250) {
        $('.container').css({
            margin:'0 0 0 100px'
        });
    }else{
        $('.container').css({
            margin:'0 0 0 -11000px'
        });
    }
    //Qoute
    if(y > 1200){
        $('#quote').css({
            margin:'0px',
            padding:'100px 0px 0px 0px',
            transition:'1s',
            opacity:'100%'
        })
    }else{
        $('#quote').css({
            margin:'0px 0px 0px -10000px',
            padding:'0px',
            opacity:'0%'
        })
    }
    //about
    if ( (y > 300 && y < 500 ) || (y > 1300 ) || (y > 700 && y < 1300)){
        $('.navbar').addClass('bg-dark ');
        $('.navbar').css({
            transition:'0.5s'
        })
        $('.row').css({
            position : 'relative',
            left: '-100px',
            top: '-200px',
            right: '0px',
            opacity:'0%',
        });
    }else{
        $(".navbar").removeClass('bg-dark');
        $('.row').css({
            position: 'fixed',
            top: '200px',
            right: '-1px',
            left:'250px',
            transition: ' 1s',
            opacity:'100%'
        });
    }
  });

