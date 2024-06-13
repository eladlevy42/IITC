currentPage = 1;
const itemsPerPage = 50;

const fetchPaginatedData = async (page, limit) => {
  try {
    console.log(`Fetching page ${page}`);
    const response = await axios.get(
      `http://localhost:8001/user/?_page=${page}&_per_page=${limit}`
    );
    const data = response.data.data;
    const totalItems = parseInt(response.headers["x-total-count"], 10);
    console.log(`Fetched ${data.length} items from page ${page}`);
    return { data, totalItems };
  } catch (error) {
    console.error("Fetching data failed:", error);
};

const loadMoreData = async () => {
  const { data, totalItems } = await fetchPaginatedData(
    currentPage,
    itemsPerPage
  );
  // Update your UI with the fetched data
  console.log("Page: " + currentPage);
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = "";
  let table = document.createElement("table");

  data.forEach((item) => {
    const rowElement = document.createElement("tr");
    Object.keys(item).forEach((key) => {
      const itemTableElement = document.createElement("td");
      itemTableElement.id = `item-${key}`;
      itemTableElement.textContent = JSON.stringify(item[key]);
      rowElement.appendChild(itemTableElement);
    });

    table.appendChild(rowElement);
  });

  dataContainer.appendChild(table);

  // Increment the current page for the next fetch
  currentPage++;

  // Check if there are more items to load
  if ((currentPage - 1) * itemsPerPage >= totalItems) {
    console.log("All items have been loaded.");
    document.getElementById("loadMoreButton").disabled = true;
  }
};

// Attach event listener to the load more button
document
  .getElementById("loadMoreButton")
  .addEventListener("click", loadMoreData);
