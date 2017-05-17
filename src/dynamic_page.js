/* globals $, window, setInterval */

$(function () {

    var hasStarted = false;
    var startViewer = function () {
        $('.fadein p:gt(0)').hide();
        setInterval(function () { $('.fadein > :first-child').fadeOut(1000).next('p').fadeIn(1000).end().appendTo('.fadein'); }, 8000);
    };

    var newHash = "",
        $mainContent = $("#main-content"),
        // $pageWrap = $("#page-wrap"),
        // baseHeight = 0,
        $el;

    $("nav").delegate("a", "click", function () {
        window.location.hash = $(this).attr("href");
        return false;
    });

    $(window).bind('hashchange', function () {

        newHash = window.location.hash.substring(1);

        if (newHash) {
            $mainContent
                .find("#dynoContent")
                .fadeOut(100, function () {
                    $mainContent.hide().load(newHash + " #dynoContent", function () {
                        $mainContent.fadeIn(100, function () {
                            //alert(newHash);
                            $('.fadein p:gt(0)').hide();
                            if (newHash.indexOf("home") !== -1 && !hasStarted) {
                                hasStarted = true;
                                startViewer();
                            }
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href=" + newHash + "]").addClass("current");
                    });
                });
        }

    });


    if (window.location.hash === '') {
        $("#ahome").trigger('click');
    }
    else {
        $(window).trigger('hashchange');
    }
});


