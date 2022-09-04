import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStatistics, getStatisticsTotal } from '../../store/api-actions';
import { ActionCreator } from '../../store/action';
import { RootState } from '../../store/store';

import Table from './Table/Table';
import Pagination from './Pagination/Pagination';
import Sort from './Sort/Sort';
import './Statistics.scss';

const LINKS_MAX = 10;

const Statistics = ():JSX.Element => {
  const [sortType, setSortType] = useState('asc_short');
  const [currentPage, setCurrentPage] = useState(1);

  const statisticsData = useSelector((state: RootState) => state.data.statistics);
  const statisticsTotal = useSelector((state: RootState) => state.data.statisticsTotal);
  const statisticsError = useSelector((state: RootState) => state.data.statisticsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatisticsTotal({order: 'asc_short', offset: 0, limit: 999999}));
    dispatch(ActionCreator.addStatisticsError(null));
  }, []);

  useEffect(() => {
    dispatch(getStatistics({order: sortType, offset: (currentPage - 1) * LINKS_MAX, limit: LINKS_MAX}));
    dispatch(ActionCreator.addStatisticsError(null));
  }, [sortType, currentPage]);

  const pagesCount = Math.ceil(statisticsTotal / LINKS_MAX);

  return (
    <section className="statistics">
      <h1 className="statistics__title">Статистика</h1>

      {!statisticsData || !statisticsData.length
        ? statisticsError
          ? <p className="statistics__empty-message">Статистика пуста</p>
          : <p className="statistics__error-message">{statisticsError}</p>
        : <>

          <div className="statistics__sort">
            <Sort changeSortType={setSortType}/>
          </div>
        
          <div className="statistics__table">
            <Table statisticsData={statisticsData}/>
          </div>

          {statisticsTotal > LINKS_MAX
            ? <div className="statistics__pagination">
              <Pagination pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
            : null
          }
        </>
      }
    </section>
  );
};

export default Statistics;