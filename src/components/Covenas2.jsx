import covenas2 from '../assets/img/covenas2.jpg';
import PropTypes from 'prop-types';

export const Covenas2 = ( { className } ) => {
  return (
    <img src={covenas2} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Covenas2.propTypes = {
  className: PropTypes.string
}