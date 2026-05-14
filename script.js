 document.addEventListener('DOMContentLoaded', function() {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const checkbox = document.getElementById('checkbox');
            const submitBtn = document.getElementById('submit');
            const existingBtn = document.getElementById('existing');
            
            // Debug: Log if elements found
            console.log('Elements loaded:', {usernameInput, passwordInput, checkbox, submitBtn, existingBtn});
            
            function checkSavedCredentials() {
                const savedUsername = localStorage.getItem('savedUsername');
                if (savedUsername) {
                    existingBtn.style.display = 'block';
                }
            }
            
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const username = usernameInput.value;
                alert(`Logged in as ${username}`);
                
                if (checkbox.checked) {
                    localStorage.setItem('savedUsername', username);
                    localStorage.setItem('savedPassword', passwordInput.value);
                } else {
                    localStorage.removeItem('savedUsername');
                    localStorage.removeItem('savedPassword');
                    existingBtn.style.display = 'none';
                }
            });
            
            existingBtn.addEventListener('click', function() {
                const savedUsername = localStorage.getItem('savedUsername');
                if (savedUsername) alert(`Logged in as ${savedUsername}`);
            });
            
            // Initial check
            checkSavedCredentials();
        });