import covenas2 from '../assets/img/covenas2.jpg';
import PropTypes from 'prop-types';

export const Covenas2 = ( props ) => {
  return (
    <img src={covenas2} alt="Paisaje de Conveñas, Sucre" className={props.className} />
  )
}

Covenas2.propTypes = {
  className: PropTypes.string
}