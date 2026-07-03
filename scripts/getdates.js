const modified = document.lastModified;
const today = new Date();
const copydate = today.getFullYear();

document.getElementById("currentyear").innerHTML = copydate;
document.getElementById("lastModified").innerHTML =
  `Last modified: ${modified}`;
