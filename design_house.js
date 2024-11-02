function watchMore() {
    alert("Watch more design ideas on our video gallery!");
}

function subscribe() {
    const email = prompt("Please enter your email to subscribe:");
    if (email) {
        alert(`Thank you for subscribing with the email: ${email}`);
    } else {
        alert("Subscription cancelled.");
    }
}
