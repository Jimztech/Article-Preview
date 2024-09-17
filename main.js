document.getElementById('share-icon').addEventListener('click', function() {
    const subFooter = document.getElementById('applied');
    const root = document.querySelector(":root");
    const rootStyles = getComputedStyle(root);
    const desaturatedDarkBlue = rootStyles.getPropertyValue("--DesaturatedDarkBlue");

    subFooter.innerHTML = `
        <div class="hovering-footer">
            <h3 class="share-footer">SHARE</h3>
            <div class="hovering-icons">
                <a onclick="window.open('https://www.facebook.com', '_blank')" class="facebook-social-icon">
                    <img src="./images/icon-facebook.svg" alt="facebook" class="facebook">
                </a>
                <a onclick="window.open('https://www.x.com', '_blank')" class="twitter-social-icon">
                    <img src="./images/icon-twitter.svg" alt="twitter" class="twitter">
                </a>
                <a onclick="window.open('https://www.pinterest.com', '_blank')" class="pinterest-social-icon">
                    <img src="./images/icon-pinterest.svg" alt="pinterest" class="pinterest">
                </a>
            </div>
            <button class="share-icon" id="share-icon">
            <img 
                src="./images/icon-share.svg" 
                alt="share" 
                class="share"
            >
            </button>
        </div>
    `;
    document.querySelector('.hovering-footer').style.backgroundColor = desaturatedDarkBlue;
});



