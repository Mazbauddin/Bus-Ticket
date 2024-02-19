const allBtn = document.getElementsByClassName("seat-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    document.getElementById("seat-count").innerText = count;
  });
}
