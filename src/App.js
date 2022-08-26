import "./App.css";

function App() {
  return (
    <div className="">
      <div className="py-4">
        <div className="max-w-[1280px] w-11/12 m-auto sm:flex justify-between items-center">
          <a
            href="https://www.Block2AI.com"
            target="_blank"
            without
            rel="noreferrer"
          >
            <img src="/img/logo.png" alt="" className="m-auto sm:m-0" />
          </a>
          <img
            src="/img/coming.png"
            alt=""
            className=" m-auto sm:mx-0 -mb-40 max-w-8/12"
          />
        </div>
      </div>
      <div className="bg-[#212121] w-full h-full">
        <div className="max-w-[1280px] w-11/12 m-auto">
          {/* <div className="flex justify-center py-10 items-center gap-3 sm:gap-20 text-white font-medium text-md sm:text-2xl">
            <p className="cursor-pointer">Products</p>
            <p className="cursor-pointer">Features</p>
            <p className="cursor-pointer">Integrations</p>
            <p className="cursor-pointer">Contact Us</p>
          </div> */}
          <div className="">
            <div className="sm:flex justify-between gap-10 items-start pt-20">
              <div className="sm:w-1/2">
                <p className="text-white text-center sm:text-start text-3xl sm:text-6xl font-bold pt-20 sm:pt-0">
                  First National Bank
                  <p className="text-[#39D995] mt-3 text-2xl sm:text-5xl font-bolder">
                    of the METAVERSE
                  </p>
                </p>
                <p className="text-white text-2xl sm:text-start text-center mt-5">
                  Digital world you can converse, earn, merge real and virtual
                  assets.
                </p>
                <img src="/img/8.png" alt="" />
                {/* <div className="py-5 mt-20 w-max px-10 rounded-r-full bg-white/25 flex justify-center items-center">
                  <p className="text-white text-4xl font-bold">DEMO</p>
                </div> */}
                {/* <p className="text-white mt-3 sm:mt-10 text-center sm:text-start text-lg sm:text-3xl">
                  Digital world you can converse, earn, merge real and virtual
                  assets.
                </p>
                <div className="bg-white text-black mt-6 sm:mt-10 flex justify-between items-center px-2 rounded">
                  <input
                    type={"text"}
                    className="bg-transparent outline-0 h-14 sm:h-16 px-4 w-full"
                    placeholder="Enter your wallet address"
                  />
                  <button className="bg-black text-white text-md sm:text-lg font-medium h-10 sm:h-12 w-[200px] rounded">
                    Connect Wallet
                  </button>
                </div> */}
              </div>
              <div className="sm:w-1/2 py-10 sm:mt-0">
                <img src="/img/smart.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
