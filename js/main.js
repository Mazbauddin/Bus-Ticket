const allBtn = document.getElementsByClassName("seat-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;

    const seatNumber = e.target.parentNode.childNodes[3].innerText;

    // console.log(
    //   e.target.parentNode.parentNode.parentNode.parentNode.childNodes[3]
    //     .childNodes[5].childNodes[3].innerText
    // );

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
function grandTotalCost(id, value) {
  const grandTotal = document.getElementById(id).innerText;
  const convertedGrandTotal = parseInt(grandTotal);
  const sum2 = convertedGrandTotal + parseInt(value);
  setInnerText("grand-total", sum2);
}
