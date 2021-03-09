import { Switch, Route } from "react-router-dom";
import { EditFolder, NewFolder } from "../../Forms";
import TextEditor from "./TextEditor";

const MainBody = () => {
  return (
    <div
      id="forms-and-notes"
      className="flex h-full w-full items-center justify-center"
    >
      <Switch>
        <Route exact path="/home">
          <div className="flex justify-center items-center w-full h-full">
            <TextEditor />
          </div>
        </Route>
        <Route path="/home/folder/edit/:id">
          <div>
            <EditFolder />
          </div>
        </Route>
        <Route path="/home/folder/new">
          <div>
            <NewFolder />
          </div>
        </Route>
        <Route path="/home/file/new">{/* <CreateFileForm /> */}</Route>
        <Route path="/home/file/edit">
          <div className="w-full font-jetbrains">{/* <TextEditor /> */}</div>
        </Route>
      </Switch>
    </div>
  );
};

export default MainBody;
