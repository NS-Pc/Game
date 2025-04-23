// === All sounds ===
let loads=document.getElementById("loads");
let gameovers=document.getElementById("gameovers");
let pop=document.getElementById("pop");
// === LOADING SCREEN ===
let load = document.getElementById("load");
let loading = document.getElementById("in");
let w = 30;
let loadingInterval = setInterval(() => {
    w += 30;
    loading.style.width = w + "px";
    loads.play()
}, 1000);


function hideLoading() {
    load.style.display = "none";
    clearInterval(loadingInterval);
}
setTimeout(hideLoading, 10000); // faster loading for testing




// === GAME LOGIC ===
let score = 0;
let scoreDisplay = document.querySelector(".topbox samp");

function resetBoxes() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box${i}`).style.backgroundImage = "url('images/box.png')";
    }
}

function getRandomBox(exclude = []) {
    let num;
    do {
        num = Math.floor(Math.random() * 9) + 1;
    } while (exclude.includes(num));
    return num;
}

function spawnEnemies() {
    resetBoxes();
    // Good guy (anime)
    let animeBox = getRandomBox();
    document.getElementById(`box${animeBox}`).style.backgroundImage = "url('images/anime.png')";

    // Bad guy (killer)
    let killerBox = getRandomBox([animeBox]);
    document.getElementById(`box${killerBox}`).style.backgroundImage = "url('images/kill.png')";
}

// === START GAME ===
setInterval(spawnEnemies, 1000);
let gameover=document.getElementById("gameover");
let scoreDisplays = document.querySelector("#gameover samp");
// === CLICK HANDLING ===
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
        let bg = box.style.backgroundImage;
        if (bg.includes("kill.png")) {
            score += 1;
            scoreDisplays.innerHTML=score;
        }else  if (bg.includes("anime.png")) {
            gameover.style.display="inline-block";
            gameovers.play();
            
        } 
        scoreDisplay.textContent = score;
    });
});


let button=document.querySelector("button");
button.addEventListener("click",()=>{
    score=0;
    gameover.style.display="none";
})
let boxs=document.querySelectorAll(".box");
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log(box)
        pop.play()
    })
})