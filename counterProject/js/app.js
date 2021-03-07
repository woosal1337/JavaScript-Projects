var value = 0;

function counterAdd() {
  value++;
  const counter = document.getElementById("counter");
  const addCount = document.getElementById("add-count");

  addCount.addEventListener("click", function (e) {
    counter.textContent = value;
  })

  if (value > 0) {
    counter.style.color = "green";
  } else if (value === 0) {
    counter.style.color = "gray";
  }
}

function counterSubtract() {
  value--;
  const counter = document.getElementById("counter");
  const addCount = document.getElementById("subtract-count");

  addCount.addEventListener("click", function (e) {
    counter.textContent = value;
  });

  if (value < 0) {
    counter.style.color = "red";
  } else if (value === 0) {
    counter.style.color = "gray";
  }
}