document.addEventListener("DOMContentLoaded", function () {

    const nextButton = document.querySelector(".next-btn");

    nextButton.addEventListener("click", function () {

        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";

    });

});
