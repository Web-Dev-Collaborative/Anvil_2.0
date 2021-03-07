import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../store/reducers/categories";
import { createUserFolder } from "../../../store/reducers/user";

const NewFolder = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(1);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.id);
  const categoryList = useSelector((state) => state.categories.all);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFolderData = {
      name: name,
      userId: currentUser,
      categoryId: Number(category),
    };
    dispatch(createUserFolder(newFolderData));
    return newFolderData;
  };

  return (
    <div>
      <h1>New Folder Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder=" => folder name"
          value={name}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoryList &&
            categoryList.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewFolder;
