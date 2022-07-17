let spisok = document.querySelector(".todo_list"),
    button = document.querySelector("#main_submit"),
    input = document.querySelector("#main_input");

    function addTodo () {
        let text = input.value;
        if (text.length > 0 && text.length < 26){
        input.value = "";

        let li = document.createElement("li"),
        span = document.createElement("span");      

        doneBut = document.createElement("button");
        delBut = document.createElement("button");

        span.textContent = text;
        delBut.textContent = "del";
        doneBut.textContent = "done";

        doneBut.classList.add('doneButton');
        delBut.classList.add('delButton');
       
        spisok.appendChild(li);
        li.appendChild(span);
        li.appendChild(delBut);
        /* li.appendChild(doneBut); */

        function delTodo () {
            spisok.removeChild(li);  
        } 

        delBut.addEventListener("click", delTodo);
        }

       
        
        
        
      
    }

    

button.addEventListener("click", addTodo);


