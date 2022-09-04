import * as React from 'react';

import { LinkInfo } from '../../../types';

import './Table.scss';

interface TableProps {
  statisticsData: Array<LinkInfo>
}

const Table = ({statisticsData}: TableProps):JSX.Element => {
  return (
    <div className="table">
      <div className="table__headers">
        <div className="table__short"> Короткая ссылка </div>
        <div className="table__target"> Исходная ссылка </div>
        <div className="table__counter"> Кол-во переходов </div>
      </div>

      {statisticsData.map((link, i) => {
        return <div key={i} className="table__row">
            <div className="table__short">{link.short}</div>
            <div className="table__target">{link.target}</div>
            <div className="table__counter">{link.counter}</div>
          </div>
      })}
    </div>
  );
};

export default Table;