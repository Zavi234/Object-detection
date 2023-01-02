img=""

function preload()
{
    img=loadImage("banana.jpg")
}

function setup()
{
    canvas= createCanvas(670,460)
    canvas.center()
}

function draw()
{
    image(img,0,0,670,460)
    fill("red")
    
    text("Banana",150,90)
    noFill()
    stroke("red")
    rect(170,90,250,150)
}