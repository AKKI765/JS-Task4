document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    
    if (username === 'instagram' && password === 'password') {
      alert('Login successful');
      // You can redirect to another page here
    } else {
      alert('Invalid username or password');
    }
    
    // Clear input fields
    usernameInput.value = '';
    passwordInput.value = '';
  });
  