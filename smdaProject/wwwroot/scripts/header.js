// Initialize Bootstrap dropdowns with custom behavior
$(document).ready(function () {
    $('.dropdown-toggle').on('click', function () {
        var $dropdown = $(this).parent().find('.dropdown-menu');
        $('.dropdown-menu').not($dropdown).removeClass('show');
        $dropdown.toggleClass('show');
    });

    // Close all dropdown menus when clicking outside of them
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.dropdown-toggle').length) {
            $('.dropdown-menu').removeClass('show');
        }
    });

    // Prevent dropdowns from closing when clicking inside them
    $('.dropdown-menu').on('click', function (event) {
        event.stopPropagation();
    });
});
