import TabCrew from "../components/crew/TabCrew";
import Header from "../components/Header/Header";

const crew = () => {
  return (
    <div className="crew">
      <Header />
      <h1 className="title-crew">
        <span>02</span> Meet your crew
      </h1>
      <TabCrew />
    </div>
  );
};

export default crew;
