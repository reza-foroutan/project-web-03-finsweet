let Menu = async () => {
  try {
    let data = await fetch(
      "https://reza-foroutan.github.io/project-web-03-finsweet/db.json"
    );
    let res = await data.json();
    let menu = res.map((elem) => {
      return `<a href="${elem.name}" alt="${elem.alt}" title="${elem.title}">${elem.name}</a>`;
    });
    console.log();
    document.querySelector(".menu").innerHTML = menu.join("");
  } catch (error) {
    console.log(error);
  }
};

export default Menu;
