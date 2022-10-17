import mobileImage from "./assets/image-header-mobile.jpg";

function App() {
  return (
    <div className="">
      <img alt="yo" src={mobileImage}></img>
      <div>
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
      </div>
      <div>
        <div>
          <h1>10K+</h1>
          <p>COMPANIES</p>
        </div>
        <div>
          <h1>314</h1>
          <p>TEMPALTES</p>
        </div>
        <div>
          <h1>12M+</h1>
          <p>QUERIES</p>
        </div>
      </div>
    </div>
  );
}

export default App;
