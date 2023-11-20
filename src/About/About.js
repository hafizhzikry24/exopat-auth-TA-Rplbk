import React from "react";
import "./About.css";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiQuestionMarkCircle } from "react-icons/hi2";

import Navbar from "../Navbar/Navbar";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        
        <div className="about">
          <img src="https://avatars.githubusercontent.com/u/82595554?v=4" alt="profile" />
          <p>Adivia Khusnul Aisha</p>
          <div className="student">Mahasiswa</div>
          <div className="line"></div>
          <p className="prak">Exopet-List App</p>
          <div className="location">
            <p className="info">
              <HiOutlineLocationMarker
                className="icon"
                size="18px"
                color="#484d49"
              />
              Asal
            </p>
            <p>Semarang, Jawa Tengah</p>
          </div>
          <div className="location">
            <p className="info">
              <HiQuestionMarkCircle className="icon" size="18px" color="#484d49" />
              NIM
            </p>
            <p>21120120120019</p>
          </div>
          <div className="location">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              Email
            </p>
            <p>adiviakaa@gmail.com</p>
          </div>
        </div>
        <div className="about">
          <img src="https://avatars.githubusercontent.com/u/42670670?v=4" alt="profile" />
          <p>Faizal Lutfi Yoga Triadi</p>
          <div className="student">Mahasiswa</div>
          <div className="line"></div>
          <p className="prak">Exopet-List App</p>
          <div className="location">
            <p className="info">
              <HiOutlineLocationMarker
                className="icon"
                size="18px"
                color="#484d49"
              />
              Asal
            </p>
            <p>Semarang, Jawa Tengah</p>
          </div>
          <div className="location">
            <p className="info">
              <HiQuestionMarkCircle className="icon" size="18px" color="#484d49" />
              NIM
            </p>
            <p>21120120140158</p>
          </div>
          <div className="location">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              Email
            </p>
            <p>faizal2jz@gmail.com</p>
          </div>
        </div>
        <div className="about">
          <img src="https://avatars.githubusercontent.com/u/82644062?v=4" alt="profile" />
          <p>Muhammad Dhiva Paradigta</p>
          <div className="student">Mahasiswa</div>
          <div className="line"></div>
          <p className="prak">Exopet-List App</p>
          <div className="location">
            <p className="info">
              <HiOutlineLocationMarker
                className="icon"
                size="18px"
                color="#484d49"
              />
              Asal
            </p>
            <p>Jakarta Timur, DKI Jakarta</p>
          </div>
          <div className="location">
            <p className="info">
              <HiQuestionMarkCircle className="icon" size="18px" color="#484d49" />
              NIM
            </p>
            <p>21120120140054</p>
          </div>
          <div className="location">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              Email
            </p>
            <p>dhivapradigta96@gmail.com</p>
          </div>
        </div>
        <div className="about" >
          <img src="https://avatars.githubusercontent.com/u/81897441?v=4" alt="profile" />
          <p>Muhammad Hafizh Zikry</p>
          <div className="student">Mahasiswa</div>
          <div className="line"></div>
          <p className="prak">Exopet-List App</p>
          <div className="location">
            <p className="info">
              <HiOutlineLocationMarker
                className="icon"
                size="18px"
                color="#484d49"
              />
              Asal
            </p>
            <p>Muarabungo, Jambi</p>
          </div>
          <div className="location">
            <p className="info">
              <HiQuestionMarkCircle className="icon" size="18px" color="#484d49" />
              NIM
            </p>
            <p>21120120120034</p>
          </div>
          <div className="location">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              Email
            </p>
            <p>hafizhcool24@gmail.com</p>
          </div>
        </div>
        <Navbar/>
      </div>
    );
  }
}

export default About;
