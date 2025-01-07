import style from "./home.module.scss";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div
        className={`${style.home} h-100 d-flex justify-content-center align-items-center`}
      >
        <div className="landing text-center">
          <img src={avatar} alt="avatar" width={250} />
          <h1 className="text-white fw-bold mt-5 text-uppercase">
            Start Framework
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </h1>
          <p className="mt-5 text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
