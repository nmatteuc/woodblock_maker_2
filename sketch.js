var skip = 50;
var lastButton = 4;
var sizeButton = 0;
var speed = 0;
var bstart = 150;
var bsize = 35;
var start = 0;

var sizeOne = [];
var sizeTwo = []
var sizeFive = [];
var sizeTen = [];
var half = [];
var quarter = [];

var redButton;
var blueButton;
var greenButton;
var blackButton;
var cyanButton;
var magentaButton;
var yellowButton;
var whiteButton;
var resetButton;
var printButton;
var halfButton;
var quarterButton;
var twoButton;
var fiveButton;
var tenButton;
var oneButton;
var speedButton;
var slowButton;
var slider;
var playButton;
var pauseButton;

var input;
var img;
var capture;
var camOn = false;
var dangerOn = false;

function preload(){

	for (var i=0; i < 80; i++){
		sizeOne[i] = loadImage("Images/One/1_"+i+".png");
		sizeTwo[i] = loadImage("Images/Two/2_"+i+".png");
		sizeFive[i] = loadImage("Images/Five/5_"+i+".png");
		sizeTen[i] = loadImage("Images/Ten/10_"+i+".png");
		half[i] = loadImage("Images/Half/H_"+i+".png");
		quarter[i] = loadImage("Images/Quarter/Q_"+i+".png");
	}
}

function setup() {
  createCanvas(700,700);
	//background(255);
  smooth();
	pixelDensity(1);
	fill(255);
	noStroke();
	rect(0,0,700,700);


	textFont('Avenir');
	textAlign(CENTER);
	fill(0);
	textSize(30);
	text("WOODBLOCK PIXEL MAKER",width/2,60);
	textSize(12);
	text("noahmatteucci.com", width/2,80);
	textSize(14);
	text("Ink color:",25,100,50,50);
	text("Opacity:",25,340,50,50);
	text("Upload image:",25,420,50,50);
	//text("Use webcam:",625,450,50,50);
	text("Woodblock size:",630,100,50,50);

	stroke(230);
  grid();

	//transparency slider
	slider = createSlider(0,255,255);
	slider.position(10,360);
	slider.style('width','80px');
	//red button
	redButton = createButton('');
  redButton.position(10, bstart);
	redButton.size(bsize,bsize);
	var col = color(204,41,60);
	redButton.style('background-color', col);
	redButton.style('border-radius:8px');
  redButton.mousePressed(reds);
	//green button
	greenButton = createButton('');
  greenButton.position(10, bstart+45);
	greenButton.size(bsize,bsize);
	col = color(35,108,81);
	greenButton.style('background-color', col);
	greenButton.style('border-radius:8px');
  greenButton.mousePressed(greens);
	//blue button
	blueButton = createButton('');
  blueButton.position(10, bstart+90);
	blueButton.size(bsize,bsize);
	var col = color(26,64,160);
	blueButton.style('background-color', col);
	blueButton.style('border-radius:8px');
  blueButton.mousePressed(blues);
	//black button
	blackButton = createButton('');
  blackButton.position(10, bstart+135);
	blackButton.size(bsize,bsize);
	var col = color(0);
	blackButton.style('background-color', col);
	blackButton.style('border-radius:8px');
  blackButton.mousePressed(blacks);
	//cyan button
	cyanButton = createButton('');
  cyanButton.position(55, bstart);
	cyanButton.size(bsize,bsize);
	var col = color(1,185,255);
	cyanButton.style('background-color', col);
	cyanButton.style('border-radius:8px');
  cyanButton.mousePressed(cyans);
	//magenta button
	magentaButton = createButton('');
  magentaButton.position(55, bstart+45);
	magentaButton.size(bsize,bsize);
	var col = color(237,0,140);
	magentaButton.style('background-color', col);
	magentaButton.style('border-radius:8px');
  magentaButton.mousePressed(magentas);
	//yellow button
	yellowButton = createButton('');
  yellowButton.position(55, bstart+90);
	yellowButton.size(bsize,bsize);
	var col = color(253,242,0);
	yellowButton.style('background-color', col);
	yellowButton.style('border-radius:8px');
  yellowButton.mousePressed(yellows);
	//white button
	whiteButton = createButton('');
  whiteButton.position(55, bstart+135);
	whiteButton.size(bsize,bsize);
	var col = color(255);
	whiteButton.style('background-color', col);
	whiteButton.style('border-radius:8px');
  whiteButton.mousePressed(whites);
	//reset button
	resetButton = createButton('RESET');
  resetButton.position(20, height-150);
	resetButton.size(60,20);
  resetButton.mousePressed(reset);
	//print button
	printButton = createButton('SAVE');
  printButton.position(20, height-120);
	printButton.size(60,20);
  printButton.mousePressed(prints);
	//quarterButton
	quarterButton = createButton('.2X');
	quarterButton.position(630, bstart);
  quarterButton.mousePressed(quarters);
	quarterButton.size(40,20);
	//halfButton
	halfButton = createButton('.5X');
	halfButton.position(630, bstart+30);
  halfButton.mousePressed(halves);
	halfButton.size(40,20);
	//one button
	oneButton = createButton('1X');
	oneButton.position(630, bstart+60);
  oneButton.mousePressed(ones);
	oneButton.size(40,20);
	//two button
	twoButton = createButton('2X');
	twoButton.position(630, bstart+90);
  twoButton.mousePressed(twos);
	twoButton.size(40,20);
	//five button
	fiveButton = createButton('5X');
	fiveButton.position(630, bstart+120);
  fiveButton.mousePressed(fives);
	fiveButton.size(40,20);
	//ten button
	tenButton = createButton('10X');
	tenButton.position(630, bstart+150);
  tenButton.mousePressed(tens);
	tenButton.size(40,20);
	//fast button
	speedButton = createButton('SPEED DEMON (click & drag)');
  speedButton.position(620,height-160);
	speedButton.size(60,60);
	speedButton.mousePressed(fast);
	//slow button
	slowButton = createButton('SLOW POKE (click only)');
  slowButton.position(620, height-230);
	slowButton.size(60,60);
	slowButton.mousePressed(slow);
	/*
	//video buttons
	playButton = createButton('PLAY');
  playButton.position(610,500);
	playButton.mousePressed(play);
	playButton.size(80,20);
	pauseButton = createButton('PAUSE');
  pauseButton.position(610,530);
	pauseButton.mousePressed(pause);
	pauseButton.size(80,20);
*/
	input = createFileInput(handleFile);
	input.position(10,460);
	input.size(80,20);
/*
	capture = createCapture(VIDEO);
	capture.size(1000,500);
	capture.hide();
	print(capture.width);
	print(capture.height);
*/
	var dangerButton = createButton('DO NOT PUSH');
	dangerButton.position(620,370);
	dangerButton.size(60,60);
	dangerButton.style('border-radius:50%');
	dangerButton.style('background-color:#f44336');
	dangerButton.mousePressed(chaos);
}
/*
//webcam run
function run(){

		noStroke();
		fill(255);
		rect(100,100,500,500);
		frameRate(10);
		//var val = slider.value();
		//image(capture,100,100);

		//loadPixels();

		capture.loadPixels();
		if(sizeButton == 0){
		for (var x = 250; x < capture.width-250; x+=50){
			for (var y = 0; y < capture.height; y+=50){
				var index = (x + y * capture.width)*4;
				var r = capture.pixels[index];
				var g = capture.pixels[index+1];
				var b = capture.pixels[index+2];
				var a = capture.pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				var pick = int(random(70,80));
				tint(r,g,b);
				image(sizeOne[pick],x-150,y+100);
			}
		}
	}else if(sizeButton == 1){
		for (var x = 250; x < capture.width-250; x+=100){
			for (var y = 0; y < capture.height; y+=100){
				var index = (x + y * capture.width)*4;
				var r = capture.pixels[index];
				var g = capture.pixels[index+1];
				var b = capture.pixels[index+2];
				var a = capture.pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				var pick = int(random(70,80));
				tint(r,g,b);
				image(sizeTwo[pick],x-150,y+100);
			}
		}
	}else if(sizeButton == 2){
		for (var x = 250; x < capture.width-250; x+=250){
			for (var y = 0; y < capture.height; y+=250){
				var index = (x + y * capture.width)*4;
				var r = capture.pixels[index];
				var g = capture.pixels[index+1];
				var b = capture.pixels[index+2];
				var a = capture.pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				var pick = int(random(70,80));
				tint(r,g,b);
				image(sizeFive[pick],x-150,y+100);
			}
		}
	}else if(sizeButton == 3){
		for (var x = 250; x < capture.width-250; x+=500){
			for (var y = 0; y < capture.height; y+=500){
				var index = (x + y * capture.width)*4;
				var r = capture.pixels[index];
				var g = capture.pixels[index+1];
				var b = capture.pixels[index+2];
				var a = capture.pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				var pick = int(random(70,80));
				tint(r,g,b);
				image(sizeTen[pick],x-150,y+100);
			}
		}
	}else if(sizeButton == 4){
		frameRate(5);
		for (var x = 250; x < capture.width-250; x+=25){
			for (var y = 0; y < capture.height; y+=25){
				var index = (x + y * capture.width)*4;
				var r = capture.pixels[index];
				var g = capture.pixels[index+1];
				var b = capture.pixels[index+2];

				var pick = int(random(70,80));
				tint(r,g,b);
				image(half[pick],x-150,y+100);
			}
		}
	}else if(sizeButton == 5){
		frameRate(5);
		for (var x = 250; x < capture.width-250; x+=10){
			for (var y = 0; y < capture.height; y+=10){
				var index = (x + y * capture.width)*4;
				var r = capture.pixels[index];
				var g = capture.pixels[index+1];
				var b = capture.pixels[index+2];

				var pick = int(random(70,80));
				tint(r,g,b);
				image(quarter[pick],x-150,y+100);
			}
		}
	}
	//start = 0;
}
*/
function chaos(){
	dangerOn = true;

	redButton.hide();
	blueButton.hide();
	greenButton.hide();
	blackButton.hide();
	cyanButton.hide();
	magentaButton.hide();
	yellowButton.hide();
	whiteButton.hide();
	resetButton.hide();
	printButton.hide();
	halfButton.hide();
	quarterButton.hide();
	twoButton.hide();
	fiveButton.hide();
	tenButton.hide();
	oneButton.hide();
	speedButton.hide();
	slowButton.hide();
	slider.hide();
	input.hide();

frameRate(10);
	var choose = int(random(1));
	if (choose == 0){
		for (var x = 0; x < width; x+=skip){
			for (var y = 0; y < height; y+=skip){
				//frameRate(10);
				var trans = int(random(255));
				var pick = int(random(80));
				tint(255,trans);
				image(sizeOne[pick],x,y);
			}
		}
	}
}
function draw() {
	//run webcam
	//if (start == 1){
		//run();
	//}
if (dangerOn){
		chaos();
	}
}

//button functions
function reds(){
	lastButton = 1;
}
function greens(){
	lastButton = 2;
}
function blues(){
	lastButton = 3;
}
function blacks(){
	lastButton = 4;
}
function cyans(){
	lastButton = 5;
}
function magentas(){
	lastButton = 6;
}
function yellows(){
	lastButton = 7;
}
function whites(){
	lastButton = 8;
}
function reset(){
	stroke(230);
	fill(255);
	rect(width/2-250,height/2-250,500,500);
}
function prints(){
	//erase the grid
	stroke(255);
	grid();
	//erase the sides
	fill(255);
	rect(0,0,100,height);
	rect(0,0,width,100);
	rect(width-100,0,width-100,height);
	rect(0,height-100,width,height);

	saveCanvas('image.jpg');

	textFont('Avenir');
	textAlign(CENTER);
	fill(0);
	textSize(30);
	text("WOODBLOCK PIXEL MAKER",width/2,60);
	textSize(12);
	text("noahmatteucci.com", width/2,80);
	textSize(14);
	text("Ink color:",25,100,50,50);
	text("Opacity:",25,340,50,50);
	text("Upload image:",25,420,50,50);
	//text("Use webcam:",625,450,50,50);
	text("Woodblock size:",630,100,50,50);

	stroke(230);
  grid();
}
function quarters(){
	sizeButton = 5;
}
function halves(){
	sizeButton = 4;
}
function ones(){
	sizeButton = 0;
}
function twos(){
	sizeButton = 1;
}
function fives(){
	sizeButton = 2;
}
function tens(){
	sizeButton = 3;
}
function fast(){
	speed = 1;
}
function slow(){
	speed = 0;
}
function play(){
	start = 1;
	if(sizeButton == 0 || sizeButton == 1 || sizeButton == 2 || sizeButton == 3 || sizeButton == 4 || sizeButton == 5){
		run();
	}
}
function pause(){
	start = 0;
}


//image functions
function handleFile(file){
	if (file.type === 'image') {
		img = createImg(file.data, drawImg);
	}
}

function drawImg(){
	pause();
	//var val = slider.value();
	var val = 255;
	if (sizeButton == 0){

		image(img,100,100,500,500);
		loadPixels();

		for (var x = 100; x < 600; x+=50){
			for (var y = 100; y < 600; y+=50){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				fill(255);
				rect(x,y,50,50);
				var pick = int(random(70,80));
				tint(r,g,b,val);
				image(sizeOne[pick],x,y);

			}
		}
	}else if (sizeButton == 1){
		image(img,100,100,500,500);
		loadPixels();

		for (var x = 100; x < 600; x+=100){
			for (var y = 100; y < 600; y+=100){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				fill(255);
				rect(x,y,100,100);
				var pick = int(random(70,80));
				tint(r,g,b,val);
				image(sizeTwo[pick],x,y);
			}
		}
	}else if (sizeButton == 2){
		image(img,100,100,500,500);
		loadPixels();

		for (var x = 100; x < 600; x+=250){
			for (var y = 100; y < 600; y+=250){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				fill(255);
				rect(x,y,250,250);
				var pick = int(random(70,80));
				tint(r,g,b,val);
				image(sizeFive[pick],x,y);
			}
		}
	}else if (sizeButton == 3){
		image(img,100,100,500,500);
		loadPixels();

		for (var x = 100; x < 600; x+=500){
			for (var y = 100; y < 600; y+=500){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				fill(255);
				rect(x,y,500,500);
				var pick = int(random(70,80));
				tint(r,g,b,val);
				image(sizeTen[pick],x,y);
			}
		}
	}else if (sizeButton == 4){
		image(img,100,100,500,500);
		loadPixels();

		for (var x = 100; x < 600; x+=25){
			for (var y = 100; y < 600; y+=25){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				fill(255);
				rect(x,y,25,25);
				var pick = int(random(70,80));
				tint(r,g,b,val);
				image(half[pick],x,y);
			}
		}
	}else if (sizeButton == 5){
		image(img,100,100,500,500);
		loadPixels();

		for (var x = 100; x < 600; x+=10){
			for (var y = 100; y < 600; y+=10){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);
				var value = brightness(c);
				var value2 = hue(c);

				noStroke();
				fill(255);
				rect(x,y,10,10);
				var pick = int(random(70,80));
				tint(r,g,b,val);
				image(quarter[pick],x,y);
			}
		}
	}
}

function mouseClicked(){
	var val = slider.value();
	//switching colors
	if (sizeButton == 0){
      for (var x = (width/2-250); x < (width/2+250); x += skip){
        for (var y = (height/2-250); y < (height/2+250); y += skip){
          if (mouseX >= x && mouseX < (x+skip) && mouseY >= y && mouseY < (y+skip)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}
				}
			}
		}
	}else if (sizeButton == 1) {
      for (var x = (width/2-250); x < (width/2+250); x += skip*2){
        for (var y = 100; y < height-100; y += skip*2){
          if (mouseX >= x && mouseX < (x+skip*2) && mouseY >= y && mouseY < (y+skip*2)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}
					}
      	}
    	}
	}else if (sizeButton == 2) {
      for (var x = (width/2-250); x < (width/2+250); x += skip*5){
        for (var y = 100; y < height-100; y += skip*5){
          if (mouseX >= x && mouseX < (x+skip*5) && mouseY >= y && mouseY < (y+skip*5)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}
					}
      	}
    	}
	}else if (sizeButton == 3) {
      for (var x = (width/2-250); x < (width/2+250); x += skip*10){
        for (var y = 100; y < height-100; y += skip*10){
          if (mouseX >= x && mouseX < (x+skip*10) && mouseY >= y && mouseY < (y+skip*10)){
						if (lastButton == 4){ //black
							var pick = int(random(10));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}
        	}
      	}
    	}
  	}else if (sizeButton == 4){
      for (var x = (width/2-250); x < (width/2+250); x += skip/2){
        for (var y = (height/2-250); y < (height/2+250); y += skip/2){
          if (mouseX >= x && mouseX < (x+skip/2) && mouseY >= y && mouseY < (y+skip/2)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(10));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(half[pick],x,y);
						}
					}
				}
			}
		}else if (sizeButton == 5){
      for (var x = (width/2-250); x < (width/2+250); x += skip/5){
        for (var y = (height/2-250); y < (height/2+250); y += skip/5){
          if (mouseX >= x && mouseX < (x+skip/5) && mouseY >= y && mouseY < (y+skip/5)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(10));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(quarter[pick],x,y);
						}
					}
				}
			}
		}
}

//interface functions
function grid() {
  strokeWeight(2);
	noFill();
	rect(100,100,500,500);
}
function dots(){
  //draw a dotted line
  for (var x = 610; x < 690; x += 10){
    stroke(0);
    line(x, bstart+285, x + 3, bstart+285);
    line(x, bstart+287, x + 3, bstart+287);
  }
}

//button class
function Button (x,y,w,h,r,g,b){
    this.x = x;
    this.y = y;
		this.w = w;
		this.h = h;
		this.r = r;
		this.g = g;
		this.b = b;

		this.show = function(){
			fill(this.r,this.g,this.b);
			rect(this.x,this.y,this.w,this.h,10);
		}

		this.MouseIsOver = function(){
			if(mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)){
				return true;
			}
			return false;
		}
}

function mouseDragged(){

	if(speed == 1){
	var val = slider.value();

	//switching colors
	if (sizeButton == 0){
      for (var x = (width/2-250); x < (width/2+250); x += skip){
        for (var y = (height/2-250); y < (height/2+250); y += skip){
          if (mouseX >= x && mouseX < (x+skip) && mouseY >= y && mouseY < (y+skip)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeOne[pick],x,y);
						}
				}
			}
		}
	}else if (sizeButton == 1) {
      for (var x = (width/2-250); x < (width/2+250); x += skip*2){
        for (var y = 100; y < height-100; y += skip*2){
          if (mouseX >= x && mouseX < (x+skip*2) && mouseY >= y && mouseY < (y+skip*2)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeTwo[pick],x,y);
						}
					}
      	}
    	}
	}else if (sizeButton == 2) {
      for (var x = (width/2-250); x < (width/2+250); x += skip*5){
        for (var y = 100; y < height-100; y += skip*5){
          if (mouseX >= x && mouseX < (x+skip*5) && mouseY >= y && mouseY < (y+skip*5)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeFive[pick],x,y);
						}
					}
      	}
    	}
	}else if (sizeButton == 3) {
      for (var x = (width/2-250); x < (width/2+250); x += skip*10){
        for (var y = 100; y < height-100; y += skip*10){
          if (mouseX >= x && mouseX < (x+skip*10) && mouseY >= y && mouseY < (y+skip*10)){
						if (lastButton == 4){ //black
							var pick = int(random(0,10));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(10,20));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(sizeTen[pick],x,y);
						}
        	}
      	}
    	}
  	}else if (sizeButton == 4){
      for (var x = (width/2-250); x < (width/2+250); x += skip/2){
        for (var y = (height/2-250); y < (height/2+250); y += skip/2){
          if (mouseX >= x && mouseX < (x+skip/2) && mouseY >= y && mouseY < (y+skip/2)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(10));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(half[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(half[pick],x,y);
						}
					}
				}
			}
		}else if (sizeButton == 5){
      for (var x = (width/2-250); x < (width/2+250); x += skip/5){
        for (var y = (height/2-250); y < (height/2+250); y += skip/5){
          if (mouseX >= x && mouseX < (x+skip/5) && mouseY >= y && mouseY < (y+skip/5)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(10));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							image(quarter[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							image(quarter[pick],x,y);
						}
					}
				}
			}
		}
	}
}
