import './App.css'
import Card from './components/Card'

function App() {

  const cardsData = [
    {
      title: "Proyecto A",
      description: "Este es el proyecto A, se enfoca en desarrollo web.",
      person: "Juan Pérez",
      startDate: "2023-09-01",
      endDate: "2023-12-01"
    },
    {
      title: "Proyecto B",
      description: "El proyecto B está orientado a marketing digital.",
      person: "Ana Gómez",
      startDate: "2023-10-15",
      endDate: "2024-01-15"
    },
    {
      title: "Proyecto C",
      description: "Este proyecto se centra en la investigación y análisis de datos.",
      person: "Luis Ramírez",
      startDate: "2023-11-05",
      endDate: "2024-03-01"
    }
  ];
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          person={card.person}
          startDate={card.startDate}
          endDate={card.endDate}
        />
      ))}
    </div>
  );
}

export default App
