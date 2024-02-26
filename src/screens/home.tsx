import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
const Home = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <Link to="/discord">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            style={{ width: "100%" }}
          />
        </Link>

        <Link to="/res-navbar">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            style={{ width: "100%" }}
          />
        </Link>
        <Link to="/1">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            style={{ width: "100%" }}
          />
        </Link>
        <Link to="/1">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            style={{ width: "100%" }}
          />
        </Link>
        <Link to="/1">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            style={{ width: "100%", height: "300px" }}
          />
        </Link>
      </Masonry>
    </>
  );
};

export default Home;
