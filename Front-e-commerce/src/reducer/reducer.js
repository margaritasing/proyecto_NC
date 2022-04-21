export const inicialState = {
    productos: [],   
    user:null,
    

}

export const actionType={
    PRODUCTOS: "PRODUCTOS",    
    USER:"USER",
    
    
}

const reducer=(state, action)=>{
   
    switch(action.type){
        case "PRODUCTOS":         
        return{
            ...state,
            productos:action.productos, 
            
        }
       
        case "USER":
            return{
                ...state,
                user: action.user
            }
        
              


        default:return state
    }
    
}

export default reducer;