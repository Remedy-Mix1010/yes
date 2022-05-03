noseX = 0;
noseY = 0; 
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/B6QjdcWh/mhm.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO)
video.size(300, 300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on("pose", getResult);
}

function getResult(result){
    if(result.length > 0){
        console.log(result)
        console.log(result[0].pose.nose.x)
        console.log(result[0].pose.nose.y)
        noseX = result[0].pose.nose.x -80;
        noseY = result[0].pose.nose.y -80;

    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 150, 150);
}
function modelLoaded(){
    console.log("Model is loaded")
}
function snapshot(){
    save("my_little_pony.png");
}
