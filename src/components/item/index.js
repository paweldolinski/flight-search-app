import React, { useState } from 'react';
import Btn from '../../assets/img/button.svg';
import Clock from '../../assets/img/clock.svg';

const Item = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openItem = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="item">
      <div className="item__wrapper">
        <p className="item__date">Outbound: 10/10/2020</p>
        <div className="item__flight-wrapper">
          <div className="item__col-left item__col">
            <p className="item__company">Wizz Air W62284</p>
            <p className="item__status">Delayed (+03h 40min) </p>
          </div>
          <div className="item__col-middle item__col">
            <div className="item__departure">
              <span className="item__time bold">10:06</span>
              <span className="item__airport-code">CRL</span>
            </div>
            <div className="item__flight-duration-wrapper">
              <p className="item__flight-duration">2h 10</p>
              <div className="item__flight-duration-bar-wrapper">
                <div className="item__flight-bar"></div>
                <span className="item__flight-icon">&#9992;</span>
              </div>
            </div>
            <div className="item__arrive">
              <span className="item__time bold">10:06</span>
              <span className="item__airport-code">CRL</span>
            </div>
          </div>
          <div className="item__col-right item__col">
            <img src={Btn} alt="btn" className={isOpen ? "item__btn" : "item__btn item__btn--down"} onClick={openItem} />
          </div>
        </div>
        <div className={isOpen ? "item__item-more item__item-more--open" : "item__item-more"}>
          <div className="item__item-more-wrapper">
            <div className="item__item-more-row">
              <p className="item__item-more-flight-nr">Wizz Air W62284</p>
              <p className="item__item-more-flight-status">Status: Delayed </p>
            </div>
            <div className="item__item-more-row item__item-more-row-middle">
              <div className="item__item-more-left">
                <div className="item__item-more-bar"></div>
              </div>
              <div className="item__item-more-right">
                <div className="item__item-more-row">
                  <span className="item__item-more-time">10:06</span>
                  <span className="item__item-more-airport-code">CTV</span>
                  <span className="item__item-more-airport">London-Luton |</span>
                  <span>Terminal: North</span>
                </div>
                <div className="item__item-more-row">
                  <div className="item__item-more-time-icon-wrapper">
                    <img className="item__item-more-clock" src={Clock} alt="clock" />
                    <span className="item__item-more-duration">2h 10</span>
                  </div>
                </div>
                <div className="item__item-more-row">
                  <span className="item__item-more-time">10:06</span>
                  <span className="item__item-more-airport-code">SFX</span>
                  <span className="item__item-more-airport">Berlin-Schonefeld |</span>
                  <span className="item__item-more-terminal">Terminal: North |</span>
                  <span>Baggage belt: 18 </span>
                </div>
              </div>
            </div>
            <div className="item__item-more-row">
              <span>Arrives: 11/03/2020 | 12:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;