function openModal() {
  document.getElementById('instaModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('instaModal').style.display = 'none';
}

// Close when clicking outside modal content
window.onclick = function(event) {
  const modal = document.getElementById('instaModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function saveCredentials() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.text())
  .then(data => {
    alert(data);
    closeModal();
  })
  .catch(err => console.error(err));
}
