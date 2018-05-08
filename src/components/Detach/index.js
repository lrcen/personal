import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.less';

const Detach = ({ matrix, detached, textAlign }) => {
  return (
    <div
      className={
        classnames(
          styles.detach,
          styles[textAlign],
        )
      }
    >
      { matrix && <div className={styles.matrix}>{matrix}</div> }
      { detached && <div className={styles.detached}>{detached}</div> }
    </div>
  );
};

Detach.defaultProps = {
  detached: '',
  textAlign: 'center',
};

Detach.propTypes = {
  matrix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  detached: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Detach;
