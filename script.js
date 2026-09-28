const photos = document.querySelectorAll(".photo");

photos.forEach(photo => {

    photo.addEventListener("click", function () {

        photos.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});