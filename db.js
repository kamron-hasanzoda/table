let todos = [{
    id: 1,
    task: "Купить луну",
    time: "14:05",
    completed: true,
},
{
    id: 2,
    task: "Купить mandarin",
    time: "14:05",
    completed: false,
},
];

let form = document.forms.add_task_form;
let container = document.querySelector(".container");

form.onsubmit = (event) => {
    event.preventDefault();

    let todo = {
        id: Math.random(),
        completed: false,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
    };

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        todo[key] = value;
    });


    todos.push(todo)
    reload(todos)
};

let modal = document.querySelector('.modal')
let ok = document.querySelector('.ok')
let inp = document.querySelector('.modal input')

const reload = (arr) => {
    container.innerHTML = ""
    for (let item of arr) {
        let box = document.createElement("div");
        let img = document.createElement("img");
        let changeText = document.createElement('p')
        let h3 = document.createElement("h3");
        let span = document.createElement("span");

        box.classList.add("box");
        changeText.classList.add("changed")
        img.classList.add("img");
        h3.classList.add("h3");
        span.classList.add("span");

        h3.innerHTML = item.task;
        changeText.innerHTML = 'изменить'
        img.src = "./close.svg";
        span.innerHTML = item.time;

        container.append(box);
        box.append(img, h3, span, changeText);
        if (h3.onclick = () => { }) {
            h3.classList.add('.active')
        } else {
            h3.classList.add('.noactive')
        }

        changeText.onclick = () => {
            modal.style.margin = '0 auto'
            h3.innerHTML = ''
            ok.onclick = () => {
                modal.style.marginLeft = '2000px'
                h3.innerHTML = inp.value
            }
        }

        img.onclick = () => {
            box.style.display = 'none'
        }

        console.log(container);
    }

};

reload(todos)