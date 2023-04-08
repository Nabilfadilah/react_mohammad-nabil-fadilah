import React from 'react'

function Content() {
    return (
        <div>
            <main>
            <div className="newsletter">
                <h2 className="join">Join Our Newsletter</h2>
                <form action="">
                <p className="text">
                    Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </p>
                <br />
                <input
                    className="input-text"
                    type="text"
                    style={{ width: 503, height: 31 }}
                    required=""
                />
                <input className="submit-button" type="submit" />
                <br />
                <br />
                </form>
            </div>
            </main>
        </div>
    )
}

export default Content