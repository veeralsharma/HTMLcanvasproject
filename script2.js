window.addEventListener("load",() =>{
    console.log("canvas loaded");
    const mycanvas = document.querySelector("#canvas")
    const mycanvas_context = mycanvas.getContext("2d")
    
    //resize the canvas
    mycanvas.height = document.documentElement.scrollHeight;
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


    function drawLineforMobile(e){
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        mycanvas.dispatchEvent(mouseEvent);
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

    mycanvas.addEventListener('touchmove',drawLineforMobile)
    
    mycanvas.addEventListener('mousedown',changeColor)

    mycanvas.addEventListener('touchstart',changeColor)

})