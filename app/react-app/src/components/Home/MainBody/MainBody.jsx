import { Switch, Route } from "react-router-dom";
import { EditFolder, NewFolder } from "../../Forms";

const MainBody = () => {
  return (
    <div
      id="forms-and-notes"
      className="flex h-full w-full items-center justify-center"
    >
      <Switch>
        <Route exact path="/home">
          <h1>Something goes here</h1>
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
