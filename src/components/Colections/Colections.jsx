import watch1 from './img/watch1.png';
import watch2 from './img/watch2.png';
import watch3 from './img/watch3.png';
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';

import './Colections.scss';

export const Colections = () => {
  return (
    <section className="collections">
      <div className="collections__items">
        <section className="collections__item item-collections">
          <h1 className="item-collections__title">СЕЗОН 2021/22</h1>
          <div className="item-collections__article article-item-collections">
            <div className="article-item-collections__items">
              <article className="article-item-collections__item">
                <div className="article-item-collections__photo">
                  <a href="#">
                    <img src={watch1} />
                  </a>
                </div>
                <h1 className="article-item-collections__title">
                  Louis XVI ATHOS
                </h1>
                <div className="article-item-collections__price">
                  13 600 грн.
                </div>
              </article>
              <article className="article-item-collections__item">
                <div className="article-item-collections__photo">
                  <a href="#">
                    <img src={watch2} />
                  </a>
                </div>
                <h1 className="article-item-collections__title">
                  Carl von Zeyten
                </h1>
                <div className="article-item-collections__price">
                  16 500 грн.
                </div>
              </article>
              <article className="article-item-collections__item">
                <div className="article-item-collections__photo">
                  <a href="#">
                    <img src={watch3} />
                  </a>
                </div>
                <h1 className="article-item-collections__title">JORD AR5905</h1>
                <div className="article-item-collections__price">
                  65 000 грн.
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="collections__item new-item-collections ">
          <h1 className="new-item-collections__title">Нова колекція</h1>
          <button className="new-item-collections__button">Каталог</button>
        </section>
        <section className="collections__item collections__item_2 photo-item-collections"></section>
        <section className="collections__item collections__item_2 other-item-collections">
          <h1 className="other-item-collections__title">колекція 2018</h1>
          <p className="other-item-collections__text">
            Годинники як інструмент визначення часу давно і надійно прижилися в
            людській реальності. Романтики та прагматики, художники та
            бізнесмени, чоловіки та жінки, дорослі та діти - всі хочуть знати
            котра година в потрібний момент. Скільки хвилин пройшло, скільки
            залишилося, а ще - які саме моделі і якого бренду виблискують на
            руці у друга, коханої або конкурента. З давніх часів, коли людина
            здогадався втикнути в землю паличку та іншою поличкою взявся
            відміряти рівні проміжки часу на піску, не вщухають суперечки - яким
            повинний бути годинник? Наручним, або настільним, або настінним,
            або, нарешті, підлоговим? Чому ж кожен діамантик на безеле або
            шестерінка в механізмі незмінно змушують гордовито випнутися нижню
            губу володаря аксесуара, а щоки - роздутися?
          </p>
          <button className="other-item-collections__button">
            переглянути колекцію
          </button>
        </section>
      </div>
    </section>
  );
};
