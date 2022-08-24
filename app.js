let addBtn = document.getElementById('add')
let deleteBtn = document.getElementById('delete')
let myTable = document.getElementById('list')
let myForm = document.getElementById('new-show')

let showInput = document.getElementById('new-show')
let dateInput= document.getElementById('new-date')
let timeInput = document.getElementById('appt')
//Delete Show Function
let removeParent = (element) => {
     let id = element.getAttribute('id')
     delete shows[id]

    element.parentElement.parentElement.parentElement.remove()

    
}

let shows = {}
let id = 0;

//Add Show Function
addBtn.addEventListener('click' , event => {
    event.preventDefault();
    let show = showInput.value
    let date = dateInput.value
    let time = timeInput.value

   id += 1
   shows[id]  = {"show": show, "date": date, "time": time}
   console.log(shows)
    let template = `
                  <tr>
                  <td><button id="${id}" class="btn btn-danger" onclick="removeParent(this)">Delete</button></td>
                   <td>${show}</td>
                    <td>${date}</td>
                    <td>${time}</td>
                    
                  </tr> `
                  myTable.innerHTML += template;
})                  

