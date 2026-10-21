function contactUs(productName) {
    // Replace this with your WhatsApp number
    // Use your country code without the + sign
    const phoneNumber = "250728480775";

    const message = `Hello! I am interested in your ${productName}. Please send me the price and more details.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

/* PRODUCT DETAILS FEATURE */

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    // Create the details window.
    const modal = document.createElement("div");
    modal.className = "product-details-modal";
    modal.id = "productDetailsModal";

    modal.innerHTML = `
        <div class="product-details-content">
            <button type="button"
                    class="product-details-close"
                    aria-label="Close details">&times;</button>

            <img id="detailsImage" src="" alt="">

            <h2 id="detailsTitle"></h2>

            <p id="detailsDescription"></p>

            <p id="detailsPrice" class="price"></p>

            <button type="button" id="detailsEnquire">
                Enquire Now
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    const detailsImage = document.getElementById("detailsImage");
    const detailsTitle = document.getElementById("detailsTitle");
    const detailsDescription =
        document.getElementById("detailsDescription");
    const detailsPrice = document.getElementById("detailsPrice");
    const detailsEnquire = document.getElementById("detailsEnquire");

    let selectedProductName = "";

    // Add a View Details button to every existing product.
    products.forEach(function (product) {
        if (product.querySelector(".view-details")) return;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "view-details";
        button.textContent = "View Details";

        const enquireButton = product.querySelector("button");

        if (enquireButton) {
            enquireButton.insertAdjacentElement("beforebegin", button);
        } else {
            product.appendChild(button);
        }

        button.addEventListener("click", function () {
            const image = product.querySelector(".product-image img");
            const title = product.querySelector("h3");
            const description = product.querySelector("p:not(.price)");
            const price = product.querySelector(".price");

            if (!image || !title) {
                alert("Product information is unavailable.");
                return;
            }

            selectedProductName = title.textContent.trim();

            // Use the real image already assigned to this product.
            detailsImage.src = image.src;
            detailsImage.alt = image.alt || selectedProductName;

            detailsTitle.textContent = selectedProductName;
            detailsDescription.textContent = description
                ? description.textContent.trim()
                : "Contact us for more information.";

            detailsPrice.textContent = price
                ? price.textContent.trim()
                : "Contact for Price";

            modal.classList.add("active");
        });
    });

    // Keep the existing WhatsApp function working.
    detailsEnquire.addEventListener("click", function () {
        if (selectedProductName && typeof contactUs === "function") {
            contactUs(selectedProductName);
        }
    });

    // Close the details window.
    modal.querySelector(".product-details-close")
        .addEventListener("click", function () {
            modal.classList.remove("active");
        });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.remove("active");
        }
    });
});


/* ELECTRIC BIKE IMAGE SLIDER */

document.addEventListener("DOMContentLoaded", function () {
    const bikes = [
        {
            image: "images/IMG_1531.PNG",
            name: "Blue Electric Bike"
        },
        {
            image: "images/IMG_1532.PNG",
            name: "White Electric Bike"
        },
        {
            image: "images/IMG_1533.PNG",
            name: "Black Electric Bike"
        },
        {
            image: "images/IMG_1534.PNG",
            name: "Gray Electric Bike"
        },
        {
            image: "images/IMG_1536.PNG",
            name: "White and Black Electric Bike"
        }
    ];

    const image = document.getElementById("bikeSlideImage");
    const title = document.getElementById("bikeSlideTitle");
    const counter = document.getElementById("bikeSlideCounter");
    const previousButton = document.getElementById("previousBike");
    const nextButton = document.getElementById("nextBike");
    const enquireButton = document.getElementById("bikeEnquire");

    if (
        !image || !title || !counter ||
        !previousButton || !nextButton || !enquireButton
    ) {
        return;
    }

    let currentIndex = 0;

    function showBike(index) {
        currentIndex = (index + bikes.length) % bikes.length;

        image.src = bikes[currentIndex].image;
        image.alt = bikes[currentIndex].name;
        title.textContent = bikes[currentIndex].name;
        counter.textContent =
            `${currentIndex + 1} / ${bikes.length}`;
    }

    previousButton.addEventListener("click", function () {
        showBike(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showBike(currentIndex + 1);
    });

    enquireButton.addEventListener("click", function () {
        if (typeof contactUs === "function") {
            contactUs(bikes[currentIndex].name);
        }
    });

    showBike(0);
});


const galleryImages = [
    "images/IMG_1531.PNG",
    "images/IMG_1532.PNG",
    "images/IMG_1533.PNG",
    "images/IMG_1534.PNG",
    "images/IMG_1536.PNG"
];

let currentSlide = 0;

function changeSlide(direction) {
    currentSlide =
        (currentSlide + direction + galleryImages.length) %
        galleryImages.length;

    const image = document.getElementById("gallery-image");
    const caption = document.getElementById("gallery-caption");

    image.src = galleryImages[currentSlide];
    image.alt = `Electric vehicle ${currentSlide + 1}`;
    caption.textContent =
        `Electric Vehicle ${currentSlide + 1} of ${galleryImages.length}`;
}

const newScooterImages = [
    "images/IMG_1547.PNG",
    "images/IMG_1548.PNG",
    "images/IMG_1549.PNG",
    "images/IMG_1550.PNG",
    "images/IMG_1551.PNG"
];

let newScooterIndex = 0;

function viewNewScooterDetails() {
    document.getElementById("new-scooter-details").style.display = "block";

    document.getElementById("new-scooter-details").scrollIntoView({
        behavior: "smooth"
    });
}

function changeNewScooterImage(direction) {
    newScooterIndex =
        (newScooterIndex + direction + newScooterImages.length)
        % newScooterImages.length;

    document.getElementById("new-scooter-image").src =
        newScooterImages[newScooterIndex];

    document.getElementById("new-scooter-counter").textContent =
        `Photo ${newScooterIndex + 1} of ${newScooterImages.length}`;
}

/* BLACK SPORT SCOOTER PHOTO GALLERY */
const blackScooterPhotos = [
    "images/IMG_1523.PNG",
    "images/IMG_1524.PNG",
    "images/IMG_1525.PNG",
    "images/IMG_1526.PNG",
    "images/IMG_1527.PNG",
    "images/IMG_1528.PNG",
    "images/IMG_1529.PNG",
    "images/IMG_1530.PNG"
];

let blackScooterPhotoIndex = 0;

function showBlackScooterDetails() {
    const details = document.getElementById("black-scooter-details");

    details.hidden = false;
    details.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function changeBlackScooterPhoto(direction) {
    blackScooterPhotoIndex =
        (blackScooterPhotoIndex + direction + blackScooterPhotos.length)
        % blackScooterPhotos.length;

    const photo = document.getElementById("black-scooter-photo");

    photo.src = blackScooterPhotos[blackScooterPhotoIndex];
    photo.alt = `Black Sport Scooter photo ${blackScooterPhotoIndex + 1}`;

    document.getElementById("black-scooter-counter").textContent =
        `Photo ${blackScooterPhotoIndex + 1} of ${blackScooterPhotos.length}`;
}

function searchProducts() {
    const searchInput = document
        .getElementById("shop-search")
        .value.toLowerCase()
        .trim();

    const products = document.querySelectorAll(
        "#products .product-container .product"
    );

    products.forEach(function (product) {
        const productText = product.textContent.toLowerCase();
        product.style.display = productText.includes(searchInput)
            ? ""
            : "none";
    });
}
