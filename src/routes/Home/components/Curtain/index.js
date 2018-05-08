import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

const Curtain = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const d = document;
  const height = d.body.clientHeight || d.documentElement.clientHeight;

  const formatDate = (old) => {
    return old < 10 ? `0${old}` : old;
  }

  return (
    <div
      className={
        classnames(
          styles.curtain,
        )
      }
      style={{ height }}
    >
      <div
        className={
          classnames(
            styles.date,
            'flex flex-column'
          )
        }
      >
        <span>{formatDate(month)} 月</span>
        <span>{formatDate(date)} 日</span>
      </div>
      <h1>delicious</h1>
      <div className={styles.down}>
        <i className="iconfont icon-Down" />
      </div>
    </div>
  );
};

export default Curtain;
