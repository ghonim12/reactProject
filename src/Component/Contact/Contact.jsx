import style from "./Contact.module.scss";

export default function Contact() {
  return <>
      <h1 className={`${style.title} text-center text-uppercase fw-bold my-5`}>
        Contact Component
        <span>
          <i className="fa-solid fa-star"></i>
        </span>
      </h1>

      <div className="container-fluid">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <div className="form-floating mb-3 mt-5">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">UserName</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">UserAge</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">UserEmail</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">UserPasword</label>
          </div>
          <button className="border-0 text-white px-3 py-2 rounded-2">send Message</button>
        </div>
      </div>
      </div>
    </>
}
