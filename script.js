const noBtn = document.getElementById('noBtn');
const msgBox = document.getElementById('message-box');

const messages = [
    "Wrong lane! Try again 😄",
    "Needs more nitro! 🏎️",
    "Pothole ahead! Redirecting...",
    "Engine stall? Try the YES button!",
    "You're drifting! Stay on track 🏁"
];

noBtn.addEventListener('mouseover', () => {
    // Make the button jump to a random position
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Change the message
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    msgBox.innerText = randomMsg;
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Nice try, speedster! But you gotta hit the YES button! 💨");
});
