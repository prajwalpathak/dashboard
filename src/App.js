import Header from "./Components/Header";
import ImportantSection from "./Components/ImportantSection";
import Overview from "./Components/Overview";
import styles from "./App.module.css";
import MyPools from "./Components/MyPools";

const overviewData = [
  { title: "Total borrowed amount", value: "$16,034" },
  { title: "Total supplied amount", value: "$160,032" },
  { title: "Total borrow rate", value: "32%" },
  { title: "Total lending rate", value: "15%" },
];

const importantData = [
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    daysLeft: 2,
  },
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    daysLeft: 2,
  },
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    daysLeft: 2,
  },
];

const poolData = [
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    poolStatus: "Open Pool",
    poolPeriod: "Grace Period",
    paymentStatus: {
      borrowRate: "11%",
      borrowedAmount: "1,000 DOT",
      nextPayment: "200 DOT",
      repaymentProgress: "45%",
    },
  },
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    poolStatus: "Open Pool",
    poolPeriod: "Grace Period",
    paymentStatus: {
      borrowRate: "11%",
      borrowedAmount: "1,000 DOT",
      nextPayment: "200 DOT",
      repaymentProgress: "45%",
    },
  },
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    poolStatus: "Open Pool",
    poolPeriod: "Grace Period",
    paymentStatus: {
      borrowRate: "11%",
      borrowedAmount: "1,000 DOT",
      nextPayment: "200 DOT",
      repaymentProgress: "45%",
    },
  },
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    poolStatus: "Open Pool",
    poolPeriod: "Grace Period",
    paymentStatus: {
      borrowRate: "11%",
      borrowedAmount: "1,000 DOT",
      nextPayment: "200 DOT",
      repaymentProgress: "45%",
    },
  },
  {
    image: "",
    name: "Vote for extension",
    handle: "@Lorem_ipsum",
    poolStatus: "Open Pool",
    poolPeriod: "Grace Period",
    paymentStatus: {
      borrowRate: "11%",
      borrowedAmount: "1,000 DOT",
      nextPayment: "200 DOT",
      repaymentProgress: "45%",
    },
  },
];

function App() {
  return (
    <div className="App">
      <Header
        title="Sublime"
        tabs={["Dashboard", "Borrow", "Lend", "Profile"]}
      />
      <div className={styles.dashboard}>
        <div className={styles.overview}>
          <Overview data={overviewData} title="Overview" />
          <Overview
            data={overviewData}
            title="Deposit and Save Overview"
            hasButton
          />
          <Overview data={overviewData} title="Credit Lines" hasButton />
          <MyPools data={poolData} />
        </div>

        <div className={styles.important}>
          <div>{`Important (${importantData.length})`}</div>
          <ImportantSection data={importantData} />
        </div>
      </div>
    </div>
  );
}

export default App;
