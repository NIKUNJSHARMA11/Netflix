let allq = document.querySelectorAll(".faq");
allq.forEach((v,index)=>{
    v.addEventListener("click",()=>{
        v.nextElementSibling.classList.toggle("h-[auto]")
        v.nextElementSibling.classList.toggle("scale-y-100")
        v.nextElementSibling.classList.toggle("p-[20px]")
        v.children[1].classList.toggle("rotate-45")


         allq.forEach((el,i)=>{
            if(i!=index){
                el.nextElementSibling.classList.remove("h-[auto]","scale-y-100","p-[20px]")
                el.children[1].classList.remove("rotate-45")
            }
         })
    })
})