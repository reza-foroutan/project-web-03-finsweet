const Faq = async () => {
  try {
    let data = await fetch("http://localhost:3000/faq");
    let res = await data.json();
    let result = res.faq;
    const faq = result.map((elem, index) => {
      return `<div>
          <input type="radio" id="open-${elem.taq}" name="over" />
          <input type="radio" id="close-${elem.taq}"" name="over" />
          <label for="open-${elem.taq}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                opacity="0.7"
                d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z"
                fill="#282938"
              />
            </svg>
          </label>
          <label for="close-${elem.taq}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                opacity="0.7"
                d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z"
                fill="#282938"
              />
            </svg>
          </label>
          <div class="q">
            <p>${elem.number}</p>
            <p>${elem.title}</p>
          </div>
          <div class="over">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>`;
    });

    document.querySelector("div.faq>div.inside-faq>div.faq-q").innerHTML =
      faq.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default Faq;
