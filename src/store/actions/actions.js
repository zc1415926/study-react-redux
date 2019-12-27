export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//添加action creator functions
export const increment = () => {
    return{
        type: INCREMENT
    };
};

export const decrement = () => {
    return{
        type: DECREMENT
    };
};

export const add = (value) => {
    return{
        type: ADD,
        val: value
    };
};

export const substract = (value) => {
    return{
        type: SUBSTRACT,
        val: value
    };
};
//把原来的同步的storeResult分解为异步的storeResult执行完操作后，调用同步的saveResult
//这里是同步函数
export const saveResult = (res) =>{
    return{
        type: STORE_RESULT,
        result: res
    };
}
//异步函数，完成异步操作后，调用同步函数
export const storeResult = (res) => {
    return dispatch=>{
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return{
        type: DELETE_RESULT,
        resultElId: resElId
    };
};