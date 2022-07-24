$(document).ready( 
    // 시점(이벤트), 누가(선택자), 어떻게 하라고?(매서드)
    // html 화면에 세팅이 다 되었다. 브라우저가 html 태그를 다 읽어냈다.
    function(){ //실행하라.
        // html - 태그를 가져오거나 초기화 하고 삽입하기
        // append(뒤에), prepend(앞에) - 화면에 뭔가를 출력하기
        // 네비게이션에서 가장 많이 사용 - 서브 페이지의 왼쪽 메뉴
        // $('p').html( $('h2').html() )
        // addClass, removeClass, toggleClass - 자바스크립트 프로그래밍 다이어트
        // 스타일시트를 잘 다룬다 - 자식, 동생 객체에 영향을 줄 수 있다.

        // prepend는 선택자의 첫번째 자식객체로 삽입
        // 선택자를 잘 이해해야.. 쓸데없는 if, else for 이런거 안 쓰도록
        $('main > section.title').each(
            function(){
                $(this).prepend('<h2>'+$(this).data('title')+'<h2>')
            }
        );

        $('#banner').css('opacity',0)

        $('#banner').animate({ // 2초간 서서히 나타남
            "opacity" : 1
        }, 2000, function(){
            $(this).html('애니메이션이 끝나고 나는 나타나겠지')
        })

    }
    
) 

/* 메서드:  어떻게 처리하겠다.
     addClass(클래스명) -> 선택자에 클래스를 삽입한다.
     removeClass() -> 모든 클래스 삭제
     removeClass('act') -> act 클래스만 삭제하겠다.
     removeClass('act  on') -> act클래스도 on클래스도 삭제하겠다.

     toggleClass('on') -> on클래스가 없으면 주고 있으면 빼고
     -> 햄버거버튼(열기 /닫기), 컨트롤러( 재생과 멈춤 ), 로그인/로그아웃
     토글기능 -> 객체는 하나인데 2개의 반대기능을 가졌다.

///////////// 프로그래밍 최적화 ///////////////////////
each 메서드:  다중실행코드로 몰아서 한번에 처리하기 ( 객체구분은 $(this)로 한다. )
            -> 실행중인 그 객체가 곧 $(this) -> 선택자가 누구냐에 따라 달라진다.!!!!
즉 실행안에서 확정된다.. 그게 누군지는.... */