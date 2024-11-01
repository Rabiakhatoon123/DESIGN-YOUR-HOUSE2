# DESIGN-YOUR-HOUSE2
#HTML CODE

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Your House</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="banner">
        <div class="navbar">
            <img src="https://dummyimage.com/150x100/009688/ffffff.png&text=Design+Your+House" class="logo" alt="Design Your House Logo">



            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Bedroom</a></li>
                <li><a href="#">Dining</a></li>
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Backyard</a></li>
            </ul>
        </div>
        <div class="content">
            <h1>DESIGN YOUR HOUSE</h1>
            <p>Transform your living space with our creative ideas and solutions.</p>
            <div class="buttons">
                <button type="button" onclick="watchMore()"><span></span> WATCH MORE</button>
                <button type="button" onclick="subscribe()"><span></span> SUBSCRIBE</button>
            </div>
        </div>
    </div>

    <section class="features">
        <h2>Our Features</h2>
        <div class="feature-grid">
            <div class="feature-item">
                <h3>Modern Designs</h3>
                <p>Explore contemporary designs that fit your lifestyle.</p>
            </div>
            <div class="feature-item">
                <h3>Eco-Friendly</h3>
                <p>We prioritize sustainable materials and energy efficiency.</p>
            </div>
            <div class="feature-item">
                <h3>Personalized Service</h3>
                <p>Get tailored advice to suit your unique preferences.</p>
            </div>
            <div class="feature-item">
                <h3>Smart Home Technology</h3>
                <p>Integrate smart devices for a seamless living experience.</p>
            </div>
            <div class="feature-item">
                <h3>Affordable Solutions</h3>
                <p>Find budget-friendly options without compromising on quality.</p>
            </div>
            <div class="feature-item">
                <h3>Outdoor Spaces</h3>
                <p>Design beautiful outdoor areas to enjoy nature.</p>
            </div>
            <div class="feature-item">
                <h3>Interior Decor Tips</h3>
                <p>Learn how to enhance your space with decor tips.</p>
            </div>
            <div class="feature-item">
                <h3>Energy Efficiency</h3>
                <p>Maximize energy savings with our design tips.</p>
            </div>
            <div class="feature-item">
                <h3>Virtual Consultations</h3>
                <p>Get expert advice from the comfort of your home.</p>
            </div>
            <div class="feature-item">
                <h3>DIY Projects</h3>
                <p>Find fun DIY projects to enhance your space.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 Design Your House. All rights reserved.</p>
    </footer>

    <script src="design_house.js"></script>
</body>
</html>


# CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding and border are included in element's total width and height */
    font-family: sans-serif;
}

body {
    line-height: 1.6; /* Improves text readability */
}

.banner {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(background.jpg);
    background-size: cover;
    background-position: center;
}

.navbar {
    width: 85%;
    margin: auto;
    padding: 35px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 120px;
    cursor: pointer;
}

.navbar ul {
    display: flex; /* Using flexbox for the navigation items */
    list-style: none;
}

.navbar ul li {
    margin: 0 20px;
    position: relative; /* To enable positioning of the underline */
}

.navbar ul li::after {
    content: '';
    height: 3px;
    width: 100%;
    background: #009688;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: width 0.5s;
    width: 0; /* Starts with no underline */
}

.navbar ul li:hover::after {
    width: 100%; /* Expands underline on hover */
}

.content {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;
}

.content h1 {
    font-size: 70px;
    margin-bottom: 20px; /* Adds space below the title */
}

.content p {
    font-size: 20px; /* Adds description below the title */
    margin-bottom: 40px; /* Adds space below the description */
}

.buttons {
    display: flex; /* Flexbox for button alignment */
    justify-content: center; /* Center the buttons */
}

button {
    width: 200px;
    padding: 15px 0;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid #009688;
    background: transparent;
    color: #fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background 0.5s; /* Smooth background transition */
}

span {
    background: #009688;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: width 0.5s; /* Smooth width transition */
}

button:hover span {
    width: 100%;
}

button:hover {
    border: none;
    background: rgba(0, 150, 136, 0.5); /* Lightens background on hover */
}

.features {
    background: #f9f9f9; /* Light background for the features section */
    padding: 50px 20px; /* Adds padding */
    text-align: center;
}

.features h2 {
    margin-bottom: 30px; /* Space below the section title */
    font-size: 36px; /* Larger font size for the section title */
}

.feature-grid {
    display: grid; /* Grid layout for features */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
    gap: 20px; /* Space between grid items */
}

.feature-item {
    background: #fff; /* White background for feature items */
    padding: 20px; /* Padding inside feature items */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
}

footer {
    background: #333; /* Dark background for footer */
    color: #fff; /* White text for footer */
    text-align: center;
    padding: 20px 0; /* Padding for the footer */
    position: relative;
    bottom: 0; /* Ensure footer is at the bottom */
    width: 100%; /* Full width footer */
}


#JAVA SCRIPT

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
