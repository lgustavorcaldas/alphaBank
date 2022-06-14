import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  
  return (
    <div id="home">
      <h1>inicial</h1>
    </div>
  );
};

export default Home;
