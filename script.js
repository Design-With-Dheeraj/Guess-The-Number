
Shery.mouseFollower();


function updateTime() {
    let timeValue = document.querySelectorAll("#timeValue");

    let now = new Date();
    let getHour = now.getHours().toString().padStart(2, '0');
    let getMinute = now.getMinutes().toString().padStart(2, '0');
    let amPm = getHour >= 12 ? 'pm' : 'am';
    getHour = (getHour % 12) || 12;

    timeValue.forEach(element => {
        element.innerHTML = `${getHour} : ${getMinute} ${amPm}`;
    });
}

updateTime();
setInterval(updateTime, 1000);

var randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
let checkBtn = document.getElementById("checkResult");
checkBtn.style.display = "none"

let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", ()=>{
    generateBtn.classList.add("generateBtn-width");
    generateBtn.style.backgroundColor = "var(--primaryBlack)";
    generateBtn.style.color = "var(--primaryWhite)";
    // console.log("clicked")
    generateBtn.innerHTML = `number generated <img src="assets/gifs/generate-success.gif" alt="Success GIF">`
    document.getElementById("checkResult").disabled = false;
    checkBtn.style.display = "inline-block";
})


let chances = 10;
let chanceValue = document.getElementById("chanceVal");
chanceValue.innerHTML = chances;

checkBtn.addEventListener('click', function() {

    let numberInput = document.getElementById("numberInput");
    let inputError = document.getElementById("inputError");
    let hintValue = document.getElementById("hintValue");
    

    console.log(numberInput.value);


    let resultContain = document.getElementById("resultContain");

    let resultGif_win = document.getElementById("resultGif");
    let resultGif_lose = document.getElementById("resultGif");

    let resultGreetVal = document.getElementById("resultGreet");
    let resultRandumVal = document.getElementById("resultRandum");
    let resultExVal = document.getElementById("resultEx");

    let resultGreet_win = `amazing -<br>you did it.`;
    let resultGreet_lose = `oh! no<br>your moves<br>are over`;

    let resultEx_win = `is the right<br>value :)`;
    let resultEx_lose = `let's try<br>again :(`;

    chances--;
    chanceValue.innerHTML = chances;

    if (chances == 0 && numberInput.value != randomNumber) {
        document.getElementById("hintContain").style.display = "none";
        checkBtn.style.display = "none";

        resultGreetVal.style.display = "block";
        resultGreetVal.innerHTML = resultGreet_lose;
        
        resultExVal.style.display = "flex";
        resultExVal.innerHTML = resultEx_lose;
        
        resultRandumVal.style.display = "block";
        resultRandumVal.innerHTML = "--"
        
        resultGif_lose.src = "assets/gifs/lose-gif.gif";

        inputError.style.display = "none";

        setInterval(pageRefresh, 4000);
    }
    else if (numberInput.value == randomNumber) {
        document.getElementById("hintContain").style.display = "none";
        resultGreetVal.style.display = "block";
        resultGreetVal.innerHTML = resultGreet_win;

        resultExVal.style.display = "flex";
        resultExVal.innerHTML = resultEx_win;

        resultRandumVal.style.display = "block";
        resultRandumVal.innerHTML = randomNumber;
        
        resultGif_win.src = "assets/gifs/win-gif.gif";

        inputError.style.display = "none";

        setInterval(pageRefresh, 4000);
    }
    else{
        if (numberInput.value == "") {
            inputError.style.display = "block";
            inputError.innerHTML = "value shouldn't be empty !";
        } 
        else if (numberInput.value <= 0 || numberInput.value >= 101) {
            inputError.style.display = "block";
            inputError.innerHTML = "value should be between<br>1 to 100";
        }
        else if(numberInput.value > randomNumber){
            hintValue.innerHTML = "your given value is greater then the random number";
            inputError.style.display = "none";
        }
        else if(numberInput.value < randomNumber){
            hintValue.innerHTML = "your given value is less then the random number";
            inputError.style.display = "none";
        }
        else {
            inputError.style.display = "none";
        }
    }
})



let refreshCountdown = 6;

function pageRefresh() {
    let refreshTl = gsap.timeline();

    refreshTl.to(".page-refresh-contain", {
        display: "flex",
        duration: 0.5,
    })
    refreshTl.to(".challenge-container", {
        opacity: 0,
        duration: 0.7,
    })
    refreshTl.to(".refresh-notify-span", {
        opacity: 1,
        duration: 0.5,
    })
    refreshTl.to(".page-refresh-contain .circle-shp", {
        delay: -1,
        border: "800px solid rgba(35, 35, 35, 1)",
        duration: 1,
        onComplete: countdown,
    })
}

function countdown() {
    let countdownInterval = setInterval(function() {
        refreshCountdown--;
        document.getElementById("refreshCountdown").innerHTML = refreshCountdown;

        if (refreshCountdown == 0) {
            clearInterval(countdownInterval);
            window.location.reload();
        }
    }, 900)
}











function gsapAnimations() {

    function startLoader() {
        let loaderNumber = document.getElementById("loadingNumVal");
      
        let progress = 0;
        let increment = 1;
      
        let interval = setInterval(function() {
          progress += increment;
          loaderNumber.innerHTML = progress + '%';
      
          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 40);
      }
      startLoader();

    let tl = gsap.timeline();

    gsap.to(".page-loader .line", {
        width: "100%",
        duration: 5,
    })
    tl.from(".page-loader .loading-num", {
        right: "90%",
        duration: 5,
    })
    tl.to(".page-loader .loading-num", {
        opacity: 0,
    })
    tl.to(".page-upper-bx", {
        yPercent: -100,
    })
    tl.to(".page-lower-bx", {
        yPercent: 100,
        delay: -0.5,
    })
    tl.to(".page-loader", {
        opacity: 0,
        display: "none",
    })
    tl.from(".challenge-head", {
        opacity: 0,
        duration: 1,
    })
    tl.from(".challenge-head img", {
        y: "100%",
        delay: -1,
        opacity: 0,
        duration: 1,
    })
    tl.from(".small-interaction-contain", {
        y: "-100%",
        opacity: 0,
        duration: 0.7,
    })
}
gsapAnimations();