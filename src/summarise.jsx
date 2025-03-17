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