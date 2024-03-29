import axios from 'axios';

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";

export const getListKontak = () => {

    console.log("2. Masuk action");

    return(dispatch) => {

        // loading 
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false, 
                errorMessage: false
            }
        })

        // get API 
        axios({
            method: "GET", 
            url: 'http://localhost:3000/Kontak',
            timeout: 120000
        })

            .then((response) => {

                console.log("3. Berhasil dapet Data : ", response);

                // berhasil get API
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data, 
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {

                console.log("3. Gagal dapet Data : ", error);

                // gagal get API
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false, 
                        errorMessage: error.message
                    }
                })
            })

    }
}

// add kontak
// export const addKontak = (data) => {
//     return(dispatch) => {

//         // loading 
//         dispatch({
//             type: ADD_KONTAK,
//             payload: {
//                 loading: true,
//                 data: false, 
//                 errorMessage: false
//             }
//         })

//         // get API 
//         axios({
//             method: "POST", 
//             url: 'http://localhost:3000/Kontaks',
//             timeout: 120000,
//             data: data
//         })

//             .then((response) => {

//                 // berhasil get API
//                 dispatch({
//                     type: ADD_KONTAK,
//                     payload: {
//                         loading: false,
//                         data: response.data, 
//                         errorMessage: false
//                     }
//                 })
//             })
//             .catch((error) => {

//                 console.log("3. Gagal dapet Data : ", error);

//                 // gagal get API
//                 dispatch({
//                     type: ADD_KONTAK,
//                     payload: {
//                         loading: false,
//                         data: false, 
//                         errorMessage: error.message
//                     }
//                 })
//             })

//     }
// }