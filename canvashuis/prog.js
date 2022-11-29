
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
        g.lineTo(0,30);
        g.lineTo(80,30);
        g.lineTo(80,0);
        g.closePath();
        g.fill()

        g.beginPath()
        g.fillStyle = "#2eb82e"
        g.moveTo(0,30);
        g.lineTo(80,30);
        g.lineTo(80,60);
        g.lineTo(0,60);
        g.closePath();
        g.fill()

        g.beginPath()
        g.fillStyle = "#ff0000"
        g.moveTo(20,0);
        g.lineTo(60,10);
        g.lineTo(50,30);
        g.lineTo(10,20);
        g.closePath();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "#990000"
        g.moveTo(60,10);
        g.lineTo(70,20);
        g.lineTo(50,30);
        g.closePath();
        g.fill()
        
        g.beginPath()
        g.fillStyle = "#e6e6e6"
        g.moveTo(10,20);
        g.lineTo(50,30);
        g.lineTo(50,50);
        g.lineTo(10,40);
        g.closePath();
        g.fill()

        g.beginPath()
        g.fillStyle = "#b3b3b3"
        g.moveTo(50,30);
        g.lineTo(70,20);
        g.lineTo(70,40);
        g.lineTo(50,50);
        g.closePath();
        g.fill()

        g.beginPath()
        g.fillStyle = "#ffffcc"
        g.moveTo(15,25);
        g.lineTo(45,32.5);
        g.lineTo(45,42.5);
        g.lineTo(15,35);
        g.closePath();
        g.fill()
    
    }

}
let app = new App();
app.runApplication();




