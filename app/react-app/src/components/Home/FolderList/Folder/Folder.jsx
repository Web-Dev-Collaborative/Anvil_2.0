import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpsterFire, faPenSquare } from "@fortawesome/free-solid-svg-icons";

import { deleteUserFolder } from "../../../../store/reducers/user";

const Folder = ({ folder, selectedItem, setSelectedItem, setLocation }) => {
  const dispatch = useDispatch();

  const SubmitDelete = (folderId) => {
    dispatch(deleteUserFolder(folderId));
  };
  return (
    <li
      key={folder.id}
      className="font-jetbrainstext text-xl cursor-pointer font-jetbrains"
      onClick={() =>
        selectedItem !== folder.id
          ? setSelectedItem(folder.id)
          : setSelectedItem(null)
      }
    >
      <p
        className="relative inline-block hover:underline"
        style={
          selectedItem === folder.id
            ? { color: "#50fa7b" }
            : { color: "#8be9fd" }
        }
      >
        {selectedItem === folder.id ? `v ${folder.name}` : `> ${folder.name}`}
      </p>
      <div
        style={
          selectedItem === folder.id
            ? { display: "block" }
            : { display: "none" }
        }
        className="hidden relative w-20 h-10 text-2xl"
      >
        <div className="flex flex-row justify-between pt-2 pl-4">
          <button
            className="text-accentTwo"
            onClick={() => setLocation(window.location.pathname)}
          >
            <Link to={`/home/folder/edit/${folder.id}`}>
              <FontAwesomeIcon icon={faPenSquare} />
            </Link>
          </button>

          <button
            onClick={() => SubmitDelete(folder.id)}
            className="pl-1 text-accentFour"
          >
            <FontAwesomeIcon icon={faDumpsterFire} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Folder;
