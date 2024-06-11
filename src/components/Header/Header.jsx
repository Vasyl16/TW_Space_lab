import { useState } from 'react';

import './Header.scss';

import login from './img/login.svg';
import tel from './img/tel.svg';
import cart from './img/cart.svg';
import search from './img/search.svg';
import portenLogo from './img/portenLogo.svg';
import burgerMenu from './img/burgerMenu.svg';
import icon from './img/icon.png';

export const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  return (
    <header className="header">
      <div className="header__items">
        <div className="header__column header__container">
          <div className="header-information">
            <div className="header-information__row">
              <div className="header-information__item">
                <a href="tel:+1234567890">
                  <img src={tel} alt="telephone" />8 (812) 123-45-67
                </a>
              </div>
              <span></span>
              <div className="header-information__item">
                Працюємо 7 днів на тиждень
              </div>
              <span></span>

              <div className="header-information__item">9:00 — 18:00</div>
            </div>
            <div className="header-information__row">
              <div className="header-information__login">
                <a href="#">
                  <img src={login} alt="login" />
                  Вхід / Реєстрація
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header__column ">
          <div className="header-main">
            <div className="header-main__items header__container">
              <div className="header-main__logo">
                <a href="#">
                  <img src={portenLogo} alt="logo" />
                </a>
              </div>
              <nav className="header-main__navigation header-navigation">
                <ul className="header-navigation__list">
                  <li className="header-navigation__item header-navigation__item_active">
                    <a href="#">сподобалось</a>
                  </li>
                  <li className="header-navigation__item">
                    <a href="#">Особистий кабінет </a>
                  </li>
                  <li className="header-navigation__item">
                    <a href="#">налаштування </a>
                  </li>
                </ul>
              </nav>
              <div className="header-main__actions header-actions">
                <div className="header-actions__cart">
                  <img src={cart} alt="cart " />
                </div>
                <div className="header-actions__search">
                  <img src={search} alt="search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="header__burger-icon header-icon"
          onClick={() => setBurgerIsActive(!burgerIsActive)}
        >
          <img src={burgerIsActive ? icon : burgerMenu} />
        </button>
        <div
          className={`header__burger-info burger-info ${
            burgerIsActive ? 'burger-info_active' : ''
          } `}
        >
          <div className="burger-info__items">
            <div className="burger-info__information header-information">
              <div className="header-information__item">
                <a href="tel:+1234567890">
                  <img src={tel} alt="telephone" />8 (812) 123-45-67
                </a>
              </div>
              <div className="header-information__item">
                Працюємо 7 днів на тиждень
              </div>

              <div className="header-information__item">9:00 — 18:00</div>
            </div>
            <div className="burger-info__column">
              <div className="burger-info__logo">
                <img src={portenLogo} alt="logo" />
              </div>
              <div className="burger-info__actions header-actions">
                <div className="header-actions__cart">
                  <img src={cart} alt="cart " />
                </div>
                <div className="header-actions__search">
                  <img src={search} alt="search" />
                </div>
              </div>
            </div>
            <nav className="burger-info__navigation header-navigation-burger">
              <ul className="header-navigation-burger__list">
                <li className="header-navigation-burger__item ">
                  <a href="#">сподобалось</a>
                </li>
                <li className="header-navigation-burger__item">
                  <a href="#">Особистий кабінет </a>
                </li>
                <li className="header-navigation-burger__item">
                  <a href="#">налаштування </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
