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

}

function setup(){
    canvas = createCanvas(900,500);
    background("white");
    canvas.position(300,400);
}

function draw(){
    Check_Sketch();
}

function Check_Sketch(){
    timer_counter = timer_counter++;
    document.getElementById("Timer_span").innerHTML = "Timer" + timer_counter;
    if (timer_counter >= 600){
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
    canvas.background("red")
}