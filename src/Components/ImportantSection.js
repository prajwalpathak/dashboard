import Card from "../UI/Card";
import ImportantCard from "./ImportantCard";

const ImportantSection = ({ data }) => {
  const importantList = data.map((dataPoint) => (
    <ImportantCard
      name={dataPoint.name}
      handle={dataPoint.handle}
      daysLeft={dataPoint.daysLeft}
    />
  ));

  return <div>{importantList}</div>;
};
export default ImportantSection;
