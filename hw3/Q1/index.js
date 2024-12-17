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

const tableBody = document.querySelector("#salesTable");

const groupByRegion = (data) => {
  const grouped = {};
  data.forEach((item) => {
    if (!grouped[item.region]) {
      grouped[item.region] = [];
    }
    grouped[item.region].push(item);
  });
  return grouped;
};

const groupedData = groupByRegion(data);
console.log(groupedData);

for (const region in groupedData) {
  let regionSum = 0;
  groupedData[region].forEach((data) => {
    regionSum += data.sales;
  });
  tableBody.innerHTML += `
        <tr>
            <td>${region}</td>
            <td><b>sum</b></td>
            <td><b>${regionSum}</b></td>
        </tr>
    `;
  groupedData[region].forEach((data) => {
    tableBody.innerHTML += `
      <tr>
          <td>${data.region}</td>
          <td>${data.model}</td>
          <td>${data.sales}</td>
      <tr>
    `;
  });
}
