import Student from './Components/Student.jsx'

const App = () => {
  return (
    <div>
      <h1>Students</h1>

      <Student name="Rahul" marks={85} />
      <Student name="Anita" marks={92} />
      <Student name="Rohit" marks={78} />
    </div>
  )
}

export default App
