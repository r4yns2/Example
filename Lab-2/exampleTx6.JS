<body>
  <div id="SHOWME"></div>
  <button id="Toggle"></button>
</body>;

const targetDiv = document.getElementById("SHOWME");
const btn = document.getElementById("Toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
