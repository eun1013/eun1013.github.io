
let currentScript = ''; //현재 읽고 있는 스크립트를 저장시켜야함
// 창 사이즈 별 js파일 가져오기
const checkDevice = ()=>{
    const device = window.innerWidth <= 768 ? "mobile" : "pc";
    if(currentScript === device ) {
        return;
    }
// ↓↓ 이전 스크립트 제거 
const $prev = document.querySelector(`script[data-script]`);
    if($prev){
        $prev.remove();
        location.reload();
    }
    const script = document.createElement("script");
    script.src = `./script/${device}.js`;
    script.setAttribute("data-script","true");
    document.body.appendChild(script);
    currentScript = device; //현재 상태를 업데이트
};
window.addEventListener("load",()=>{
    checkDevice();
    gsap.registerPlugin(ScrollTrigger); //pc,모바일 동시에 처리하게 설정함
});
window.addEventListener("resize",checkDevice);