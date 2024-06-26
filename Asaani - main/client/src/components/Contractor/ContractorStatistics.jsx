export default function ContractorStatistics() {
  return (
    <div
      className=" flex p-5 justify-between rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200"
      style={{
        backgroundColor: "gray-700",
        marginTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        color: "black",
      }}
    >
      <div className="basis-1">
        <h2>Ongoing Contracts</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
      <div className="basis-1">
        <h2>Completed Contracts</h2>
        <div
          className="radial-progress"
          style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}
          role="progressbar"
        >
          70%
        </div>
      </div>
      <div className="basis-1">
        <h2>Your Rating</h2>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2 text-sm font-bold text-gray-900 dark:text-black">
            4.95
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            73 reviews
          </a>
        </div>
      </div>
    </div>
  );
}
