import Card from './Components/Cards.jsx'

const App = () => {
  return (
    <div className="Parent">
      <Card
        name="Red Tree"
        img="/src/assets/photo-1770150511105-714f4f5c0d3e.avif"
      />

      <Card
        name="Leave Tree"
        img="/src/assets/premium_photo-1770032819223-85a95cfb5fed.avif"
      />

      <Card
        name="White Tree"
        img="/src/assets/premium_photo-1769005373138-9a4f2771a4cc.avif"
      />
    </div>
  )
}

export default App
