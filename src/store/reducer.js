import * as actionTypes from './actions';

//初始数据
const initialState = {
    counter:0,
    results: []
}
//数据处理器
const reducer = (state=initialState, action)=>{
    //接受写数据命令，对action.type进行判断，以进行不同的操作
    //使用switch可以更方便的进行多个值的判断
    switch (action.type){
        case actionTypes.INCREMENT:
            //要返回一个object，原state只能读取
            //使用了return就跳出了switch语句，不用break了
            return{
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return{
                ...state,
                //通过action载荷action.val进行计算
                counter: state.counter + action.val
            }
        case actionTypes.SUBSTRACT:
            return{
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return{
                //immutable:使用...state将state中的原有数据读出，与新的results合并
                ...state,
                //immutalbe:不能使用state.results.push()，因为push会改变原数组，
                //而concat()是连接后返回新数组
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            //在回调函数中将id不符合的项返回给updatedArray，符合的项漏掉，就做出了删除的效果
            const updatedArray = state.results.filter(results => results.id !== action.resultElId);
            return{
                ...state,
                results: updatedArray
            }
    }

    //固定写法
    return state;
};
export default reducer;