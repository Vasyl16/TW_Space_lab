import watch1 from '../Colections/img/watch1.png';
import watch2 from '../Colections/img/watch2.png';
import watch3 from '../Colections/img/watch3.png';
import watch4 from './img/watch4.jpg';
import watch5 from './img/watch5.jpg';
import watch6 from './img/watch6.jpg';
import watch7 from './img/watch7.png';

import './NewStuff.scss';

export const NewStuff = () => {
  return (
    <section className="new-stuff">
      <div className="new-stuff__container">
        <h1 className="new-stuff__title">Нові надходження </h1>
        <div className="new-stuff__items">
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo">
              <img src={watch2} />
            </div>
            <h1 className="item-new-stuff__title">Carl von Zeyten</h1>
            <div className="item-new-stuff__price">16 500 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo">
              <img src={watch3} />
            </div>
            <h1 className="item-new-stuff__title">JORD AR5905</h1>
            <div className="item-new-stuff__price">65 000 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo">
              <img src={watch4} />
            </div>
            <h1 className="item-new-stuff__title">Emporio Armani Sportivo</h1>
            <div className="item-new-stuff__price">165 000 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo">
              <img src={watch5} />
            </div>
            <h1 className="item-new-stuff__title">Rolex Oyster Perpetual</h1>
            <div className="item-new-stuff__price">280 000 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo">
              <img src={watch1} />
            </div>
            <h1 className="item-new-stuff__title">Louis XVI ATHOS</h1>
            <div className="item-new-stuff__price">65 000 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo">
              <img src={watch6} />
            </div>
            <h1 className="item-new-stuff__title">U-Boat Italo Fontana</h1>
            <div className="item-new-stuff__price">18 700 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo item-new-stuff__photo_m">
              <img src={watch7} />
            </div>
            <h1 className="item-new-stuff__title">Gucci Men's G</h1>
            <div className="item-new-stuff__price">38 500 грн. </div>
          </article>
          <article className="new-stuff__item item-new-stuff">
            <div className="item-new-stuff__photo item-new-stuff__photo_mod">
              <img src={watch3} />
              <button className="item-new-stuff__button">ПОКАЗАТИ ВСІ</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
