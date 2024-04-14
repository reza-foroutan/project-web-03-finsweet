const Slider = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider");
    let res = await data.json();
    // let result = res.slider;
    const slider = res.map((elem, index) => {
      return `<div class="swiper-slide">
      <p>
        ${elem.title}
      </p>
      <div>
      <img src="${elem.image}" alt="feature">
        <div>
          <p>${elem.name}</p>
          <p>${elem.name2}</p>
        </div>
      </div>
    </div>`;
    });

    document.querySelector(
      ".what-our-clients .wrapper .slider .swiper mySwiper"
    ).innerHTML = slider.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default Slider;
