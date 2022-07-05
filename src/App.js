import { useState } from 'react';
import Course from './Course'

const Button = ({text, onClick}) => (
  <button onClick={onClick}>
      {text}
  </button>
)

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (<div>Press a button for this app to work</div>)
  }
  return(<div>{allClicks.join(" ")}</div>)
}

const App = (props) => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])
  const handleLeftClick = () => { setLeft(left + 1); setAll(allClicks.concat("L")) }
  const handleRightClick = () => { setRight(right + 1); setAll(allClicks.concat("R")) }

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("a new note...")
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll 
                    ? notes
                    : notes.filter(note => note.important)

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <History allClicks = {allClicks} />
      {left}
      <Button text="Add" onClick={handleLeftClick}/>
      <Button text="Add" onClick={handleRightClick}/>
      {right}
      {courses.map(course => <Course key={course.id} course={course}/>)}
      <button onClick={() => setShowAll(!showAll)}>
        Show { showAll ? "important" : "all" }
      </button>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </>
  )
}

export default App;
