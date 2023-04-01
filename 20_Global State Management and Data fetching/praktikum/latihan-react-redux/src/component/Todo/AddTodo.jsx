// import React from 'react'
// import { useState } from 'react'

// const AddTodo = () => {
//     const [text, setText] = useState("")

//     const dispatch = useDispatch() // hooks buat trigger

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         // manggil reducer lewat useDispatch
//         dispatch(AddTodo(text))
//         setText('') 
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//             <button type='submit'>Add Todo</button>
//         </form>
//     )
// }

// export default AddTodo