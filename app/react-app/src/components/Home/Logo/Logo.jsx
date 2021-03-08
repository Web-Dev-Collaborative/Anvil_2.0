import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();

  return (
    <div
      id="logo-div"
      className="font-jetbrains text-5xl font-extrabold text-accentOne"
    >
      <div className="flex justify-center items-center flex-col pt-5 pb-2">
        <p className="text-accentOne text-4xl">Anvil</p>
        <img
          onClick={() => history.push("/")}
          className="cursor-pointer w-20"
          src="https://anvil-file-bucket.s3.amazonaws.com/images/small-anvil-icon.png"
          alt="Anvil"
        />
      </div>
    </div>
  );
};

export default Logo;
