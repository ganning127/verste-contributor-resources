window.onload = () => {
  console.log("index.js has been loaded...");
};

const convertTitleToURL = (event) => {
  event.preventDefault();
  console.log("Converting title case to URL format...");

  let titleCaseText = document.getElementById(
    "research-paper-title-input"
  ).value;

  if (!titleCaseText) {
    alert("Please enter a Research Paper title to convert to URL case");
  }

  const cleaned = titleCaseText.replace(/[^a-zA-Z0-9 ]/g, "");
  const lowerCased = cleaned.toLowerCase();
  const splitted = lowerCased.split(" ");
  console.log(splitted);
  const withDashed = splitted.join("-");

  // show the URL formatted
  document.getElementById("url-case-ouput").textContent = withDashed;
};
