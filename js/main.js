function generateRegex() {
  const inputPaths = document.getElementById("inputPaths").value.split("\n");
  const regexParts = inputPaths
    .map((url) => {
      const path = url.trim().replace(/^https?:\/\/[^\/]+\/?/, "");
      return path ? `!@^${path}@` : null;
    })
    .filter(Boolean);

  if (regexParts.length === 0) {
    document.getElementById("output").innerText = "Please enter valid URLs!";
    return;
  }

  const finalRegex = regexParts.join(" & ");
  document.getElementById("output").innerText =
    "Generated Regex: " + finalRegex;
}
