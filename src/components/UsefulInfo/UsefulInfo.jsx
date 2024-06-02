import img1 from './img/01.png';
import img2 from './img/02.png';
import img3 from './img/03.png';

import './UsefulInfo.scss';

export const UsefulInfo = () => {
  return (
    <section className="useful-info">
      <h1 className="useful-info__title">Статті та корисна інформація</h1>
      <div className="useful-info__column">
        <article className="useful-info__item item-useful-info">
          <div className="item-useful-info__photo">
            <img src={img1} />
          </div>
          <div className="item-useful-info__description">
            <h1 className="item-useful-info__title">ROGER DUBUIS. ЧАСТИНА 1</h1>
            <p className="item-useful-info__text">
              Цей чемпіон «гіперхорології» став синонімом надмірності й завдяки
              своїй радикальній скелетонізованій архітектурі неодноразово
              демонструє пристрасть до годинного вуайєризму. У цій серії з
              чотирьох статей описується нещодавня подорож на мануфактуру, де
              можна було спостерігати за виготовленням та оздобленням деталей, а
              також за збіркою та регулюванням годинників компанії.
            </p>
            <div className="item-useful-info__extra">
              <div className="item-useful-info__button">читати</div>
              <div className="item-useful-info__tags">
                <div className="item-useful-info__tag">#ЕКСКЛЮЗИВ</div>
                <div className="item-useful-info__tag">#ПРОБРЕНД</div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="useful-info__column">
        <article className="useful-info__item item-useful-info">
          <div className="item-useful-info__photo">
            <img src={img2} />
          </div>
          <div className="item-useful-info__description">
            <h1 className="item-useful-info__title">
              ІСТОРІЯ ЛЮКСОВИХ ГОДИННИКІВ. ЧАСТИНА 1
            </h1>
            <p className="item-useful-info__text">
              Історія люксових годинників зародилася дуже давно, вона веде
              відлік із часів перших годинників у світі. Тоді годинник був
              розкішшю, яку могла собі дозволити лише найвища еліта суспільства.
              Навіть не всім, хто має титул і великі гроші, могли виготовити цей
              розкішний аксесуар. Власне, з того часу мало що змінилося.
            </p>
            <div className="item-useful-info__extra">
              <div className="item-useful-info__button">читати</div>
              <div className="item-useful-info__tags">
                <div className="item-useful-info__tag">#ЕКСКЛЮЗИВ</div>
                <div className="item-useful-info__tag">#IСТОРIЯ</div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="useful-info__column">
        <article className="useful-info__item item-useful-info">
          <div className="item-useful-info__photo">
            <img src={img3} />
          </div>
          <div className="item-useful-info__description">
            <h1 className="item-useful-info__title">
              ВЕЛИКИЙ ТА СМІЛИВИЙ TISSOT PRS 516 CHRONOGRAPH
            </h1>
            <p className="item-useful-info__text">
              На початку цього року компанія Tissot оновила модель PRS 516
              Automatic Chronograph, але не пішла вінтажним шляхом. На противагу
              колекції Heritage із переконливими рімейками вінтажних моделей,
              PRS 516 – це сучасний хронограф із зухвалим настроєм, безліччю
              деталей автоспорту й за чудовою ціною.
            </p>
            <div className="item-useful-info__extra">
              <div className="item-useful-info__button">читати</div>
              <div className="item-useful-info__tags">
                <div className="item-useful-info__tag">#ХРОНОГРАФ</div>
                <div className="item-useful-info__tag"> #TISSOT</div>
                <div className="item-useful-info__tag"> #ОГЛЯДГОДИННИКIВ</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
