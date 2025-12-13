
    window.addEventListener("load", () => {
        document.querySelectorAll(".P1 , .P2 , .P3").forEach(el =>{
           el.classList.add("active");
        })
    })



    document.querySelector(".mode").addEventListener("click" , ()=>{
        document.body.classList.toggle("change-bg")
        document.querySelector(".mode").classList.toggle("change-color");
        // document.querySelector(".P1").classList.toggle("change-content")
        // document.querySelector(".P2").classList.toggle("change-content")
    })


