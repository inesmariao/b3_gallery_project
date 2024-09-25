import covenas5 from '../assets/img/covenas5.jpg';
import PropTypes from 'prop-types';

export const Covenas5 = ( props ) => {
  return (
    <img src={covenas5} alt="Paisaje de Conveñas, Sucre" className={props.className} />
  )
}

Covenas5.propTypes = {
  className: PropTypes.string
}