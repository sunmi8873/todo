

$(document).ready(function(){
    /* 참고 사이트 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    참고 사이트 : https://www.zerocho.com/category/HTML&DOM/post/5918515b1ed39f00182d3048
    //로컬 스토리지(localStorage)
    - HTML5에서 추가된 저장소입니다. 간단한 키와 값을 저장할 수 있습니다. 키-밸류 스토리지의 형태입니다.
    - 로컬 스토리지의 데이터는 사용자가 지우지 않는 이상 계속 브라우저에 남아 있습니다. 
    - 로컬 스토리지는 window.localStorage에 위치
    - 용량 : 모바일은 2.5mb, 데스크탑은 5mb~10mb
    - 키 밸류 저장소이기 때문에 키와 밸류를 순서대로 저장하면 됩니다. 값으로는 문자열, 불린, 숫자, null, undefined 등을 저장할 수 있지만, 모두 문자열로 변환됩니다. 키도 문자열로 변환됩니다.

    - 사용법
    * localStorage.setItem(키, 값)으로 로컬스토리지에 저장한 후, 
    * localStorage.getItem(키)로 조회하면 됩니다. 
    * localStorage.removeItem(키)하면 해당 키가 지워지고,
    * localStorage.clear()하면 스토리지 전체가 비워집니다.
    
    - 객체는 제대로 저장되지 않고 toString 메소드가 호출된 형태로 저장됩니다. [object 생성자]형으로 저장되는 거죠. 
        객체를 저장하려면 두 가지 방법이 있습니다. 그냥 키-값 형식으로 풀어서 여러 개를 저장할 수도 있습니다. 
        한 번에 한 객체를 통째로 저장하려면 JSON.stringify를 해야됩니다. 객체 형식 그대로 문자열로 변환하는 거죠.           
        받을 때는 JSON.parse하면 됩니다.
    */

    const $todoList = $('#todolist');   //todolist 
    const $inputText = $('#inputText'); // input
    let todoArr = new Array(); //todo 배열
    const $btnNew = $('#btnAdd'); //추가버튼
    const btnDel = '<button type="button" class="btnClose">\u00D7</button></li>'; //닫기버튼
    

    //  Add버튼 클릭시 항목추가
    $btnNew.on('click', addNewItem);

    // enter키 항목 추가             
    $inputText.on('keydown',function(){
        if(event.which === 13){
            addNewItem();
        }
    });

    // 삭제       
    $('body').on('click', '.btnClose', function(){
        removeItem($(this));
    });  

    // 항목 추가
    function addNewItem() {
        let date = new Date();
        let id = 'id_'+ date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();  // 아이디   
        let itemText = $inputText.val();            
        let todoItem = `<li id="${id}">${itemText} ${btnDel}</li>`;
        if(!itemText || itemText.trim() === "") return false;  //blank 방지 , .trim() = 좌우 공백 제거
        
        $todoList.append(todoItem); //todo li 추가 
        
        todoArr.push({'id': id ,'itemText' : itemText}); //배열 추가
        saveLocalStorage("todo", JSON.stringify(todoArr));
        $inputText.val('');
    }

    // 항목 삭제
    function removeItem(that){
        let idx = that.parent().index();
        todoArr.splice(idx, 1);
        console.log(todoArr);
        localStorage.setItem('todo', JSON.stringify(todoArr));
        that.parent().remove();
    } 
    
    /* 로컬스토리지 저장 */
    function saveLocalStorage(key, value) {    
        localStorage.setItem(key, value);
    }

    // 로컬스토리지에 데이터가 있으면 화면에 출력.
    if(localStorage.getItem("todo") !== null){
        todoArr = JSON.parse(localStorage.getItem("todo"));
        todoArr.forEach(element => {
            $todoList.append(`<li id="${element.id}">${element.itemText} ${btnDel}</li>`);
        });
    }   
});
