import PropTypes from 'prop-types';
import '../styles/TouristAttractionDetail.css';
import { useState } from 'react';

const TouristAttractionDetail = ({ attraction, onAddToVisit }) => {
  const [people, setPeople] = useState(1);

  return (
    <div className="attraction-detail">
      <img src={attraction.image} alt={attraction.name} />
      <h2>{attraction.name}</h2>
      <p>{attraction.info}</p>
      <p><strong>Valor:</strong> R$ {attraction.price}</p>
      <p><strong>Meios de transporte:</strong> {attraction.transport}</p>
      <label>
        Número de pessoas:
        <input
          type="number"
          value={people}
          min="1"
          onChange={(e) => setPeople(parseInt(e.target.value, 10))}
        />
      </label>
      <button onClick={() => onAddToVisit(attraction, people)}>Adicionar à lista</button>
    </div>
  );
};

TouristAttractionDetail.propTypes = {
  attraction: PropTypes.object.isRequired,
  onAddToVisit: PropTypes.func.isRequired,
};

export default TouristAttractionDetail;