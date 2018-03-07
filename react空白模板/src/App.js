//导入react和react中的component组件 (类)
import React, { Component } from 'react';
//导入svg图片
import logo from './logo.svg';
//导入根组件的样式
import './App.css';

//extends  es6中的继承关键字
//App组件  (组件的实质是 组件类)
class App extends Component {
  //组件类中都有一个render方法
  render() {
      //render函数返回的就是组件的模板
    return (
        //所有的类似标签的都是react中的组件，这种语法也叫jsx语法
        //注意:1. className 会解析成class  因为class是关键字
        //     2. render函数返回的组件中，只能有一个标签
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
