import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="items-footer__container">
          <div className="footer__items items-footer">
            <section className="items-footer__item">
              <h1 className="items-footer__title">про компанію</h1>
              <p className="items-footer__text">
                Компанія PORTEN – лідер на українському ринку годинників. На цей
                час ми об'єднуємо більше сорока магазинів у різних куточках
                України та інтернет-магазин, який став першим в нашому сегменті
                ринку. Торгова мережа PORTEN – офіційний дистриб'ютор більше 50
                найвідоміших годинникових марок, починаючи від японської CASIO,
                закінчуючи швейцарськими LONGINES, ZENITH, TAG HEUER. Однак
                компанія не обмежується лише годинниками – в інтернет-магазині
                та бутіках мережі ви знайдете прекрасні ювелірні вироби від
                таких іменитих брендів, як SWAROVSKI и CHRISTINA.
              </p>
            </section>
            <section className="items-footer__item">
              <h1 className="items-footer__title">Категорії</h1>
              <div className="items-footer__category-buttons">
                <button className="items-footer__category-button">
                  годинники
                </button>
                <button className="items-footer__category-button">
                  запонки
                </button>
                <button className="items-footer__category-button">
                  ремені
                </button>
                <button className="items-footer__category-button">
                  ювелірні вироби
                </button>
                <button className="items-footer__category-button">
                  на замовлення
                </button>
                <button className="items-footer__category-button">
                  браслети
                </button>
              </div>
            </section>
            <section className="items-footer__item">
              <h1 className="items-footer__title">розсилка</h1>
              <p className="items-footer__text">
                Компанія пропонує тільки оригінальну продукцію від найвідоміших
                світових брендів за найкращою ціною. Ми дбаємо про комфорт наших
                покупців і постійно розширюємо можливості сервісного
                обслуговування.
              </p>
              <div className="items-footer__form form-items-footer">
                <input
                  placeholder="Ваша пошта"
                  className="form-items-footer__input"
                ></input>
                <button className="form-items-footer__button">
                  ПІДПИСАТИСЯ
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="footer__column">
        <div className="footer__policy policy-footer">
          <div className="policy-footer__container">
            <div className="policy-foote__text">
              © 2022 PORTEN, Інтернет-магазин годинників
            </div>
            <a href="#" className="policy-footer__agreement">
              Угода користувача
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
