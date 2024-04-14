let ItSWork = async () => {
  try {
    let data = await fetch("http://localhost:3000/it_works");
    let res = await data.json();
    const itswork = res.map((elem) => {
      return `<div class="card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <mask
                id="mask0_706_688"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="50"
                height="50"
              >
                <rect width="50" height="50" rx="8" fill="#5C5E84" />
              </mask>
              <g mask="url(#mask0_706_688)">
                <rect
                  x="-26"
                  y="27"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#FCD980"
                />
                <rect
                  x="8"
                  y="-9"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#5239FA"
                />
              </g>
            </svg>
            <p>${elem.number}</p>
          </div>
          <div>
            <p>${elem.title}</p>
          </div>
          <div>
            <p>
            ${elem.name}
            </p>
          </div>
        </div>`;
    });
    console.log();
    document.querySelector(
      "div.this-is-work>div.inside-work>div.cards"
    ).innerHTML = itswork.join("");
  } catch (error) {
    console.log(error);
  }
};

export default ItSWork;
