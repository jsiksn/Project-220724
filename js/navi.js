$(function(){
    $('body').addClass('ccc');
    // 프로그래밍 전에 제이쿼리 손상여부 확인

    $('#allBtn').click(function(){
        // 전체버튼을 클릭하면 xeicon의 닫기 클래스를 줬다뺐다
        $(this).toggleClass('xi-close');
        }
    )
    
    // 정렬과 each 메서드
    // 태그에서 값을 관리하도록 해야함 - 웹디자이너가 수정할 수 있게
    // 태그의 data- 으로 생성한 옵션으로 값을 저장
    var navitxt = [
        $('#skill h2').html(),
        $('#portfolio h2').html(),
        $('#interview h2').html(),
        $('#sns h2').html()
    ]
    $('#gnb a').each(function(index, item){
        // each 매개인자 변수 2개를 쓸 수 있다
        // 첫번째 자리는 순번
        // 두번째 자리가 그 실행 객체
        $(item).html(navitxt[index])
    })
    var navitxt0 = $('#skill h2').html()
    $('#gnb a').eq(0).html( // #gnb 내의 첫번째 a 태그 안에 삽입
        navitxt0
    )
    $('#gnb a').eq(1).html(
        navitxt[1]
    )

    $('#gnb a').click(function(e){
        e.preventDefault(); // 이벤트객체(브라우저)가 가지고 있는 메서드
        // 기본 기능을 막아 a, input, select 등 자체 기능을 가진 태그가 선택자가 되었을때 처리
        // $(this): 클릭을 호출한 a 태그
        $('body, html').animate({ 
            scrollTop : $( $(this).attr('href') ).offset().top 
        }, 400, function(){
            
        });
        // animate({스타일}, 스피드, 애니메이션 후 처리할 실행)
        // offset: body 상단 혹은 왼쪽 위치에서 객체의 top, left 위치를 계산하는 메서드
        // $(this).attr('href'): #skill, #interview ... 이 값의 선택자화 하기 위해서 $()을 씌워준다
        // $(this): $('body, html')
    })
    
})

