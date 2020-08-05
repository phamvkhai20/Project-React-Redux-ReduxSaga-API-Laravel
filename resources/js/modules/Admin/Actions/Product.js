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
export  const setIsAdd =()=>{
    return {
        type: 'UPDATE_IS_ADD_PRODUCT'
    }
}
export  const setImageAlbum =(image)=>{
    return {
        type: 'SET_IMAGE_ALBUM',
        payload:image,
    }
}