import PropTypes from 'prop-types';
import '../styles/SelectedAttractions.css';

const SelectedAttractions = ({ attractions, onRemoveFromVisit }) => {
  const totalCost = attractions.reduce((sum, item) => sum + item.price * item.people, 0);

  return (
    <div className="selected-attractions">
      <h2>Pontos Turísticos Selecionados</h2>
      <ul>
        {attractions.map((item) => (
          <li key={item.id}>
            <span>{item.name} - {item.people} pessoas - R$ {item.price * item.people}</span>
            <button onClick={() => onRemoveFromVisit(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p><strong>Valor Total:</strong> R$ {totalCost}</p>
    </div>
  );
};

SelectedAttractions.propTypes = {
  attractions: PropTypes.array.isRequired,
  onRemoveFromVisit: PropTypes.func.isRequired,
};

export default SelectedAttractions;