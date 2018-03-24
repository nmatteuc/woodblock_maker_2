var skip = 50;
var lastButton = 4;
var sizeButton = 0;
var speed = 0;
var bstart = 150;
var bsizes = 80;
var bsize = 44;
var sliderSize = 80;
var start = 0;

var sizeOne = [];
var sizeTwo = []
var sizeFive = [];
var sizeTen = [];
var half = [];
var quarter = [];

var resetButton;
var printButton;
var speedButton;
var slowButton;
var playButton;
var pauseButton;
var dangerButton;

var input;
var img;
var capture;
var camOn = false;
var dangerOn = false;

var canvas;
var canvasW = 510;
var canvasH = 510;
//starting distance away from center of grid
var center = 250;
//canvas border
var cs = 5;
//canvas header
var cHead = 70;
//left margin
var lMar = 150;
//space around ink buttons
var bSpace = 5;

var redB;
var greenB;
var blueB;
var cyanB;
var magentaB;
var yellowB;
var whiteB;
var blackB;

var ink;
var val;
var slider;
var one;
var two;
var three;
var four;
var five;
var six;

var gridOne;
var gridTwo;
var gridThree;
var gridSize = 0;

//text
var ink,opacity,psize,upload,gsize,website;

function preload(){
	for (var i=0; i < 80; i++){
		sizeOne[i] = loadImage("One/1_"+i+".png");
		sizeTwo[i] = loadImage("Two/2_"+i+".png");
		sizeFive[i] = loadImage("Five/5_"+i+".png");
		sizeTen[i] = loadImage("Ten/10_"+i+".png");
		half[i] = loadImage("Half/H_"+i+".png");
		quarter[i] = loadImage("Quarter/Q_"+i+".png");
	}
}

function windowResized(){

	if (windowWidth < 700 || canvasW+200 > windowWidth){

		var first = windowWidth/2-center;
		var firstb = windowWidth/2-center+bsize+bSpace;
		var second = windowWidth/2-center/2;
		var secondb = windowWidth/2-center/2+bsize+bSpace;
		var third = windowWidth/2;
		var fourth = windowWidth/2+bsize*2;
		var fifth = windowWidth/2+center/2+bsize+bSpace;
		var rowA = cHead+canvasH+bSpace;
		var rowB = cHead+canvasH+bSpace+bsize;
		var rowC = cHead+canvasH+bSpace*2+bsize*2;
		var rowD = cHead+canvasH+bSpace*3+bsize*3;
		var rowE = cHead+canvasH+bSpace*4+bsize*4;
		var rowF = cHead+canvasH+bSpace*5+bsize*5;

		canvas.position(windowWidth/2-center,cHead);
		website.position(windowWidth/2-45,40);

		ink.position(first,rowA);
	  redB.position(first,rowB);
	  greenB.position(first,rowC);
	  blueB.position(first,rowD);
	  whiteB.position(first,rowE);
	  cyanB.position(firstb,rowB);
	  magentaB.position(firstb,rowC);
	  yellowB.position(firstb,rowD);
	  blackB.position(firstb,rowE);

		opacity.position(second,rowE);
		slider.position(second,rowF);

		psize.position(second,rowA);
	  one.position(second,rowB);
		one.size(bsize,bsize);
	  two.position(secondb,rowB);
		two.size(bsize,bsize);
	  three.position(second,rowC);
		three.size(bsize,bsize);
	  four.position(secondb,rowC);
		four.size(bsize,bsize);
	  five.position(second,rowD);
		five.size(bsize,bsize);
	  six.position(secondb,rowD);
		six.size(bsize,bsize);

		//upload.position(second,rowE);
		//input.position(second,rowF);
		upload.hide();
		input.hide();

		gsize.position(third,rowA);
		gridOne.position(third,rowB);
		gridTwo.position(third,rowC);
		gridThree.position(third,rowD);

		resetButton.position(fourth,rowB);
		printButton.position(fourth,rowC);
		dangerButton.position(fifth,rowB);

	}else{
		canvas.position(windowWidth/2-center,cHead);
		website.position(windowWidth/2-45,40);

		ink.position(windowWidth/2-center-bSpace*2-bsize*2,cHead);
	  redB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize);
	  greenB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize*2+bSpace);
	  blueB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize*3+bSpace*2);
	  whiteB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize*4+bSpace*3);
	  cyanB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize);
	  magentaB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize*2+bSpace);
	  yellowB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize*3+bSpace*2);
	  blackB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize*4+bSpace*3);


		one.size(bsize,bsize/2);
		two.size(bsize,bsize/2);
		three.size(bsize,bsize/2);
		four.size(bsize,bsize/2);
		five.size(bsize,bsize/2);
		six.size(bsize,bsize/2);

		opacity.position(windowWidth/2-center-bSpace*2-bsize*2,320);
		slider.position(windowWidth/2-center-bSpace*2-sliderSize,350);

		psize.position(windowWidth/2-center-bSpace*2-bsize*2,380);

		//size button
	  one.position(windowWidth/2-center-bSpace*2-bsize*2,415);
	  two.position(windowWidth/2-center-bSpace-bsize,415);
	  three.position(windowWidth/2-center-bSpace*2-bsize*2,445);
	  four.position(windowWidth/2-center-bSpace-bsize,445);
	  five.position(windowWidth/2-center-bSpace*2-bsize*2,475);
	  six.position(windowWidth/2-center-bSpace-bsize,475);

		upload.position(windowWidth/2-center-bSpace*2-bsize*2,510);
		input.position(windowWidth/2-center-bSpace*2-sliderSize,550);
		upload.show();
		input.show();

		gsize.position(windowWidth/2+center+bSpace*2+bsize/2,cHead);
		gridOne.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*3+bSpace*2);
		gridTwo.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*2+bSpace);
		gridThree.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize);

		resetButton.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*6);
		printButton.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*7+bSpace);
		dangerButton.position(windowWidth/2+center+bSpace*3,canvasH+cHead-bsize*2);
	}
}

function setup() {
	//set up canvas
  canvas = createCanvas(canvasW,canvasH);
	canvas.position(windowWidth/2-250,cHead);

  smooth();
	pixelDensity(1);
	fill(255);
	noStroke();
	rect(0,0,width,height);
	stroke(230);
  grid();

	website = createA('http://noahmatteucci.com/home.html','noahmatteucci.com');
	website.position(windowWidth/2-45,40);

	ink = createP('INK:');
	ink.position(windowWidth/2-center-bSpace*2-bsize*2,cHead);

	redB = createButton('R');
  redB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize);
	redB.size(bsize,bsize);
	redB.style('color:rgb(255,255,255)');
	redB.style('background-color:rgb(204,41,60)');
	redB.mousePressed(reds);

	greenB = createButton('G');
  greenB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize*2+bSpace);
	greenB.size(bsize,bsize);
	greenB.style('color:rgb(255,255,255)');
	greenB.style('background-color:rgb(35,108,81)');
	greenB.mousePressed(greens);

	blueB = createButton('B');
  blueB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize*3+bSpace*2);
	blueB.size(bsize,bsize);
	blueB.style('color:rgb(255,255,255)');
	blueB.style('background-color:rgb(26,64,160)');
	blueB.mousePressed(blues);

	whiteB = createButton('W');
  whiteB.position(windowWidth/2-center-bSpace*2-bsize*2,cHead+bsize*4+bSpace*3);
	whiteB.size(bsize,bsize);
	whiteB.style('background-color:rgb(255,255,255)');
	whiteB.mousePressed(whites);

	cyanB = createButton('C');
  cyanB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize);
	cyanB.size(bsize,bsize);
	cyanB.style('color:rgb(255,255,255)');
	cyanB.style('background-color:rgb(1, 185, 255)');
	cyanB.mousePressed(cyans);

	magentaB = createButton('M');
  magentaB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize*2+bSpace);
	magentaB.size(bsize,bsize);
	magentaB.style('color:rgb(255,255,255)');
	magentaB.style('background-color:rgb(237,0,140)');
	magentaB.mousePressed(magentas);

	yellowB = createButton('Y');
  yellowB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize*3+bSpace*2);
	yellowB.size(bsize,bsize);
	yellowB.style('color:rgb(255,255,255)');
	yellowB.style('background-color:rgb(253,242,0)');
	yellowB.mousePressed(yellows);

	blackB = createButton('B');
  blackB.position(windowWidth/2-center-bsize-bSpace,cHead+bsize*4+bSpace*3);
	blackB.size(bsize,bsize);
	blackB.style('color:rgb(255,255,255)');
	blackB.style('background-color:rgb(0,0,0)');
	blackB.mousePressed(blacks);

	opacity = createP('OPACITY:');
	opacity.position(windowWidth/2-center-bSpace*2-bsize*2,320);
	//transparency slicer
	slider = createSlider(0,255,255,25);
	slider.position(windowWidth/2-center-bSpace*2-sliderSize,350);
	slider.style('width','80px')

	psize = createP('PIXEL SIZE:');
	psize.position(windowWidth/2-center-bSpace*2-bsize*2,380);

	//size button
	one = createButton('10px');
  one.position(windowWidth/2-center-bSpace*2-bsize*2,415);
	one.size(bsize,bsize/2);
	one.mousePressed(ones);
	two = createButton('25px');
	two.size(bsize,bsize/2);
  two.position(windowWidth/2-center-bSpace-bsize,415);
	two.mousePressed(twos);
	three = createButton('50px');
	three.size(bsize,bsize/2);
  three.position(windowWidth/2-center-bSpace*2-bsize*2,445);
	three.mousePressed(threes);
	four = createButton('100px');
	four.size(bsize,bsize/2);
  four.position(windowWidth/2-center-bSpace-bsize,445);
	four.mousePressed(fours);
	five = createButton('250px');
	five.size(bsize,bsize/2);
  five.position(windowWidth/2-center-bSpace*2-bsize*2,475);
	five.mousePressed(fives);
	six = createButton('500px');
	six.size(bsize,bsize/2);
  six.position(windowWidth/2-center-bSpace-bsize,475);
	six.mousePressed(sixes);

	upload = createP('UPLOAD IMAGE:');
	upload.position(windowWidth/2-center-bSpace*2-bsize*2,510);
	//choose file to upload
	input = createFileInput(handleFile);
	input.position(windowWidth/2-center-bSpace*2-sliderSize,550);
	input.size(82,20);

	gsize = createP('GRID SIZE:');
	gsize.position(windowWidth/2+center+bSpace*2+bsize/2,cHead);
	//grids
	gridOne = createButton('14x10');
  gridOne.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*3+bSpace*2);
	gridOne.size(bsize,bsize);
  gridOne.mousePressed(grids);

	gridTwo = createButton('10x10');
  gridTwo.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*2+bSpace);
	gridTwo.size(bsize,bsize);
  gridTwo.mousePressed(gridsTwo);

	gridThree = createButton('8x10');
  gridThree.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize);
	gridThree.size(bsize,bsize);
  gridThree.mousePressed(gridsThree);

	//reset button
	resetButton = createButton('RESET');
  resetButton.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*6);
	resetButton.size(bsize,bsize);
  resetButton.mousePressed(reset);

	//print button
	printButton = createButton('SAVE');
  printButton.position(windowWidth/2+center+bSpace*3+bsize/2,cHead+bsize*7+bSpace);
	printButton.size(bsize,bsize);
  printButton.mousePressed(prints);

	//dangerbutton
	dangerButton = createButton('DO NOT PUSH');
	dangerButton.position(windowWidth/2+center+bSpace*3,canvasH+cHead-bsize*2);
	dangerButton.size(bsize*2,bsize*2);
	dangerButton.style('font-size:14px');
	dangerButton.style('border-radius:50%');
	dangerButton.style('background-color:#f44336');
	dangerButton.mousePressed(chaos);
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

	capture = createCapture(VIDEO);
	capture.size(1000,500);
	capture.hide();
	print(capture.width);
	print(capture.height);
*/
if (windowWidth<700){
	windowResized();
}

}

function reds(){
	lastButton = 1;
}
function greens(){
	lastButton = 2;
}
function blues(){
	lastButton = 3;
}
function whites(){
	lastButton = 8;
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
function blacks(){
	lastButton = 4;
}

function ones(){
	sizeButton = 5;
}
function twos(){
	sizeButton = 4;
}
function threes(){
	sizeButton = 0;
}
function fours(){
	sizeButton = 1;
}
function fives(){
	sizeButton = 2;
}
function sixes(){
	sizeButton = 3;
}
//upload image functions
function handleFile(file){
	if (file.type === 'image') {
		img = createImg(file.data, drawImg);
	}
}
//upload image function
function drawImg(){
	pause();
	var val = 255;
	if (sizeButton == 0){

		image(img,0,0,width,height);
		img.hide();
		loadPixels();

	//	img.show();

		for (var x = cs; x < width-cs; x+=50){
			for (var y = cs; y < height-cs; y+=50){
				var index = (x + y * width)*4;
				var r = pixels[index];
				var g = pixels[index+1];
				var b = pixels[index+2];
				var a = pixels[index+3];

				var c = color(r,g,b,a);

				noStroke();
				fill(255);
				rect(x,y,50,50);
				var pick = int(random(70,80));
				tint(c);
				image(sizeOne[pick],x,y);

			}
		}
	}else if (sizeButton == 1){
		image(img,0,0,width,height);
		img.hide();
		loadPixels();

		for (var x = cs; x < width-cs; x+=100){
			for (var y = cs; y < height-cs; y+=100){
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
		image(img,0,0,width,height);
		img.hide();
		loadPixels();

		for (var x = cs; x < width-cs; x+=250){
			for (var y = cs; y < height-cs; y+=250){
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
		image(img,0,0,width,height);
		img.hide();
		loadPixels();
		for (var x = cs; x < width-cs; x+=500){
			for (var y = cs; y < height-cs; y+=500){
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
		image(img,0,0,width,height);
		img.hide();
		loadPixels();

		for (var x = cs; x < width-cs; x+=25){
			for (var y = cs; y < height-cs; y+=25){
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
		image(img,0,0,width,height);
		img.hide();
		loadPixels();

		for (var x = cs; x < width-cs; x+=10){
			for (var y = cs; y < height-cs; y+=10){
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

	noStroke(255);
	fill(255);
	rect(0,0,width,cs);
	rect(0,0,cs,height);
	rect(width-cs,0,width,height);
	rect(0,height-cs,width,height);
	stroke(230);
	grid();
}
function grids(){
	canvasW = 710;
	resizeCanvas(canvasW,canvasH);
	canvas.position(windowWidth/2-350,cHead);
	six.hide();
	five.hide();
	center = 350;
	sizeButton = 0;
	fill(255);
	noStroke();
	rect(0,0,canvasW,canvasH);
	stroke(230);
	grid();
	windowResized();
}
function gridsTwo(){
	canvasW = 510;
	resizeCanvas(canvasW,canvasH);
	canvas.position(windowWidth/2-250,cHead);
	six.show();
	five.show();
	center = 250;
	stroke(230);
	grid();
	windowResized();
}
function gridsThree(){
	canvasW = 410;
	resizeCanvas(canvasW,canvasH);
	canvas.position(windowWidth/2-200,cHead);
	six.hide();
	five.hide();
	center = 200;
	sizeButton = 0;
	fill(255);
	noStroke();
	rect(0,0,canvasW,canvasH);
	stroke(230);
	grid();
	windowResized();
}
function chaos(){
	dangerOn = true;

	//resetButton.hide();
	//printButton.hide();
	//input.hide();

	frameRate(10);
	var choose = int(random(1));
	if (choose == 0){
		for (var x = cs; x < width-cs; x+=skip){
			for (var y = cs; y < height-cs; y+=skip){
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

	//print(windowWidth);
	if (dangerOn){
		chaos();
	}
}

function reset(){
	stroke(230);
	fill(255);
	rect(0,0,width,height);
}
function prints(){
	//erase the grid
	stroke(255);
	grid();
	saveCanvas('image.jpg');
	stroke(230);
  grid();
}
/*
function fast(){
	speed = 1;
}
function slow(){
	speed = 0;
}
*/
function play(){
	start = 1;
	if(sizeButton == 0 || sizeButton == 1 || sizeButton == 2 || sizeButton == 3 || sizeButton == 4 || sizeButton == 5){
		run();
	}
}
function pause(){
	start = 0;
}


//draw the grid
function grid() {
  strokeWeight(2);
	noFill();
	rect(0,0,canvasW,canvasH);
}

//mouse functions
function mousePressed(){
	val = slider.value();
	//switching colors
	if (sizeButton == 0){
      for (var x = cs; x < width-cs; x += skip){
        for (var y = cs; y < height-cs; y += skip){
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
      for (var x = cs; x < width-cs; x += skip*2){
        for (var y = cs; y < height-cs; y += skip*2){
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
      for (var x = cs; x < width-cs; x += skip*5){
        for (var y = cs; y < height-cs; y += skip*5){
          if (mouseX >= x && mouseX < (x+skip*4) && mouseY >= y && mouseY < (y+skip*4)){
						if (lastButton == 4){ //black
							var pick = int(random(10,20));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 1){ //red
							var pick = int(random(0,10));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 2){ //green
							var pick = int(random(20,30));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 3){ //blue
							var pick = int(random(30,40));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 6){ //mag
							var pick = int(random(40,50));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 5){ //cyan
							var pick = int(random(50,60));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 7){ //yellow
							var pick = int(random(60,70));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}else if(lastButton == 8){ //white
							var pick = int(random(70,80));
							tint(255,val);
							//sizeFive[pick].resize(200,0);
							image(sizeFive[pick],x,y);
						}
					}
      	}
    	}
	}else if (sizeButton == 3) {
      for (var x = cs; x < width-cs; x += skip*10){
        for (var y = cs; y < height-cs; y += skip*10){
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
      for (var x = cs; x < width-cs; x += skip/2){
        for (var y = cs; y < height-cs; y += skip/2){
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
      for (var x = cs; x < width-cs; x += skip/5){
        for (var y = cs; y < height-cs; y += skip/5){
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
function mouseDragged(){
	val = slider.value();
	//switching colors
	if (sizeButton == 0){
      for (var x = cs; x < width-cs; x += skip){
        for (var y = cs; y < height-cs; y += skip){
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
      for (var x = cs; x < width-cs; x += skip*2){
        for (var y = cs; y < height-cs; y += skip*2){
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
      for (var x = cs; x < width-cs; x += skip*5){
        for (var y = cs; y < height-cs; y += skip*5){
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
      for (var x = cs; x < width-cs; x += skip*10){
        for (var y = cs; y < height-cs; y += skip*10){
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
      for (var x = cs; x < width-cs; x += skip/2){
        for (var y = cs; y < height-cs; y += skip/2){
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
      for (var x = cs; x < width-cs; x += skip/5){
        for (var y = cs; y < height-cs; y += skip/5){
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

/*
//draw a dotted line
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
