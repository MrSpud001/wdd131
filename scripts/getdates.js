const modified = document.lastModified;
const today = new Date();
const copydate = today.getFullYear();

document.getElementById("currentyear").innerHTML = copydate;
document.getElementById("lastModified").innerHTML =
  `Last modified: ${modified}`;

//   slap some ham and cheese on it and call it a sandwich, bubba
