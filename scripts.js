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