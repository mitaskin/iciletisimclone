import styles from "./MainBlock.module.css";
import Kart from "/components/PostCard";
import react, { useState } from "react";

export default function MainBlock() {

    let [posts, postFunc] = useState([]);

    function handleKeyPress(e) {
        console.log("handleKeyPress fonksiyonu çalıştı. ");
        if (e.keyCode == 13) {
            console.log("keycode enter geldi if içerisindeyiz");
            postFunc([{ name: e.target.value }, ...posts]);

        }

    }

    return (
        <>


            <div style={{ paddingTop: '10px', backgroundColor: 'black' }}>
                <div className="container-fluid">
                    <div className="row g-1">

                        {/* <!-- Main-Left --> */}
                        <div className="col-lg-3 p-2">


                            {/*  <!-- AVATAR --> */}
                            <div className="card text-white bg-dark mb-3" style={{ maxWidth: '120rem' }}>
                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-4  ">
                                            <img
                                                src="/img/robot-avatar.jpg"
                                                className="img-fluid rounded-circle"
                                                width="80rem"
                                            />
                                        </div>
                                        <div className="col-8 text-start">
                                            <p className="card-text align-tex-start fw-bolder fs-4">Günaydın,</p>
                                            <p className="card-text">M.ikbal TAŞKIN</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- AVATAR --> */}

                            {/*  <!-- MODUL --> */}
                            <div className="card text-white bg-dark mb-3" style={{ maxWidth: '120rem' }}>
                                <div className="card-header text-center fw-bolder fs-5">
                                    Modüller
                                </div>
                                <div className="card-body">
                                    <div className="btn-group-vertical">
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/Survey1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Paylaşım Duvarı</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/News1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Haberler</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/Activities1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Etkinlikler</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/PhotoGallery1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Foto Galeri</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/VideoGallery1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Video Galeri</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/Question1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Soru Sor</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/education1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Eğitimler</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/camping1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Kampanyalar</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/Health1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Sağlık Uygulamaları</span>
                                        </button>
                                        <button type="button" className="btn text-start text-white">
                                            <img src="/img/Survey1.png" width="40px" style={{ borderRadius: '10px' }} />
                                            <span className="ms-2">Anketler</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- MODUL --> */}



                        </div>
                        {/* <!-- Main-Left --> */}



                        {/*  <!-- Main-Mid --> */}
                        <div className="col-md p-2">
                            <div className="d-flex"></div>
                            {/* <!-- STORY --> */}
                            <div className=" text-white">
                                <div className="row p-3">
                                    <div className="col-sm p-1">
                                        <div className="position-relative">
                                            <div className="position-relative"
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-1.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small  ms-2">
                                                Koboto
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm p-1">
                                        <div className="position-relative">
                                            <div className="position-relative"
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-2.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small ms-3">
                                                Wall-E
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm p-1">
                                        <div className="position-relative">
                                            <div className="position-relative "
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-3.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small  ms-2">
                                                MonoKel
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm p-1 ">
                                        <div className="position-relative">
                                            <div className="position-relative "
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-4.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small  ms-1">
                                                Seytanus
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm p-1 ">
                                        <div className="position-relative">
                                            <div className="position-relative "
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-5.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small  ms-2">
                                                Muroto
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm p-1">
                                        <div className="position-relative">
                                            <div className="position-relative "
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-6.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small ms-3">
                                                Lizzer
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm p-1 ">
                                        <div className="position-relative">
                                            <div className="position-relative"
                                                style={{ width: '70px', height: '70px', borderRadius: '50%', border: '2px solid red', padding: '2px' }}>
                                                <img src="/img/avatar-robot-7.jpg" alt=" " className="img-fluid rounded-circle" />
                                            </div>
                                            <div className="text-small  ms-2">
                                                Antepli
                                            </div>
                                        </div>
                                    </div>



                                </div>


                            </div>
                            {/* <!-- STORY --> */}


                            {/* <!-- Share --> */}
                            <div className="card text-white bg-dark mb-3" style={{ maxWidth: '80rem' }}>

                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-2 d-flex justify-content-center ">
                                            <img src="/img/robot-avatar.jpg" className=""
                                                style={{ borderRadius: '50%', position: 'absolute', top: '8px', width: '60px' }} />
                                        </div>
                                        <div className=" col-10 searchbar">
                                            <input type="search" className="form-control rounded"
                                                placeholder="Aklından Geçen Birşey Yaz." aria-label="Search"
                                                aria-describedby="search-addon" onKeyDown={handleKeyPress} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Share --> */}

                            {
                                posts.map((post) => (


                                    <div key={post.name} className="card text-white bg-dark mb-3">

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

                                            <p className="card-text">{post.name}</p>
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




                                )
                                )
                            }


                            <Kart />


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
                                    <h5 className="card-title">Milli Gölete Düşen Robot Kismi Deformasyona Uğradı</h5>
                                    <p className="card-text">ghfhdfghdfgdfhdfg</p>

                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>

                                <img src="/img/robotphoto.jpg" className="card-img" alt="..." />

                                <div className="card-body">
                                    <div className="card-text">
                                        <img src="/img/heart 1 (1).png" alt="" style={{ width: '25px' }} className="ms-2" />
                                        <img src="/img/chat (1) 2.png" alt="" style={{ width: '25px' }} className="ms-2" />
                                        <img src="/img/Group 229.png" alt="" style={{ width: '25px' }} className="" />
                                    </div>
                                    <div className="card-text fw-bolder fs-5 text-muted">125 Beğenme</div>
                                    <div className="card-text"> <span className="fw-bolder">Jüpiter Muhtarı</span> Dostum o lanetli
                                        sokakta dolaşmaman lazım.</div>

                                    <div className="card-text"> <span className="fw-bolder">Google Robotu</span> Adamım GPS
                                        verilerini benden gizlemenin sonu budur. Verilerinizi paylaşın ki sizlere hizmet
                                        edeyim. <span className="text-muted">Devamı...</span></div>

                                    <div className="card-text"> <span className="fw-bolder">Diyanet</span> Bu dünya zor dünya, sen
                                        sen ol takvayı elden bırakma. </div>

                                    <div className="card-text text-muted"> 15 Yorumun Tümünü Gör</div>
                                </div>


                            </div>






                            {/* <!-- POST --> */}

                            {/* <!-- POST-2 --> */}
                            <div className="card text-white bg-dark mb-3">

                                <div className="card-header">
                                    {/* <!-- AVATAR --> */}

                                    <div className="row">
                                        <div className="col-2 d-flex justify-content-center">
                                            <img src="/img/robot-avatar.jpg"
                                                style={{ borderRadius: '50%', position: 'absolute', top: '8px', width: '3rem' }} />
                                        </div>
                                        <div className="col text-start">
                                            <p className="card-text fw-bolder fs-5" style={{ margin: '0px' }}>M.ikbal TAŞKIN</p>
                                            <p className="card-text text-muted">01.01.2099</p>
                                        </div>
                                    </div>

                                    {/* <!-- AVATAR --> */}

                                </div>


                                <div className="card-body">
                                    <h5 className="card-title">Dünyadan Barış Temalı Görseller</h5>
                                    <p className="card-text">Enerji arayışlarını insanlık için durduran siyonistler. Dünyada
                                        barış ilan etmeye hazırlanıyor. aynı zamanda plütona yerleşmeyi düşmeleride
                                        kafalarda uzayıda mı yiyeceniz sorularını akıllara getirdi.</p>

                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>

                                <img src="/img/robotasker.jpg" className="card-img" alt="..." />


                                <div className="card-body">
                                    <div className="card-text">
                                        <img src="/img/heart 1 (1).png" alt="" style={{ width: '30px' }} className="ms-2" />
                                        <img src="/img/chat (1) 2.png" alt="" style={{ width: '30px' }} className="ms-2" />

                                    </div>
                                    <div className="card-text fw-bolder fs-5 text-muted">125 Beğenme</div>
                                    <div className="card-text"> <span className="fw-bolder">Uzay Araştırmacısı</span> bunların iflah
                                        olacağı yok. </div>

                                    <div className="card-text"> <span className="fw-bolder">Madenler Birliği Başkanı</span> uzay
                                        herkesin ortak kullanımı olan bir mekan. Böyle bir girişime katiyen izin verilmemesi
                                        lazım. <span className="text-muted">Devamı...</span></div>

                                    <div className="card-text"> <span className="fw-bolder">Mikro İşletmeci</span> HER TÜRLÜ
                                        İYONLAŞTIRICI MADEN ARAMA EKİPMANI MEVCUTTUR. SON 10 ÜRÜN . ACELE EDİNN... !!!!!!
                                    </div>

                                    <div className="card-text text-muted"> 15 Yorumun Tümünü Gör</div>
                                </div>


                            </div>
                            {/* <!-- POST-2 --> */})

                        </div>
                        {/*  <!-- Main-Mid --> */}



                        {/* <!-- Main-Right --> */}
                        < div className="col-xxl-3 p-2" >

                            {/* <!-- Gallery --> */}
                            < div className="card text-white bg-dark mb-3" style={{ maxWidth: '180rem' }}>
                                <div className="card-header text-center fw-bolder fs-5">Foto Galeri</div>

                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                                className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                                className="w-100 shadow-1-strong rounded mb-4"
                                                alt="Wintry Mountain Landscape" />
                                        </div>

                                        <div className="col-lg-4 mb-4 mb-lg-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                                className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                                className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                                        </div>

                                        <div className="col-lg-4 mb-4 mb-lg-0">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                                className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                                className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Gallery --> */}

                            {/* <!-- NEWS --> */}
                            <div className="card text-white bg-dark mb-3">
                                <div className="card-header text-center fw-bolder fs-5">Haberler</div>
                                <div className="card-body">
                                    <img src="/img/robotkargo.jpg" className="card-img-top" alt="..." />

                                    <h5 className="card-title">CovidSÜRAT OtonomKargolara Bulaştı</h5>
                                    <p className="card-text"> Sebebinin kimsenin bilmediği aniden gelişen sıcak gelişme ile
                                        CovidSÜRAT otonom işine girmeye karar verdi.

                                    </p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                    </p>

                                </div>
                            </div>
                            {/*  <!-- NEWS --> */}

                        </div>

                        {/*  <!-- Main-Right --> */}


                    </div>
                </div>
            </div>

        </>
    );
}
