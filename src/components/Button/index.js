import React from 'react';
import { Icon } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';

const Button = ({
  text, size, loading, onClick, className,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  }

  return (
    <div
      className={
        classnames(
          styles.button,
          { [styles.loading]: loading }
        )
      }
    >
      <button
        className={
          classnames(
            styles[size],
            className,
          )
        }
        onClick={handleClick}
      >
        {text}
        <div
          className={
            classnames(
              styles.spinning,
              'flex flex-main-center flex-deputy-center'
            )
          }
        >
          <Icon type="loading" />
        </div>
      </button>
    </div>
  );
};

Button.defaultProps = {
  loading: false,
  size: 'default',
  onClick: () => {},
};

Button.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

export default Button;
