function showContent(section) {
    // Hide all sections initially
    document.getElementById("about-section").style.display = "none";
    document.getElementById("brand-section").style.display = "none";

    // Show the selected section
    if (section === 'about') {
        document.getElementById("about-section").style.display = "flex";
        document.getElementById("about-btn").classList.add("active-button");
        document.getElementById("about-btn").classList.remove("inactive-button");
        document.getElementById("brand-btn").classList.add("inactive-button");
        document.getElementById("brand-btn").classList.remove("active-button");
    } else if (section === 'brand') {
        document.getElementById("brand-section").style.display = "flex";
        document.getElementById("brand-btn").classList.add("active-button");
        document.getElementById("brand-btn").classList.remove("inactive-button");
        document.getElementById("about-btn").classList.add("inactive-button");
        document.getElementById("about-btn").classList.remove("active-button");
    }
}

// Initially, show the "about-section" by default
showContent('about');