const startDate = new Date("2024/01/01");

const list = getData()
  .map((v) => ({ date: new Date(v.date), title: v.title }))
  .filter((v) => v.date.getTime() > startDate.getTime());

const graphLabels = {
  act: "実績",
  kpi: "KPI"
};

var qEnd = [
  new Date("2024/4/1"),
  new Date("2024/7/1"),
  new Date("2024/10/1"),
  new Date("2025/1/1")
];
var lastDate = list[list.length - 1].date;
var endDate = qEnd.filter((v) => v.getTime() > lastDate.getTime())[0];

const ds = list.map((v, i) => {
  return {
    type: graphLabels.act,
    count: i + 1,
    date: v.date,
    name: v.title
  };
});

const kpi = [
  { type: graphLabels.kpi, date: startDate, count: 0 },
  {
    type: graphLabels.kpi,
    date: endDate,
    count: (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7)
  }
];

var chart = new Taucharts.Chart({
  data: [...ds, ...kpi],
  type: "line",
  x: "date",
  y: "count",
  plugins: [Taucharts.api.plugins.get("tooltip")()],
  guide: {
    showAnchors: "always"
  },
  color: "type" // there will be two lines with different colors on the chart
}).renderTo("#line");
