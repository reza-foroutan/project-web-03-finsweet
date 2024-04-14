let Log = async () => {
  try {
    let menu = "";
    let data = await fetch("http://localhost:3000/logo");
    let res = await data.json();
    const logo = res.map((elem) => {
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
