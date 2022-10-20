import mobileImage from "./assets/image-header-mobile.jpg";

import "./index.css";

function App() {
  return (
    <div className="main text-center leading-loose">
      <div className=" flex flex-col justify-center w-96 rounded-lg bg-card-bg text-white m-12 md:flex-row-reverse md:w-3/4">
        <div className="bg-violet md:flex-auto md:rounded-r-lg md:flex-auto">
          <img
            alt="hero"
            className="rounded-t-lg md:rounded-t-none h-full md:rounded-r-lg"
            src={mobileImage}
          ></img>
        </div>
        <div className="flex justify-center flex-col px-6 py-6 md:flex-auto">
          <div>
            <h1 className="pb-6 text-3xl">
              Get <span className="text-violet">insights</span> that help your
              business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="py-6 space-y-4 md:flex md:flex-row md:content-center md:justify-center md:space-x-6 md:space-y-0 md:pt-10">
            <div>
              <h1 className="text-2xl">10K+</h1>
              <p className="text-xs opacity-50">COMPANIES</p>
            </div>
            <div>
              <h1 className="text-2xl">314</h1>
              <p className="text-xs opacity-50">TEMPLATES</p>
            </div>
            <div>
              <h1 className="text-2xl">12M+</h1>
              <p className="text-xs opacity-50">QUERIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
