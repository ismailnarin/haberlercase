document.addEventListener("DOMContentLoaded", function () {
  const sliderPhoto = Array.from(
    { length: 25 },
    (_, index) => `assets/image/slider/${index + 1}.jpg`
  );

  const sliderNumberDiv = document.getElementById("sliderNumber");
  const sliderImageContainer = document.getElementById("sliderImageContainer");
  let currentIndex = 0;
  let prevIndex = 0;
  let nextIndex = 0;
  const mainImage = document.createElement("img");
  const prevImage = document.createElement("img");
  const nextImage = document.createElement("img");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function updateMain() {
    mainImage.src = sliderPhoto[currentIndex];
    sliderImageContainer.appendChild(mainImage);
  }

  function updatePrev() {
    const firstChild = sliderImageContainer.firstChild;

    prevIndex =
      currentIndex - 1 < 0 ? sliderPhoto.length - 1 : currentIndex - 1;
    prevImage.src = sliderPhoto[prevIndex];
    sliderImageContainer.insertBefore(prevImage, firstChild);
  }

  function updateNext() {
    nextIndex =
      currentIndex + 1 > sliderPhoto.length - 1 ? 0 : currentIndex + 1;
    nextImage.src = sliderPhoto[nextIndex];
    sliderImageContainer.appendChild(nextImage);
    console.log(currentIndex);
  }

  updatePrev();
  updateMain();
  updateNext();

  for (let i = 1; i <= sliderPhoto.length; i++) {
    const spanElement = document.createElement("span");
    spanElement.textContent = i + " ";
    spanElement.addEventListener("mouseover", function () {
      mainImage.src = sliderPhoto[i - 1];
      currentIndex = i - 1;
      prevIndex =
        currentIndex - 1 < 0 ? sliderPhoto.length - 2 : currentIndex - 1;
      nextIndex = currentIndex + 1 > sliderPhoto.length ? 0 : currentIndex + 1;

      prevImage.src = sliderPhoto[prevIndex];
      nextImage.src = sliderPhoto[nextIndex];
    });
    sliderNumberDiv.appendChild(spanElement);
  }
  prevButton.addEventListener("click", function () {
    prevImage.style.transition = "transform 0.3s ease";
    mainImage.style.transition = "transform 0.3s ease";
    nextImage.style.transition = "transform 0.3s ease";
    prevImage.style.transform = "translateX(0%)";
    mainImage.style.transform = "translateX(0%)";
    nextImage.style.transform = "translateX(0%)";

    currentIndex = prevIndex;
    setTimeout(deneme, 300);
  });

  function deneme() {
    sliderImageContainer.removeChild(prevImage);
    sliderImageContainer.removeChild(nextImage);
    mainImage.src = sliderPhoto[currentIndex];
    prevImage.style.transition = "transform 0s ease";
    mainImage.style.transition = "transform 0s ease";
    nextImage.style.transition = "transform 0s ease";

    prevImage.style.transform = "translateX(-100%)";
    mainImage.style.transform = "translateX(-100%)";
    nextImage.style.transform = "translateX(-100%)";
    updatePrev();
    updateNext();
  }
  nextButton.addEventListener("click", function () {
    prevImage.style.transition = "transform 0.3s ease";
    mainImage.style.transition = "transform 0.3s ease";
    nextImage.style.transition = "transform 0.3s ease";
    prevImage.style.transform = "translateX(-200%)";
    mainImage.style.transform = "translateX(-200%)";
    nextImage.style.transform = "translateX(-200%)";
    currentIndex = nextIndex;
    setTimeout(deneme, 300);
  });
});
