const seats = document.querySelectorAll("#seat");
let count = 0;
let doubleCheck = [];

for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    if (doubleCheck.includes(seat.innerHTML) === false && count < 4) {
      seat.classList.add("change_seat_click");
      const addSeatPrice = document.getElementById("addSeatPrice");
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

      setInnerText("updateTotalPrice", 550 * count);
      setInnerText("updateGrandTotal", 550 * count);
      setInnerText("seatCount", count);
      updateAvailableSeat();
      if (count === 4) {
        couponCheck();
      }

      doubleCheck.push(seat.innerHTML);
    } else if (count >= 4) {
      alert("Sorry!! You can not buy more than 4 tickets");
    } else {
      alert("Seat Already Booked. Please Selected Another Seat");
    }
  });
}

function couponCheck() {
  const coupon = document.getElementById("coupon");
  const applyBtn = document.getElementById("applyBtn");
  const errorMsg = document.getElementById("errorMsg");
  applyBtn.removeAttribute("disabled");
  coupon.addEventListener("keyup", function (e) {
    applyBtn.addEventListener("click", function () {
      if (coupon.value === "NEW15") {
        let new15 = parseFloat(getInnerTextById("updateGrandTotal"));
        setInnerText("updateGrandTotal", new15 - new15 * 0.15);
        setInnerText("updateDiscount", new15 * 0.15);
        errorMsg.classList.add("hidden");
        applyBtn.classList.add("hidden");
        coupon.classList.add("hidden");
      } else if (coupon.value === "Couple 20") {
        let couple20 = parseFloat(getInnerTextById("updateGrandTotal"));
        setInnerText("updateGrandTotal", couple20 - couple20 * 0.2);
        setInnerText("updateDiscount", couple20 * 0.2);
        errorMsg.classList.add("hidden");
        applyBtn.classList.add("hidden");
        coupon.classList.add("hidden");
      } else {
        setInnerText("errorMsg", "Please Enter Right Coupon");
      }
      coupon.value = "";
    });
  });
}

const pNumber = document.getElementById("pNumber");
pNumber.addEventListener("keyup", function (e) {
  if (
    parseFloat(getInnerTextById("updateTotalPrice")) > 0 &&
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
  document.getElementById("poribahanSection").classList.add("hidden");
  document.getElementById("footerSection").classList.add("hidden");
  document.getElementById("headerSection").classList.add("hidden");
  document.getElementById("bannerSection").classList.add("hidden");
  document.getElementById("couponArea").classList.add("hidden");
});

function updateAvailableSeat() {
  let available = parseInt(getInnerTextById("seatsSelected"));
  setInnerText("seatsSelected", available - 1);
}

function setInnerText(id, value) {
  document.getElementById(id).innerHTML = value;
}

function getInnerTextById(id) {
  const InnerText = document.getElementById(id);
  return InnerText.innerHTML;
}

function reloadPage() {
  location.reload();
}
