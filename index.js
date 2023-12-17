document.addEventListener("DOMContentLoaded", function () {
  const sliderPhoto = Array.from(
    { length: 25 },
    (_, index) => `assets/image/slider/${index + 1}.jpg`
  );
  console.log(sliderPhoto);
  const sliderNumberDiv = document.getElementById("sliderNumber");
  const sliderImage = document.getElementById("sliderImage");
  for (let i = 1; i <= sliderPhoto.length; i++) {
    const spanElement = document.createElement("span");
    spanElement.textContent = i + " ";
    spanElement.addEventListener("mouseover", function () {
      console.log(sliderPhoto[i - 1]);
      sliderImage.src = sliderPhoto[i - 1];
    });
    sliderNumberDiv.appendChild(spanElement);
  }
});
