import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planet-container">
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (
          <PlanetCard planetName={ name } planetImage={ image } key={ name } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
