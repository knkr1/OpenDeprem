// NavBar.js
export default function NavBar({ triggerEarthquake }) {
    return (
        <div className="absolute w-screen min-h-24 z-20 bg-transparent flex flex-row items-center justify-between">
            <div></div>
            <div className="flex flex-row align-middle items-center">
                <img src="logo.png" className="w-16 h-16 ml-5 mr-4 transform transition duration-500 hover:rotate-180 rotate-0" />
                <span className="text-white font-bold text-3xl text-center">OpenDeprem</span>
            </div>
            <div>
                <button onClick={triggerEarthquake} className="earthquake-trigger-button">
                    Trigger Earthquake
                </button>
            </div>
        </div>
    );
}
