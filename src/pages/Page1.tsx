import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import './Page.scss';


function Page1() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="page-language">
        <Button shape="round" onClick={() => i18n.changeLanguage('en')}>
          English
        </Button>
        <Button shape="round" onClick={() => i18n.changeLanguage('th')}>
          ไทย
        </Button>
      </div>
      <div className="page-container">
        <div  >
          <Button shape="round" size="large">
            <Link to="/page2">{t('Test1')}</Link>
          </Button>
          <Button shape="round" size="large">
            <Link to="/page2">{t('Test2')}</Link>
          </Button>
          <Button shape="round" size="large">
            <Link to="/page2">{t('Test3')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
