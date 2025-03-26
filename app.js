document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".stafflgn");

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
});
