
class App
{
    runApplication()
    {
        console.log("hello word!");
        let  canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.beginPath()
        g.fillStyle = "#ccffff"
        g.moveTo(0,0);
        g.lineTo(0,300);
        g.lineTo(600,300);
        g.lineTo(600,0);
        g.closePath();
        g.fill()

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(100,0);
        g.lineTo(500,100);
        g.lineTo(400,300);
        g.lineTo(0,200);
        g.closePath();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "#990000"
        g.moveTo(500,100);
        g.lineTo(600,200);
        g.lineTo(400,300);
        g.closePath();
        g.fill()

    
    }

}
let app = new App();
app.runApplication();




