import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
// import {add, sub} from '../utils/request'

import styles from './index.scss'

// 组件懒加载
const Home = lazy(() => 
  import(/* webpackChunkName: 'home' */ '../pages/home/Home')
)

// 验证tree shaking
// add()
// sub()

ReactDOM.render(
  <div>
    <h1 className={styles.title}>Hello, world!</h1>
    <Suspense fallback={<div>loading...</div>}>
      <Home />
    </Suspense>
  </div>,
  document.getElementById('app')
);