
const $btnStart = document.querySelector("#btn-start");
const $inputStart = document.querySelector("#start");
const $ul = document.querySelector("main>.talky");
const $btngame = document.querySelector("main>.footer>.data");
const $inputgame = document.querySelector("main>.footer>#text");

const chageLicontent = (elem)=>{
    const $liFirst = document.querySelector("main>ul>li");
    $liFirst.textContent = elem; 
};

const createli = (keyword)=>{
    console.log("추가");
    const $li = document.createElement("li");
    $li.textContent = keyword;
    $ul.appendChild($li);
};

const overFlow = ()=>{
    const over = $ul.querySelector("li:nth-child(6)")
    if(over){
        $ul.removeChild($ul.firstChild);
        console.log('단어를 지웠어!');
    }else{
        console.log('아직이야');
    }
};

const game = ()=>{
    const keyword = $inputgame.value.trim();
    if(keyword ===''){
        return;
    }
    const last = $ul.lastElementChild.textContent;
    const lastword = last[last.length-1];
    const firstword = keyword[0];
    console.log(lastword,firstword);
    if( lastword === firstword){
        createli(keyword);
    } else{
        alert("틀렸습니다!");
        return;
    }
    $inputgame.value ='';
    $inputgame.focus();
    overFlow();
};

$inputgame.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        $btngame.click();
    }
});

$btngame.addEventListener("click",game);

const startgame = ()=>{
    const elem = $inputStart.value.trim();
    if(elem !==''){
        const $main = document.querySelector("main");
        // console.log($main);
        $main.style.display = "block";
        chageLicontent(elem);
    }
};
$btnStart.addEventListener("click",startgame);