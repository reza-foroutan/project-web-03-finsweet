const FooterContact = async () => {
  try {
    let data = await fetch(
      "https://reza-foroutan.github.io/project-web-03-finsweet/db.json"
    );
    let res = await data.json();
    let result = res.footercontact;
    const footercontact = result.map((elem, index) => {
      return `<div>
          <p>${elem.title}</p>
          <p>${elem.content}</p>
        </div>`;
    });

    document.querySelector(
      "footer>div.inside-f>div:nth-of-type(1)>div.left>div.contact-info"
    ).innerHTML = footercontact.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default FooterContact;
