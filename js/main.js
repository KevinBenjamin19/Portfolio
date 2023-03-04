
var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const sendMail = () => {
    var params = {
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    
    const serviceID = "service_8kpxewr";
    const templateID ="template_7vyqgon";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent Successfully");
        }
        )
        .catch( err => console.log(err) );
}