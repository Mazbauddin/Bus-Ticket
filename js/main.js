// const allBtn = document.getElementsByClassName("seat-btn");

// let count = 0;
// for (const btn of allBtn) {
//   btn.addEventListener("click", function (e) {
//     count = count + 1;

//     const seatNumber = e.target.parentNode.childNodes[3].innerText;

//     e.target.parentNode.childNodes[3].style.backgroundColor = "#1dd100";
//     e.target.parentNode.childNodes[3].style.color = "white";
//     e.target.setAttribute("disabled", true);
//     const seatClass =
//       e.target.parentNode.parentNode.parentNode.parentNode.childNodes[3]
//         .childNodes[5].childNodes[3].innerText;

//     const seatPrice =
//       e.target.parentNode.parentNode.parentNode.parentNode.childNodes[3]
//         .childNodes[5].childNodes[5].innerText;
//     const selectedContainer = document.getElementById("selected-seat-text");

//     const li = document.createElement("li");

//     const p = document.createElement("p");
//     p.innerText = seatNumber;

//     const p2 = document.createElement("p");
//     p2.innerText = seatClass;

//     const p3 = document.createElement("p");
//     p3.innerText = seatPrice;

//     li.appendChild(p);
//     li.appendChild(p2);
//     li.appendChild(p3);

//     const seatSelected = document.getElementById("seats-selected").innerText;

//     const convertedseatSelected = parseInt(seatSelected);
//     const minus1 = convertedseatSelected - parseInt(count);

//     setInnerText("seats-selected", minus1);

//     if (convertedseatSelected - parseInt(seatSelected) > 4) {
//       alert("Maximum 4 Tickets Buy");
//       return;
//     }

//     selectedContainer.appendChild(li);

//     totalCost("total-cost", parseInt(seatPrice));
//     grandTotalCost("grand-total", parseInt(seatPrice));

//     setInnerText("seat-count", count);
//   });
// }

// function setInnerText(id, value) {
//   document.getElementById(id).innerText = value;
// }

// // total cost
// function totalCost(id, value) {
//   const totalCost = document.getElementById(id).innerText;
//   const convertedTotalCost = parseInt(totalCost);
//   const sum = convertedTotalCost + parseInt(value);
//   setInnerText("total-cost", sum);
// }

// // grand total cost
// function grandTotalCost(category) {
//   const totalCost = document.getElementById("total-cost").innerText;
//   const convertedTotalCost = parseInt(totalCost);
//   setInnerText("grand-total", convertedTotalCost);
//   if (category == "new15") {
//   }
// }

// const btn = document.getElementById("apply-btn");
// btn.addEventListener("click", function () {
//   // get the value from input
//   const couponElement = document.getElementById("input-field").value;
//   const couponCode = couponElement.split(" ").join("").toUpperCase();

//   if (totalCost >= 200) {
//     if (couponCode === "NEW15, Couple 20") {
//       const discountElement = document.getElementById("discount-Price");
//       const discountAmount = totalCost * 0.2;
//       discountElement.innerText = discountAmount.toFixed(2);
//     } else {
//       alert("Invalid Coupon");
//     }
//   }
// });

// const seats = document.querySelectorAll(".seat-btn");
// let count = 0;
// let dublicateCheck = [];

// for (const seat of seats) {
//   seat.addEventListener("click", function (e) {
//     if (dublicateCheck.includes(seat.innerHTML) === false && count < 4) {
//       seat.classList.add("change_seat_click");
//       const addSeatPrice = document.getElementById("addPerSeatPrice");
//       const p = document.createElement("p");
//       p.innerHTML = seat.innerHTML;
//       addSeatPrice.appendChild(p);
//       const p1 = document.createElement("p");
//       p1.innerHTML = "Economy";
//       addSeatPrice.appendChild(p1);
//       const p2 = document.createElement("p");
//       p2.innerHTML = "550";
//       addSeatPrice.appendChild(p2);

//       count++;

//       setInnerText("")
//     }
//   });
// }

const seats = document.querySelectorAll("seat-btn");
let count = 0;
let dublicateCheck = [];

for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    if (dublicateCheck.includes(seat.innerHTML) === false && count < 4) {
      seat.classList.add("change_seat_click");
      const addSeatPrice = document.getElementById("addPerSeatPrice");
      const p = document.createElement("p");
      p.innerHTML = seat.innerHTML;
      addSeatPrice.appendChild(p);
      const p1 = document.createElement("p");
      p1.innerHTML = "Economoy";
      addSeatPrice.appendChild(p1);
      const p2 = document.createElement("p");
      p2.innerHTML = "550";
      addSeatPrice.appendChild(p2);

      count++;

      setInnerText("total-cost", 550 * count);
      setInnerText("grand-total", 550 * count);
      setInnerText("seat-count", count);
      updateAvailableSeat();
      if (count === 4) {
        couponCheck();
      }

      dublicateCheck.push(seat.innerHTML);
    } else if (count >= 4) {
      alert("you can not buy more than 4 tickets");
    } else {
      alert("seat already booked");
    }
  });
}

function couponCheck() {
  const coupon = document.getElementById("input-field");
  const applyBtn = document.getElementById("apply-btn");
  const errorMsg = document.getElementById("errorMsg");
  applyBtn.removeAttribute("disabled");
  coupon.addEventListener("keyup", function (e) {
    applyBtn.addEventListener("click", function () {
      if (coupon.value === "NEW15") {
        let new15 = parseFloat(getInnerTextById("grand-total"));
        setInnerText("grand-total", new15 - new15 * 0.15);
        setInnerText("total-discount-price", new15 * 0.15);
        errorMsg.classList.add("hidden");
        applyBtn.classList.add("hidden");
        coupon.classList.add("hidden");
      } else if (coupon.value === "Couple 20") {
        let couple20 = parseFloat(getInnerTextById("grand-total"));
        setInnerText("grand-total", couple20 - couple20 * 0.2);
        setInnerText("total-discount-price", couple20 * 0.2);
        errorMsg.classList.add("hidden");
        applyBtn.classList.add("hidden");
        coupon.classList.add("hidden");
      } else {
        setInnerText("errorMsg", "you should enter right coupon");
      }
      coupon.value = "";
    });
  });
}

const pNumber = document.getElementById("pNumber");
pNumber.addEventListener("keyup", function (e) {
  if (
    parseFloat(getInnerTextById("total-cost")) > 0 &&
    e.target.value.length >= 1
  ) {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.removeAttribute("disabled");
  }
});

submitBtn.addEventListener("click", function () {
  pNumber.value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("buy-tickets").classList.add("hidden");
  document.getElementById("footerSection").classList.add("hidden");
  document.getElementById("headerSection").classList.add("hidden");
  document.getElementById("bannerSection").classList.add("hidden");
  document.getElementById("couponSection").classList.add("hidden");
});

function updateAvailableSeat() {
  let available = parseInt(getInnerTextById("seats-selected"));
  setInnerText("seats-selected", available - 1);
}

function setInnerText(id, value) {
  document.getElementById(id).innerHTML = value;
}

function getInnerTextById(id) {
  const InnerText = document.getElementById(id);
  return InnerText.innerHTML;
}
