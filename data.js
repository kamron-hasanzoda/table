let table = document.querySelector('table')
let inp = document.querySelector('.modal input')
let save = document.querySelector('.modal button')
let modal = document.querySelector('.modal')
let created = document.querySelector('.buttons button')

const reload = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '1'
    th2.innerHTML = 'Bruce Reyes'
    th3.innerHTML = '1997'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload()

const reload2 = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '2'
    th2.innerHTML = 'Benhjamin Dean'
    th3.innerHTML = '1194'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload2()

const reload3 = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '3'
    th2.innerHTML = 'Philip Lucas'
    th3.innerHTML = '1525'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload3()

const reload4 = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '4'
    th2.innerHTML = 'Jose Hill'
    th3.innerHTML = '4325'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload4()

const reload5 = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '5'
    th2.innerHTML = 'Jerry Andrews'
    th3.innerHTML = '683'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload5()

const reload6 = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '6'
    th2.innerHTML = 'Nicolas Lee'
    th3.innerHTML = '2798'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload6()

const reload7 = () => {
    // create
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')

    // innerHTML
    th1.innerHTML = '7'
    th2.innerHTML = 'Alan Wade'
    th3.innerHTML = '3586'

    // img 
    img1.setAttribute('src', './img/edit.svg')
    img2.setAttribute('src', './img/delete.svg')

    // append 
    table.append(tbody)
    tbody.append(tr)
    th4.append(img1, img2)
    tr.append(th1, th2, th3, th4)

    // onclicks
    img1.onclick = () => {
        modal.style.display = 'block'
        modal.style.textAlign = 'center'
    }

    save.onclick = () => {
        th2.innerHTML = inp.value
        modal.style.display = 'none'
    }

    img2.onclick = () => {
        tr.remove()
    }
}
reload7()

let name = document.querySelector('.name')
let age = document.querySelector('.age')

const create = () => {
    created.onclick = () => {
        event.preventDefault();
        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        let th1 = document.createElement('th')
        let th2 = document.createElement('th')
        let th3 = document.createElement('th')
        let th4 = document.createElement('th')
        let img1 = document.createElement('img')
        let img2 = document.createElement('img')

        // innerHTML
        let year = document.querySelector('#year');
        year.innerHTML = new Date().getFullYear()
        console.log(year.innerHTML);
        th1.innerHTML = '8'
        th2.innerHTML = name.value
        th3.innerHTML = year.innerHTML - age.value

        // img 
        img1.setAttribute('src', './img/edit.svg')
        img2.setAttribute('src', './img/delete.svg')

        // append 
        table.append(tbody)
        tbody.append(tr)
        th4.append(img1, img2)

        tr.append(th1, th2, th3, th4)

        // onclicks
        img1.onclick = () => {
            modal.style.display = 'block'
            modal.style.textAlign = 'center'
        }

        save.onclick = () => {
            th2.innerHTML = inp.value
            modal.style.display = 'none'
        }

        img2.onclick = () => {
            tr.remove()
        }
    }
}

create()

// let year = document.querySelector('#year');
// year.innerHTML = new Date().getFullYear()
// console.log(year.innerHTML);