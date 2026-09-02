const text = document.querySelector(".text");
const heading1 = document.querySelector(".container2 .sub-container1 .h1");
const btn1 = document.querySelector(".container2 .sub-container1 .btn1");


const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const subContainer1 = document.querySelector(".container2 .sub-container1");
const container2Heading = document.querySelector(".container2 .sub-container1 .h1");
const container2Btn = document.querySelector(".container2 .sub-container1 .btn1");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const container6 = document.querySelector(".container6");
const container7 = document.querySelector(".container7");




let initrialKeyValuePairs = {
    "Isn't it dark ?":"Turn on lights",
    "Something missing, isn't it ?":"Float Balloons",
    "Ready for your surprise ?":"Yeah"
}



let changeText1 = ()=>{
    text.innerHTML = "Teachers'"
}
setTimeout(changeText1, 2300);

let changeText2 = ()=>{
    text.innerHTML = "Day"
}
setTimeout(changeText2, 4600);
let changeText3 = ()=>{
    text.innerHTML = "Happy<br>Teachers'<br>Day";
}
setTimeout(changeText3, 6850);
setTimeout(()=>{
    container1.style.display = "none";
    container2.style.display = "flex";
},10500);
// 10500

let i = 0;

let button1 = ()=>{
    if(i<=2){
    let heading = Object.keys(initrialKeyValuePairs)[i];
    let buttonText = Object.values(initrialKeyValuePairs)[i];

    heading1.innerHTML = heading;
    btn1.innerHTML = buttonText;

        if(i==0){
            btn1.addEventListener("click",()=>{
                // document.querySelector(".container2").classList.add("lights-on");
                // document.querySelector(".container2 .sub-container1").classList.add("sc-lights-on");
                subContainer1.style.boxShadow = "0 0 45px rgba(255, 0, 157, 0.8)";
                subContainer1.style.border = "5px solid rgb(255, 0, 157)";
                container2Btn.style.backgroundColor = "rgb(255, 0, 157)";
                container2Btn.addEventListener("mouseenter",()=>{
                    container2Btn.style.color = "rgb(255, 0, 157)";
                    container2Btn.style.boxShadow = "0 0 rgba(255, 0, 157, 0.658)"
                    container2Btn.style.borderColor = "rgb(255, 0, 157)";
                    container2Btn.style.backgroundColor = "transparent";
                })
                container2Btn.addEventListener("mouseleave",()=>{
                    container2Btn.style.color = "black";
                    container2Btn.style.boxShadow = "none";
                    container2Btn.style.borderColor = "transparent";
                    container2Btn.style.backgroundColor = "rgb(255, 0, 157)";
                })
                // document.querySelector(".container2 .btn1").classList.add("scbtn-lights-on");
                // document.querySelector(".container2 .h1").classList.add("sch-lights-on");
                container2Heading.style.color = "rgb(255, 0, 157)";
            })
        }else if(i==1){
            btn1.addEventListener("click",()=>{
                document.querySelector(".container2 .emptyspace").classList.add("float");
        })
        }

    i++;
    }else{
        container2.style.display ="none";
        document.querySelector("html, body").style.overflowY = "scroll";
        container3.style.display ="flex";
        setTimeout(()=>{
        container4.style.display ="flex";
        container5.style.display ="flex";
        container6.style.display ="flex";
        container7.style.display ="flex";
        ScrollTrigger.refresh();
        },1000)
    }
}

btn1.addEventListener("click",button1);


gsap.registerPlugin(ScrollTrigger);

const containers = [".container4", ".container5", ".container6", ".container7"];

containers.forEach((container) => {

    gsap.from(`${container} .fromleft`, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
            trigger: container,
            start: "top 75%",
            scroller: "body",
            toggleActions: "play none none none",
            stagger: 0.2,
            // markers: true
        }
    });

    gsap.from(`${container} .rightobj`, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
            trigger: container,
            start: "top 75%",
            scroller: "body",
            toggleActions: "play none none none",
            // markers: true
        }
    });

});





document.querySelector(".container7 .nextbtn").addEventListener("click",()=>{

    containers.forEach(container => {
        document.querySelector(`${container}`).style.display = "none";
    });
    document.querySelector(".container3").style.display = "none";
    document.querySelector(".container8").style.display = "flex";
})

document.getElementById("sc-8-1").addEventListener("click",()=>{
    document.getElementById("sc-8-1").classList.remove("open3");
    document.getElementById("sc-8-2").classList.remove("open2");
    document.getElementById("sc-8-3").classList.remove("open1");
    document.getElementById("sc-8-1").classList.add("close3");
    document.getElementById("sc-8-2").classList.add("close2");
    document.getElementById("sc-8-3").classList.add("close1");
    setTimeout(()=>{
        document.querySelector(".english").classList.add("activated");
        document.querySelector(".container8 .sky").style.display = "flex";
        document.getElementById("sc-8-1").style.display = "none";
        document.getElementById("sc-8-2").style.display = "none";
        document.getElementById("sc-8-3").style.display = "none";
        document.querySelector(".english .return").style.display = "flex";
        document.querySelector(".container8").style.justifyContent = "center";
    },500)
})

document.getElementById("sc-8-2").addEventListener("click",()=>{
    document.getElementById("sc-8-1").classList.remove("open3");
    document.getElementById("sc-8-2").classList.remove("open2");
    document.getElementById("sc-8-3").classList.remove("open1");
    document.getElementById("sc-8-1").classList.add("close3");
    document.getElementById("sc-8-2").classList.add("close2");
    document.getElementById("sc-8-3").classList.add("close1");
    setTimeout(()=>{
        document.querySelector(".sanskrit").classList.add("activated");
        document.querySelector(".container8 .sky").style.display = "flex";
        document.getElementById("sc-8-1").style.display = "none";
        document.getElementById("sc-8-2").style.display = "none";
        document.getElementById("sc-8-3").style.display = "none";
        document.querySelector(".sanskrit .return").style.display = "flex";
        document.querySelector(".container8").style.justifyContent = "center";
    },500)
})

document.getElementById("sc-8-3").addEventListener("click",()=>{
    document.getElementById("sc-8-1").classList.remove("open3");
    document.getElementById("sc-8-2").classList.remove("open2");
    document.getElementById("sc-8-3").classList.remove("open1");
    document.getElementById("sc-8-1").classList.add("close3");
    document.getElementById("sc-8-2").classList.add("close2");
    document.getElementById("sc-8-3").classList.add("close1");
    setTimeout(()=>{
        document.querySelector(".maths").classList.add("activated");
        document.querySelector(".container8 .sky").style.display = "flex";
        document.getElementById("sc-8-1").style.display = "none";
        document.getElementById("sc-8-2").style.display = "none";
        document.getElementById("sc-8-3").style.display = "none";
        document.querySelector(".maths .return").style.display = "flex";
        document.querySelector(".container8").style.justifyContent = "center";
    },500)
})

document.querySelector(".english .return").addEventListener("click",()=>{
    document.querySelector(".container8").style.display = "flex";
    document.querySelector(".activated").classList.remove("activated");
    document.querySelector(".container8").style.justifyContent = "space-between";
    document.getElementById("sc-8-1").style.opacity = "0";
    document.getElementById("sc-8-2").style.opacity = "0";
    document.getElementById("sc-8-3").style.opacity = "0";
    document.getElementById("sc-8-1").style.display = "flex";
    document.getElementById("sc-8-2").style.display = "flex";
    document.getElementById("sc-8-3").style.display = "flex";
    document.getElementById("sc-8-1").classList.remove("close3");
    document.getElementById("sc-8-2").classList.remove("close2");
    document.getElementById("sc-8-3").classList.remove("close1");
    document.getElementById("sc-8-1").classList.add("open3");
    document.getElementById("sc-8-2").classList.add("open2");
    document.getElementById("sc-8-3").classList.add("open1");
})
document.querySelector(".sanskrit .return").addEventListener("click",()=>{
    document.querySelector(".container8").style.display = "flex";
    document.querySelector(".activated").classList.remove("activated");
    document.querySelector(".container8").style.justifyContent = "space-between";
    document.getElementById("sc-8-1").style.opacity = "0";
    document.getElementById("sc-8-2").style.opacity = "0";
    document.getElementById("sc-8-3").style.opacity = "0";
    document.getElementById("sc-8-1").style.display = "flex";
    document.getElementById("sc-8-2").style.display = "flex";
    document.getElementById("sc-8-3").style.display = "flex";
    document.getElementById("sc-8-1").classList.remove("close3");
    document.getElementById("sc-8-2").classList.remove("close2");
    document.getElementById("sc-8-3").classList.remove("close1");
    document.getElementById("sc-8-1").classList.add("open3");
    document.getElementById("sc-8-2").classList.add("open2");
    document.getElementById("sc-8-3").classList.add("open1");
})
document.querySelector(".maths .return").addEventListener("click",()=>{
    // document.querySelector(".container8").style.display = "flex";
    document.querySelector(".activated").classList.remove("activated");
    // document.querySelector(".container8").style.justifyContent = "space-between";
    // document.getElementById("sc-8-1").style.opacity = "0";
    // document.getElementById("sc-8-2").style.opacity = "0";
    // document.getElementById("sc-8-3").style.opacity = "0";
    // document.getElementById("sc-8-1").style.display = "flex";
    // document.getElementById("sc-8-2").style.display = "flex";
    // document.getElementById("sc-8-3").style.display = "flex";
    // document.getElementById("sc-8-1").classList.remove("close3");
    // document.getElementById("sc-8-2").classList.remove("close2");
    // document.getElementById("sc-8-3").classList.remove("close1");
    // document.getElementById("sc-8-1").classList.add("open3");
    // document.getElementById("sc-8-2").classList.add("open2");
    // document.getElementById("sc-8-3").classList.add("open1");
    document.querySelector(".container8").style.display = "none";

    document.querySelector(".container9").style.display = "flex";
    let ldTexts = document.querySelectorAll(".container9 .ldText");
    ldTexts.forEach(element => {
        element.classList.add("anldText");
    });
})


document.querySelector(".container9 .parent .btnoff").addEventListener("click",()=>{
    document.querySelector(".container9").classList.add(".lastScndElem");
    setTimeout(()=>{
        document.querySelector(".container9").style.display = "none";
        document.querySelector(".container10").style.display = "flex";
        document.querySelector(".container10").classList.add("lastElem");
    },1000);
})