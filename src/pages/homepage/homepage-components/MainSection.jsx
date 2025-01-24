import HealthyMenu from '../../../assets/HEALTHYMENU.svg?react';
import styled from 'styled-components';

function MainSection() {
  return (
    <div>
      <div className='home-banner-container'>
        <HealthyMenu />
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Some text
          </h1>
          <p className='primary-text'>
            some other text example
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;