jQuery(document).ready(function($) {
    $(".walkbtn").click(function() {
        $(".walkthrough").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

    $('#games').masonry({
        columnWidth: 145,
        isFitWidth: true,
        itemSelector: '.games'
    });
});