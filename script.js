//TIME
setInterval(() =>{
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    if(hrs > 12){
        document.getElementById("session").innerHTML = "PM";
    }
    else{
        document.getElementById("session").innerHTML = "AM";
    }
})

//MOUSE HOVER
const cursor = document.getElementById("cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStop(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout)
    timeout = setTimeout(mouseStop, 1000);
});

// document.addEventListener("mouseout", () => {
//     cursor.style.display = "none";
// });
