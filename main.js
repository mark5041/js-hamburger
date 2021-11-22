const open_link = document.querySelector(".header-right > a");
const hamburger = document.querySelector(".hamburger-menu");
const close_link = document.querySelector(".close");

open_link.addEventListener('click',

    function()
    {
        // hamburger.style.display = "block";
        hamburger.classList.add("active");
    }
);

close_link.addEventListener('click',

    function()
    {
        // hamburger.style.display = "none";
        hamburger.classList.remove("active");
    }
);