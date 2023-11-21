import React, { useEffect } from 'react';
import Charts from 'react-apexcharts';
import { dataSeries } from './DateSeries';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardGraphRequest } from '../../../../redux/reducers/duck/dashboardDuck';

export default function Chart({ percentage }) {
  // const graphData = [0, 1100, 5500, 7700, 2200, 1000, 4400, 5500, 6600, 5500];

  // const graphData = [
  //   {
  //     id: '59a33568-5884-46dc-98c8-3405d2335d3f',
  //     points: '1300',
  //   },
  //   {
  //     id: '2c67ad80-0be0-4e9d-ac25-e5ef7933b3d9',
  //     points: '1300',
  //   },
  //   {
  //     id: '95dcdac4-f0b9-4d83-863e-5aea7848d37b',
  //     points: '-1100',
  //   },
  //   {
  //     id: '6f4937b2-598a-4270-9861-f1bb344dafdc',
  //     points: '-1100',
  //   },
  //   {
  //     id: '083c3f4e-b803-4953-941c-a1af94bb6329',
  //     points: '-1100',
  //   },
  //   {
  //     id: '9c121f0b-33ea-416d-adad-246c1d5bd916',
  //     points: '-1300',
  //   },
  //   {
  //     id: '97d9c1c3-df1b-4ac0-83e6-11203d61f17f',
  //     points: '1100',
  //   },
  //   {
  //     id: '99b4f9bb-4c63-42ba-b111-912ba7ed4a7d',
  //     points: '3000',
  //   },
  //   {
  //     id: 'f19d6a97-a0e6-4a55-9195-f471b00aa766',
  //     points: '-1200',
  //   },
  //   {
  //     id: 'ef54cd56-15a1-48c6-bcde-e0c67fb7a319',
  //     points: '-1100',
  //   },
  // ];

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
  for (var i = 0; i < dashboardGraphData?.length - 1; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dashboardGraphData[i]];
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
    <>
      <div id='chart'>
        <div className='heading'>
          <h3 className='mt-2'>Subjects</h3>
        </div>
        {dashboardGraphData ? (
          <div className='card'>
            <Charts
              options={state.options}
              series={state.series}
              type='area'
              height={350}
            />
          </div>
        ) : (
          <div className='card graph-data'>Graph Data does not exist</div>
        )}
      </div>
    </>
  );
}
