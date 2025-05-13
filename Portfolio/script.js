// Smooth Scroll to Assignments Section
function scrollToAssignments() {
  const section = document.getElementById("assignments");
  section.scrollIntoView({ behavior: "smooth" });
}

// Wait for the page to load and add 'booted' class after 2.8 seconds
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('booted');
  }, 2800);
});

// Draggable Windows Functionality
document.querySelectorAll('.draggable').forEach(windowEl => {
  const titleBar = windowEl.querySelector('.title-bar');
  let isDragging = false, offsetX, offsetY;

  titleBar.style.cursor = "move";
  titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowEl.getBoundingClientRect().left;
    offsetY = e.clientY - windowEl.getBoundingClientRect().top;
    windowEl.style.position = 'absolute';
    windowEl.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      windowEl.style.left = `${e.clientX - offsetX}px`;
      windowEl.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});

// Show 'About Me' Dialog
function openAboutMe() {
  document.getElementById('aboutDialog').style.display = 'block';
}

// Close 'About Me' Dialog
function closeAboutMe() {
  document.getElementById('aboutDialog').style.display = 'none';
}

// Trigger Fake Error Dialog
function triggerFakeError() {
  document.getElementById('errorDialog').style.display = 'block';
}

// Close Error Dialog
function closeError() {
  document.getElementById('errorDialog').style.display = 'none';
}

// Loading and Enter Screen Functionality
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("enter-screen").style.display = "flex";
  }, 2500); // wait 2.5 seconds
};

// Enter Button Action
document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("enter-screen").style.display = "none";
  document.getElementById("main-site").style.display = "block";
});
