(function(){
// 안보이는 곳에서 원래 위치로 보이게 내려오는 애니메이션
const $title = document.querySelectorAll(".title>li");
gsap.from($title,{
        y:-500,
        opacity: 0,
        stagger:0.2,
        duration: 1,
        delay:1
    });

// 화살표가 위에서 아래로 이동, 1번 화살표 실행 되면서 2번 화살표 실행
gsap.set(".arrow > p",{y:0});
const tl3 = gsap.timeline({repeat:-1});
tl3.to(".arrow > p",{
    y: 10,
    opacity: 1,
    stagger: 0.2,
    duration: 0.2,
    ease: "power2.out"
})
.to(".arrow > p",{
    y: 10,
    opacity: 0,
    stagger: 0.2,
    duration: 0.2,
    ease: "power2.out"
},"-=0.2");

// about me에 들어가는 텍스트의 사이즈가 작아지고 안보였다가 해당 항목이 보이면 커지면서 보이도록 처리
const $aboutMsg = document.querySelectorAll(".about-wrap > .info > p");
$aboutMsg.forEach((msg)=>{
    gsap.from(msg,{
        opacity: 0,
        scale: 0.4,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger:{
            trigger: msg,
            start: "top 90%",
            toggleActions:"play reverse play reverse" 
    }
});
});

// keyword 부분이 가로로 왔다 갔다 처리
const $keywordList = document.querySelectorAll(".keyword > li");
// $keywordList.forEach((word,idx)=>{
//     const posX = (idx === 1) ? 30 : -30;
//     gsap.fromTo(word,
//         { x: posX },{
//             x: -posX,
//             duration: 1,
//             delay: idx*0.2,
//             // repeatDelay: idx*0.5,
//             repeat: -1,
//             yoyo: true,
//             ease : "none"
//         })
// });
const tl2 = gsap.timeline({repeat:-1,yoyo:true});
tl2.to($keywordList,{
    x: (i)=>(i===1 ? -30:30),
    duration: 0.5,
    ease: "sine.inOut",
    stagger:{
        each: 0.2
    }
});

// project 영역의 .item 들은 아래에서 올라오면서 보이도록 처리
const $projects = document.querySelectorAll("#projects>.project-wrap");
$projects.forEach((article)=>{
    const $itme = article.querySelectorAll(".item");
    $itme.forEach((item)=>{
        gsap.from(item,{
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger:{
                trigger: item,
                start: "top 70%",
                end: "top 40%",
                scrub: true
            }
        });
    });
});

// skills 작아졌다가 뿅뿅 하고 튀어나오게 처리
const $shapes = document.querySelectorAll("#skills > .skill-item > li");
    gsap.from($shapes,{
        opacity: 0,
        scale: 0.2,
        duration: 0.5,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger:{
            trigger : "#skills",
            start: "top 90%",
            toggleActions:"play reverse play reverse" 
        }
    });

// footer
gsap.fromTo("footer",{
    backgroundColor: "#2957E2",
},{
    backgroundColor: "#eeeeee",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger:{
        trigger: "footer",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none none"
    }
});

// footer의 버튼을 번갈아가면서 색상이 반전되게 처리
gsap.to(".links > li",{
    backgroundColor: (i)=>(i === 0 ? "#2957E2":"#eeeeee"),
    color:(i)=>(i === 0 ? "#eeeeee":"#2957E2"),
    // borderColor: (i)=>(i === 0  ? "#2957E2":"#eeeeee"),
    duration:2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrollTrigger:{
        trigger:"footer",
        start: "top 50%",
        toggleActions: "play none none none"
    }
});
// gsap.to(".links > li:nth-child(1)",{
//     backgroundColor: "#2957E2",
//     color: "#eeeeee",
//     borderColor:"#2957E2",
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//     scrollTrigger:{
//         trigger: "footer",
//         start: "top 50%",
//         toggleActions: "play none none none"
//     }
// });
// gsap.to(".links > li:nth-child(2)",{
//     backgroundColor: "#eee",
//     color: "#2957E2",
//     borderColor:"#eee",
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",
//     scrollTrigger:{
//         trigger: "footer",
//         start: "top 50%",
//         toggleActions: "play none none none"
//     }
// });
})();
