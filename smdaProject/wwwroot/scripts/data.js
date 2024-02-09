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


//chart
anychart.onDocumentReady(function () {
    // set the data
    var data = [
        { x: "الأعمال الصغرى", value: 30, fill: "#004876" },
        { x: "الأعمال االصغيرة", value: 20, fill: "#0275A9" },
        { x: "الأعمال المتوسطة", value: 20, fill: "#AA9767" },
    ];
    // create the chart
    var chart = anychart.pie();

    // set the chart title
    // Hide the legend
    chart.legend(false);
    chart.labels(false);
    // add the data
    chart.data(data);
    chart.background().enabled(true).fill("none");

    // display the chart in the container
    chart.container('can');
    chart.draw();
});


var toggleButton = document.getElementById("morebtn");
var myDiv = document.getElementById("morebutton");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
    // Toggle the display property of the div
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
    } else {
        myDiv.style.display = "none";
    }
});

