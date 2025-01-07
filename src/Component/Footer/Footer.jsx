import style from "./contact.module.scss";

export default function Footer() {
  return <>
      <div className={`${style.contact}`}>
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <h4>Clark, MO 65243</h4>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex justify-content-center">
                <span className={style.icon}>
                  <i className={`fa-brands fa-facebook-f`} />
                </span>
                <span className={style.icon}>
                  <i className={` fa-brands fa-twitter`} />
                </span>
                <span className={style.icon}>
                  <i className={` fa-brands fa-linkedin`} />
                </span>
                <span className={style.icon}>
                  <i className={` fa-solid fa-globe`} />
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-3 bg-dark text-white text-center">
        Copyright © Your Website 2021
      </footer>
    </>
  
}
