import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>HOme page</h2>
      <Link to={"/form"}>Form</Link>
      <br/>
      <Link to={"/userdata"}>User data</Link>
      <br/>
      <Link to={"/cart"}>Cart</Link>
      <br/>
      <Link to={"/practice"}>Practice</Link>
    </section>
  );
}

export default Home;
