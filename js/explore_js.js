function xoavathemactive(){
    const btns=document.querySelectorAll('.filter-con');
    for(let j=0;j<btns.length;j++){
        btns[j].classList.remove('active');
    }
    this.classList.add('active');
}
function khoidong(){
    const btns=document.querySelectorAll('.filter-con');
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',xoavathemactive);
    }
}
document.addEventListener('DOMContentLoaded',khoidong);
function chuyentrang(so){
    var tatca=document.querySelectorAll('[data-page]');
    for(let i=0;i<tatca.length;i++){
        tatca[i].style.display='none';
    }
    var hientai=document.querySelectorAll('[data-page="'+ so +'"]');
    for(let i=0;i<hientai.length;i++){
        hientai[i].style.display='block';
    }
}
function doianh(ele){
            const allanh=document.querySelectorAll('.anh-con');
            for(let i=0;i<allanh.length;i++){
                allanh[i].classList.remove('active');
            }
            ele.classList.add('active');
            const thay=document.getElementById('thay');
            thay.src=ele.src;
        }