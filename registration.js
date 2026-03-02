// profile picture
function uploadPicture() {
    const newImageSrc = 'https://static.wikia.nocookie.net/the-snack-encyclopedia/images/7/7d/Apple.png/revision/latest?cb=20200706145821';
    const imgElement = document.getElementById('circle-img');
    
    if (!imgElement) {
        console.error('Image element not found!');
        return;
    }
    
    imgElement.src = newImageSrc;
    window.alert('Your profile picture has been uploaded.');
    window.alert('To register, click OK');
}