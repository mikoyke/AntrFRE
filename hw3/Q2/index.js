const data = [
  { region: "US", model: "A", sales: 150 },
  { region: "US", model: "B", sales: 120 },
  { region: "US", model: "C", sales: 350 },
  { region: "EU", model: "A", sales: 200 },
  { region: "EU", model: "B", sales: 100 },
  { region: "EU", model: "C", sales: 250 },
  { region: "CA", model: "A", sales: 200 },
  { region: "CA", model: "B", sales: 100 },
  { region: "CA", model: "C", sales: 230 },
  { region: "CA", model: "D", sales: 400 },
];

const tableBody = document.getElementById("tableBody");
const regionFilter = document.getElementById("regionFilter");
const modelFilter = document.getElementById("modelFilter");

function populateTable(filteredData) {
  tableBody.innerHTML = "";
  filteredData.forEach((row) => {
    tableBody.innerHTML += `
                    <tr>
                        <td>${row.region}</td>
                        <td>${row.model}</td>
                        <td>${row.sales}</td>
                    </tr>
                `;
  });
}

function populateFilters() {
  const regions = [...new Set(data.map((item) => item.region))];
  const models = [...new Set(data.map((item) => item.model))];

  regions.forEach((region) => {
    regionFilter.innerHTML += `<option value="${region}">${region}</option>`;
  });

  models.forEach((model) => {
    modelFilter.innerHTML += `<option value="${model}">${model}</option>`;
  });
}

function applyFilters() {
  const selectedRegion = regionFilter.value;
  const selectedModel = modelFilter.value;

  const filteredData = data.filter((item) => {
    return (
      (selectedRegion === "all" || item.region === selectedRegion) &&
      (selectedModel === "all" || item.model === selectedModel)
    );
  });

  populateTable(filteredData);
}

regionFilter.addEventListener("change", applyFilters);
modelFilter.addEventListener("change", applyFilters);

populateFilters();
populateTable(data);
