import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({onClick, type = 'button', children}) => {
    return (
        <div className={css.Button_box}>
            <button className={css.Button} type={type} onClick={onClick}>{children}</button>
        </div>
        
    )
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    children: propTypes.string.isRequired,
  }