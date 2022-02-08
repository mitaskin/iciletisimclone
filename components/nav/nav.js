import "bootstrap/dist/css/bootstrap.css";
import styles from "./Newnavigation.module.css";

export default function Newnavigation() {
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          style={{ borderBottom: "2px solid red" }}
        >
          <div className="container-fluid">
            {/* <!-- Navbar brand (left) --> */}
            <a className="navbar-brand" href="#">
              <img
                src="/img/logomobil.png"
                alt="Logo"
                width="40"
                className="d-inline-block align-tex-top"
              />
            </a>

            {/* <!-- Navbar brand (left)  --> */}

            {/* <!-- Mid-Button --> */}
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item c-nav-item active">
                  <a className="nav-link" href="#home">
                    <img
                      src="/img/house-black-silhouette-without-door 1.png"
                      alt=""
                      width="30"
                    />
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item c-nav-item">
                  <a className="nav-link" href="#friends">
                    <img src="/img/friends 1.png" alt="" width="30" />
                  </a>
                </li>
                <li className="nav-item c-nav-item">
                  <a className="nav-link" href="#galery">
                    <img src="/img/gallery 1.png" alt="" width="30" />
                  </a>
                </li>
                <li className="nav-item c-nav-item">
                  <a className="nav-link" href="#galery">
                    <img src="/img/chat 1.png" alt="" width="30" />
                  </a>
                </li>
                <li className="nav-item c-nav-item">
                  <a className="nav-link" href="#galery">
                    <img src="/img/notification 1.png" alt="" width="30" />
                  </a>
                </li>
                <li className="nav-item c-nav-item">
                  <a className="nav-link" href="#galery">
                    <img src="/img/settings 1.png" alt="" width="30" />
                  </a>
                </li>
                <li className="nav-item c-nav-item d-none d-xl-block">
                  <form className="searchbar">
                    <button>
                      <img src="/img/loupe 1.png" alt="" />
                    </button>
                    <input
                      type="search"
                      placeholder="Ara"
                      aria-label="Search"
                    />
                  </form>
                </li>
              </ul>
            </div>
            {/* <!-- Mid-Button --> */}

            {/* <!-- (Right) --> */}

            {/* <!-- (Right) --> */}

            {/* <!-- NavBar Minimize Script --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/*  <!-- NavBar Minimize Script --> */}
          </div>
        </nav>
      </header>
    </>
  );
}
