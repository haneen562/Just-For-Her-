    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');
   
    function clearError() {
            const errors = document.querySelectorAll(".error");
            for (let error of errors) {
                error.classList.remove("display-error");
                error.textContent = '';
        }
        
    }
    function clearForm() {
              nameInput.value= '';
              emailInput.value= '';
              subjectInput.value = '';
              messageInput.value = '';
    }
    function showError(errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        errorElement.classList.add("display-error");
        errorElement.textContent = errorMessage;
    }
    

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    clearError();
    let valid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    if (name === '') {
        showError("name-error", "Name is Required.");
        valid = false;
    } else if (!namePattern.test(name)) {
        showError("name-error", "Please enter a valid Name.");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError("email-error", "Email is Required.");
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError("email-error", "Please enter a valid email address.");
        valid = false;
    }

    if (subject === '') {
        showError("subject-error", "Subject is Required.");
        valid = false;
    } else if (subject.length < 5) {
        showError("subject-error", "Subject must be at least 5 characters long.");
        valid = false;
    }

    if (message === '') {
        showError("message-error", "Message is Required.");
        valid = false;
    } else if (message.length < 10) {
        showError("message-error", "Message must be at least 10 characters long.");
        valid = false;
    }

    if (valid) {
        Swal.fire({
            text: "Successfully submitted!",
            icon: "success"
        });
        clearForm();
    }
});
