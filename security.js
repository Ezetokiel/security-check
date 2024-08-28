const loadingScreen = document.querySelector(".loading-container");

window.onload = function() {
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 4000);
}


