import '../componentStyles/Card.css';

const Card = ({ title, description, person, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Descripción:</strong> {description}</p>
      <p><strong>Asignada a:</strong> {person}</p>
      <p><strong>Fecha de inicio:</strong> {startDate}</p>
      <p><strong>Fecha de fin:</strong> {endDate}</p>
    </div>
  );
};

export default Card;
