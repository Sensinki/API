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


// Web Speech API
document.addEventListener("DOMContentLoaded", () => {
    const resultInput = document.getElementById("result");
    const microphoneButton = document.getElementById("microphoneButton");

    microphoneButton.addEventListener("click", () => {
        // SpeechRecognition didn't work consistently, so I got help from chatGPT. That's how he solved it :)
        if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = "en-US";
            recognition.start();

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                resultInput.value = transcript;
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
            };
        } else {
            console.log("Speech recognition is not supported in your browser.");
        }
    });
});

// Click <li> and behave like <a> element in that <li>
document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
        const link = li.querySelector("a");
        if (link) {
            window.location.href = link.getAttribute("href");
        }
    });
});

// Trailer show and hide
document.getElementById("showTrailerButton").addEventListener("click", function () {
    var trailerSection = document.getElementById("trailersMovie");
    if (trailerSection.style.display === "flex") {
        trailerSection.style.display = "none";
    } else {
        trailerSection.style.display = "flex";
    }
});
