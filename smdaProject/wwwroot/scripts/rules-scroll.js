
$(document).ready(function () {
    // Set the active item initially
    $("#div2").addClass("active");

    // Initialize the carousel manually
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
        interval: false // Disable automatic cycling
    });

    $("#btn2").click(function () {
        carousel.to(0); // Go to the first slide when button 1 is clicked
    });

    $("#btn1").click(function () {
        carousel.to(1); // Go to the second slide when button 2 is clicked
    });
});


///to download and view pdf
function downloadPDF() {
    // Specify the path to your PDF file
    var pdfFilePath = 'assets/pdf/test.pdf';

    // Create an anchor element
    var anchor = document.createElement('a');
    anchor.href = pdfFilePath;
    anchor.download = 'downloaded_file.pdf';

    // Append the anchor to the body (required for Firefox)
    document.body.appendChild(anchor);

    // Trigger a click on the anchor
    anchor.click();


}
function openPDF() {
    var pdfFilePath = 'assets/pdf/test.pdf';
    window.open(pdfFilePath, '_blank');
}

