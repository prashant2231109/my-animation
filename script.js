var arr=[
{
dp:"picp.png",story:"pic2.jpg"

},
{
    dp:"pic3.png",story:"srk.avif"
    
    },
    {
        dp:"srk.avif",story:"srk2.jpg"
        
        },
        {
            dp:"pro.png",story:"pro1.JPG"
            
            },
            {
                dp:"train.jpg",story:"train.jpg"
                
                },
]
var views= document.querySelector("#views-panel")
var clutter=""
arr.forEach(function(elem,idx){
clutter += `<div class="story">

<img id="${idx}" src="${elem.dp}" alt="">

 </div>`
  
});
document.querySelector("#views-panel").innerHTML=clutter

views.addEventListener("click",function(dets){

document.querySelector("#full-screen").style.display="block"

document.querySelector("#full-screen").style.backgroundImage= `url(${arr[dets.target.id].story})`

setTimeout(function(){

    document.querySelector("#full-screen").style.display="none"

},3000)

});