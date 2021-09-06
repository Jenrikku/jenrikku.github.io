document.getElementById("content").classList.remove("animatedHide");

document.querySelector("#projectsButton").addEventListener("click", () => {
  document.getElementById("content").classList.add("animatedHide");
  setTimeout(function () {
    document.location.href = "https://github.com/Jenrikku";
  }, 1300);
});
