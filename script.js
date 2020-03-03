let warehouse = "ky_warehouse";
let destination;
let parcel;
let key;

function expand(e) {
  console.log(e.target.value);
  document.getElementById(e.target.value).style = "height";
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("check");
  checkboxes.forEach(item => {
    if (item !== checkbox) item.checked = false;
  });
  //set selected warehouse
  warehouse = checkbox.id;
}

function setDestination(e) {
  destination = JSON.parse(e.target.value);
  delete destination.id;
  delete destination.public_id;
  delete destination.mode;
  delete destination.created_at;
  delete destination.updated_at;
  delete destination.object;
  delete destination.disabled_at;
  delete destination.federal_tax_id;
  delete destination.state_tax_id;
  document.getElementById("body").innerHTML += JSON.stringify(
    destination,
    null,
    4
  );
}

function setParcel() {
  let temp = document.getElementsByName("parcel");
  parcel = {
    weight: temp[0].value,
    width: temp[1].value,
    length: temp[2].value,
    height: temp[3].value
  };
}
