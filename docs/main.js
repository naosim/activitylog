const [_, startParam] = location.href.split("?start=");
console.log("params", startParam);
const thisYear = startParam || 2025;
const startDate = new Date(`${thisYear}/01/01`);

const list = getData()
  .map((v) => ({ date: new Date(v.date), title: v.title }))
  .filter((v) => v.date.getTime() > startDate.getTime() && v.date.getTime() < new Date(`${startDate.getFullYear() + 1}/01/01`).getTime())
  .toSorted((a, b) => a.date.getTime() - b.date.getTime());
const qEnd = [
  new Date(`${startDate.getFullYear()}/4/1`),
  new Date(`${startDate.getFullYear()}/7/1`),
  new Date(`${startDate.getFullYear()}/10/1`),
  new Date(`${startDate.getFullYear() + 1}/1/1`)
];
const lastDate = list[list.length - 1].date;
const endDate = qEnd.filter((v) => v.getTime() > lastDate.getTime())[0] || qEnd.at(-1);

(function(){
  const graphLabels = {
    act: "実績",
    kpi: "KPI"
  };
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
})();

// ---
(function(){
  const graphLabels = {
    diff: "差"
  };
  const ds = list.map((v, i) => {
    const dateCount = (new Date(v.date.toLocaleDateString()).getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000) / 7
    return {
      type: graphLabels.act,
      count: (i + 1) - dateCount,
      date: v.date,
      name: v.title
    };
  });
  var chart = new Taucharts.Chart({
    data: [...ds],
    type: "line",
    x: "date",
    y: "count",
    plugins: [Taucharts.api.plugins.get("tooltip")()],
    guide: {
      showAnchors: "always",
      x: { min: startDate, max: endDate, nice: false, },
      
    },
    color: "type" // there will be two lines with different colors on the chart
  }).renderTo("#diff");
})()