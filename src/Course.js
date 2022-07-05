const Title = ({name}) => {
    const length = () => name.length
    return (
      <div>
        <h2>{name} Length: {length()}</h2>
      </div>
    )
}
  
const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => (
                <p key={part.id}>
                    {1}. {" " + part.name} {" - Exercises: " + part.exercises}
                </p>)
            )}
        </div>
    )
}
  

const Total = ({parts}) => {
    return (
    <div>
        <p>
        {
            "Number of exercises " + 
            parts.reduce((previous, current) => previous + current.exercises, 0)
        }
        </p>
    </div>
    )
}

const Course = ({course}) => (
    <>
      <Title name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
)

export default Course