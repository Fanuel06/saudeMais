document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll('.containerBanners img');
    let currentIndex = 0;

    function showNextBanner() {
        banners[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].classList.add('active');
    }

    setInterval(showNextBanner, 4000); 
});

