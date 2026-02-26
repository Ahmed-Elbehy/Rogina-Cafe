(function(){
    const Acerca =document.getElementById("text-about-me");
    // const test =document.getElementById("test");
    let windowWidth = window.innerWidth;
    // console.log(windowWidth);
    if(windowWidth >= 200){
        window.onscroll = function(){
            let value = window.scrollY;
            // console.log(value);                    
            Acerca.style.transform = "translateY("+-value/2+"px)";
        }
    }
}())