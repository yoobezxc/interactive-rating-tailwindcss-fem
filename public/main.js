// state

const submitBtn = document.getElementById("submit-btn");
const ratingContainer = document.getElementById("rating-container");
const ratingUser = document.getElementById("rating-user");
const ratings = document.querySelectorAll(".ratings");
const thanksContainer = document.getElementById("thanks-container");

submitBtn.disabled = true;

submitBtn.addEventListener("click", () => {
  ratingContainer.classList.toggle("hidden");
  ratingContainer.classList.toggle("block");

  thanksContainer.classList.toggle("block");
  thanksContainer.classList.toggle("hidden");
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratingUser.textContent = rating.textContent;

    submitBtn.disabled = false;
  });
});
