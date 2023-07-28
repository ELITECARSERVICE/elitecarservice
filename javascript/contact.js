 
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var name = document.getElementById("name").value;
        var phone = document.getElementById("tel").value;
        var message = document.getElementById("message").value;

        // Create the email body
        var body = "Name: " + name + "\n";
        body += "phone: " + phone + "\n";
        body += "Message: " + message;

        // Encode the email body
        var encodedBody = encodeURIComponent(body);

        // Set the recipient email address
        var recipientEmail = "contact@oozyautomobiles.com";

        // Create the mailto link
        var mailtoLink = "mailto:" + recipientEmail + "?subject=MESSAGE FROM CLIENT&body=" + encodedBody;

        // Open the mail client with the mailto link
        window.location.href = mailtoLink;
    });    