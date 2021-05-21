import Header from "./Components/Header/Header";
import ImportantSection from "./Components/Important/ImportantSection";
import Overview from "./Components/Overview/Overview";
import MyPools from "./Components/MyPools/MyPools";
import overviewData from "../src/overview.json";
import depositData from "../src/deposit-overview.json";
import creditData from "../src/credit-overview.json";
import importantData from "../src/important.json";
import poolData from "../src/pool.json";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header
        title="Sublime"
        tabs={["Dashboard", "Borrow", "Lend", "Profile"]}
      />
      <main className={styles.dashboard}>
        <section className={styles.overview}>
          <Overview data={overviewData} title="Overview" size={2} />
          <Overview
            data={depositData}
            title="Deposit and Save Overview"
            btnClass="overview__btn"
            hasButton
            size={3}
          />
          <Overview
            data={creditData}
            title="Credit Lines"
            hasButton
            btnClass="overview__btn"
            size={4}
          />
          <MyPools data={poolData} />
        </section>

        <section className={styles.important}>
          <div
            className={styles.section__title}
          >{`Important (${importantData.length})`}</div>
          <ImportantSection data={importantData} />
        </section>
      </main>
    </div>
  );
}

export default App;
