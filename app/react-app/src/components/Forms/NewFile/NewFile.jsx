import { useSelector } from "react-redux";

const NewFile = ({ name, setName, folderId, setFolderId }) => {
  const folderList = useSelector((state) => state.user.folders);

  return (
    <div>
      <h1 className="text-accentOne text-3xl mb-6 font-jetbrains">
        Create a File
      </h1>
      <form className="bg-secondTransparent flex flex-col w-96">
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="=> file name"
          value={name}
          className="bg-secondTransparent text-xl text-left pl-3 pb-3 pt-3 text-accentOne outline-none placeholder-accentOne border-2 border-accentThree font-jetbrains"
        />

        <select
          value={folderId}
          onChange={(e) => setFolderId(e.target.value)}
          className="font-jetbrains text-xl mt-4 mb-6 text-accentOne m-auto w-full h-12 bg-secondary outline-none"
        >
          {folderList &&
            folderList.map((folder) => (
              <option value={folder.id} key={folder.id}>
                {folder.name}
              </option>
            ))}
        </select>
        <div className="bg-accentThree text-main text-xl font-bold m-2 rounded-md text-center p-2 font-jetbrains cursor-pointer transform hover:scale-105">
          <button type="submit">Get Started!</button>
        </div>
      </form>
    </div>
  );
};

export default NewFile;
