import { useState } from "react";
import Gallery from "./StateManagement/Gallery";
import Counter from "./StateManagement/SnapShot";
import UpdatingObject from "./UpdatingObject/UpdatingObject";

function App() {
  const [user, setUser] = useState({ name: "Rahim", age: 30 });
  console.log('user', user)

  setUser({...user, name: "Karim"});



  return (
    <div>
      {/* <Gallery/> */}
      {/* <Counter/> */}
      <UpdatingObject />
    </div>
  );
}

export default App;
