let Log = async () => {
  try {
    let menu = "";
    let data = await fetch(
      "https://reza-foroutan.github.io/project-web-03-finsweet/db.json"
    );
    let res = await data.json();
    let result = res.logo;
    const logo = result.map((elem) => {
      return `
     <img src="${elem.imageSrc}" alt="${elem.imageAlt}" />
      `;
    });
    console.log();
    document.querySelector(".logo a").innerHTML = logo.join("");
  } catch (error) {
    console.log(error);
  }
};

export default Log;
