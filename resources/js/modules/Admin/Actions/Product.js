export  const setProductUpdate =(data)=>{
    return {
        type: 'UPDATE_PRODUCT',
        payload:data,
    }
}
export  const setIsUpdate =()=>{
    return {
        type: 'UPDATE_IS_PRODUCT'
    }
}