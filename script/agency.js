(($, window, document, undefined)=>{

// alert();
// console.log($);
// console.log(window);
// console.log(document);
// console.log(undefined);

class Agency {
    init(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.section9();
        this.section10();
        this.footer();
    }
    header(){
        // 윈도우 스크롤 탑값이 0이면 72 기본 
        // - 추가된 클래스 모두 삭제
        // 헤더.removeClass('addH60');

        // 윈도우 스크롤 탑값이 0이 아니면 높이 60
        // - 추가 클래스 addH60
        // 헤더.addClass('addH60');

        // 스크롤 이벤트가 발생하면

        let newTop = $(window).scrollTop();
        let oldTop = newTop;
        let x = '';


        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $('#header').removeClass('addH60');
                $('#header').removeClass('addShow');
                $('#header').removeClass('addHide');
            }
            else{
                $('#header').addClass('addH60');

                // 위 아래 방향 알아내야 함
                // 변수는 3항 연산자 사용하는 방법

                newTop = $(window).scrollTop();

                x = oldTop - newTop > 0 ? 'UP' : 'DOWN';
                
                if(x=='UP'){
                    $('#header').addClass('addShow');
                    $('#header').removeClass('addHide');
                    
                }
                if(x=='DOWN'){
                    $('#header').addClass('addHide');
                    $('#header').removeClass('addShow');

                }

                oldTop = newTop;
            }
        });



        // console.log('header');
        //메인버튼 이벤트
        const mainBtn = $('.main-btn');
        const sub = $('.sub');
        const nav = $('#nav'); 
        const subBtn = $('.sub-btn'); 
        const subSub = $('.sub-sub'); 
        

            mainBtn.on({
                mouseenter(e){ //es6
                    // console.log(e);
                    const $this = $(this);

                    sub.stop().fadeOut(0);//사라지는건 항상 위에
                    $this.next().stop().fadeIn(300);
                },
                focusin(e){ //es6
                    // console.log(e);
                    const $this = $(this);

                    sub.stop().fadeOut(0);//사라지는건 항상 위에
                    $this.next().stop().fadeIn(300);
                }
            });

            nav.on({
                mouseleave(){
                    sub.stop().fadeOut(300);
                    subSub.stop().fadeOut(300);
                    
                }
            });

            //서브메뉴-서브 2->3
            subBtn.on({
                mouseenter(){
                    const $this = $(this);

                    subSub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
                },
                focusin(){
                    const $this = $(this);

                    subSub.stop().fadeOut(0);
                    $this.next().stop().fadeIn(300);
                }
            });



    }
    section1(){
        // 슬라이드 관련된 모든 변수 등록
        let cnt = 0;
        const slideWrap = $('.slide-wrap');
        const slideView = $('.slide-view');

        function mainSlide(){ //left: -100*cnt + '%' -100% 주고 싶을때
            slideWrap.stop().animate({left:-1903*cnt},600,'easeInOutExpo', function(){
                if(cnt>2){cnt=0}
                if(cnt<0){cnt=2}
                slideWrap.stop().animate({left:-1903*cnt},0);

            });
        }
        function nextCount(){
            cnt++;
            mainSlide();
        }
        function prevCount(){
            cnt--;
            mainSlide();
        }
            // setInterval(prevCount, 3000);

            //스와이프(좌우터치이벤트)
            //오른쪽에서 왼쪽으로 터치: 다음슬라이드 0 >
            //왼쪽에서 오른쪽으로 터치 : 이전 슬라이드 < 0

            let s = null; //터치시작
            let e = null; //터치 종료 좌표값
            let dS = null; //드래그 시작
            let dE = null; //드래그 끝
            let mD = null; //마우스 다운



            slideView.on({
                mousedown(event){
                    // console.log('터치시작: ',event.clientX);
                    s = event.clientX;
                    dS = event.clientX - slideWrap.offset().left-1903; // 이동 시작점 
                    mD = true;

                },
                mouseup(event){
                    // console.log('터치종료: ',event.clientY);
                    e = event.clientX;
                    mD = false;
                    if((s-e) > 0){ //시작좌표 - 종료좌표 > 0 보다 크면 다음 슬라이드
                        nextCount();
                    }
                    if((s-e) < 0){//시작좌표 - 종료좌표 < 0 보다 작으면 다음 슬라이드
                        prevCount();
                    }


                },
                mousemove(e){//드래그 앤 드롭(물체를 잡아 끌어 놓기를 구현)
                    // slideWrap.css({left:좌표값 드래그 시작지점과(down) 끝나는 지점(up)});//슬라이드에서 레프트 값만큼 이동해ㅝ라 
                    // slideWrap.css({left:드래그 끝값 - 드래그 시작값});
                   // 마우스 다운값 반드시 있어야 함 없으면 실행 불가 마우스가 클릭되어야 실행 가능함 

                    if(mD!==true){return} //마우스 다운이 아니면 (!mD랑 mD!==랑 같음)
                    dE = e.clientX; // 이동 끝점 dS
                    slideWrap.css({left:dE - dS});
                }

            });
        


    }
    section2(){

    }
    section3(){

    }
    section4(){

    }
    section5(){

    }
    section6(){

    }
    section7(){

    }
    section8(){

    }
    section9(){

    }
    section10(){

    }
    footer(){

    }
}

const newPofo = new Agency();
newPofo.init();

})(jQuery, window, document);