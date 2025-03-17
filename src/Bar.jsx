import { BarChart } from "@mui/x-charts/PieChart";

export default function Bar(props) {
  const { data, group, stat, set } = props;
  console.log("Bar", data, group, stat);
  let dataToUse = [];
  if (stat === "n") {
    const obj =
      data
        .map((v) => v[group])
        .reduce((a, v) => {
          a[v] = (a[v] ?? 0) + 1;
          return a;
        }, {}) || {};
    dataToUse = Object.keys(obj).map((k) => {
      return {
        id: k,
        value: obj[k],
        label: k,
      };
    });
    console.log("obj", obj, "dataToUse", dataToUse);
  }
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: "pv", id: "pvId" },
        { data: uData, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
      onItemClick={(event, params) => {
        const { dataIndex } = params,
          what = dataToUse[dataIndex];
        set({ [group]: what.id });
        console.log("onItemClick", event, params, what);
      }}
    />
  );
}
