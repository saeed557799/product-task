import React, { useEffect } from 'react';
import Charts from 'react-apexcharts';
import { dataSeries } from './DateSeries';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardGraphRequest } from '../../../../redux/reducers/duck/dashboardDuck';

export default function Chart({ percentage }) {
  const graphData = [0, 1100, 5500, 7700, 2200, 1000, 4400, 5500, 6600, 5500];

  const dispatch = useDispatch();
  const { topicID, dashboardGraphData } = useSelector(({ dashboard }) => ({
    topicID: dashboard?.topicID,
    dashboardGraphData: dashboard?.dashboardGraphData,
  }));
  console.log('dashboardGraphData', dashboardGraphData);

  useEffect(() => {
    dispatch(dashboardGraphRequest(topicID));
  }, [dispatch, topicID]);

  var ts2 = 1484418600000;
  var dates = [];
  for (var i = 0; i < graphData?.length - 1; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, graphData[i]];
    dates.push(innerArr);
  }
  const state = {
    series: [
      {
        name: 'POINT',
        data: dates,
      },
    ],
    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      dataLabels: {
        enabled: false,
      },
      // colors: ["#1D57EE"],
      markers: {
        size: 0,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: 'rgba(29, 87, 238, 0.20)', // Start color
            },
            {
              offset: 100,
              color: 'rgba(212, 29, 176, 0.20)', // Middle color
            },
          ],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            const formattedValue = (val / 1000000).toFixed(0);
            return `POINT ${formattedValue}`;
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
      // tooltip: {
      //   shared: false,
      //   y: {
      //     formatter: function (val) {
      //       return (val / 1000000).toFixed(0);
      //     },
      //   },
      // },
    },
  };
  return (
    <React.Fragment>
      <div id='chart'>
        <div className='heading'>
          <h3 className='mt-2'>Subjects</h3>
        </div>
        <div className='card'>
          <Charts
            options={state.options}
            series={state.series}
            type='area'
            height={350}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
