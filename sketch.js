var skip = 50;
var lastButton = 4;
var sizeButton = 0;
var speed = 0;
var bstart = 150;
var bsizes = 80;
var bsize = 80;
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
//canvas border
var cs = 5;
//canvas header
var cHead = 70;

var ink;
var val = 255;

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
	canvas.position(windowWidth/2-250,cHead);
	ink.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead);
	trans.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes+cs*2);
	sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.7)/2),cHead+bsizes*2+cs*4);
	input.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*3.75+cs*6);
	resetButton.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*4+cs*8);
	printButton.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*4.25+cs*10);
	dangerButton.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*4.5+cs*12);

	//if (something){
		//resizeCanvas (canvasW,canvasH+100);
		//resizeCanvas(canvasW+300,canvasH);
	//}
}

function setup() {
  canvas = createCanvas(canvasW,canvasH);
	canvas.position(windowWidth/2-250,cHead);
  smooth();
	pixelDensity(1);
	fill(255);
	noStroke();
	rect(0,0,700,700);
	stroke(230);
  grid();

	//ink select
	ink = createSelect();
	ink.position(100,cHead);
	ink.size(bsizes,bsizes);
	ink.style('font-size','14px');
	ink.style('textAlign','center');
	ink.style('background-color','black');
	ink.style('color','white');
	ink.option('BLACK');
	ink.option('CYAN');
	ink.option('MAGENTA');
	ink.option('YELLOW');
	ink.option('WHITE');
	ink.option('RED');
	ink.option('GREEN');
	ink.option('BLUE');
	ink.changed(myInk);
/*
	//transparency select
	trans = createSelect();
	trans.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes+cs*2);
	trans.size(bsizes,bsizes);
	trans.style('font-size:14px');
	trans.option('100%');
	trans.option('90%');
	trans.option('80%');
	trans.option('70%');
	trans.option('60%');
	trans.option('50%');
	trans.option('40%');
	trans.option('30%');
	trans.option('20%');
	trans.option('10%');
	trans.changed(myTrans);

	//transparency select
	sizes = createSelect();
	sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.7)/2),cHead+bsizes*2+cs*4);
	sizes.size(bsizes*.7,bsizes*.7);
	sizes.style('font-size:10px');
	sizes.option('50px');
	sizes.option('100px');
	sizes.option('250px');
	sizes.option('500px');
	sizes.option('25px');
	sizes.option('10px');
	sizes.changed(mySizes);

	//choose file to upload
	input = createFileInput(handleFile);
	input.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*3.75+cs*6);
	input.style('font-size:14px');
	input.size(bsizes,bsizes/4);
	//input.style('font-size', '30px');

	//reset button
	resetButton = createButton('RESET');
  resetButton.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*4+cs*8);
	resetButton.style('font-size:14px');
	resetButton.size(bsizes,bsizes/4);
  resetButton.mousePressed(reset);
	//print button
	printButton = createButton('DOWNLOAD');
  printButton.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*4.25+cs*10);
	printButton.style('font-size:12px');
	printButton.size(bsizes,bsizes/4);
  printButton.mousePressed(prints);
	//dangerbutton
	dangerButton = createButton('DO NOT PUSH');
	dangerButton.position(windowWidth/2-canvasW/2-bsizes-cs*2,cHead+bsizes*4.5+cs*12);
	dangerButton.size(bsizes,bsizes);
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

}

function myInk(){
	var item = ink.value();
	if (item == 'BLACK'){
		var col = color(0);
		stroke(255);
		ink.style('color','white');
		ink.style('background-color',col);
		lastButton = 4;
	}else if (item == 'CYAN'){
		var col = color(1,185,255);
		ink.style('color','white');
		ink.style('background-color',col);
		lastButton = 5;
	}else if (item == 'MAGENTA'){
		var col = color(237,0,140);
		ink.style('color','white');
		ink.style('background-color',col);
		lastButton = 6;
	}else if (item == 'YELLOW'){
		var col = color(253,242,0);
		ink.style('color','black');
		ink.style('background-color',col);
		lastButton = 7;
	}else if (item == 'WHITE'){
		var col = color(355);
		ink.style('color','black');
		ink.style('background-color',col);
		lastButton = 8;
	}else if (item == 'RED'){
		var col = color(204,41,60);
		ink.style('color','white');
		ink.style('background-color',col);
		lastButton = 1;
	}else if (item == 'GREEN'){
		var col = color(35,108,81);
		ink.style('color','white');
		ink.style('background-color',col);
		lastButton = 2;
	}else if (item == 'BLUE'){
		var col = color(26,64,160);
		ink.style('color','white');
		ink.style('background-color',col);
		lastButton = 3;
	}
}
function myTrans(){
	var item = trans.value();
	if(item == '100%'){
		val = 255;
		trans.style('opacity','1');
	}else if(item == '90%'){
		val = 230;
		trans.style('opacity','.9');
	}else if(item == '80%'){
		val = 204;
		trans.style('opacity','.8');
	}else if(item == '70%'){
		val = 179;
		trans.style('opacity','.7');
	}else if(item == '60%'){
		val = 153;
		trans.style('opacity','.6');
	}else if(item == '50%'){
		val = 128;
		trans.style('opacity','.5');
	}else if(item == '40%'){
		val = 102;
		trans.style('opacity','.4');
	}else if(item == '30%'){
		val = 77;
		trans.style('opacity','.3');
	}else if(item == '20%'){
		val = 51;
		trans.style('opacity','.2');
	}else if(item == '10%'){
		val = 26;
		trans.style('opacity','.1');
	}
}
function mySizes(){
	var item = sizes.value();
	if(item == '50px'){
		sizeButton = 0;
		sizes.style('font-size:10px');
		sizes.size(bsize*.7,bsize*.7);
		sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.7)/2),cHead+bsizes*2+cs*4);
	}else if(item == '100px'){
		sizeButton = 1;
		sizes.style('font-size:12px');
		sizes.size(bsize*.8,bsize*.8);
		sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.8)/2),cHead+bsizes*2+cs*4);
	}else if(item == '250px'){
		sizeButton = 2;
		sizes.style('font-size:14px');
		sizes.size(bsize*.9,bsize*.9);
		sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.9)/2),cHead+bsizes*2+cs*4);
	}else if(item == '500px'){
		sizeButton = 3;
		sizes.style('font-size:16px');
		sizes.size(bsize,bsize);
		sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-(bsizes/2),cHead+bsizes*2+cs*4);
	}else if(item == '25px'){
		sizeButton = 4;
		sizes.style('font-size:8px');
		sizes.size(bsize*.6,bsize*.6);
		sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.6)/2),cHead+bsizes*2+cs*4);
	}else if(item == '10px'){
		sizeButton = 5;
		sizes.style('font-size:6px');
		sizes.size(bsize*.5,bsize*.5);
		sizes.position(windowWidth/2-canvasW/2-bsizes/2-cs*2-((bsizes*.5)/2),cHead+bsizes*2+cs*4);
	}
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
	//erase the sides
	saveCanvas('image.jpg');

	//text("WOODBLOCK PIXEL MAKER",width/2,60);

	stroke(230);
  grid();
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


//draw the grid
function grid() {
  strokeWeight(2);
	noFill();
	rect(0,0,width,height);
}

//mouse functions
function mouseClicked(){
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
function mouseDragged(){
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
