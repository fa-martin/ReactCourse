import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const arrayValue=  props.dataPoints.map(element=> {return element.value});
    const totalMax = Math.max(...arrayValue);
    console.log(totalMax);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          max={totalMax}
        ></ChartBar>;
      })}
    </div>
  );
};

export default Chart;
