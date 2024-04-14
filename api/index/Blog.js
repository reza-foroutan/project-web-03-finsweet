const Blog = async () => {
  try {
    let data = await fetch(
      "https://reza-foroutan.github.io/project-web-03-finsweet/db.json"
    );
    let res = await data.json();
    let result = res.blog;
    const blog = result.map((elem, index) => {
      return `<div>
          <img
            src="${elem.image}"
            alt=""
          />
          <p>${elem.date}</p>
          <p>
          ${elem.title}</p>
          <p>
          ${elem.tozeh}</p>
          <a href="#">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938"
              />
            </svg>
          </a>
        </div>`;
    });

    document.querySelector("div.blog>div.inside-blog>div.cards").innerHTML =
      blog.join("");
  } catch (error) {
    console.log(error.mesage);
  }
};
export default Blog;
