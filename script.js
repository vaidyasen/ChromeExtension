async function fetchData() {
  const response = await fetch('https://api.coronavirus.data.gov.uk/v1/data');
  const record = await response.json();
  console.log(record.data); 
  document.getElementById('date').innerHTML = record.data[2].date;
  document.getElementById('areaName').innerHTML = record.data[2].areaName;
  document.getElementById('latestBy').innerHTML = record.data[2].latestBy;
  document.getElementById('deathNew').innerHTML = record.data[2].deathNew;
}

fetchData();