export interface GraphChartData {
  x: number; // hour
  y: number; // value
  xLabel?: string; // optional label for hour
  payload?: string;
}

export interface GraphChartProps {
  data: GraphChartData[];
  title?: string;
  xAxisTicks?: number[];
  yAxisTicks?: number[];
  xRange?: [number, number];
  yRange?: [number, number];
  chart: "linechart" | "scatterplot";
}
