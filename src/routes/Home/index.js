import React, { Component } from 'react';
import { connect } from 'dva';
import classnames from 'classnames';
import Curtain from './components/Curtain';
import styles from './index.less';

@connect(({ home }) => ({ home }))

class Home extends Component {
  render() {
    const { home: { currentScrollTop, scrollOverAScreen, screenHeight } } = this.props;

    return (
      <div className={styles.home}>
        <Curtain />
        <div
          className={styles.section1}
          style={{ paddingTop: scrollOverAScreen ? 0 : screenHeight }}
        >
          <div
            className={
              classnames(
                styles.content,
                { [styles.fixed]: !scrollOverAScreen }
              )
            }
          >
            内容
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
