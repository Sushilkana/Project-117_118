array_1 = ["pen","paper","book","bottle","car","Pizza","School"];
random_numbers = Math.floor((Math.random()*array_1.length));
Element_of_array = array_1[random_numbers];
console.log("Sketch to be drawn: " + Element_of_array);

var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;

document.getElementById("p3").innerHTML = "Sketch to be drawn: " + Element_of_array;


function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}

function setup(){
    canvas = createCanvas(900,500);
    background("white");
    canvas.position(300,400);
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw(){
    strokeWeight(13);
    stroke(0);
    Check_Sketch();
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,result){
    if (error){
        console.error();
    }
    console.log(result);
    document.getElementById("Ur_sketch").innerHTML = "Your Sketch: " + result[0].label;
    document.getElementById("Confi").innerHTML = "Confidence: " +  Math.round(results[0].confidence*100) + "%";
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

function Check_Sketch(){
    timer_counter = timer_counter+1;
    document.getElementById("Timer_span").innerHTML = "Timer: " + timer_counter;
    if (timer_counter >= "600"){
        timer_counter = 0;
        timer_counter = "conpleted  1";
    }

    if (timer_counter == "Completed"){
        timer_counter = 0;
        answer_holder = "set";
        timer_check = 0;
        answer_holder = "";
        UpdateCanvas();
    }
}

function UpdateCanvas(){
    canvas.background("red");
}