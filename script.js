// Generate claim ID on form submission
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const claimId = 'CS-' + Math.floor(100000 + Math.random() * 900000);
  alert("Thank you. Your Claim ID is: " + claimId);
});
