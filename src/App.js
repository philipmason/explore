import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import Pie from "./Pie.jsx";
import Bar from "./Bar.jsx";
import test from "./test.json";
import alasql from "alasql";

export default function App() {
  // create sampleData with name, age, gender and height
  const [filter, setFilter] = useState(null),
    [data, setData] = useState(null),
    [slice, setSlice] = useState(null),
    [selected, setSelected] = useState(null);

  useEffect(() => {
    var res = alasql(
      "SELECT gender, count(*) as n, newid() as id FROM ? GROUP BY gender",
      [test]
    );
    setData(res.map((v) => ({ id: v.gender, value: v.n, label: v.gender })));
    setSlice("gender"); // sets what we get when clicking on a slice
    console.log("res", res);
    setSelected(test);
  }, []);

  useEffect(() => {
    if (!filter) return
    const sel = test.filter((r) => {
      const v = Object.keys(filter);
      // console.log(r, v);
      return r[v] === filter[v];
    });
    console.log("filter", filter, "sel", sel);
    setSelected(sel);
  }, [filter]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {data ? <Pie data={data} slice={slice} set={setFilter} /> : null}
      </Grid>
      <Grid item xs={12} md={6}>
        {data ? <Bar data={data} slice={slice} set={setFilter} /> : null}
      </Grid>
      <Grid item xs={12} md={6}>
        Filter: {JSON.stringify(filter)}
      </Grid>
      <Grid item xs={12}>
        {selected && (
          <DataGridPro
            rows={selected}
            columns={[
              { field: "name", headerName: "Name", width: 150 },
              { field: "age", headerName: "Age", width: 150 },
            ]}
            getRowId={() => Math.random()}
          />
        )}
      </Grid>
    </Grid>
  );
}
