import NavBar from "./NavBar"

export default function AboveMap({triggerEarthquake}){
    return (
        <div className="absolute">
            <NavBar triggerEarthquake={triggerEarthquake}/>
        </div>
    )
}