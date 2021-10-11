function setup()
{
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
}

function draw()
{
    image(video,0,0,450,450);
}