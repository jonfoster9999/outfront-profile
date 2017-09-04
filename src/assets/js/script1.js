$(document).ready(function (e) {

    $(document).on('click', '.learnMoreBtn', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 150
    }, 800);
});


    var srcCode = $(".srcPop").html();
    $(".srcPopCopy").html("" + srcCode + "");
    $(".srcPop").html(" ");
    $(".srcPop").show();

    $(".countryList").mouseover(function (eve) {
        eve.stopPropagation();

        $(".countryList ul").show();
        if ($(window).width() > 550) {
            $(".srcPopCopy").hide();
        }

        menuClose()

    });
    $(".countryList").mouseout(function () {
        $(".countryList ul").delay(3000).hide(0);

    });

    /*Select a Market Begins*/
    $('.select-market a').on('click', function (eve) {
        menuClose()
        var docHgt = $(window).height();
        $(".topNav .select-market-table").css({ height: "" + (docHgt - 80) + "px" })
        $(".topNav .sltMrtCont .row").css({ height: "" + (docHgt - 240) + "px" })
        $('.select-market-table, .blkOvly').fadeIn();
        eve.stopPropagation();
    });
    $('.close-market').on('click', function () {
        $('.select-market-table').fadeOut();
        $('.blkOvly').fadeOut();
        eve.stopPropagation();
    });
    /*Select a Market Ends*/


    $(".part1 .threeColmRow .imgRow h2").click(function (eve) {
        if ($(window).width() < 650) {
            $(".part1 .threeColmRow .imgRow h2").removeClass("active");
            var childNum = $(this).attr("class");
            $(".txtPrt .colm").hide()
            $(".txtPrt .colm:nth-child(" + childNum + ")").show()
            $(this).addClass("active");

        }

    })

    $(".part1 .threeColmRow .imgRow a h2").click(function () {
        var childNum = $(this).attr("class");
        var childNumcls = childNum.slice(-1)
        if ($(window).width() >= 550) {
            if (childNumcls == "1") {
                window.location.href = "/whatwedo/solutions/local/Pages/default.aspx";
            }
            else if (childNumcls == "2") {
                window.location.href = "/whatwedo/solutions/National/Pages/default.aspx";
            }
            else if (childNumcls == "3") {
                window.location.href = "/WhereWeAre/Markets/Pages/default.aspx";
            }
        }
    })
    $(".srcIc").click(function (eve) {

        $(".srcPopCopy").toggle();
        $(".ms-srch-sb > input").focus();
        eve.stopPropagation();

        menuClose()
        $(".countryList > ul").hide();
    })



    $(".dwArr .arr").mouseover(function () {
        $(this).animate({ marginTop: "-10px" }, 500);
    })
    $(".dwArr .arr").mouseout(function () {
        $(this).animate({ marginTop: "-25px" }, 500);
    })

    $(".dwArr .arr").click(function () {
        var hrefId = $(this).parent().attr('href');

    });


    $(".ms-srch-sb-searchLink").click(function (eve) {
        if ($("input. ms-srch-sb-prompt").val() == "search this site") {

        }
        eve.stopPropagation();
    })
    $(".ms-srch-sb > input").click(function (eve) {
        eve.stopPropagation();
    });

    /*Body Click Hide*/
    $('body').on('click', function () {
        //$('.customSelect ul').slideUp();
    });

   

    /*Window scrolltop Begins*/
    $('.dwArr a').on('click', function (event) {
        var target = $(this).attr('href').slice('1');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $('#' + target).offset().top - 100 }, 1000);
        }
    });

    /*Window scrolltop Ends*/


    // $(window).scroll(function () {
    //     if ($(window).width() >= 940) {
    //         $(".srcPopCopy").hide();
    //         var headerOffset = $(window).scrollTop();
    //         if (headerOffset <= "50") {
    //             $("header").removeClass("headSmall");
    //             $(".menuCont").removeClass("menuContSmall");

    //         }
    //         else {
    //             $("header").addClass("headSmall");
    //             $(".menuCont").addClass("menuContSmall");

    //         }
    //     }
    // });
    /*More Products Begins*/
    var moreProductLink = $('.breadcrumb_section > span');

    moreProductLink.on('click', function () {
        $(this).toggleClass('active');
        $(this).next('ul').toggle();
    });

    $('.breadcrumb_section ul li a').on('click', function () {
        $(this).parent().parent().toggle();
        moreProductLink.toggleClass('active');
    });
    /*More Products Ends*/


    $(document).click(function (eve) {

        menuClose()
        if ($(".customSelect").length >= 0) {
            $(".customSelect").removeClass("custActive")
            $(".customSelect ul").slideUp();
        }
        $(".countryList > ul").hide();
        if ($(window).width() > 550) {
            $(".srcPopCopy").hide();
        }
        eve.stopPropagation();
    })


    function menuClose() {
        if ($(".mn").hasClass("mnActive")) {
            $(".mn").removeClass("mnActive")
            if ($(window).width() <= 940 && $(window).width() >= 550) {
                $(".menuCont ul.root").slideUp()
            }
            else if ($(window).width() <= 550) {
                $(".dvcdrop").slideUp()
            }
            $("ul.root li ul").css("right", -247);
            mnDivice = 1;
        }

    }

    /*Table Scroll Begains*/
    //$(".table-responsive").niceScroll({ autohidemode: false, cursorborder: 0 });

    $(".icon_print").click(function () {
        window.print();
    });

    //build mail to link
    //get page title
    var pagetitle = '';
    $(".page_title_block > h3").each(function () {
        pagetitle = $(this).html().replace("&nbsp;", "");
    });
    //  var pagetitle = $(".page_title_block").find("h3").html().replace("&nbsp;", "");
    $(".icon_email").attr("href", "mailto:?subject=" + pagetitle + "&body=I thought you might find this information interesting:%20%0d%0a" + window.location.href + "");


    //Lets' Connect - Request Proposal 
    var ctn = $(".btn_rp");
    if (ctn != null) {
        if (ctn.text() == "REQUEST A PRICING PROPOSAL") {
            ctn.text("Let's Connect!");
        }
        ctn.click(function () {
            location.href = '/pages/contact.aspx';
        });
    }

    var ctn = $(".btn_rp");
    if (ctn != null) {
        if (ctn.text() == "Let's Connect!") {
            ctn.attr("style", "text-decoration:none !important;color:white !important;");
        }
       
    }

    //double tap
    $('.countryList a').on('click touchend', function (e) {
        touchTap($(this),e);
    });

    $('.OFMdynamic a').on('click touchend', function (e) {
        touchTap($(this),e);
    });

    $('.breadcrumb_section a').on('click touchend', function (e) {
        touchTap($(this),e);
    });

    function touchTap(tElement,ev) {
        var el = tElement;
        if (el.attr('href') != null) {
            if (el.attr('target') != null) {
                if (ev.type != 'click') {
                    var link = el.attr('href');
                    window.open(link, el.attr('target'));
                    ev.preventDefault();
                }
            } else {
                var link = el.attr('href');
                window.location = link;
            }
        }
    }

    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

});