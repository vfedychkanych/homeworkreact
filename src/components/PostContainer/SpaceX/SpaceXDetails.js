import {spaceXService} from "../../../services/spaceXService";
import {baseURLSpaceX, urls} from "../../../constants/URLs";
import {axiosServiceSpaceX} from "../../../services/axiosService";

const SpaceXDetails = ({spaceX}) => {
    const {mission_name, launch_year} = spaceX;
    const {mission_patch_small} = spaceX.links;
    if (launch_year !== '2020') {
        return (
            <div>
                <div>mission_name: {mission_name}</div>
                <div>launch_year: {launch_year}</div>
                <img src={mission_patch_small} alt=""/>
            </div>
        );
    }
};

export {SpaceXDetails};