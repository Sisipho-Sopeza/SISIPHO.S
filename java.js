const movingImage = document.getElementById('movingImage');
let position = 0;
let direction = 1;

function moveImage() {
    position += direction;
    movingImage.style.transform = `translateX(${position}px)`;

    if (position >= 20 || position <= 0) {
        direction *= -1;
    }

    requestAnimationFrame(moveImage);
}

moveImage();


