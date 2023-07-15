const images = document.querySelector("#images");
const searchInput = document.querySelector("#search_input");
const api_key = "kSRXBewLdjz3NMRutJJHgZnO81nUf7y9X2ezlQXoJjMOeb0zCtY9z3BH";
const api_link = "https://api.pexels.com/v1/curated?page=1&per_page=80";

// Generate Picture Box for DOM
const generateImage = (imgs) => {
    const allImages = imgs.photos;
    images.innerHTML += allImages.map((imgData) => {
        console.log(imgData);
        return `
        <li class="pic_list">
        <img
            src="${imgData.src.large2x}"
            alt=""
        />
        <article class="details">
            <div class="top_details">
                <button>
                    <i
                        class="fa fa-clone"
                        aria-hidden="true"
                    ></i>
                </button>
                <button>
                    <i
                        class="fa fa-heart-o"
                        aria-hidden="true"
                    ></i>
                </button>
            </div>
            <div class="bottom_details">
                <div class="auth_detail">
                    <img
                        src="${imgData.src.small}"
                        alt=""
                    />
                    <h6>${imgData.photographer}</h6>
                </div>
                <button>
                    <i
                        class="fa fa-download"
                        aria-hidden="true"
                    ></i>
                </button>
            </div>
        </article>
    </li>
        `;
    });
};

const getImages = (apiLink) => {
    fetch(apiLink, { headers: { Authorization: api_key } })
        .then((response) => response.json())
        .then((responseData) => {
            return generateImage(responseData);
        });
};

getImages(api_link);

searchInput.addEventListener("keyup", (event) => {
    console.log(event);
    if (event.target.value === "") {
        return null;
    }
    if (event.key === "Enter") {
        images.innerHTML = "";
        searchTeam = event.target.value;
        let searchAPI = `https://api.pexels.com/v1/search?query=${searchTeam}&page=1&per_page=80`;
        getImages(searchAPI);
        e.target.value = "";
    }
});
console.log(searchInput);