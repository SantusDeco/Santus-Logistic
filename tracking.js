//////////////////////////////
// MOBILE MENU TOGGLE
//////////////////////////////
function toggleMenu(){
    document.getElementById("navbar").classList.toggle("active");
    }
   
    //////////////////////////////
    // BACK TO TOP (if used)
    //////////////////////////////
    function toTop(){
    window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // FAKE DATABASE
const trackingDB = {
    "SANTUS123": { status: "Shipped", progress: 50 },
    "SANTUS456": { status: "In Transit", progress: 75 },
    "SANTUS999": { status: "Delivered", progress: 100 }
    };
    
    function trackPackage(){
    const input = document.getElementById("trackInput").value.trim();
    const loading = document.getElementById("loading");
    const result = document.getElementById("result");
    
    loading.classList.remove("hidden");
    result.classList.add("hidden");
    
    setTimeout(() => {
    
    loading.classList.add("hidden");
    
    if(trackingDB[input]){
    
    document.getElementById("trackId").innerText = input;
    document.getElementById("statusText").innerText = trackingDB[input].status;
    
    let progress = trackingDB[input].progress;
    document.getElementById("progress").style.width = progress + "%";
    
    // STEP HIGHLIGHT
    let steps = document.querySelectorAll(".step");
    steps.forEach((s,i)=>{
    s.classList.remove("active");
    if(progress >= (i+1)*25){
    s.classList.add("active");
    }
    });
    
    result.classList.remove("hidden");
    
    }else{
    alert("Tracking number not found!");
    }
    
    }, 1500);
    }

    // REALISTIC TRACKING DATABASE
const trackingDB = {
"SANTUS-2026-001": {
status: "In Transit",
location: "Lagos Sorting Center",
progress: 60,
step: 3
},
"SANTUS-2026-002": {
status: "Delivered",
location: "Abuja Hub",
progress: 100,
step: 5
},
"SANTUS-2026-003": {
status: "Picked Up",
location: "London Export Center",
progress: 30,
step: 2
}
};

function trackPackageV2(){

const input = document.getElementById("trackInput").value.trim();
const loading = document.getElementById("loading");
const result = document.getElementById("result");

loading.classList.remove("hidden");
result.classList.add("hidden");

setTimeout(() => {

loading.classList.add("hidden");

const data = trackingDB[input];

if(!data){
alert("Tracking ID not found!");
return;
}

// update text
document.getElementById("trackId").innerText = input;
document.getElementById("statusText").innerText = data.status;
document.getElementById("locationText").innerText = data.location;

// progress bar
document.getElementById("progressBar").style.width = data.progress + "%";

// reset steps
document.querySelectorAll(".step").forEach(s=>{
s.classList.remove("active");
});

// activate steps
for(let i=1; i<=data.step; i++){
document.getElementById("s"+i).classList.add("active");
}

result.classList.remove("hidden");

}, 1500);
}