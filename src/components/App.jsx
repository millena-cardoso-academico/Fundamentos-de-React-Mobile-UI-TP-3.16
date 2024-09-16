import { useState } from 'react';
import TouristAttractionList from './TouristAttractionList.jsx';
import TouristAttractionDetail from './TouristAttractionDetail.jsx';
import SelectedAttractions from './SelectedAttractions.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import '../styles/App.css';

const attractions = [
  {
    id: 1,
    name: "Monumento das Três Raças",
    price: 0,
    info: "O Monumento das Três Raças é um marco representando a miscigenação dos povos indígenas, negros e brancos em Goiânia.",
    transport: "Acessível de ônibus, táxi ou a pé.",
    image: "https://cdn.blablacar.com/wp-content/uploads/br/2023/10/05095507/goiania-go-2.webp",
  },
  {
    id: 2,
    name: "Museu de Arte de Goiânia",
    price: 10,
    info: "O Museu de Arte de Goiânia abriga uma coleção importante de obras de arte moderna e contemporânea, além de exposições temporárias.",
    transport: "Acessível de ônibus, táxi ou carro particular.",
    image: "https://agenciacoradenoticias.go.gov.br/wp-content/uploads/2022/05/MAC.jpeg",
  },
  {
    id: 3,
    name: "Museu Pedro Ludovico Teixeira",
    price: 5,
    info: "O Museu Pedro Ludovico Teixeira preserva a história e os pertences do fundador de Goiânia, Pedro Ludovico.",
    transport: "Acessível de ônibus, táxi ou a pé.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/40/45/e8/img-20170805-161511-876.jpg?w=1200&h=-1&s=1",
  },
  {
    id: 4,
    name: "Feira Hippie",
    price: 0,
    info: "A Feira Hippie é uma das maiores feiras ao ar livre do Brasil, com diversas barracas vendendo roupas, artesanato e comida.",
    transport: "Acessível de ônibus ou táxi.",
    image: "https://i.em.com.br/PNJV-YPFaUZvIxWBOwoBquQtzAU=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/10/29/1583955/movimento-de-domingo-na-feira-hippie_1_107290.jpeg",
  },
];

function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [selectedToVisit, setSelectedToVisit] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleSelectAttraction = (attraction) => {
    setSelectedAttraction(attraction);
  };

  const handleAddToVisit = (attraction, people) => {
    const existing = selectedToVisit.find((item) => item.id === attraction.id);
    if (existing) {
      setSelectedToVisit(
        selectedToVisit.map((item) =>
          item.id === attraction.id ? { ...item, people } : item
        )
      );
    } else {
      setSelectedToVisit([...selectedToVisit, { ...attraction, people }]);
    }
  };

  const handleRemoveFromVisit = (attractionId) => {
    setSelectedToVisit(selectedToVisit.filter((item) => item.id !== attractionId));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      <TouristAttractionList attractions={attractions} onSelectAttraction={handleSelectAttraction} />
      {selectedAttraction && (
        <TouristAttractionDetail
          attraction={selectedAttraction}
          onAddToVisit={handleAddToVisit}
        />
      )}
      <SelectedAttractions
        attractions={selectedToVisit}
        onRemoveFromVisit={handleRemoveFromVisit}
      />
    </div>
  );
}

export default App;