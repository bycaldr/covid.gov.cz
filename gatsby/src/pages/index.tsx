import React, { useEffect } from 'react';
import Box from '@/components/box/box';
import {
  boxes,
  boxesLight,
  col12,
  colLg3,
  colLg9,
  guide,
  guideHp,
  guideTitle,
  mt0,
  mx3,
  my1,
  pvsTheme,
  row,
  bodyWrapperIn,
} from 'assets/main.module.scss';
import clsx from '@/helpers/combine-classes';

const Home: React.FC = () => {
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.className = `${html.className} ${pvsTheme}`;

    const body = document.getElementsByTagName('body')[0];
    body.className = `${body.className} ${bodyWrapperIn}`;
  }, []);

  return (
    <div className={pvsTheme}>
      <div className={clsx(mx3, my1)}>
        <div className={clsx(guide, guideHp, mt0)}>
          <div className={row}>
            <div className={clsx(col12, colLg3)}>
              <h2 className={guideTitle}>
                <strong>Průvodce</strong> životními situacemi
              </h2>
            </div>
            <div className={clsx(col12, colLg9)}>
              <div className={clsx(row, boxesLight, boxes)}>
                <Box title='Odchod do starobního důchodu' subText='Rodina' />
                <Box title='Já jsem title' subText='Já jsem subtext' />
                <Box title='Já jsem title' subText='Já jsem subtext' />
                <Box title='Já jsem title' subText='Já jsem subtext' />
                <Box title='Já jsem title' subText='Já jsem subtext' />
                <Box title='Já jsem title' subText='Já jsem subtext' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
