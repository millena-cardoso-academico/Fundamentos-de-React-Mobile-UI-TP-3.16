import PropTypes from 'prop-types';
import '../styles/TouristAttractionList.css';

const TouristAttractionList = ({ attractions, onSelectAttraction }) => {
  return (
    <div className="attraction-list">
      {attractions.map((attraction) => (
        <div
          key={attraction.id}
          className="attraction-item"
          onClick={() => onSelectAttraction(attraction)}
        >
          <img src={attraction.image} alt={attraction.name} />
          <h3>{attraction.name}</h3>
        </div>
      ))}
    </div>
  );
};

TouristAttractionList.propTypes = {
  attractions: PropTypes.array.isRequired,
  onSelectAttraction: PropTypes.func.isRequired,
};

export default TouristAttractionList;