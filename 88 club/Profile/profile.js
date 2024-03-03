document.addEventListener('DOMContentLoaded', function () {
    var homeBtn = document.getElementById('homeBtn');

    homeBtn.addEventListener('click', function () {
        // Redirect to the user profile page using an absolute path
        window.location.href = '../Home/home.html';
    });
});
