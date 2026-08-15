const addressLink = document.querySelector(".address-link");
const googleMap = document.querySelector("#googleMap");

addressLink.addEventListener("click", function (event) {
    event.preventDefault();

    const address = this.dataset.address;

    // Кодируем адрес для URL
    const encodedAddress = encodeURIComponent(address);

    // Меняем адрес карты
    googleMap.src = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
});
