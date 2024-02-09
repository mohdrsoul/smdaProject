     
//////////Dot img////////////
var dotsVisible = false;
var hideTimeout;

function toggleDots() {
  dotsVisible = !dotsVisible;
  document.querySelector('.dots-container').style.display = dotsVisible ? 'block' : 'none';
}

function hideDots() {
  hideTimeout = setTimeout(() => {
    if (!dotsVisible) {
      document.querySelector('.dots-container').style.display = 'none';
    }
  }, 200); // Adjust the delay as needed
}

function cancelHideDots() {
  clearTimeout(hideTimeout);
}

function chooseDot(dotNumber) {
  // Remove 'active' class from all dots
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active');
  });
  // Add 'active' class to the clicked dot
  document.querySelector('.dot' + dotNumber).classList.add('active');

  // Change the color of all elements with class 'title' based on the selected dot
  var titleElements = document.querySelectorAll('.title');
  switch (dotNumber) {
    case 1:
      titleElements.forEach(title => {
        title.style.color = '#ff0000'; // Red
      });
      break;
    case 2:
      titleElements.forEach(title => {
        title.style.color = '#a9994d'; // #a9994d
      });
      break;
    case 3:
      titleElements.forEach(title => {
        title.style.color = '#1014f6'; // #1014f6
      });
      break;
    case 4:
      titleElements.forEach(title => {
        title.style.color = ''; // Reset to the original color
      });
      break;
  }
}