import { useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import { EditFolder, NewFolder, NewFile } from "../../Forms";
import TextEditor from "./TextEditor";
import { createUserFile } from "../../../store/reducers/user";

const MainBody = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [content, setContent] = useState({});
  const [url, setUrl] = useState("");
  const [folderId, setFolderId] = useState(undefined);
  const [fileTypeId, setFileTypeId] = useState(1);

  const saveFile = () => {
    dispatch(createUserFile({ name, content, url, folderId, fileTypeId }));
    history.push("/home");
  };
  return (
    <div
      id="forms-and-notes"
      className="flex h-full w-full items-center justify-center"
    >
      <Switch>
        <Route exact path="/home"></Route>
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
        <Route path="/home/file/new">
          <NewFile
            name={name}
            setName={setName}
            folderId={folderId}
            setFolderId={setFolderId}
            url={url}
            setUrl={setUrl}
            fileTypeId={fileTypeId}
            setFileTypeId={setFileTypeId}
          />
        </Route>
        <Route path="/home/file/edit/:id">
          <div className="w-full font-jetbrains">
            <div className="flex justify-center items-center flex-col w-full h-full p-3">
              <TextEditor content={content} setContent={setContent} />
              <div
                className="bg-accentThree text-main text-xl font-bold m-2 rounded-md text-center p-2 font-jetbrains cursor-pointer transform hover:scale-105 w-20"
                onClick={saveFile}
              >
                <button type="submit" onclick={saveFile}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default MainBody;
