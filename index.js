const images = ["mug.png", "key.png", "bag.jpg"];
    let currentIndex = 0;

    function changeImage() {
        const offerImage = document.getElementById("offerImage");
        currentIndex = (currentIndex + 1) % images.length;
        offerImage.src = images[currentIndex];
    }

    // Change image every 3 seconds
    setInterval(changeImage, 3000);
