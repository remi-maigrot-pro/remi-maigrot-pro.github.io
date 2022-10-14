(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function sendEmail() {
    const email_to = "remi.maigrot10@gmail.com"
    const subject = document.getElementById('subject_id').value;
    const body = document.getElementById('body_id').value;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email_to}&su=${subject}&body=${body}`;
	window.open(url);
}
