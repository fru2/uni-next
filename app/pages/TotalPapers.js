import StatsCard from "../components/StatsCard";
import iconStats from "../icons/";

export const TotalPapers = ({ paperCount }) => {
  <StatsCard
    icon={iconStats}
    count={paperCount}
    heading="Card context goes here"
    subhead="Short desc"
  ></StatsCard>;
};

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/paperCount');
    const { count } = await res.json();
  
    return {
      props: {
        paperCount: count
      }
    };
  }