const vendorContainer = document.querySelector("#vendorContainer");

const vendors = async () => {
  const api = await fetch(
    `https://quiet-escarpment-14753.herokuapp.com/api/vendors`
  );
  return api.json();
};

const createVendor = vendorObj => {
  return `
    <div class="vendor">
        <div class="vendorInfo">
            <span class="vendorName">${vendorObj.name}</span>
        </div>`;
};

(async () => {
  const vendorArray = await vendors();
  vendorArray.forEach(vendorObj => {
    vendorContainer.insertAdjacentHTML("beforeend", createVendor(vendorObj));
  });
})();
