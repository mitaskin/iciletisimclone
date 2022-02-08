import react from "react";

const Kart = () => {
    return (
        <>

            {/* <!-- POST --> */}
            <div className="card text-white bg-dark mb-3">

                <div className="card-header">
                    {/* <!-- AVATAR --> */}

                    <div className="row">
                        <div className="col-2 d-flex justify-content-center">
                            <img src="/img/robot-avatar.jpg"
                                style={{ borderRadius: '50%', position: 'absolute', top: '8px', width: '60px' }} />
                        </div>
                        <div className="col text-start">
                            <p className="card-text fw-bolder fs-5" style={{ margin: '0px' }}>M.ikbal TAŞKIN</p>
                            <p className="card-text text-muted">01.01.2099</p>
                        </div>
                    </div>

                    {/* <!-- AVATAR --> */}

                </div>


                <div className="card-body">

                    <p className="card-text">Kart Deneme Modulü</p>
                </div>

                

                <div className="card-body">
                    <div className="card-text">
                        <img src="/img/heart 1 (1).png" alt="" style={{ width: '25px' }} className="ms-2" />
                        <img src="/img/chat (1) 2.png" alt="" style={{ width: '25px' }} className="ms-2" />
                       
                    </div>
                    <div className="card-text fw-bolder fs-5 text-muted">125 Beğenme</div>
                    <div className="card-text"> <span className="fw-bolder">Jüpiter Muhtarı</span> Dostum o lanetli
                        sokakta dolaşmaman lazım.</div>

                    <div className="card-text text-muted"> 15 Yorumun Tümünü Gör</div>
                </div>


            </div>
            {/* <!-- POST --> */}


        </>
    );
};

export default  Kart;