
    // 리스트 데이터 배열.
    let todoArr = new Array();
   

    // Enter키 event 추가
    document.getElementById('inputText').addEventListener("keyup", function(e){
        if(e.which === 13){
            const itemText = inputText.value;
            addNewItem(itemText);
            todoArr.push({'itemText' : itemText}); 
            saveLocalStorage("todo", JSON.stringify(todoArr));
        }
    });

    // Add버튼 event 추가
    document.getElementById('btnAdd').addEventListener("click", function(e){
        const itemText = inputText.value;
        addNewItem(itemText);
        todoArr.push({'itemText' : itemText}); 
        saveLocalStorage("todo", JSON.stringify(todoArr));
    });
    
    //  추가
    function addNewItem(itemText){
        if(!itemText || itemText.trim() === "") return false;  //blank 방지

        let listItem = document.createElement('li');
        listItem.innerText = itemText;  // 할일 텍스트 추가
        document.getElementById('todolist').appendChild(listItem);    // li 추가        
        
        
        let btnDel = document.createElement('button');  //삭제버튼 생성
        let txt = document.createTextNode("\u00D7");    //삭제버튼 텍스츠 생성
        btnDel.className = "btnClose";                  //삭제버튼 클래스 추가
        btnDel.appendChild(txt);                        //삭제버튼에 텍스트 추가
        listItem.appendChild(btnDel);                   //리스트에 삭제버튼 추가 
        btnDel.onclick = removeItem;                    //삭제버튼 클릭시 삭제 함수 호출          

        inputText.value = '';
    }

     // 리스트 목록 삭제
    function removeItem(){
        let todoItem = this.parentElement;
        let todo = todoItem.parentNode;

        // Ul element
        const idx = indexInParent(todoItem);
        todoArr.splice(idx, 1);
        //console.log(todoArr);
        localStorage.setItem('todo', JSON.stringify(todoArr));
        todo.removeChild(todoItem);
    }  

    // 현재 Node의 Index.
    //https://stackoverflow.com/questions/4649699/is-it-possible-to-get-elements-numerical-index-in-its-parent-node-without-loopi
    function indexInParent (element) {
        return Array.from(element.parentNode.children).indexOf(element);
    }
   

    // 로컬스토리지 저장.
    function saveLocalStorage(key, value) {     
        // Store 저장
        localStorage.setItem(key, value);
    }

     // 스토리지에 데이터가 있으면 화면에 출력.
     if(localStorage.getItem("todo") !== null){
        todoArr = JSON.parse(localStorage.getItem("todo"));
        todoArr.forEach(element => {
            addNewItem(element.itemText);
        });
    }

     





    

    // 현재 Node의 Index.
    // function indexInParent(node) {
    //     var children = node.parentNode.childNodes;

    //     var num = 0;
    //     for (var i=0; i<children.length; i++) {
    //         if (children[i]==node) return num;
    //         if (children[i].nodeType==1) num++;
    //     }   
    //     return -1;
    // }

    


     // 리스트 목록 삭제
    //  function removeItem(){
    //     let todoItem = this.parentElement;

    //     // Ul element
    //     const idx = Array.prototype.indexOf.call(todoItem.parentNode.childNodes, todoItem);

    //     todoArr.splice(idx-1 , 1);
    //     localStorage.setItem('todo', JSON.stringify(todoArr));

    //     todoItem.parentNode.removeChild(todoItem.parentNode.childNodes[idx]);
    // }



    
