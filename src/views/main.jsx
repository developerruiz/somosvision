import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faWhatsapp,
  faYoutube,

} from "@fortawesome/free-brands-svg-icons";
import img from "../sources/img";


const Main = () => {
  return (
    <>
      <main>
        <section className="portada position-relative">

          <div className="cover-container position-relative">
            <video src={img.videoBanner} className="video" autoPlay loop muted />
          </div>

          <h1 className="text-center fw-bold display-1 position-absolute top-50 start-50 translate-middle color-white">
            SOMOS <br /> VISIÓN MX
          </h1>

          <div className="position-absolute top-50 end-0 translate-middle-y">
            <h4 className="color-white">REDES</h4>
            <ul className="list-unstyled text-center socialRight">
              <li>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="fs-4 my-1 scaleIcon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fs-4 my-1 scaleIcon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fs-4 my-1 scaleIcon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="fs-4 my-1 scaleIcon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="fs-4 my-1 scaleIcon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="fs-4 my-1 scaleIcon"
                />
              </li>
            </ul>
          </div>

          <div className="onLive position-absolute top-50 start-0 translate-middle-y">
            <p>online/offline</p>

            <button className="btn btn-warning rounded rounded-pill d-flex">
              <h4 className="Fw-bold">en vivo</h4>
            </button>
          </div>


        </section>
        <section>
          <div className="marquee-w">
            <div className="marquee">
              <span className="display-1 fw-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum, veritatis.
              </span>
            </div>
          </div>
        </section>
       

        <section className="mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="stroke display-1 mb-5">ERES TÚ</h2>
                <p className="fs-3 px-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  neque, in aut doloribus, magni consectetur, explicabo possimus
                  odit nesciunt animi ad. Vel magnam ex aliquam. Qui iure
                </p>

                <p className="fs-3 px-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  neque, in aut doloribus, magni consectetur, explicabo possimus
                  odit nesciunt animi ad. Vel magnam ex aliquam. Qui iure
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-150">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="stroke display-1 mb-5">SOMOS TODOS</h2>
                <p className="fs-3 px-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  neque, in aut doloribus, magni consectetur, explicabo possimus
                  odit nesciunt animi ad. Vel magnam ex aliquam. Qui iure
                </p>

                <p className="fs-3 px-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  neque, in aut doloribus, magni consectetur, explicabo possimus
                  odit nesciunt animi ad. Vel magnam ex aliquam. Qui iure
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
         
        </section>
      </main>
    </>
  );
};

export default Main;
