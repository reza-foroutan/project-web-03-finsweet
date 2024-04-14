let Hero = async () => {
  try {
    let data = await fetch(
      "https://reza-foroutan.github.io/project-web-03-finsweet/db.json"
    );
    let res = await data.json();
    let result = res.hero;

    let hero = result.map((elem) => {
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
