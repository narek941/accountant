import React, { useContext } from 'react';

import { LanguageDrop, ScrollView } from 'components/index';
import { I18nContext } from 'context/index';
import { navigationList, languageList, sectionsList } from 'utils/index';

import styles from './Header.scss';

import { i18n } from '../../../i18n';
import { LogoIcon, BurgerIcon } from '../../icons';

const HeaderContainer = () => {
  const t = useContext(I18nContext);
  const top = sectionsList[0].id;
  const handleFlags = (code) => {
    i18n.changeLanguage(code);
  };
  const renderNavigationLinks = navigationList.map(({ id, name, link }) => (
    <ScrollView key={id} link={link} className={styles.nav__item}>
      {t(name)}
    </ScrollView>
  ));

  return (
    <header className={styles.container}>
      <div className={`container ${styles.wrapper}`}>
        <ScrollView link={top} className={styles.logo_link}>
          <LogoIcon />
        </ScrollView>

        <nav className={styles.nav}>
          {renderNavigationLinks}
          <BurgerIcon className={styles.burger} />
          <LanguageDrop data={languageList} handleFlags={handleFlags} />
        </nav>
      </div>
    </header>
  );
};

export default HeaderContainer;
