import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-bootstrap";

// internal
import "./home.css";
import CardContainer from "./CardContainer";

function Home() {
  const cardsData = [
    {
      id: 1,
      team: "CHELSEA",
      alt: "Chelsea FC Logo",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/180px-Chelsea_FC.svg.png",
    },
    {
      id: 2,
      team: "MANCITY",
      alt: "Manchester City FC Logo",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/170px-Manchester_City_FC_badge.svg.png",
    },
  ];

  return (
    <div className="Home">
      <Link>
        <CardContainer cards={cardsData} />
      </Link>
    </div>
  );
}

export default Home;
