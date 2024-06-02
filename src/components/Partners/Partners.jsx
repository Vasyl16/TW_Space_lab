import partner1 from './img/partner1.png';
import partner2 from './img/partner2.png';
import partner3 from './img/partner3.png';
import partner4 from './img/partner4.png';

import './Partners.scss';

export const Partners = () => {
  return (
    <section className="partners">
      <h1 className="partners__title">Наші партнери</h1>
      <div className="partners__items">
        <div className="partners__item">
          <img src={partner1} />
        </div>
        <div className="partners__item">
          <img src={partner2} />
        </div>
        <div className="partners__item">
          <img src={partner3} />
        </div>
        <div className="partners__item">
          <img src={partner4} />
        </div>
      </div>
    </section>
  );
};
