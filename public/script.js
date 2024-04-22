console.log("are you working?");

// Search button
const searchBox = document.getElementById("searchBox"),
    searchIcon = document.getElementById("searchIcon");

searchIcon.onclick = function () {
    searchBox.classList.toggle("active");
};


// Max 3 characters for vote 
document.addEventListener("DOMContentLoaded", function () {
    const voteAverageElements = document.querySelectorAll(".vote_average");

    voteAverageElements.forEach(function (voteAverageElement) {
        let voteAverage = voteAverageElement.textContent.trim();

        if (voteAverage.length > 3) {
            voteAverage = voteAverage.slice(0, 3);
        }

        voteAverageElement.textContent = voteAverage;
    });

    if (voteAverageElements.length === 0) {
        console.error("No elements with the class 'vote_average' found :(");
    }
});
