let Menu = async () => {
  try {
    let menu = "";
    let data = await fetch("http://localhost:3000/menu");
    let res = await data.json();
    menu = res.map((elem) => {
      return `<a href="${elem.name}" alt="${elem.alt}" title="${elem.title}">${elem.name}</a>`;
    });
    console.log();
    document.querySelector(".menu").innerHTML = menu.join("");
  } catch (error) {
    console.log(error);
  }
};

export default Menu;
