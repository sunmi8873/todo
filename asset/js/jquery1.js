$(document).ready(function(){
    //1. 새로고침 할 때 마다 배경이 바꾸기
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);  //소수색생 : 16777215 (밝은색상)
    $('.top').css({'background-color' : randomColor,});



    //2. 이름 입력하는 칸 만들어서 'hello 누구누구님 이렇게 나오게' (새로고침해도 유지 되게)
    // 참고
    // https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local       
    // 브라우저에서 F12 누르시고 console 창에 localStorage.clear(); 요거 실행해서 localStorage 삭제 후 해보세요.
    if (localStorage.getItem("lastname") !== null) {
        // Retrieve 회복
        $('.member_name').text(localStorage.getItem("lastname"));
    } else {
        var lastname = prompt('이름을 입력하세요');
        $('.member_name').text(lastname);
        // Store 저장
        localStorage.setItem("lastname", lastname); 
    }              



    //추가문제 : 시계 https://mkil.tistory.com/343
    setInterval(time , 1000);
    function time() {
        var date = new Date();
        $('.time').text( date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());  //https://mkil.tistory.com/343
    }
    time();



    // 3. todo 리스트 만들기 (input에 입력하면 ul로 리스트가 저장되게, 각각 지워지게) (새로고침해도 유지 되게)
    // 참고 : https://www.w3schools.com/howto/howto_js_todolist.asp
    // 참고 : http://jsfiddle.net/daviddavidson/3P6KE/
    $('#btnAdd').on('click',function(){
        if($('#inputText').val() !== ''){
            var task = $('#inputText').val();
            var todoItem = $('<li>'+ task + '<button type="button" class="btnClose">\u00D7</button></li>' );
            $('#todoList').append(todoItem);
            $('#inputText').val('');

            $('.btnClose').on('click',function(){
                $(this).parent().remove();
            });
        }
    });

    
    // 4.날씨 정보 받아오기 (위치, 지역, 온도 정도 나오게) 
    //   https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric api fetch는 잘 모르면 검색등을 통해서 찾아서 해봤으면 좋겠음 
    // https://api.openweathermap.org 에서 회원가입해서 API키를 발급받아야 날씨정보를 가져 올 수 있음.
    // 내키 : 570ce360cce8d6bce73eb7cde115ec71
    //참고사이트
    //https://blog-han.tistory.com/35
    //https://openweathermap.org/current
    //https://namjackson.tistory.com/27
    //https://binsworld.tistory.com/183        

    var apiURI ="http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=570ce360cce8d6bce73eb7cde115ec71"; 
    $.ajax({
        url : apiURI,
        method : 'GET',
        success :  (data)=> {
            var temp = String((data.main.temp - 272)).substring(0,3); // 온도 - 섭씨온도를 만들기위해 272 빼기
            var location = data.name; // 지역이름 
            var lont = data.coord.lon; // 위치이름 
            var latt = data.coord.lat; // 위치이름 
            $('#chatLog').append('위치 : ' + lont + ',' + latt + ' / 지역 ：' + location + ' / 온도：' + temp　+ "도입니다. "+'\n');
            // 아이콘 취득 
            var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            // 아이콘 표시
            $('#img').attr("src", imgURL);
        }
    }); 
});    
