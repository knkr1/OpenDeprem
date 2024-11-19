import NavBar from "./NavBar"
import MainInterface from "./MainInterface"
export default function AboveMap({triggerEarthquake}){
    return (
        <div className="absolute flex flex-col">
            <NavBar triggerEarthquake={triggerEarthquake}/>
            <MainInterface />
        </div>
    )
}