import Card from './Components/Card.jsx'

const App = () => {
  return (
    <div className="Parent">

      {/* 1️⃣ Card */}
      <Card 
        name="Kajalti Sirame"
        role="Frontend Developer"
        image="/src/assets/premium_photo-1770416629652-962a91120bf5.avif"
        desc="Lorem Ipsum is simply dummy text of the printing industry."
      />

      {/* 2️⃣ Card */}
      <Card
        name="Ram Sirame"
        role="Frontend Developer"
        image="src\assets\images (1).jpg"
        desc="I am a frontend developer skilled in React and CSS."
      />

      {/* 3️⃣ Card */}
      <Card
        name="Rahul Sharma"
        role="UI Developer"
        image="src\assets\images.jpg"
        desc="I love building clean and responsive UI."
      />

    </div>
  )
}

export default App
