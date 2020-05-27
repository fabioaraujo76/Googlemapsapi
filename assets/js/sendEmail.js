function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("Your email was sent successfuly", response);
        },
        function(error) {
            alert("Sorry, but we couldn't send your email at this time, please try again later.", error);
        }
    );
    contactForm.name.value = "";
    contactForm.emailaddress.value = "";
    contactForm.projectsummary.value = "";
    return false;
}