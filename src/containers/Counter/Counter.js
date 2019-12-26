import React, { Component } from 'react';
//引入react和redux的连接方法connect
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* 使用redux读取数据 */}
                <CounterOutput value={this.props.ctr} />
                {/* 调用函数，发送写数据命令 */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

//使用mapStateToProps方法，redux可以读取数据
//并把this.state.counter转换为this.props.ctr，供用户使用
const mapStateToProps=(state)=>{
    return {
        ctr: state.counter
    };
};
//在mapDispatchToProps中定义发送写数据的命令（action）的函数
//定义的函数放在this.props里，供用户调用
const mapDispatchToProps=(dispatch)=>{
    return {
        onIncrementCounter: ()=>dispatch({type: 'INCREMENT'})
    };
}
//使用connect连接React和Redux传入读数据和写数据的函数
export default connect(mapStateToProps, mapDispatchToProps)(Counter);