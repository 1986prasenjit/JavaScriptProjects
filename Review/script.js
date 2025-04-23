document.addEventListener("DOMContentLoaded", function () {
    console.log("Jai SiaRam🙏🏻🙏🏻");

    let reviewInput = document.getElementById("reviewInput");
    let reviewBtn = document.getElementById("reviewBtn");
    let reviewCards = document.getElementById("reviewCardsWrapper");
    let reviewStars = document.getElementById("stars");
    let reviewArray = JSON.parse(localStorage.getItem("reviewsTasks")) || [];
    let selectedStarRating = 0;

    reviewArray.forEach((reviews) => renderTask(reviews));

    reviewBtn.addEventListener("click", addReview);

    reviewStars.addEventListener("click",addStar);

    function addReview() {
        let newReview = reviewInput.value.trim();
        if (newReview === "" || selectedStarRating === 0){
            alert("To Proceed you need to add review and star");
            return;
        }

        let reviewInputValue = {
            id: new Date().toLocaleTimeString(),
            reviewText: newReview,
            rating: selectedStarRating,
        };
        reviewArray.push(reviewInputValue);
        saveReviewToLocal();
        renderTask(reviewInputValue);
        reviewInput.value = "";
        selectedStarRating = 0;
        highlightStars(0);
        console.log(reviewArray);
    }
    function addStar(e) {
        e.stopPropagation();
        if (e.target.classList.contains("reviewStar")) {
            selectedStarRating = parseInt(e.target.dataset.value);
            highlightStars(selectedStarRating);
        }
    }
    function renderTask(reviewTask) {
        let div = document.createElement("div");
        div.setAttribute("dataId", reviewTask.id);
        div.classList.add("reviewCards");

        let p = document.createElement("p");
        p.classList.add("reviewCardsPara");
        p.innerHTML = `${reviewTask.reviewText}`;
        div.appendChild(p);

        let starContainer = document.createElement("div");
        starContainer.classList.add("starContainer");

        for(let i = 0; i < reviewTask.rating; i++){
            let starImage = document.createElement("img");
            starImage.src = "./images/star.png";
            starImage.classList.add("reviewStar");
            starContainer.appendChild(starImage)
        }

        div.appendChild(starContainer);

        let button = document.createElement("button");
        button.classList.add("buttonWrapperBtn");
        button.innerHTML = "Delete";
        div.appendChild(button);

        div.querySelector("button").addEventListener("click", function (e) {
            e.stopPropagation();
            reviewArray = reviewArray.filter((review) => review.id !== reviewTask.id);
            div.remove();
            saveReviewToLocal();
        });
        reviewCards.appendChild(div);
    }
    function highlightStars(starsCount) {
        document.querySelectorAll(".reviewStar").forEach((star, index) => {
            if (index < starsCount) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }
    function saveReviewToLocal() {
        localStorage.setItem("reviewsTasks", JSON.stringify(reviewArray));
    }
});
