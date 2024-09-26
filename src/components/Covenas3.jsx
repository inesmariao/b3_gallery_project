import covenas3 from '../assets/img/covenas3.jpg';
import PropTypes from 'prop-types';

export const Covenas3 = ( { className } ) => {
  return (
    <img src={covenas3} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Covenas3.propTypes = {
  className: PropTypes.string
}