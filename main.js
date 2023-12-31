function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(410, 410);
    canvas.position(720, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}


function change(){
    no = Math.floor(Math.random()*10)
    console.log(no);
    if(no == 1){
        document.getElementById("head").style="background-color:yellow";
        document.getElementById("bg").style="background-color:cyan";
    }
    if(no == 2){
        document.getElementById("head").style="background-color:red; color:black";
        document.getElementById("disc").style="color:white";
        document.getElementById("bg").style="background-color:yellow";
    }
    if(no == 3){
        document.getElementById("head").style="background-color:lime";
        document.getElementById("bg").style="background-color:orange";
    }
    if(no == 4){
        document.getElementById("head").style="background-color:pink";
        document.getElementById("disc").style="color:white";
        document.getElementById("bg").style="background-color:cyan";
    }
    if(no == 5){
        document.getElementById("head").style="background-color:brown";
        document.getElementById("bg").style="background-color:grey";
    }
    if(no == 6){
        document.getElementById("head").style="background-color:black; color:white";
        document.getElementById("bg").style="background-color:grey";
    }
    if(no == 7){
        document.getElementById("head").style="background-color:purple; color:white;";
        document.getElementById("disc").style="color:white";
        document.getElementById("bg").style="background-color:yellow";
    }
    if(no == 8){
        document.getElementById("head").style="background-color:orange";
        document.getElementById("disc").style="color:white";
        document.getElementById("bg").style="background-color:lime";
    }
    if(no == 9){
        document.getElementById("head").style="background-color:crimson; color:white;";
        document.getElementById("disc").style="color:white";
        document.getElementById("bg").style="background-color:white";
    }
    if(no == 10){
        document.getElementById("head").style="background-color:grey";
        document.getElementById("bg").style="background-color:white";
    }
}