import React from "react";

function Hero({ formVisible, setFormVisible }) {
  function showForm() {
    setFormVisible(!formVisible);
  }
  return (
    <>
      <div className="w-full h-auto relative overflow-hidden p-5 ">
        <img
          src="/icons/rounds.svg"
          className="absolute left-0 top-0"
          alt="illlus"
        />
        <img
          src="/icons/rounds.svg"
          className="absolute bottom-0 right-0"
          alt="illlus"
        />
        <span className="absolute bottom-0 left-[60%] -translate-x-[20%] w-[50px] h-[50px] bg-green-one rounded-full"></span>
        <span className="absolute bottom-0 right-[20%] -translate-x-[20%] w-[15px] h-[15px] bg-green-one rounded-full"></span>
        <span className="absolute left-20 top-[20%] -translate-x-[20%] w-[15px] h-[15px] bg-green-one rounded-full"></span>
        <span className="absolute left-0 bottom-0 w-[160px] h-[160px] bg-green-radial blur-[100px] rounded-full"></span>
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[90%] mx-auto p-5">
          <div className="w-full text-center  flex flex-col items-center ">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-nowrap">
              The <span className="text-green-600">Ultimate</span> <br />
              <span className="text-green-700">Launchpad</span> For <br />
              Your <span className="text-green-600">Career!</span>
            </h1>

            <p className="text-lg my-4 font-light text-black-100">
              Where Your Future Begins: Unlock Guaranteed Career <br /> Success
              With The Best Guidance
            </p>
            {/* <Learner /> */}
            <div className="flex items-center  gap-2 my-4 ">
              <button
                className="w-44 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 rounded"
                onClick={showForm}
              >
                <p className="flex text-nowrap text-white font-base lg:font-semibold items-center justify-center gap-2">
                  enroll now
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16.5L7.09 15.09L12.67 9.5L0.5 9.5V7.5L12.67 7.5L7.08 1.92L8.5 0.5L16.5 8.5L8.5 16.5Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </button>
              <button className="bg-transparent hover:bg-green-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                <span className="text-xs md:text-base text-nowrap text-black font-semibold py-1">
                  Get Free Career Evaluation
                </span>
              </button>
              {/* <ShinyButton className="border rounded-md py-3">
                <span className="text-xs md:text-base text-nowrap text-black font-semibold py-1">
                  Get Free Career Evaluation
                </span>
              </ShinyButton> */}
            </div>
            <div className="flex items-start my-6 w-[75%] text-center">
              <img src="/icons/success.svg" alt="success" />
              <p className=" text-sm lg:font-medium">
                100% Money Back Guarantee if you're not satisfied with the
                Evaluation
              </p>
            </div>
          </div>
          <img src="/icons/hero.svg" alt="hero" className="lg:w-fit w-full" />
        </div>
      </div>
    </>
  );
}

export default Hero;