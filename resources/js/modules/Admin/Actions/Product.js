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
export  const setIsAddCate =()=>{
    return {
        type: 'SET_ADD_CATE'
    }
}

export  const setIsEditCate =()=>{
    return {
        type: 'SET_EDIT_CATE'
    }
}

export  const resetIsEdit =()=>{
    return {
        type: 'RS_IS_EDIT'
    }
}

export  const resetIsAdd =()=>{
    return {
        type: 'RS_IS_ADD'
    }
}


