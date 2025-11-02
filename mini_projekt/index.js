setTimeout(() => {
  console.log("Test JS");
}, 4000);

function twoDigits(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return String(n);
  }
}

function updateClock() {
  const now = new Date();
  const h = twoDigits(now.getHours());
  const m = twoDigits(now.getMinutes());
  const s = twoDigits(now.getSeconds());
  document.getElementById("clock").textContent = `Current time: ${h}:${m}:${s}`;
}

updateClock();
setInterval(updateClock, 1000);

const btnozz = document.getElementById("ozzy-info");
const txtozz = document.getElementById("ozzy-text");

btnozz.addEventListener("click", () => {
  if (txtozz.style.display === "none") {
    txtozz.style.display = "flex";
  } else {
    txtozz.style.display = "none";
  }
});

const btntony = document.getElementById("tony-info");
const txttony = document.getElementById("tony-text");

btntony.addEventListener("click", () => {
  if (txttony.style.display === "none") {
    txttony.style.display = "flex";
  } else {
    txttony.style.display = "none";
  }
});

const btngeez = document.getElementById("geez-info");
const txtgeez = document.getElementById("geez-text");

btngeez.addEventListener("click", () => {
  if (txtgeez.style.display === "none") {
    txtgeez.style.display = "flex";
  } else {
    txtgeez.style.display = "none";
  }
});

const btnbill = document.getElementById("bill-info");
const txtbill = document.getElementById("bill-text");

btnbill.addEventListener("click", () => {
  if (txtbill.style.display === "none") {
    txtbill.style.display = "flex";
  } else {
    txtbill.style.display = "none";
  }
});
