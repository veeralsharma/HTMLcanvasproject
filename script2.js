window.addEventListener("load",() =>{
    console.log("canvas loaded");
    const mycanvas = document.querySelector("#canvas")
    const mycanvas_context = mycanvas.getContext("2d")
    
    //resize the canvas
    mycanvas.height = window.innerHeight
    mycanvas.width = window.innerWidth

    mycanvas_context.strokeStyle = "lightskyblue"


    //vars  
    const colors = ["salmon","lightskyblue","lightgreen"]
    var prevColor = "lightskyblue"

    //function 
    function drawline(e){
        mycanvas_context.lineWidth = 22;
        mycanvas_context.lineCap = "round"
        mycanvas_context.lineTo(e.clientX,e.clientY)
        mycanvas_context.stroke()
    }

    function changeColor(e){
        var k = Math.floor(Math.random()*3)
        var color = colors[k]
        while(color == prevColor){
            k = Math.floor(Math.random()*3)
            color = colors[k]
        }
        mycanvas_context.strokeStyle =color 
        prevColor= color
        console.log(k);
        console.log(color);
        mycanvas_context.beginPath()

    }

    //listeners
    mycanvas.addEventListener('mousemove', drawline)
    
    mycanvas.addEventListener('mousedown',changeColor)

})