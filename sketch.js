var skip = 50;	//pixel size
var lastButton = 4;	//ink choice
var sizeButton = 0;	//size choice
var bSize = 60;	//button size
var sliderSize = 80; //slider size

//pixel image arrays
var sizeOne = [];
var sizeTwo = []
var sizeFive = [];
var sizeTen = [];
var half = [];
var quarter = [];

//buttons
var redB;
var greenB;
var blueB;
var cyanB;
var magentaB;
var yellowB;
var whiteB;
var blackB;

var slider, val;

var one;
var two;
var three;
var four;
var five;
var six;

var input, img;

var gridOne;
var gridTwo;
var gridThree;
var gridSize = 0;
var whichGrid;

var resetButton;
var printButton;
var dangerButton;
var dangerOn = false;

//canvas
var canvas;
var canvasW = 510;
var canvasH = 510;
var center = 250;	//starting distance away from center of canvas
var cs = 5;	//canvas border
var cHead = 70;	//canvas header
var bSpace = 5;	//space around ink buttons

//text
var ink,opacity,psize,upload,gsize,website,title;
var tFont = 'Avenir';
var sFont = '20px';
var psFont = '14px';


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
	var isize = 60;
	if (windowWidth < windowHeight){// || canvasW+200 > windowWidth){
		var first = windowWidth/windowWidth+10;
		var firstb = windowWidth/windowWidth+isize+bSpace;
		var second = windowWidth/2-center/2+bSpace;
		var secondb = windowWidth/2-center/2+isize+bSpace*2;
		var third = windowWidth/2+bSpace*4;
		var fourth = windowWidth-isize*2;

		var rowA = cHead+canvasH+bSpace;
		var rowB = cHead+canvasH+bSpace+isize;
		var rowC = cHead+canvasH+bSpace*2+isize*2;
		var rowD = cHead+canvasH+bSpace*3+isize*3;
		var rowE = cHead+canvasH+bSpace*4+isize*4;
		var rowF = cHead+canvasH+bSpace*5+isize*5;

		canvas.position(windowWidth/2-center,cHead);
		title.position(windowWidth/2-90,0);
		website.position(windowWidth/2-45,45);

		ink.position(first,rowA);
	  redB.position(first,rowB);
		redB.size(isize,isize);
	  greenB.position(first,rowC);
		greenB.size(isize,isize);
	  blueB.position(first,rowD);
		blueB.size(isize,isize);
	  whiteB.position(first,rowE);
		whiteB.size(isize,isize);
	  cyanB.position(firstb,rowB);
		cyanB.size(isize,isize);
	  magentaB.position(firstb,rowC);
		magentaB.size(isize,isize);
	  yellowB.position(firstb,rowD);
		yellowB.size(isize,isize);
	  blackB.position(firstb,rowE);
		blackB.size(isize,isize);

		opacity.position(third,rowA);
		slider.position(third-isize,rowC);

		psize.position(second,rowA);
	  one.position(second,rowB);
		one.size(isize,isize);
	  two.position(secondb,rowB);
		two.size(isize,isize);
	  three.position(second,rowC);
		three.size(isize,isize);
	  four.position(secondb,rowC);
		four.size(isize,isize);
	  five.position(second,rowD);
		five.size(isize,isize);
	  six.position(secondb,rowD);
		six.size(isize,isize);

		//upload.position(second,rowE);
		//input.position(second,rowF);
		upload.hide();
		input.hide();

		//gsize.position(third,rowA);
		//gridOne.position(third,rowB);
		//gridTwo.position(third,rowC);
		//gridThree.position(third,rowD);
		gsize.hide();
		gridOne.hide();
		gridTwo.hide();
		gridThree.hide();

		resetButton.position(fourth,rowB);
		resetButton.size(isize,isize);
		printButton.position(fourth,rowC);
		dangerButton.position(fourth,rowD);
	}else{
		var padding = 100;
		var colOne = windowWidth/2-center-padding-bSize*2-bSpace*3;
		var colTwo = windowWidth/2-center-padding-bSize-bSpace*2;
		var colThree = windowWidth/2-center-padding-bSpace;

		var colFour = windowWidth/2+center+padding/4+bSpace;
		var colFive = windowWidth/2+center+padding/4+bSize+bSpace*2;

		var rowOne = cHead;
		var rowTwo = cHead+bSize+bSpace;
		var rowThree = cHead+bSize*2+bSpace*2;
		var rowFour = cHead+bSize*3+bSpace*3;
		var rowFive = cHead+bSize*4+bSpace*4;
		var rowSix = cHead+bSize*5+bSpace*5;
		var rowSeven = cHead+bSize*6+bSpace*6;
		var rowEight = cHead+bSize*7+bSpace*7;
		var rowNine = cHead+bSize*8+bSpace*8;
		var rowTen = cHead+bSize*9+bSpace*9;
		var rowEleven = cHead+bSize*10+bSpace*10;

		canvas.position(windowWidth/2-center,cHead);
		title.position(windowWidth/2-90,0);
		website.position(windowWidth/2-45,45);

		ink.position(colOne,rowOne+bSpace*4);
	  redB.position(colOne,rowTwo);
	  greenB.position(colOne,rowThree);
	  blueB.position(colOne,rowFour);
	  whiteB.position(colOne,rowFive);
	  cyanB.position(colTwo,rowTwo);
	  magentaB.position(colTwo,rowThree);
	  yellowB.position(colTwo,rowFour);
	  blackB.position(colTwo,rowFive);

		opacity.position(colThree+bSpace*4,rowOne+bSpace*4);
		slider.position(colThree-bSize+bSpace*2,rowThree+bSpace*4);

		psize.position(colOne,rowSix+bSpace*4);

	  one.position(colOne,rowSeven);
	  two.position(colTwo,rowSeven);
	  three.position(colThree,rowSeven);
	  four.position(colOne,rowEight);
	  five.position(colTwo,rowEight);
	  six.position(colThree,rowEight);

		upload.position(colFour,rowFour+bSpace*4);
		input.position(colFour,rowFive);
		upload.show();
		input.show();

		gsize.position(colFour,rowOne+bSpace*4);
		gridOne.position(colFive,rowTwo);
		gridTwo.position(colFour,rowThree);
		gridThree.position(colFour,rowTwo);

		gsize.show();
		gridOne.show();
		gridTwo.show();
		gridThree.show();

		resetButton.position(colFour,rowSix);
	  printButton.position(colFive,rowSix);
		dangerButton.position(colFour,rowEight);
		printButton.show();
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

	title = createP('Woodblock Pixel Maker');
	title.position(windowWidth/2-90,0);
	title.style('font-size:20px');

	website = createA('http://noahmatteucci.com/home.html','noahmatteucci.com');
	website.position(windowWidth/2-45,45);

	var padding = 100;
	var colOne = windowWidth/2-center-padding-bSize*2-bSpace*3;
	var colTwo = windowWidth/2-center-padding-bSize-bSpace*2;
	var colThree = windowWidth/2-center-padding-bSpace;

	var colFour = windowWidth/2+center+padding/4+bSpace;
	var colFive = windowWidth/2+center+padding/4+bSize+bSpace*2;

	var rowOne = cHead;
	var rowTwo = cHead+bSize+bSpace;
	var rowThree = cHead+bSize*2+bSpace*2;
	var rowFour = cHead+bSize*3+bSpace*3;
	var rowFive = cHead+bSize*4+bSpace*4;
	var rowSix = cHead+bSize*5+bSpace*5;
	var rowSeven = cHead+bSize*6+bSpace*6;
	var rowEight = cHead+bSize*7+bSpace*7;
	var rowNine = cHead+bSize*8+bSpace*8;
	var rowTen = cHead+bSize*9+bSpace*9;
	var rowEleven = cHead+bSize*10+bSpace*10;

	ink = createP('INK:');
	ink.position(colOne,rowOne+bSpace*4);

	redB = createButton('R');
  redB.position(colOne,rowTwo);
	redB.size(bSize,bSize);
	redB.style('color:rgb(255,255,255)');
	redB.style('background-color:rgb(204,41,60)');
	redB.style('font-family',tFont);
	redB.style('font-size',sFont);
	redB.mousePressed(reds);

	greenB = createButton('G');
  greenB.position(colOne,rowThree);
	greenB.size(bSize,bSize);
	greenB.style('color:rgb(255,255,255)');
	greenB.style('background-color:rgb(35,108,81)');
	greenB.style('font-size',sFont);
	greenB.mousePressed(greens);

	blueB = createButton('B');
  blueB.position(colOne,rowFour);
	blueB.size(bSize,bSize);
	blueB.style('color:rgb(255,255,255)');
	blueB.style('background-color:rgb(26,64,160)');
	blueB.style('font-size',sFont);
	blueB.mousePressed(blues);

	whiteB = createButton('W');
  whiteB.position(colOne,rowFive);
	whiteB.size(bSize,bSize);
	whiteB.style('background-color:rgb(255,255,255)');
	whiteB.style('font-size',sFont);
	whiteB.mousePressed(whites);

	cyanB = createButton('C');
  cyanB.position(colTwo,rowTwo);
	cyanB.size(bSize,bSize);
	cyanB.style('color:rgb(255,255,255)');
	cyanB.style('background-color:rgb(1, 185, 255)');
	cyanB.style('font-size',sFont);
	cyanB.mousePressed(cyans);

	magentaB = createButton('M');
  magentaB.position(colTwo,rowThree);
	magentaB.size(bSize,bSize);
	magentaB.style('color:rgb(255,255,255)');
	magentaB.style('background-color:rgb(237,0,140)');
	magentaB.style('font-size',sFont);
	magentaB.mousePressed(magentas);

	yellowB = createButton('Y');
  yellowB.position(colTwo,rowFour);
	yellowB.size(bSize,bSize);
	yellowB.style('color:rgb(255,255,255)');
	yellowB.style('background-color:rgb(253,242,0)');
	yellowB.style('font-size',sFont);
	yellowB.mousePressed(yellows);

	blackB = createButton('B');
  blackB.position(colTwo,rowFive);
	blackB.size(bSize,bSize);
	blackB.style('color:rgb(255,255,255)');
	blackB.style('background-color:rgb(0,0,0)');
	blackB.style('font-size',sFont);
	blackB.mousePressed(blacks);

	opacity = createP('OPACITY:');
	opacity.position(colThree+bSpace*4,rowOne+bSpace*4);
	//transparency slicer
	slider = createSlider(1,255,255,25);
	slider.position(colThree-bSize+bSpace*2,rowThree+bSpace*4);
	slider.style('rotate',270);
	slider.style('width','200px');
	slider.style('height','60px');
	slider.style('cursor:pointer');

	psize = createP('PIXEL SIZE:');
	psize.position(colOne,rowSix+bSpace*4);

	//size button
	one = createButton('10px');
  one.position(colOne,rowSeven);
	one.size(bSize,bSize);
	one.style('font-size',psFont);
	one.mousePressed(ones);
	two = createButton('25px');
	two.size(bSize,bSize);
  two.position(colTwo,rowSeven);
	two.style('font-size',psFont);
	two.mousePressed(twos);
	three = createButton('50px');
	three.size(bSize,bSize);
  three.position(colThree,rowSeven);
	three.style('font-size',psFont);
	three.mousePressed(threes);
	four = createButton('100px');
	four.size(bSize,bSize);
  four.position(colOne,rowEight);
	four.style('font-size',psFont);
	four.mousePressed(fours);
	five = createButton('250px');
	five.size(bSize,bSize);
  five.position(colTwo,rowEight);
	five.style('font-size',psFont);
	five.mousePressed(fives);
	six = createButton('500px');
	six.size(bSize,bSize);
  six.position(colThree,rowEight);
	six.style('font-size',psFont);
	six.mousePressed(sixes);

	upload = createP('UPLOAD IMAGE:');
	upload.position(colFour,rowFour+bSpace*4);
	//choose file to upload
	input = createFileInput(handleFile);
	input.position(colFour,rowFive);
	input.size(82,20);

	gsize = createP('GRID SIZE:');
	gsize.position(colFour,rowOne+bSpace*4);
	//grids
	gridOne = createButton('14x10');
  gridOne.position(colFive,rowTwo);
	gridOne.size(bSize,bSize);
  gridOne.mousePressed(grids);

	gridTwo = createButton('10x10');
  gridTwo.position(colFour,rowThree);
	gridTwo.size(bSize,bSize);
  gridTwo.mousePressed(gridsTwo);

	gridThree = createButton('8x10');
  gridThree.position(colFour,rowTwo);
	gridThree.size(bSize,bSize);
  gridThree.mousePressed(gridsThree);

	//reset button
	resetButton = createButton('RESET');
  resetButton.position(colFour,rowSix);
	resetButton.size(bSize,bSize);
  resetButton.mousePressed(reset);

	//print button
	printButton = createButton('SAVE');
  printButton.position(colFive,rowSix);
	printButton.size(bSize,bSize);
  printButton.mousePressed(prints);

	//dangerbutton
	dangerButton = createButton('DO NOT PUSH');
	dangerButton.position(colFour,rowEight);
	dangerButton.size(bSize,bSize);
	dangerButton.style('font-size:10px');
	dangerButton.style('border-radius:50%');
	dangerButton.style('background-color:#f44336');
	dangerButton.mousePressed(chaos);

	if (windowWidth<windowHeight){
		windowResized();
	}

}
//ink functions
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
//size functions
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
function drawImg(){
	//pause();
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
//grids
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
	whichGrid = 3;
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
	whichGrid = 2;
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
	whichGrid = 1;
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
	//print(windowWidth);
	if (dangerOn){
		chaos();
	}
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
	//which grid am I using
	if (whichGrid == 3){
		skip = (canvasW-cs*2)/14;
	}else if (whichGrid == 2){
		skip = (canvasW-cs*2)/10;
	}else if (whichGrid == 1){
		skip = (canvasW-cs*2)/8;
	}

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
	if (whichGrid == 3){
		skip = (canvasW-cs*2)/((canvasW-cs*2)/skip);
	}else if (whichGrid == 2){
		skip = (canvasW-cs*2)/((canvasW-cs*2)/skip);
	}else if (whichGrid == 1){
		skip = (canvasW-cs*2)/((canvasW-cs*2)/skip);
	}
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
