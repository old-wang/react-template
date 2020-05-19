import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.scss'

console.log('hello world')

function bee(){
  console.log('bee')
}
bee()

ReactDOM.render(
  <h1 className={styles.title}>Hello, world!</h1>,
  document.getElementById('app')
);

// let abo = () => {
//   console.log('abo')
// }
// abo()