document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(SubmitEvent);

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:mrhasratshaikh@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%100AMessage: ${message}`;
    
    window.location.href = mailtoLink;
});
