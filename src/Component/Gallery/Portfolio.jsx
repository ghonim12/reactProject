import style from "./Portfolio.module.scss";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";

export default function Portfolio() {
  return <>
      <div>
        <h1
          className={`${style.title} text-center text-uppercase fw-bold mt-4`}
        >
          Portfolio Component
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </h1>

        <div className="container">
          <div className="row mt-5 g-4">
            <div className="col-md-6 col-lg-4">
              <div className={style.inner}>
                <img src={one} alt="one" className="w-100" />
                <div
                  className={`${style.layer}`}
                  data-bs-toggle="modal"
                  data-bs-target="#img-1"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={style.inner}>
                <img src={two} alt="one" className="w-100" />
                <div
                  className={`${style.layer}`}
                  data-bs-toggle="modal"
                  data-bs-target="#img-2"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={style.inner}>
                <img src={three} alt="one" className="w-100" />
                <div
                  className={`${style.layer}`}
                  data-bs-toggle="modal"
                  data-bs-target="#img-3"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={style.inner}>
                <img src={one} alt="one" className="w-100" />
                <div
                  className={`${style.layer}`}
                  data-bs-toggle="modal"
                  data-bs-target="#img-1"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={style.inner}>
                <img src={two} alt="one" className="w-100" />
                <div
                  className={`${style.layer}`}
                  data-bs-toggle="modal"
                  data-bs-target="#img-2"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={style.inner}>
                <img src={three} alt="one" className="w-100" />
                <div
                  className={`${style.layer}`}
                  data-bs-toggle="modal"
                  data-bs-target="#img-3"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="img-1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-body p-0">
              <img src={one} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="img-2"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-body p-0">
              <img src={two} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="img-3"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-body p-0">
              <img src={three} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
}
