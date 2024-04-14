const OurProject = async () => {
  try {
    let data = await fetch("http://localhost:3000/ourproject");
    let res = await data.json();
    // let result = res.ourproject;
    const thiswork = res.map((elem) => {
      return `<div>
          <a href="#">
            <div class="card-1">
              <img src="${elem.image}" alt="" />
            </div>
            <div class="cover">
              <p>${elem.title}</p>
              <p>
              ${elem.name}
              </p>
              <div>
                <p>${elem.button}</p>
                <img src="${elem.arrow}" alt="">
              </div>
            </div>
          </a>
        </div>`;
    });
    document.querySelector(
      "div.our-work>div.inside-work>div.content"
    ).innerHTML = thiswork.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default OurProject;
