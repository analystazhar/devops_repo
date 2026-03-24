document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("responseMsg").innerText =
    "✅ Thank you " + name + "! Your message has been received.";

  this.reset();
});