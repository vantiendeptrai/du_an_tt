import { useNavigate } from "react-router-dom";

type LogoProps = {
  large?: boolean;
};

const Logo = ({ large }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        width={large ? 150 : 100}
        height={100}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c039b824474525.56334ce736de9.jpg"
        onClick={() => navigate("/")}
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
