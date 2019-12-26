import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//引入redux中的createStore方法以生成一个核心数据存储器
//combineReducer可以合并多个reducer
import {createStore, combineReducers} from 'redux';
//引入react和redux连接用的包装器Provicer
import {Provider} from 'react-redux'; 
//引入我们自己建立的数据处理器(拆分后)
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

//把2个reducer合成一个，管counter的叫ctr，管result的叫res
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//生成核心数据存储器，注册数据处理器reducer（改成rootReducer）
const store = createStore(rootReducer)

//使用Provider将react和redux连接起来，指定store为核心数据存储器
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();