

export default function ContractorStatistics() {
  return (
    <div className="flex flex-row justify-around bg-[#336DF2] p-5 text-white">
        <div className="">
            <h1 className="my-5 font-bold text-2xl">Ongoing Contracts</h1>
            <p>Home Cleaning</p>
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                style={{width: "25%"}}>
                25%
                </div>
            </div>
            <p>HVAC</p>
            <div className="w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                className="bg-primary p-0.5 text-center text-gray-50 text-xs font-medium leading-none text-primary-100"
                style={{width: "75%"}}>
                75%
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center">
            <h1 className="my-5 font-bold text-2xl">Completed Contracts</h1>
            <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
            <p>7/10</p>{/*to be brought from database */}
        </div>

        <div className="">
            <h1 className="my-5 font-bold text-2xl">Your Rating</h1>
            <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
        </div>
    </div>
  )
}
