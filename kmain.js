// const work = document.querySelector('.work')

const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1;
window.onload = ()=>{
    function task(){
            count++
            fetch(`https://jsonplaceholder.typicode.com/todos?_page=${count}`)
                .then(response => response.json())
                .then(data => {
                const block = document.querySelector('.block')
                const task = data[0];
                const div = document.createElement('div');
                div.className = 'task';
                const h3 = document.createElement('h3');
                h3.innerText = task.title;
                const p = document.createElement('p');
                p.className = 'status';
                p.innerText = task.completed ? 'true' : 'false';
                div.appendChild(h3);
                div.appendChild(p);
                block.innerHTML = '';
                block.appendChild(div);
                                    // div.setAttribute('class', 'card')
                                    // div.innerHTML = `
                                    // <h2>${data.title}</h2>
                                    // <span>${data.id}</span>
                                    // <h3>${data.completed}</h3>
            //
            //     block.append(div)
        })
        .catch(error =>{
            console.log("error",error)})
//         btnPrev.onclick = () => {
//             if (count > 1) {
//                 count--
//                 fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         const div = document.createElement('div')
//                         div.setAttribute('class', 'card')
//                         div.innerHTML = `
//                         <h2>${data.title}</h2>
//                         <span>${data.id}</span>
//                         <h3>${data.completed}</h3>
//                     `
//                         block.append(div)
//             })
//     }
// }
}task()
    btnPrev.onclick = ()=>{
        count--;
        if (count < 0) {
            count = 0;
        }
        task()
    }

// btnNext.onclick = ()=>{
//     ta
// }


// let negation = 0;
//count++;
// btnNext.onclick
// window.onload= ()=> {
// let count = 0;
//     function random(){
//         fetch(`https://jsonplaceholder.typicode.com/todos?_page=${count}`)
//         .then(response => response.json())
//         .then(data => {
//             const block = document.querySelector('.block')
//             const div = document.createElement('div')
//             div.className = 'task'
//             let h3 = document.createElement('h3')
//             h3.innerText = task.title;
//             let p = document.createElement('p')
//             let task = data[0]
//             div.appendChild(h3)
//             div.appendChild(p)
//             p.innerText = task.completed ? 'true' : 'false';
//             block.innerHTML = '';
//             block.appendChild(div);
             // const dataContainer = document.querySelector('#data-container');
             //    const task = data[0];
             //    const taskElem = document.createElement('div');
             //    taskElem.className = 'task';
             //    const titleElem = document.createElement('h3');
             //    titleElem.innerText = task.title;
             //    const statusElem = document.createElement('p');
             //    statusElem.className = 'status';
             //    statusElem.innerText = task.completed ? 'true' : 'false';
             //    taskElem.appendChild(titleElem);
             //    taskElem.appendChild(statusElem);
             //    dataContainer.innerHTML = '';
             //    dataContainer.appendChild(taskElem);
        // })
//         .catch(error =>{
//             console.log("error",error)
//         })
//
// random()
//
btnPrev.onclick = () => {
        count--;
        if (count > 1) {
            count = 1;
        }
        task();
    };

btnNext.onclick = () => {
        count++;
        task();
    };

}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))