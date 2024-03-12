import { useSelector } from "react-redux";

const Preloader = () => {
  const isLoading = useSelector((state: any) => state.preloader.isLoading);

  if (!isLoading) {
    return <></>;
  }

  return (
    <div className="absolute left-0 top-0 w-full h-full opacity-50 bg-white flex justify-center items-center">
      <div className="w-[10%] h-[10%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle
            fill="#FF156D"
            stroke="#FF156D"
            strokeWidth="2"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#FF156D"
            stroke="#FF156D"
            strokeWidth="2"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#FF156D"
            stroke="#FF156D"
            strokeWidth="2"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
