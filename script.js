//your JS code here. If required.
  const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const checkbox = document.getElementById('checkbox');
        const submitBtn = document.getElementById('submit');
        const existingBtn = document.getElementById('existing');
        const form = document.getElementById('loginForm');

        // Check localStorage on page load
        function checkSavedCredentials() {
            const savedUsername = localStorage.getItem('savedUsername');
            const savedPassword = localStorage.getItem('savedPassword');
            
            if (savedUsername && savedPassword) {
                existingBtn.classList.remove('hidden');
                // Optional: auto-fill form
                usernameInput.value = savedUsername;
                passwordInput.value = savedPassword;
            } else {
                existingBtn.classList.add('hidden');
            }
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            const username = usernameInput.value.trim();
            const password = passwordInput.value;
            
            alert(`Logged in as ${username}`);
            
            // Handle "Remember Me"
            if (checkbox.checked) {
                localStorage.setItem('savedUsername', username);
                localStorage.setItem('savedPassword', password);
            } else {
                localStorage.removeItem('savedUsername');
                localStorage.removeItem('savedPassword');
            }
            
            checkSavedCredentials(); // Update button visibility
        });

        // Existing user login
        existingBtn.addEventListener('click', function() {
            const savedUsername = localStorage.getItem('savedUsername');
            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            }
        });

        // Check on page load
        checkSavedCredentials();