$(document).ready(function() {
    var counted = false;

    function animateCounters(selector, endNumber) {
        $(selector).each(function() {
            var $this = $(this);
            $({ countNum: 0 }).animate({ countNum: endNumber },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum + '+');
                }
            });
        });
    }

    $(window).on('scroll', function() {
        var oTop = $('.section-2').offset().top - window.innerHeight;
        if (!counted && $(window).scrollTop() > oTop) {
            animateCounters('.project-counter h4', 450);
            animateCounters('.reviews-counter h4', 500); // Assuming 500+ is the target number for reviews
            counted = true;
        }
    });
});
