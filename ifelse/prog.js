
class App
{
    runApplication()
    {
        //dit is code commentaar voor javascript
        let title = document.getElementById("newstitle")
        let randomGetal = Math.random();

        if(randomGetal == 0)
        {
            title.style.backgroundColor = "#7647db";
        }

        else if(randomGetal > 0 && randomGetal < 0.2)
        {
            title.style.backgroundColor = "#3869a0";
        }
        
        else if(randomGetal > 0.2 && randomGetal < 0.6)
        {
            title.style.backgroundColor = "#ec0049";
        }

        else(randomGetal > 0.6)
        {
            title.style.backgroundColor = "#c982ad";
        }
        //randomGetal
        console.log(randomGetal);
    }

}
let app = new App();
app.runApplication();
