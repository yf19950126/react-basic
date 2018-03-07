import React, { Component } from 'react';
import './App.css';

class App extends Component {
    //构造函数
    //构造函数中的代码默认会被执行   代码只要实例化就会执行
    constructor(props){
      //必须调用父类的构造函数，否则就会报错
        super(props);
        //构造函数中的this指向实例化组件
        //console.log(this)
        //this.state是存放数据的地方，类似于vue中的data对象
        this.state = {
            message:"Hello React！！！",
            seen:true,
            students:["秦兴华","皮皮虾","象拔蚌"],
            score:0,
            hour:0,
            minute:0,
            second:0
        }
        //改变this指向
        this.toggleSeen = this.toggleSeen.bind(this)
        //this.toggleSeen()  //调用组件中的方法
    }
    //定义方法
    toggleSeen(){
      //console.log(1111)
        //方法中的this默认指向初始化的组件，但是在点击事件中this等于undefined
//      console.log(this)
        //改变状态
        //改变状态的唯一方法就是使用this.setState()
        
        //1.参数是函数
        /*
        this.setState((preState)=>{
        	//preState没有改变之前的状态
//      	console.log(preState)
        	//函数需要返回一个新的状态对象
        	//如果原状态的 没有改变，则不会改变
        	return {
        		seen:!preState.seen
        	}
        })
        */
        //2.参数是对象
        //简写
        //设置状态是异步，react不只改变了数据，还更新的模板
        this.setState({
        	seen:!this.state.seen
        })
        
        console.log(this.state.seen)
    }
    add(value){
    	//this指向组件
    	//箭头函数可以改变this指向
    	return ()=>{
    		this.setState({
    			score:this.state.score + value
    		})
    	}
    }
    //模板挂载完成，函数自动执行   类似于vue里面的mount
    componentDidMount(){
        var update = function () {
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds()
            this.setState({
                hour : hour < 10 ? "0" + hour : hour,
                minute :minute < 10 ? "0" + minute : minute,
                second : second < 10 ? "0" + second : second
            })
        }.bind(this)
        update()
        setInterval(update,1000)
    }
  render() {
    // var a = 1;
    //返回的上面也是js语法
    //返回的模板是jsx语法  支持js{}
    return (
      <div className="App">
        {/*这是jsx语法中的注释*/}
        {/*console.log(a)*/}
        <h1>react基础知识</h1>
        <h2>1.输出数据</h2>
        <p>{this.state.message}</p>
        <p>{[1,2]}</p>
        <p>{3} + {5} = {3+5}</p>
        <p>{[<span key="1">1</span>,<span key="2">2</span>]}</p>
        {/*注意：boolean值在react中不显示*/}
        <p>{true}</p>
        <h2>2.条件语句</h2>
        <div>
            {/*可以通过 && 来实现条件语句  true就显示  false就不显示*/}
            {
                true&&<div>1111</div>  //前面是true 不再进行判断   直接输出后面的 (null和undefined不输出)
            }
            {
                false&&<div>222</div> //前面是false，不再输出
            }
            {
                this.state.seen && <div>能看到我吗？</div>
            }
            {/*可以通过三元表达式来实现 if else效果*/}
            {
                this.state.seen ? <div>能看见，哎，一点都不气！</div> : <div>看不到，哎，气不气？</div>
            }
        </div>
        <h2>3.列表渲染</h2>
        <ol>
            {[<li key="1">秦兴华</li>,<li key="2">皮皮虾</li>,<li key="3">象拔蚌</li>]}
            {/*我们可以通过数组的map方法来渲染列表
                注意:在数组中必须加key,并且key唯一,加key的目的是 不能优化，当内容不发生变化时，不重新渲染
            */}
            {
              this.state.students.map((student,ind,arr)=>{
                return <li key={ind}>{student}</li>
              })
            }
        </ol>
        <h2>4.绑定事件，用的是原生的js</h2>
        <div>
          {/*注意:onClick = 的必须是函数*/}
          {/*<button onClick={()=>{this.setState({seen:!this.state.seen})}}>切换seen值</button>*/}
          <button onClick={this.toggleSeen}>切换seen值</button>
          <button onClick={this.add(1)}>加1分</button>
          <button onClick={this.add(2)}>加2分</button>
          <button onClick={this.add(3)}>加3分</button>
          {this.state.score}
        </div>
          <div>
              {this.state.hour}:{this.state.minute}:{this.state.second}
          </div>
      </div>
    );
  }
}

export default App;
