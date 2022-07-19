let spisok = document.querySelector(".todo_list"),
    button = document.querySelector("#main_submit"),
    input = document.querySelector("#main_input");


    function addTodo () {
        let text = input.value;
        if (text.length > 0 && text.length < 26 && spisok.children.length <= 19){
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

////////////// timer 

const now = new Date();

    const deadline = new Date('09-01-2022');
    
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000 ) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'second': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('.day_box'),
            hours = timer.querySelector('.hour_box'),
            minutes = timer.querySelector('.minutes_box'),
            second = timer.querySelector('.seconds_box'),
            timeInterval = setInterval(updateClock, 1000);
        
            updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            second.innerHTML = getZero(t.second);

            if (t.total <= 0 ){
                clearInterval(timeInterval);
            }
        }
    
        }

        setClock('.timer', deadline);


