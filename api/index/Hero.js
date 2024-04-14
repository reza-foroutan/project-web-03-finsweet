let Hero = async () => {
  try {
    let data = await fetch("http://localhost:3000/hero");
    let res = await data.json();
    let hero = res.map((elem) => {
      return `
      <div class="wrapper">
          <div class="Htext">
            <div class="top">
              <h1>${elem.headinghOne}</h1>
            </div>
            <div class="middle">
              <p>
              ${elem.headingp} </p>
            </div>
            <div class="bottom">
              <a href="#our-work">
                <button>View our work</button>
              </a>
              <a href="#">
                <p>view pricing</p>
                <img src="./public/images/hero/Arrow1.svg" alt="arrow" />
              </a>
            </div>
          </div>
          <div class="illustration">
            <img
              src="${elem.illustrationImageSrc}"
              alt=${elem.illustrationImageAlt}
            />
          </div>
        </div>
      `;
    });
    console.log();
    document.querySelector(".hero").innerHTML = hero.join("");
  } catch (error) {
    console.log(error);
  }
};

export default Hero;
