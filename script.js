var arr=[
{
dp:"picp.png",story:"pic2.jpg"

},
{
    dp:"pic3.png",story:"pic3.pg"
    
    },
    {
        dp:"srk.avif",story:"srk.jpg"
        
        },
        {
            dp:"pro.png",story:"pro1.JPG"
            
            },
            {
                dp:"train.jpg",story:"train.jpg"
                
                },
]
var clutter=""
arr.forEach(function(elem,idx){
clutter += `<div class="story">

<img src="${elem.dp}" alt="">

 </div>`
  
})
document.querySelector("#views-panel").innerHTML=clutter