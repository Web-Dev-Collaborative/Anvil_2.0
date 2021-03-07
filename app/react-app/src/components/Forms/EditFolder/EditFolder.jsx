import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../store/reducers/categories";
import { editUserFolder, getUserFolder } from "../../../store/reducers/user";

const EditFolder = () => {
  const { folderId } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const categoryList = useSelector((state) => state.categories.all);
  const userFolder = useSelector((state) => state.user.selectedFolder);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserFolder(folderId));
  }, [dispatch, folderId]);

  useEffect(() => {
    if (userFolder) {
      setName(userFolder.name);
      setCategory(userFolder.category.id);
    }
  }, [userFolder]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFolderData = {
      id: folderId,
      name: name,
      category: category,
    };
    dispatch(editUserFolder(newFolderData));
  };

  return (
    <div>
      <h1>Edit Folder Form</h1>
      {userFolder && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoryList &&
              categoryList.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EditFolder;
