import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { I18nContext } from 'context/index';

import styles from './Vacancies.scss';

const Slide = ({ Icon, title, textSteps }) => {
  const t = useContext(I18nContext);

  const renderTextSteps = textSteps.map(({ id, text }, index) => (
    <p className={styles.slider__item_text} key={id}>
      <span className={styles.slider__item_text_order}>{index + 1}.</span>
      {t(text)}
    </p>
  ));

  return (
    <div className={styles.slider__item}>
      <Icon />
      <p className={styles.slider__item_title}>{t(title)}</p>
      <div className={styles.slider__item_wrapper}>{renderTextSteps}</div>
    </div>
  );
};

Slide.propTypes = {
  id: PropTypes.string,
  Icon: PropTypes.any,
  title: PropTypes.string,
  textSteps: PropTypes.arrayOf(PropTypes.object),
};

Slide.defaultProps = {
  id: null,
  Icon: null,
  title: null,
  textSteps: null,
};

export default Slide;
