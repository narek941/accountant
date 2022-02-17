import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components/index';
import { useWindowSize } from 'hooks/index';

import styles from './News.scss';

const Slide = ({ id, img, title, text }) => {
  const { isMobile } = useWindowSize();
  const [isShow, setIsShow] = useState(false);
  const handleMore = () => {
    setIsShow(!isShow);
  };
  const loadCount = isShow || !isMobile ? text.length : 1;
  const buttonName = isShow ? 'Պակաս' : 'Ավելին...';
  const render = text
    .slice(0, loadCount)
    .map(({ subId, subTitle, subText }) => (
      <span key={subId}>
        <p>{subTitle}</p>
        {subText?.map((item) => (
          <p key={item.id}>🔹️{item.text}</p>
        ))}
      </span>
    ));

  return (
    <div key={id} className={styles.slider__item}>
      <div className={styles.slider__item_wrapper}>
        <p className={styles.slider__item_title}>
          <img className={styles.slider__item_img} src={img} alt="img" />
          {title}
        </p>
        <div className={styles.slider__item_text}>{render}</div>
        <Button className={styles.slider__item_showBtn} onClick={handleMore}>
          {buttonName}
        </Button>
      </div>
    </div>
  );
};
Slide.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
};
Slide.defaultProps = { id: null, img: null, title: null, text: [] };
export default Slide;
