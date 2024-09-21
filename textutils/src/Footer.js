import React from 'react'

function Footer(props) {
    return (
        <>
            <div className="container-fluid  my-5  bottom-0 ">
                <footer className={`bg-${props.mode} text-center`}
                 style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                            
                >

                    <div className="container-fluid p-4 pb-0"
                     style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                     >

                        <section className="">
                            <form action="">

                                <div className="row d-flex justify-content-center">

                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>It will not work !... </strong>
                                        </p>
                                    </div>

                                    <div className="col-md-5 col-12">

                                        <div className="form-outline mb-4">
                                            <input
                                             style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                                                placeholder='xyz@gmail.com'
                                                type="email"
                                                id="form5Example2"
                                                className="form-control"
                                            />
                                            <label className="form-label" htmlFor="form5Example2">
                                                Email address
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto">

                                        <button type="submit" className="btn btn-primary mb-4">
                                            Subscribe
                                        </button>
                                    </div>

                                </div>

                            </form>
                        </section>

                    </div>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2024 Copyright: By- Code-Manoj00963  <b>"All Rights Reserved"</b>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer