const Features = async () => {
  try {
    let data = await fetch("http://localhost:3000/features");
    let res = await data.json();
    // let result = res.features;
    const features = res.map((elem, index) => {
      if (index >= 0) {
        for (let i = index; i < 6; i++) {
          return `<div>
          <img src="${elem.icon}" alt="">
        <p>${elem.title}</p>
        <p>${elem.content}</p>
              </div>`;
        }
      }
    });

    document.querySelector(
      "div.features>div.inside-f>div.cards>div.sub-card"
    ).innerHTML = features.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default Features;
