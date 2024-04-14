let MenuMobile = async () => {
  try {
    let data = await fetch("http://localhost:3000/menu_mobile");
    let res = await data.json();
    let menumobile = res.map((elem) => {
      return `
      <div>
                  <a href="${elem.href}"
                    >${elem.name}<i class="fa-regular fa-angle-right"></i
                  ></a>
                </div>
                <hr />
      `;
    });
    console.log();
    document.querySelector(".Hmenu").innerHTML = menumobile.join("");
  } catch (error) {
    console.log(error);
  }
};

export default MenuMobile;
