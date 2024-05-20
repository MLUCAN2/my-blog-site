const loginFormHandler = async (event) => {
    event.preventDefault();
    
    // Collect values from the login form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      console.log(email, password);
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('./');
      } else {
        alert('Failed to log in. Double check your login information or sign up if you are a new user.');
      }
    }
  };
  

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
        
  