const text = "I am Sachin, a Data Analyst";
const typingElement = document.getElementById("typing-text");
let index = 0;
let isDeleting = false;

function typeLoop() {
  typingElement.textContent = text.substring(0, index);

  if (!isDeleting && index < text.length) {
    index++;
    setTimeout(typeLoop, 100); // typing speed
  } else if (isDeleting && index > 0) {
    index--;
    setTimeout(typeLoop, 50); // deleting speed
  } else {
    // Pause before switching direction
    setTimeout(typeLoop, 1000);
    isDeleting = !isDeleting;
  }
}

typeLoop();