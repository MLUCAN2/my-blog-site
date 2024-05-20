
const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('javascript called');
  
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    
    console.log(username, email, password);
    
    if (username && email && password) {
      try{
      const response = await fetch('/createUser', {
            method: 'POST',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok){
                console.log('You are now signed up!');
                document.location.replace('/');
            }
            else{
                const data= await response.json();
                console.error('Attempt failed', data.message);
                alert('Failed to sign up'+ data.message);
            }
        }
        catch (error){
            console.error('Could not send request', error);
        }
    }

};
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler); 
console.log('reach js');

