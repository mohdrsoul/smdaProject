$(document).ready(function () {
    // Initially show the first item and hide the others
    $('.item1').show();
    $('.item2, .item3, .item4').hide();

    // Event handling for the first button
    $('.button-66').eq(0).on('click', function () {
        $('.item1').show();
        $('.item2, .item3, .item4').hide();
    });

    // Event handling for the second button
    $('.button-66').eq(1).on('click', function () {
        $('.item2').show();
        $('.item1, .item3, .item4').hide();
    });

    // Event handling for the third button
    $('.button-66').eq(2).on('click', function () {
        $('.item3').show();
        $('.item1, .item2, .item4').hide();
    });

    // Event handling for the fourth button
    $('.button-66').eq(3).on('click', function () {
        $('.item4').show();
        $('.item1, .item2, .item3').hide();
    });
});

// button active
function changeBackground(button) {
    // Remove the 'active' class from all buttons
    var allButtons = document.querySelectorAll('.button-66, .button-60');
    allButtons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    // Add the 'active' class to the clicked button
    button.classList.add('active');
}

/////////////////////////////////////////////////////

// Authority’s powers
document.addEventListener('DOMContentLoaded', function () {
    // Function to navigate to a specific carousel item
    function navigateTo(index) {
        const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));
        carousel.to(index);
    }

    // Add click event listeners to your buttons
    document.getElementById('button1').addEventListener('click', function () {
        navigateTo(0);
    });

    document.getElementById('button2').addEventListener('click', function () {
        navigateTo(1);
    });

    document.getElementById('button3').addEventListener('click', function () {
        navigateTo(2);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to navigate to a specific carousel item
    function navigateTo(index) {
        const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));
        carousel.to(index);
    }

    // Add click event listeners to your buttons
    document.getElementById('button1').addEventListener('click', function () {
        navigateTo(0);
    });

    document.getElementById('button2').addEventListener('click', function () {
        navigateTo(1);
    });

    document.getElementById('button3').addEventListener('click', function () {
        navigateTo(2);
    });
});

////////////////////////////

