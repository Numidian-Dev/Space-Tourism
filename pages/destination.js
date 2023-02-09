import DestinationTab from "../components/destination/DestinationTab";
import Header from "../components/Header/Header";

const destination = () => {
  return (
    <div className="destination">
      <Header />
      <h1 className="title-destination">
        <span>01</span> Pick your destination
      </h1>
      <DestinationTab />
    </div>
  );
};

export default destination;
