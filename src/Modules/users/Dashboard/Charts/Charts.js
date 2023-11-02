import React from 'react';
import Charts from 'react-apexcharts';
import { dataSeries } from './DateSeries';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Chart({ percentage }) {
  var ts2 = 1484418600000;
  var dates = [];
  for (var i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dates.push(innerArr);
  }
  const state = {
    series: [
      {
        name: 'USD',
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
            return `USD ${formattedValue}K`;
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  };
  return (
    <React.Fragment>
      <div id='chart'>
        <div className='heading'>
          <h3 className='mt-2'>Subjects</h3>
        </div>
        <div className='card'>
          <div className='dropdowns'>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-basic'>
                <div className='date'>
                  <p>Analysis</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href=''>Analysis</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id='dropdown-basic'>
                <div className='date'>
                  <p>Chemistry</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href=''>Chemistry</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
