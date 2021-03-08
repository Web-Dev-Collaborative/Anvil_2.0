import { useSelector } from "react-redux";
import { useState } from "react";

import PromptArea from "./PromptArea";
import MainBody from "./MainBody";
import FolderList from "./FolderList";

const Home = () => {
  const [location, setLocation] = useState(window.location.pathname);
  const [selectedItem, setSelectedItem] = useState(null);

  const user = useSelector((state) => state.user);

  return (
    <div id="full-screen" className="bg-main h-screen">
      <div id="page-body" className=" flex flex-col h-full overflow-auto pr-80">
        <div
          id="prompt-area"
          className="flex flex-row h-16 ml-10 mr-10 justify-between pt-10 mb-10 font-jetbrains"
        >
          <PromptArea location={location} setLocation={setLocation} />
        </div>
        <div
          id="container"
          className="h-full mb-10 ml-10 mr-10 mt-5 bg-secondTransparent2 shadow-lg"
        >
          <MainBody />
        </div>
      </div>
      <div
        id="sideNav"
        className="bg-secondary flex flex-col fixed right-0 top-0 h-screen w-80 "
      >
        {/* <LogoDiv /> */}
        <p>Logo goes Here</p>
        <div id="folder-area" className="grid grid-rows-5 h-full overflow-auto">
          <FolderList
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            user={user}
            setLocation={setLocation}
          />
          <div id="logout-div" className="flex justify-center items-center">
            <div>Button Goes Here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
