import React from 'react';
import {
  boxInner,
  boxTitle,
  inverse,
  btn,
  btnInverse,
  btnRaw,
  btnMore,
  boxMore,
  col12,
  colSm6,
  colLg4,
  box,
} from 'assets/_importme.module.scss';

interface IProps {
  title: string;
  mainUrl?: string;
  subText: string;
  subUrl?: string;
}

const Box: React.FC<IProps> = ({
  title = '',
  mainUrl = '#',
  subText = '',
  subUrl = '#',
}) => {
  return (
    <div className={`${col12} ${colSm6} ${colLg4} ${box}`}>
      <div className={boxInner}>
        <h3 className={boxTitle} style={{ height: 78 }}>
          <a href={mainUrl} className={inverse}>
            {title}
          </a>
        </h3>
        <a
          href={subUrl}
          className={` ${btn} ${btnRaw} ${btnMore} ${btnInverse} ${boxMore} `}
          style={{ fontSize: 14 }}
        >
          {subText}
        </a>
      </div>
    </div>
  );
};

export default Box;
