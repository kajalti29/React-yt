import Student from './Component/Student.jsx'

const App = () => {
  return (
    <div>
      <h1>Student Render</h1>

      <Student name="Ravi" marks={78}/>
      <Student name="Kajal" marks={98}/>
      <Student name="Palak" marks={67}/>
    </div>
  )
}

export default App
