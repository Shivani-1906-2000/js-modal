(function(){
    filterbtn=document.querySelectorAll(".filter-btn");
    filterbtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        e.preventDefault();
        let value=e.target.dataset.filter;
        items=document.querySelectorAll(".store-item")
        items.forEach(function(item){
    if(value==="all"){
    
    item.style.display="block";
    }
    else{
    
    if(item.classList.contains(value)){
    
    item.style.display="block";
    
    
    }
    else{
        item.style.display="none";
    }
    
    }
        })
    })
        }
    )
    })();
    
    
    // searchbox
    (function(){
    let searchbox=document.getElementById("search-item")
    searchbox.addEventListener("keyup",function(event){
    let value=searchbox.value.toLowerCase().trim()
    let items=document.querySelectorAll(".store-item")
    items.forEach(
        function(item){
           let type=item.dataset.item;
           length=value.length;
           match=type.slice(0,length);
           if(value===match)
           {
            item.style.display="block"
           }
           else{
               item.style.display="none"
           }
    
        }
    )
    
    })
    
    
    
    })();
    
    //modal
    (function(){
        let imglist=[];
        let counter=0;
        let img=document.querySelectorAll(".store-img")
        let lightbox=document.querySelector(".lightbox-container")
        let btnleft=document.querySelector(".btnLeft");
        let btnright=document.querySelector(".btnRight");
        let btnclose=document.querySelector(".lightbox-close");
        var lightboxitem=document.querySelector(".lightbox-item");
        img.forEach(
            function(imgsrc){
             let imagesource=imgsrc.src
             imglist.push(imagesource)
             
    
            }
        );
        img.forEach(function(img1){
            img1.addEventListener("click",
                function(event){
                    var target1=event.target.src;
                     var counter=imglist.indexOf(target1);
                     
                    lightbox.classList.add("show");
                    lightboxitem.style.backgroundImage=`url(${imglist[counter]})`}
            )
    }
        )

        btnleft.addEventListener("click",function(){
            counter--;
            if(counter<0)
            {
            
              counter=imglist.length-1;
            }
            lightboxitem.style.backgroundImage=`url(${imglist[counter]})`
            
        })
        btnright.addEventListener("click",function(){
            counter++;
      if(counter>imglist.length-1)
      {
      
        counter=0;
      }
            lightboxitem.style.backgroundImage=`url(${imglist[counter]})`
            
        })
        btnclose.addEventListener("click",function(){
            lightbox.classList.remove("show");
        })        
        })();