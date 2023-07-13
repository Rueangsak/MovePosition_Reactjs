import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import './Page.scss';


function Page2() {
  const { t } = useTranslation();
  const [gridPosition, setGridPosition] = useState({ row: 1, col: 1 });

  const handleMoveLeft = () => {
    if (gridPosition.col > 1) {
      setGridPosition((prevPosition) => ({ ...prevPosition, col: prevPosition.col - 1 }));
    } else if (gridPosition.row === 1 && gridPosition.col === 1) {
      setGridPosition({ row: 2, col: 3 });
    } else if (gridPosition.row === 2 && gridPosition.col === 1) {
      setGridPosition({ row: 1, col: 3 });
    }
  };

  const handleMoveRight = () => {
    if (gridPosition.col < 3) {
      setGridPosition((prevPosition) => ({ ...prevPosition, col: prevPosition.col + 1 }));
    } else if (gridPosition.row === 1 && gridPosition.col === 3) {
      setGridPosition({ row: 2, col: 1 });
    } else if (gridPosition.row === 2 && gridPosition.col === 3) {
      setGridPosition({ row: 1, col: 1 });
    } else {
      setGridPosition({ row: 2, col: 1 });
    }
  };

  const handleMoveUp = () => {
    if (gridPosition.row > 1) {
      setGridPosition((prevPosition) => ({ ...prevPosition, row: prevPosition.row - 1 }));
    } else {
      setGridPosition((prevPosition) => ({ ...prevPosition, row: 2 }));
    }
  };

  const handleMoveDown = () => {
    if (gridPosition.row < 2) {
      setGridPosition((prevPosition) => ({ ...prevPosition, row: prevPosition.row + 1 }));
    } else {
      setGridPosition((prevPosition) => ({ ...prevPosition, row: 1 }));
    }
  };

  const handleRandomPosition = () => {
    setGridPosition({
      row: Math.floor(Math.random() * 2) + 1,
      col: Math.floor(Math.random() * 3) + 1,
    });
  };

  return (
    <div>
    <div className="page-language" >
        <Button shape="round" onClick={() => i18n.changeLanguage('en')}>
          English
        </Button>
        <Button shape="round" onClick={() => i18n.changeLanguage('th')}>
          ไทย
        </Button>
      </div>
    <div className="page-container-2">
      <div className="page-button">
        <Button  shape="round" icon={<CaretLeftOutlined />} onClick={handleMoveLeft}>
          {t('moveLeft')}
        </Button>
        <Button shape="round" icon={<CaretUpOutlined />} onClick={handleMoveUp}>
          {t('moveUp')}
        </Button>
        <Button shape="round" icon={<CaretDownOutlined />} onClick={handleMoveDown}>
          {t('moveDown')}
        </Button>
        <Button shape="round" icon={<CaretRightOutlined />} onClick={handleMoveRight}>
          {t('moveRight')}
        </Button>
      </div>

      <Row gutter={[16, 16]} className="page-grid">
        <Col span={8}>
          <div
            onClick={handleRandomPosition}
            className={`grid-item ${gridPosition.row === 1 && gridPosition.col === 1 ? 'grid-item-1' : ''}`}>
            1
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={handleRandomPosition}
            className={`grid-item ${gridPosition.row === 1 && gridPosition.col === 2 ? 'grid-item-1' : ''}`}>
            2
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={handleRandomPosition}
            className={`grid-item ${gridPosition.row === 1 && gridPosition.col === 3 ? 'grid-item-1' : ''}`}>
            3
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={handleRandomPosition}
            className={`grid-item ${gridPosition.row === 2 && gridPosition.col === 1 ? 'grid-item-1' : ''}`}>
            4
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={handleRandomPosition}
            className={`grid-item ${gridPosition.row === 2 && gridPosition.col === 2 ? 'grid-item-1' : ''}`}>
            5
          </div>
        </Col>
        <Col span={8}>
          <div
            onClick={handleRandomPosition}
            className={`grid-item ${gridPosition.row === 2 && gridPosition.col === 3 ? 'grid-item-1' : ''}`}>
            6
          </div>
        </Col>
      </Row>

    </div>
    </div>
  );
}

export default Page2;