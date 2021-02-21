function getTodaysImage() {
  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then((res) => res.json())
  .then(function(res) {
    document.querySelector("#space-image").style.backgroundImage = `url(${res.url})`
    document.getElementById("image-request").value = res.date;
    document.getElementById("image-description").innerHTML = res.explanation;
    console.log(res.explanation);
  });
} 

function getSpecificImage() {
  const date = document.querySelector("#image-request").value;
  fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
  .then((res) => res.json())
  .then(function(res) {
    if('msg' in res || document.getElementById("image-request").value === ""){
      alert("Error, invalid date")
    } else {
      document.querySelector("#space-image").style.backgroundImage = `url(${res.url})`
      document.getElementById("image-description").innerHTML = res.explanation;
      console.log(res.explanation);
    }
  });
}

function getRandomImage() {
  let randYear = Math.floor(getRandomArbitrary(1996, 2020))
  let randDay = Math.floor(getRandomArbitrary(1, 28))
    if (randDay < 10) {
      randDay = "0".concat(randDay);
    }
  let randMonth = Math.floor(getRandomArbitrary(1, 12))
    if (randMonth < 10) {
      randMonth = "0".concat(randMonth);
    }
  let randDate = `${randYear}-${randMonth}-${randDay}`
  //then actually get the image
  document.getElementById("image-request").value = randDate;
  getSpecificImage();
  console.log(randDate)
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

