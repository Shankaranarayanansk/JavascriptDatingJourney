const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');
const imgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];
let index = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-left')) {
            index--;
            if (index < 0) {
                index = imgs.length - 1;
            }
            container.style.background = `url("${imgs[index]}.jpg") center/cover fixed no-repeat`;
            container.style.backgroundSize = 'cover'; // Add this line for responsiveness
        } else {
            index++;
            if (index === imgs.length) {
                index = 0;
            }
            container.style.background = `url('${imgs[index]}.jpg') center/cover fixed no-repeat`;
            container.style.backgroundSize = 'cover'; // Add this line for responsiveness
        }
    });
});
