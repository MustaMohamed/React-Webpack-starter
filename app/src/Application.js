import React from 'react';

import styles from './styles/less/testless.less';
import css from './styles/testcss.css';
export class Application extends React.Component {

    render() {
        return (
          <div className={styles.mydev}>
              <h1>Hello from my application</h1>
              <div className={css.myTestDev}>
                  <h2>Hey from new dev</h2>
              </div>
          </div>
        );
    }

}