console.log("are you working?");

const searchBox = document.getElementById("searchBox"),
    searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = function () {
    searchBox.classList.toggle("active");
};
