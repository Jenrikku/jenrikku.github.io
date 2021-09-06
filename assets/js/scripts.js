document.getElementById("content").classList.remove("animatedHide");
document.getElementById("projectFrame").classList.remove("animatedShow");

document.querySelector("#projectsButton").addEventListener("click", () => {
  document.getElementById("content").classList.add("animatedHide");
  document.getElementById("projectFrame").classList.add("animatedShow");
});
