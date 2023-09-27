const getLocationList = (itemList: string[]) => {
  const data = [
    ...itemList.reduce((arr, item) => arr.add(item), new Set<string>()),
  ].filter((location) => location !== "전국");
  data.unshift("전국");

  return data;
};

export default getLocationList;
