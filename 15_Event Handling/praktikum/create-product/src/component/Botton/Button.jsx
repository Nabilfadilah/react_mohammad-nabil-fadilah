export default function Button() {
    return (
        <>
            {/* button submit */}
            <div className="text-center mt-5">
                <button
                type="submit"
                className="btn btn-primary submit"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="submitbutton"
                >
                Submit
                </button>
            </div>
        </>

    )
}