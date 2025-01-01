document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('nav ul li');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
            const submenu = dropdown.querySelector('ul');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseout', () => {
            const submenu = dropdown.querySelector('ul');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();

            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            if (name && email && message) {
                formMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you shortly.';
                formMessage.style.color = 'green';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = 'red';
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            event.preventDefault();

            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();

            if (username && password) {
                loginMessage.textContent = 'Welcome, ' + username + '!';
                loginMessage.style.color = 'green';
                loginForm.reset();
            } else {
                loginMessage.textContent = 'Please enter both username and password.';
                loginMessage.style.color = 'red';
            }
        });
    }

    const bookSections = document.querySelectorAll('.book-section');

    bookSections.forEach(section => {
        const title = section.querySelector('h2');
        const booksGrid = section.querySelector('.books-grid');

        if (title && booksGrid) {
            title.addEventListener('click', () => {
                if (booksGrid.style.display === 'none' || booksGrid.style.display === '') {
                    booksGrid.style.display = 'flex';
                } else {
                    booksGrid.style.display = 'none';
                }
            });

            booksGrid.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const bookItems = document.querySelectorAll('.book-item');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        bookItems.forEach(item => {
            const author = item.getAttribute('data-author').toLowerCase();
            const title = item.getAttribute('data-title').toLowerCase();
            if (author.includes(filter) || title.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const bookItems = document.querySelectorAll('.book-item');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        bookItems.forEach(item => {
            const author = item.getAttribute('data-author').toLowerCase();
            const title = item.getAttribute('data-title').toLowerCase();
            if (author.includes(filter) || title.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const bookItems = document.querySelectorAll('.book-item');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        bookItems.forEach(item => {
            const author = item.getAttribute('data-author').toLowerCase();
            const title = item.getAttribute('data-title').toLowerCase();
            if (author.includes(filter) || title.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Handle login and signup form submissions for demonstration purposes
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginMessage = document.getElementById('login-message');
    const signupMessage = document.getElementById('signup-message');

    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            event.preventDefault();
            loginMessage.textContent = 'Login successful!'; // Add your login logic here
            loginMessage.style.color = 'green';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', event => {
            event.preventDefault();
            const password = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password === confirmPassword) {
                signupMessage.textContent = 'Sign up successful!'; // Add your sign-up logic here
                signupMessage.style.color = 'green';
            } else {
                signupMessage.textContent = 'Passwords do not match.';
                signupMessage.style.color = 'red';
            }
        });
    }
});
