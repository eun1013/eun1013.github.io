// 객체 가져오기
const $backBtn = document.querySelector(".main > .back"); // back버튼 가져오기
const $nextBtn = document.querySelector(".main > .next"); // next버튼 가져오기
const $imgList = document.querySelector(".img-list"); //img-list 가져오기
// console.log($imgList);
// console.log(typeof $imgList.children);
const $slider = document.querySelector(".main > .slider");
const $imgs = document.querySelectorAll("img"); // img 가져오기
// console.log($imgs)
const $pElem = document.querySelectorAll(".img-list>div>p");
const $div = document.querySelectorAll(".img-list>div");
// console.log($pElem);
// console.log($img);
const slideCount = $imgs.length; // 이미지의 갯수 길이
const slideWidth = 350;  // 이미지의 width 값
let index = 0;  




// 다음 버튼을 눌렀을 때 함수 값 만들기
const clickNextBtn = ()=>{
    index++;   // 인덱스 값이 1씩 증가
    gsap.to($imgList,{       //이미지 리스트를 이동
        x: -slideWidth*index,  // x값을 350*index값 만큼
        duration:0.5,          // 0.5초 
        onComplete:()=>{        // 마지막 함수가 실행되면
        // console.log("애니메이션 끝남! onComplete 실행됨!");
            const firstclone = $imgList.children[0].cloneNode(true); // 첫번째 노드를 복사
            $imgList.appendChild(firstclone); // 이미지리스트 자식으로 추가
            // console.log($imgList);
            $imgList.removeChild($imgList.children[0]);// 첫번째는 이미지 리스트에서 삭제
            index--;        // 인덱스 값 1씩 감소
             gsap.set($imgList, { x: -slideWidth * index });  //초기값으로 설정
            // 매번 일어나면 된다.
        }
    });
};

// 이전 버튼을 눌렀을 때 함수 값 만들기
const  clickBacktBtn = ()=>{
        index--;
    gsap.to($imgList,{
        x: -slideWidth*index,
        duration:0.5,
        onComplete:()=>{
            if(index<0){
                const lastClone = $imgList.children[$imgList.children.length-1].cloneNode(true);
                $imgList.insertBefore(lastClone,$imgList.firstChild);
                $imgList.removeChild($imgList.children[$imgList.children.length-1]);
                index = 0;
                gsap.set($imgList, { x: -slideWidth * index });
            };
            pElem();
        }
    });
};

// 페이지가 시작되면 바로 자동실행
window.addEventListener("DOMContentLoaded", () => {
    intervalID = setInterval(() => {
    clickNextBtn();
    pElem();
    }, 4000);
});
// 자동재생을 멈추는 기능
const stopPlay = ()=>{
    clearInterval(intervalID);
};

    // p태그 opacity 값
    const pElem = ()=>{
    const elem = document.querySelectorAll(".main .img-list p");  //p 요소 가져오기
    elem.forEach((value,idx)=>{                              // p 요소의 elem,idx값 가져오기
        if(idx === index){                  // 만약에 elem의 idx값과 index값이 같다면
            gsap.to(elem[index],{           // p요소의 인덱스 번호
        opacity:1,                  //opacity = 1 (보이게)
        duration:0.5                // 0.5초 로 설정
    });
        } else {                //값이 같지 않다면
    gsap.to(elem[idx],{         // p요소의 인덱스 번호
        opacity:0,              // opacity = 0 (안보이게)
        duration:0.5            // 0.5초로 설정
    });
        }
    });
    };

    
// 다음 버튼을 클릭했을 때 
$nextBtn.addEventListener("click",()=>{  
    stopPlay();
    clickNextBtn();
    pElem();
});

// 이전 버튼을 클릭했을 때 
$backBtn.addEventListener("click",()=>{
    stopPlay();
    clickBacktBtn();
});





