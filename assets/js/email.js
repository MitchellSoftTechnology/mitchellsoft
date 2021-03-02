window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
      // show spinner on page
      document.getElementById("overlayBox").innerHTML = `<div id="overlay"><div class="spinner" id="spinner"><div class="preloader1">
                    <div class="loader loader-inner-1"><div class="loader loader-inner-2"><div class="loader loader-inner-3">
                    </div></div></div></div></div><span class="loadingText">SENDING PLEASE WAIT!</span>`;
      // generate the contact number value
      this.email_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_d76oduc", "template_r8ainab", this).then(
        function (response) {
          // if the response is good
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("overlayBox").innerHTML = "";
          document.getElementById(
            "messageSent"
          ).innerHTML = `<span>Thank you, we have recieved your Email. One of our consultants will be in touch soon.</span>`;
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
          document.getElementById("overlayBox").innerHTML = "";
          document.getElementById(
            "messageSent"
          ).innerHTML = `<span>Sorry it looks like something went wrong, please refresh the page and try again</span>`;
        }
      );
    });
};
