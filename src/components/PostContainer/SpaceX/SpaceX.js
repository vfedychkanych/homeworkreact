import {useEffect, useState} from "react";
import {SpaceXDetails} from "./SpaceXDetails";
import {axiosServiceSpaceX} from "../../../services/axiosService";
import {spaceXService} from "../../../services/spaceXService";
import axios from "axios";

const SpaceX = () => {
    const [spaceX, setSpaceX] = useState([])
    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(({data}) => setSpaceX(data))
    }, []);
    return (
        <div>
            {spaceX.map((spaceX) => <SpaceXDetails spaceX={spaceX}/>)}
        </div>
    );
};

export {SpaceX};