$(function(){

    'use strict';

   $('.header .regist h3.op').on('click',function(event){
        event.stopPropagation();
        $('.header .regist .select-op').fadeToggle();
    });

    $(".header .regist .select-op").on("click", function (event) {
        event.stopPropagation();
    });

    $(document).on("click", function () {
        $(".header .regist .select-op").fadeOut();
    });

    // Select With Country
    var section = [
    " الأتصالات و تكنولوجيا المعلومات"
    , "الأنتاج الحيواني"
    , "الأنتاج الداجني"
    , "البتروكيماويات"
    , "البنية التحتية"
    , "البيئة " 
    , "التدريب" 
    , "الترفية" 
    , "التشيد و البناء" 
    , "التعبئة و التغليف" 
    , " التعدين" 
    , " التعليم" 
    ,"الخدمات - أخري"
    , "الرعاية الصحية"
    , "الزراعة- أخري"
    , "الزراعة و استصلاح الأراضي"
    , " السياحة "
    , "الصناعات البلاستيكية"
    , "الصناعات الخشبية والأثاث"
    , "الصناعات الدوائية والطبية"
    , "الصناعات الغذائية "
    , "الصناعات الكيماوية"
    , "الصناعات الهندسية والألكترونية"
    , "الصناعة - أخري"
    , "العقارات"
    , "الغزل والنسيج"
    , "الفنادق "
    , "المطاعم"
    , "المنتجعات و القري السياحية"
    , "النقل و اللوجستيات"
    , "تجارة التجزئة"
    , "تصنيع الزجاج ومنتجاتة"
    , "صناعات الجلود"
    , "صناعات تعدنية"
    , "صناعات معدنية"
    , "صناعات مواد البناء"
    , "صناعات مواد بناء ديكورية"
    , "صناعة السيارات"
    , "مراكز المؤتمرات والمعارض"
    , "مطور خدمي "
    , "مطور صناعي"
];
    $("#section").select2({
        data: section
    });

    // Select With Country
    var country = [
        "أسوان",
        "أسيوط",
        "الأقصر",
        "الإسكندرية",
        "الاسماعيلية",
        "البحر الأحمر ",
        "البحيرة",
        "الجيزة",
        "الدقهلية",
        "السويس",
        "الشرقية",
        "الغربية",
        "الفيوم",
        "القاهرة",
        "القليوبية",
        "المنوفية",
        "المنيا ",
        "الوادي الجديد",
        "بني سويف",
        "بور سعيد",
        "جنوب سيناء",
        "دمياط",
        "سوهاج",
        "شمال سيناء",
        "قنا",
        "كفر الشيخ",
        "مطروح"
    ];
    $("#country").select2({
        data: country
    });

    // Owl Section owlHeader
    $('#owlHeader').owlCarousel({
        rtl:true,
        autoplaySpeed: 500,
        animateOut:'fadeOut',
        autoplay:true,
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });

    // Owl Section News
    $('#News').owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        nav:true,
        rtl:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    // Toggle Links In Page Why
    $('.tabAbout .buttons a').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + $(this).data('toggle')).fadeIn();
        $('.content').not('.' +$(this).data('toggle')).hide();
    });

    
});