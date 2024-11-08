// 상단 언어, 주요홈페이지 슬라이드 업다운
document.addEventListener("DOMContentLoaded", function() {
        var languageLink = document.getElementById("language");
        var langList = document.getElementById("lang_list");
    
        languageLink.addEventListener("click", function() {
            if (langList.style.height === "0px" || langList.style.height === "") {
                langList.style.height = langList.scrollHeight + "px"; // 슬라이드 다운
            } else {
                langList.style.height = "0px"; // 슬라이드 업
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var homepageLink = document.getElementById("homepage");
        var hpList = document.getElementById("hp_list");
    
        homepageLink.addEventListener("click", function() {
            if (hpList.style.height === "0px" || hpList.style.height === "") {
                hpList.style.height = hpList.scrollHeight + "px";
            } else {
                hpList.style.height = "0px";
            }
        });
    });


//탭메뉴
$(function() {
    $('.sub_group').hide();
    $('.mainMenu > li').on('mouseenter', function() {
        // 마우스가 메뉴에 들어갔을 때 슬라이드 다운
        $(this).find('.sub_group').stop().slideDown(300)/* .fadeIn(300) */;
    });

    $('.mainMenu > li').on('mouseleave', function() {
        // 마우스가 메뉴 영역을 벗어났을 때 슬라이드 업
        $(this).find('.sub_group').stop().slideUp(300)/* .fadeOut(300) */;
    });
});