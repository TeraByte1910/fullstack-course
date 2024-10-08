//Header
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

//Content
const Content = (props) => {
  return (
    <>
      <p>
        {props.part[0]} {props.exercises[0]}
      </p>
      <p>
        {props.part[0]} {props.exercises[1]}
      </p>
      <p>
        {props.part[0]} {props.exercises[1]}
      </p>
    </>
  )
}

//Total
const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exs[0] + props.exs[1] + props.exs[2]}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1, part2, part3]
  const exs = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content part = {parts} exercises = {exs} />
      <Total exs = {exs} />
    </div>
  )
}

export default App
