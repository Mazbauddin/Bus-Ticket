const allBtn = document.getElementsByClassName("seat-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;

    const seatNumber = e.target.parentNode.childNodes[3].innerText;

    e.target.parentNode.childNodes[3].style.backgroundColor = "#1dd100";
    e.target.parentNode.childNodes[3].style.color = "white";
    e.target.setAttribute("disabled", true);
    const seatClass =
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[3]
        .childNodes[5].childNodes[3].innerText;

    const seatPrice =
      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[3]
        .childNodes[5].childNodes[5].innerText;
    const selectedContainer = document.getElementById("selected-seat-text");

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = seatNumber;

    const p2 = document.createElement("p");
    p2.innerText = seatClass;

    const p3 = document.createElement("p");
    p3.innerText = seatPrice;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    const seatSelected = document.getElementById("seats-selected").innerText;

    const convertedseatSelected = parseInt(seatSelected);
    const minus1 = convertedseatSelected - parseInt(count);

    setInnerText("seats-selected", minus1);
    // document.getElementById("seats-selected").innerText =
    //   convertedseatSelected - parseInt(count);

    // if (convertedseatSelected - parseInt(seatSelected) <= 4) {
    //   alert("Maximum 4 Tickets Buy");
    //   return;
    // }

    selectedContainer.appendChild(li);

    totalCost("total-cost", parseInt(seatPrice));
    grandTotalCost("grand-total", parseInt(seatPrice));

    setInnerText("seat-count", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// total cost
function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText("total-cost", sum);
}

// grand total cost
function grandTotalCost(category) {
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedTotalCost = parseInt(totalCost);
  setInnerText("grand-total", convertedTotalCost);
  if (category == "new15") {
  }
}
