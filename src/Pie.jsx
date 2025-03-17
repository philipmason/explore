import { PieChart } from "@mui/x-charts/PieChart";

export default function Pie(props) {
  const { data, slice, set } = props;
  console.log("Pie", data, set);

  return (
    <PieChart
      series={[
        {
          data: data || [],
        },
      ]}
      height={200}
      onItemClick={(event, params) => {
        const { dataIndex } = params,
          what = data[dataIndex];
        set({ [slice]: what.id });
        console.log("onItemClick", event, params, what);
      }}
    />
  );
}
