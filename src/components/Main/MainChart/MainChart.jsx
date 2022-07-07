import styled from "styled-components";
import ApexCharts from 'react-apexcharts';
import {threechart} from '../../../FakeD/threeChart';
import {getToday} from '../../../Func/GetTodayFunc';

const MainChartDiv= styled.div`
    width:90%;
    height:60vh;
    padding : 30px 0px;
    margin: 0 auto;
    font-size: ${(props)=>props.theme.fontSizeH1};
`
const BarData =  { series: [{
    name: 'Dead Lift',
    data: threechart.map((x)=>x.deadlift),
  }, {
    name: 'Bench Press',
    data: threechart.map((x)=>x.benchpress),
  }, {
    name: 'Squat',
    data: threechart.map((x)=>x.squat),
  }],
  options: {
    chart: {
      type: 'bar',
      height: 100,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: `${getToday()} 기준 3대력 상위 10명`,
      style : {
        fontSize: "24px",
        fontWeight: 600,
      }
    },
    xaxis: {
      categories: threechart.map((x)=>x.name),
      labels: {
        formatter: function (val) {
          return val + "KG"
        
        },
        style:{
            colors : "grey",
            fontSize: "14px",
            fontWeight: 500,
        },
       
      },
    },
    yaxis: {
      title: {
        text: undefined
      },
      labels:{
        style:{
            colors : "#646464",
            fontSize: "16px",
            fontWeight: 500,
        },
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
            return val + "KG"
        }
      }
    },
    fill: {
      opacity: 1,
      colors: ['#3F8CFF','#7FBA7A',  '#FF754C'],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    },
  },}


function MainChart (){
    return (
        <MainChartDiv>
            <ApexCharts
                options={BarData.options}
                series={BarData.series}
                width= "100%"
                height="100%"
                type="bar"/>
        </MainChartDiv>
    )
}

export default MainChart