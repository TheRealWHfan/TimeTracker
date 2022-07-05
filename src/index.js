import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import axios from 'axios';

const [hello, yay, ...yo] = [1,2,3,4,5,6,7,8]
const {name, age} = {age:20, name:"John"}

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  e: function (addition) {
      this.age += addition
  }
}

object1["widjs is this variable"] = "javascript what"
let reference = object1.e.bind(object1)
reference(203)

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// axios
// .get("http://localhost:3001/notes")
// .then(response => {
//   const notes = response.data
//   console.log(notes)
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
// })

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
