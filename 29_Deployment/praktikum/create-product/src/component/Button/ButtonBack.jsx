import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonBack() {
    const buttonNavigasi = useNavigate();
    return (
        <>
            <div className="text-center mt-5">
                <button
                type="submit"
                className="btn btn-danger submit mb-5" onClick={() => buttonNavigasi('/')}>Back
                </button>
            </div>
        </>
    )
}

export default ButtonBack