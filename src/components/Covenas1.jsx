import covenas1 from '../assets/img/covenas1.jpg';
import PropTypes from 'prop-types';

export const Covenas1 = ( { className } ) => {
  return (
    <img src={covenas1} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Covenas1.propTypes = {
  className: PropTypes.string
}