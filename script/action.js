$('header').load('include/header.html', function(){
    $('.allmenu > li').mouseover(function(){
        $(this).find('.lnb').stop().slideDown(500)
        $(this).find('.lnb_bg').css({height:360})
    })
    
    $('.allmenu > li').mouseleave(function(){
        $('.lnb').stop().slideUp(200)
        $('.lnb_bg').css({height:''})
    })
    
    $('.lnb_1 > li').mouseenter(function(){
        $(this).find('.lnb_2').show();
        $('.lnb_bg').css({width:300})
    })
    
    $('.lnb_1 > li').mouseleave(function(){
        $(this).find('.lnb_2').hide();
    })

    $('.lnb_1,.lnb').mouseleave(function(){
        $('.lnb').stop().slideUp(200)
        $('.lnb_bg').css({width:'100%', height:0})
    })
   
    
    $('.lnb_2 > li').mouseenter(function(){
        $(this).find('.lnb_3').show();    
        $('.lnb_bg').css({width:500})
    })
    
    $('.lnb_2 > li').mouseleave(function(){
        $(this).find('.lnb_3').hide();
    }) 

    /* $('.gnb li').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
    }) */

    var activeMenu = localStorage.getItem('activeMenu');

    // 로컬 스토리지에 저장된 활성화된 메뉴 항목에 `on` 클래스를 추가합니다.
    if (activeMenu) {
        $('.gnb li').each(function() {
            if ($(this).find('a').attr('href') === activeMenu) {
                $(this).addClass('on');
            }
        });
    }
    $('.gnb li').click(function() {
        // 클릭한 li에 `on` 클래스를 추가하고 형제 li에서 `on` 클래스를 제거합니다.
        $(this).addClass('on').siblings().removeClass('on');
        
        // 클릭한 메뉴 항목의 링크를 로컬 스토리지에 저장합니다.
        var clickedLink = $(this).find('a').attr('href');
        localStorage.setItem('activeMenu', clickedLink);
    });
});



// $('#sub_section2 .option .all').click(function(){
//     $(this).find('figure').addClass('on').siblings().removeClass('on');
//     $('#sub_section2 .option .all figure').addClass('on').siblings().removeClass('on');
//     $('#sub_section2 .option .bluelight figure').removeClass('on')
//     $('#sub_section2 .option .polarized figure').removeClass('on')
//     $('#sub_section2 .option .mirrorlens figure').removeClass('on')
//     $('#sub_section2 .all_list').show().siblings().hide();
//     return false
// })

// $('#sub_section2 .option .polarized').click(function(){
//     $('#sub_section2 .option .polarized figure').addClass('on').siblings().removeClass('on');
//     $('#sub_section2 .option .all figure').removeClass('on')
//     $('#sub_section2 .option .bluelight figure').removeClass('on')
//     $('#sub_section2 .option .mirrorlens figure').removeClass('on')
//     $('#sub_section2 .polarized_list').show().siblings().hide();
//     return false
// })

// $('#sub_section2 .option .bluelight').click(function(){
//     $('#sub_section2 .option .bluelight figure').addClass('on').siblings().removeClass('on');
//     $('#sub_section2 .option .all figure').removeClass('on')
//     $('#sub_section2 .option .polarized figure').removeClass('on')
//     $('#sub_section2 .option .mirrorlens figure').removeClass('on')
//     $('#sub_section2 .bluelight_list').show().siblings().hide();
//     return false
// })

// $('#sub_section2 .option .mirrorlens').click(function(){
//     $('#sub_section2 .option .mirrorlens figure').addClass('on').siblings().removeClass('on');
//     $('#sub_section2 .option .all figure').removeClass('on')
//     $('#sub_section2 .option .polarized figure').removeClass('on')
//     $('#sub_section2 .option .bluelight figure').removeClass('on')
//     $('#sub_section2 .mirrorlens_list').show().siblings().hide();
//     return false
// })


$('#sub_section2 .option > div').click(function(){
    let className = $(this).attr('class');
    
    $(this).addClass('on');
    $(this).siblings().removeClass('on')
    $('#sub_section2 .'+className+'_list').show().siblings().hide();
    return false
})

$('#sub_section2 .filter .sub_gnb').click(function(){
    $('#sub_section2 .filter_menu').toggle()
    if($('#sub_section2 .filter_menu').css('display') != "none"){
        $('#sub_section2 .filter_menu').css({display:'flex'});
    }
        
    return false

})

$('footer').load('include/footer.html')