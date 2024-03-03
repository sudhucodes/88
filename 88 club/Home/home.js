// Updated JavaScript (home.js)

document.addEventListener("DOMContentLoaded", function () {
    const imageScroller = document.getElementById("imageScroller");
    const images = imageScroller.getElementsByTagName("img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }

    // Initial display
    images[currentIndex].style.display = "block";

    // Auto change image every 3 seconds
    setInterval(showNextImage, 3000);
});



document.addEventListener('DOMContentLoaded', function () {
    var homeBtnDiv = document.querySelector('.homebtndiv');
    var activityBtnDiv = document.querySelector('.activitybtndiv');
    var promotionBtnDiv = document.querySelector('.promotionbtndiv');
    var walletBtnDiv = document.querySelector('.walletbtndiv');
    var accountBtnDiv = document.querySelector('.accountbtndiv');

    homeBtnDiv.addEventListener('click', function () {
        // Add your Home button click functionality here
        console.log('Home button clicked');
    });

    activityBtnDiv.addEventListener('click', function () {
        // Add your Activity button click functionality here
        console.log('Activity button clicked');
    });

    promotionBtnDiv.addEventListener('click', function () {
        // Add your Promotion button click functionality here
        console.log('Promotion button clicked');
    });

    walletBtnDiv.addEventListener('click', function () {
        // Add your Wallet button click functionality here
        console.log('Wallet button clicked');
    });

    accountBtnDiv.addEventListener('click', function () {
        // Add your Account button click functionality here
        console.log('Account button clicked');
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var accountBtn = document.getElementById('accountBtn');

    accountBtn.addEventListener('click', function () {
        // Redirect to the user profile page
        window.location.href = '../Profile/profile.html';
    });
});


function wingo() {
    window.location.href = '../Wingo home/index.html'; 
}