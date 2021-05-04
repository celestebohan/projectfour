var us = document.getElementById("us");
var canada = document.getElementById("canada");
var mexico = document.getElementById("mexico");
var china = document.getElementById("china");
var southafrica = document.getElementById("southafrica");

var imgArray = [us, canada, mexico, china, southafrica];
function showImg(img) {
  for (i = 0; i < imgArray.length; i++) {
    imgArray[i].style.display = "none";
  }
  img.style.display = "block";
}


navigator.geolocation
let bin = document.querySelector('#location');
function showLocation(pos) {
  bin.innerHTML = `<h4>Your location is:<br> ${pos.coords.latitude}, ${pos.coords.longitude} </h4><h2>welcome to your garden!</h2>`
   if(pos.coords.longitude > -168 && pos.coords.longitude < -66 && pos.coords.latitude <71 && pos.coords.latitude > 24){
      

    showImg(us)

    us.classList.add('fade-in');
us.addEventListener('animationend', () => {
    us.classList.remove('fade-in');
}, { once: true });


    us.scrollIntoView({behavior: "smooth"});


 



  }; if (pos.coords.longitude > -142 && pos.coords.longitude < -55 && pos.coords.latitude <69 && pos.coords.latitude > 49){
    showImg(canada);

        canada.classList.add('fade-in');
canada.addEventListener('animationend', () => {
    canada.classList.remove('fade-in');
}, { once: true });


    canada.scrollIntoView({behavior: "smooth"});



  }; if (pos.coords.longitude > -144 && pos.coords.longitude < -94 && pos.coords.latitude <26 && pos.coords.latitude > 15){
    showImg(mexico);


        mexico.classList.add('fade-in');
mexico.addEventListener('animationend', () => {
    mexico.classList.remove('fade-in');
}, { once: true });

    mexico.scrollIntoView({behavior: "smooth"});
  }; if (pos.coords.longitude > 76 && pos.coords.longitude < 121 && pos.coords.latitude <42 && pos.coords.latitude > 22){
    showImg(china);

        china.classList.add('fade-in');
china.addEventListener('animationend', () => {
    china.classList.remove('fade-in');
}, { once: true });

    china.scrollIntoView({behavior: "smooth"});
  };if (pos.coords.longitude > 76 && pos.coords.longitude < 121 && pos.coords.latitude <42 && pos.coords.latitude > 22){
    showImg(southafrica);

        southafrica.classList.add('fade-in');
southafrica.addEventListener('animationend', () => {
    southafrica.classList.remove('fade-in');
}, { once: true });

    southafrica.scrollIntoView({behavior: "smooth"});
  };
 };
function showError(error) {
    bin.innerHTML = error.message;
}
let input = document.querySelector('#request-location');
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
  navigator.geolocation.getCurrentPosition(showLocation, showError);
  // document.getElementById("h2").scrollIntoView();;
  // document.getElementById('us').scrollIntoView();
  // if(`${pos.coords.latitude}, ${pos.coords.longitude}` == '37.0902° N, 95.7129° W'){
 


}

});




// right -66 -55 -94 121

// left -168 -142 -144 76

// top 71 69 26 42 

// bottom 24 49 15 22