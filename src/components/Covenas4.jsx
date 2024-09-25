import covenas4 from '../assets/img/covenas4.jpg';
import PropTypes from 'prop-types';

export const Covenas4 = ( props ) => {
  return (
    <img src={covenas4} alt="Paisaje de Conveñas, Sucre" className={props.className} />
  )
}

Covenas4.propTypes = {
  className: PropTypes.string
}