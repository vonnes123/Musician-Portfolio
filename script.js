      // Get the modal1
      var modal1 = document.getElementById("myModal1");
    
      // Get the button that opens the modal1
      var btn = document.getElementById("popUPSinger");
      
      // Get the <span> element that closes the modal1
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks the button, open the modal 1
      btn.onclick = function() {
        modal1.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal1
      span.onclick = function() {
        modal1.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal1, close it
      window.onclick = function(event) {
        if (event.target == modal1) {
          modal1.style.display = "none";
        }
      }
      
      
        // Get the modal2
        var modal2 = document.getElementById("myModal2");
      
      // Get the button that opens the modal2
      var btn = document.getElementById("popUPProducer");
      
      // Get the <span> element that closes the modal2
      var span = document.getElementsByClassName("close2")[0];
      
      // When the user clicks the button, open the modal2
      btn.onclick = function() {
        modal2.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal2
      span.onclick = function() {
        modal2.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal2, close it
      window.onclick = function(event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      }





            // Get the modal1
      var modal3 = document.getElementById("myModal3");
    
      // Get the button that opens the modal1
      var btn = document.getElementById("popUPSinger2");
      
      // Get the <span> element that closes the modal1
      var span = document.getElementsByClassName("close3")[0];
      
      // When the user clicks the button, open the modal 1
      btn.onclick = function() {
        modal3.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal1
      span.onclick = function() {
        modal3.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal1, close it
      window.onclick = function(event) {
        if (event.target == modal3) {
          modal3.style.display = "none";
        }
      }
      
      
        // Get the modal2
        var modal4 = document.getElementById("myModal4");
      
      // Get the button that opens the modal2
      var btn = document.getElementById("popUPProducer2");
      
      // Get the <span> element that closes the modal2
      var span = document.getElementsByClassName("close4")[0];
      
      // When the user clicks the button, open the modal2
      btn.onclick = function() {
        modal4.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal2
      span.onclick = function() {
        modal4.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal2, close it
      window.onclick = function(event) {
        if (event.target == modal4) {
          modal4.style.display = "none";
        }
      }


// Contact form code
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
//

let formCheck = false;
const form = document.querySelector('form');
const checkName = document.querySelector('input[name="FullName"]');
const checkEmail = document.querySelector('input[name="email"]');
const checkMsg = document.querySelector('#msg');
const SentMessage = document.querySelector(".SentMessage");

const resetInputs = (elm) => {
    elm.nextElementSibling.classList.add("hide");
};

const invalidInputs = (elm) => {
    elm.nextElementSibling.classList.remove("hide");
};


const checkInputs = () => {
    resetInputs(checkName);
    resetInputs(checkEmail);
    resetInputs(checkMsg);
    formCheck = true;

    if (!checkName.value) {
        invalidInputs(checkName);
        formCheck = false;
    }

    if (!isValidEmail(checkEmail.value)) {
        invalidInputs(checkEmail);
        formCheck = false;
    }

    if (!checkMsg.value) {
        invalidInputs(checkMsg);
        formCheck = false;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (formCheck) {
        form.remove();
        SentMessage.classList.remove("hide");
    }
});

checkName.addEventListener("input", () => {
    checkInputs();
});

checkEmail.addEventListener("input", () => {
    checkInputs();
});

checkPhone.addEventListener("input", () => {
    checkInputs();
});


function mobileMenu(){
      document.getElementById("burger-menu").style.height = "200px";
      document.getElementById("burger-menu").style.padding = "20px 0";
      document.getElementById("burger-icon").style.display = "none";
      document.getElementById("close-icon").style.display = "flex";

}

function mobileClose(){
      document.getElementById("burger-menu").style.height = "0";
      document.getElementById("burger-menu").style.padding = "0";
      document.getElementById("burger-icon").style.display = "block";
      document.getElementById("close-icon").style.display = "none";
}

        function play() {
          var audio = document.getElementById("audio");
          audio.play();
        }
        function play2() {
          var audio = document.getElementById("audio2");
          audio.play();
        }