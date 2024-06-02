import './MainBlock.scss';

import logo from '../Header/img/portenLogo.svg';

export const MainBlock = () => {
  return (
    <main className="main">
      <div className="main__items">
        <div className="main__item">
          <div className="main__logo">
            <img src={logo} />
          </div>
          <h1 className="main__title">івано-франківськ</h1>
        </div>
        <p className="main__text">
          В магазинах Торговельній мережі Porten ви можете купити годинник у
          Бахмуті, Вінниці, Дніпрі, Житомирі, Запоріжжі, Івано-Франківську,
          Києві, Краматорську, Луцьку, Львові, Одесі, Покровську, Полтаві,
          Рівному, Слов'янську, Сумах, Тернополі, Харкові, Херсоні,
          Хмельницькому, Черкасах, Чернівцях, Чернігові , а також багатьох інших
          містах України
        </p>
      </div>
    </main>
  );
};
