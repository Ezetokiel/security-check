const video = document.getElementById('video');

// Request access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        alert('Give permission to access camera');
    });

// Get the popup element
const popup = document.getElementById('popup');
const passBtn = document.getElementById('pass');
const failBtn = document.getElementById('fail');
const checkBtn = document.getElementById('capture');

// Show the popup when the page loads
window.onload = function() {
    popup.style.display = 'block';
};

// When the user clicks on <span> (x), close the popup
passBtn.onclick = function() {
    checkBtn.href = 'securityt.html';
    popup.style.display = 'none';
};

failBtn.onclick = function(){
    checkBtn.href = 'securityf.html';
    popup.style.display = 'none';
}
