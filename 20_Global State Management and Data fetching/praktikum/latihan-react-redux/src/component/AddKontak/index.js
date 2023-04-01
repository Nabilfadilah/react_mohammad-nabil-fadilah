import React, { useState } from 'react'
import { useDispatch } from "react-redux"
// import { addKontak } from '../../actions/kontakAction';

function AddKontak() {

    // state 
    const [nama, setNama] = useState('');
    const [nohp,seNohp] = useState(''); 

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("1. Masuk handle submit")
        // dispatch(addKontak({nama: nama,nop:nop}))
    }

    return (
        <div>
            <h4>Add Kontak</h4>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input 
                    type="text"
                    name='nama'
                    value={nama}
                    placeholder="Nama....."
                    onChange={(event) => setNama(event.target.value)}
                />

                <input 
                    type="text"
                    name='nohp'
                    value={nohp}
                    placeholder="No Hp....."
                    onChange={(event) => seNohp(event.target.value)}
                />  

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddKontak