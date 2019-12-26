//初始数据
const initialState = {
    counter:0
}
//数据处理器
const reducer = (state=initialState, action)=>{
    //接受写数据命令，对action.type进行判断，以进行不同的操作
    if(action.type === 'INCREMENT'){
        //要返回一个object，原state只能读取
        return{
            counter: state.counter + 1
        }
    }
    //固定写法
    return state;
};
export default reducer;