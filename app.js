document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".stafflgn");
    const viewallaccs = document.querySelector(".viewallaccs");

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return value;
        }
        return null;
    }

    if (button) {
        button.addEventListener("click", function () {
            console.log("Staff login button clicked!");
            const user = prompt("Enter your First Name!");

            if (user === "Adam") {  
                const pass = prompt("Enter the password! (It's your last name out of RP)");
                
                if (pass === "Kubera") {
                    alert("You are now authenticated!");
                    
                    // Set cookie SLT to ss87s898ssjj38djk98s, expires in 7 days
                    document.cookie = "SLT=ss87s898ssjj38djk98s; path=/; max-age=" + (7 * 24 * 60 * 60);
                    
                    console.log("Cookie SLT set!");
                }
            }
        });
    }

    if (viewallaccs) {
        viewallaccs.addEventListener("click", function() {
            console.log("Attempted viewallaccs");
            const sltValue = getCookie("SLT");

            if (sltValue === "ss87s898ssjj38djk98s") {
                alert("The only combo is the first name Adam and the password Kubera"); // User is authenticated
            } else {
                alert("You are not logged in. Log in to continue."); // User is NOT authenticated
            }
        });
    }
});
