
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b, bi, g, gi, g2, bo1, bo1i, score=0, g1, g3, gi1, g2,gs=0, fishes;
var hb, mb, bgm;

function preload()
{
	bi = loadImage("images/blue1.png"); 
	gi = loadImage("images/green.png"); 
	bo1i = loadImage("canoe.png");
	gi1=loadImage('images/garbager.png');
	fishes=loadImage("images/fishes.png");
	hb = loadImage("housingboat.png");
	mb  = loadImage("motor boat.png");
	bgm = loadSound("KBR.wav");
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);


	engine = Engine.create();
	world = engine.world;

	
	
    
   

  
	bgm.play();

  
}


function draw() {
	Engine.run(engine);
  b= createSprite(650,350,10,10);
  b.addImage(bi);
  b.scale=1.5;
  
  
  bo1=createSprite(mouseX,400,10,10);
	bo1.addImage(bo1i);



	gg();
	
	 
     

	 if(mousePressedOver(g1)){
		 gs=1;
		 score+=1;
	 }
	 if(mousePressedOver(g2)){
		gs=4;
		score+=1;
	}
	
	if(mousePressedOver(g3)){
		gs=5;
		score+=1;
	}
	 if(gs===1){
		b= createSprite(650,350,10,10);
		b.addImage(bi);
		b.scale=1.5;
		
		
		bo1=createSprite(mouseX,400,10,10);
		  bo1.addImage(bo1i);

		  g2 = createSprite(250,620,40,10);
		  g2.addImage(gi1);
		 
	 
		  g3 = createSprite(950,590,40,10);
		  g3.addImage(gi1);
		  if(mousePressedOver(g2)){
			gs=2;
			score+=1;
		}

	   
	 }

	 if(gs===2){
		b= createSprite(650,350,10,10);
		b.addImage(bi);
		b.scale=1.5;
		
		
		bo1=createSprite(mouseX,400,10,10);
		  bo1.addImage(bo1i);

		 
	 
		  g3 = createSprite(950,590,40,10);
		  g3.addImage(gi1);
		  if(mousePressedOver(g3)){
			gs=3;
			score+=1;
		}
		
		
	   
	 }
	 if(gs===3  ){
		b= createSprite(650,350,10,10);
		b.addImage(bi);
		b.scale=1.5;
		
		
		bo1=createSprite(mouseX,400,10,10);
		  bo1.addImage(bo1i);

		 
	 
		
		
		
	   
	 }

	 if(gs===3  ){
		b= createSprite(650,350,10,10);
		b.addImage(bi);
		b.scale=1.5;
		
		
		bo1=createSprite(mouseX,400,10,10);
		  bo1.addImage(bo1i);
 }
 if(gs===4  ){
	b= createSprite(650,350,10,10);
	b.addImage(bi);
	b.scale=1.5;
	
	
	bo1=createSprite(mouseX,400,10,10);
	  bo1.addImage(bo1i);

	  g3 = createSprite(950,590,40,10);
		  g3.addImage(gi1);
		  g1 = createSprite(550,520,40,10);
	 g1.addImage(gi1);
    
}

if(gs===5  ){
	b= createSprite(650,350,10,10);
	b.addImage(bi);
	b.scale=1.5;
	
	
	g2 = createSprite(250,620,40,10);
	g2.addImage(gi1);
	
	bo1=createSprite(mouseX,400,10,10);
	  bo1.addImage(bo1i);

	 
}
	
	keyPressed();
	if(score >= 10){
		bo1.addImage(hb);
	   }
	   if(score>= 5 && score<10){
		   bo1.addImage(mb);
		  }

		
  
  drawSprites();

  fill("black");
	textSize(15);
	text("Press G to change the biome(Green Sea)",20,20)
	text("Press B to change the biome(Blue Sea)",20,40);
	text("SCORE: "+score,1250,40);
	
	
 
}

function keyPressed(){
	if(keyCode===71){
    b.addImage(gi);
	}
	if(keyCode===66){
		b.addImage(bi);
	}
}
function gg(){
	g1 = createSprite(550,520,40,10);
	 g1.addImage(gi1);
    


	 g2 = createSprite(250,620,40,10);
	 g2.addImage(gi1);
    

	 g3 = createSprite(950,590,40,10);
	 g3.addImage(gi1);
    
}
	
function scoring(){
	
}


