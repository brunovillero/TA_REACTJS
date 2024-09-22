import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card>
        <h2>Proyecto A</h2>
        <p><strong>Descripción:</strong> Este es el proyecto A, se enfoca en desarrollo web.</p>
        <p><strong>Asignada a:</strong> Juan Pérez</p>
        <p><strong>Fecha de inicio:</strong> 2023-09-01</p>
        <p><strong>Fecha de fin:</strong> 2023-12-01</p>
      </Card>

      <Card>
        <h2>Proyecto B</h2>
        <p><strong>Descripción:</strong> El proyecto B está orientado a marketing digital.</p>
        <p><strong>Asignada a:</strong> Ana Gómez</p>
        <p><strong>Fecha de inicio:</strong> 2023-10-15</p>
        <p><strong>Fecha de fin:</strong> 2024-01-15</p>
      </Card>

      <Card>
        <h2>Proyecto C</h2>
        <p><strong>Descripción:</strong> Este proyecto se centra en la investigación y análisis de datos.</p>
        <p><strong>Asignada a:</strong> Luis Ramírez</p>
        <p><strong>Fecha de inicio:</strong> 2023-11-05</p>
        <p><strong>Fecha de fin:</strong> 2024-03-01</p>
      </Card>
    </div>
  );
}

export default App
