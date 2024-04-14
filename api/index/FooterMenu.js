const FooterMenu = async () => {
  try {
    let data = await fetch(
      "https://reza-foroutan.github.io/project-web-03-finsweet/db.json"
    );
    let res = await data.json();
    let result = res.menutop;
    const footermenu = result.map((elem, index) => {
      return `<a href="${elem.link}"><p>${elem.name}</p></a>`;
    });

    document.querySelector("footer .inside-f  div div .menu").innerHTML =
      footermenu.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default FooterMenu;
