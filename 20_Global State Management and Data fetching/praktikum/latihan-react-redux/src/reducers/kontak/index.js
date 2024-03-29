import { GET_LIST_KONTAK, ADD_KONTAK } from "../../actions/kontakAction";

const initialState = {
    getListKontakResult : false,
    getListKontakLoading : false,
    getListKontakError : false,

//     getListKontakResult : false,
//     getListKontakLoading : false,
//     getListKontakError : false
}

const Kontak = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_KONTAK:
            console.log("4. Masuk Reducer", action);
            return {
                ...state,
                addListKontakResult: action.payload.data,
                addtListKontakLoading: action.payload.loading,
                addListKontakError: action.payload.errorMessage
            };

        // case ADD_KONTAK:
        //     console.log("4. Masuk Reducer", action);
        //     return {
        //         ...state,
        //         getListKontakResult: action.payload.data,
        //         getListKontakLoading: action.payload.loading,
        //         getListKontakError: action.payload.errorMessage
        //     };
        default: 
            return state;
    }
}

export default Kontak