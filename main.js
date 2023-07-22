let modal = document.getElementById("modal");
let hamburgerIcon = document.getElementById("hamburgerIcon");
let closeButton = document.getElementsByClassName("close")[0];

hamburgerIcon.addEventListener("click", function () {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

window.onload = () => {
    new Swiper(".swiper", {
        // initialSlide: 1,
        // loop: true,
    }); //スライダーを包む要素のクラス名を入れてください
};
