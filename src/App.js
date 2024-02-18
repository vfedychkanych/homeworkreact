import {UserContainer} from "./Part_1/UserContainer";
import {CommentsContainer} from "./Part_2/CommentsContainer";
import {CarsContainer} from "./Part_3/CarsContainer";
import {baseURL_cars, urls} from "./constants/Urls";

const App = () => {
  return (
      <div>
         {/*<UserContainer/>*/}
         {/* <CommentsContainer/>*/}
          <CarsContainer/>
      </div>
  );
};

export {App};