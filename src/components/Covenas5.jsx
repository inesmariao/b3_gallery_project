import covenas5 from '../assets/img/covenas5.jpg';
import PropTypes from 'prop-types';

export const Covenas5 = ( { className } ) => {
  return (
    <img src={covenas5} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

Covenas5.propTypes = {
  className: PropTypes.string
}