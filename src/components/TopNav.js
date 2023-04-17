import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/Ai";
import Search from "./Search";

const TopNav = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <header className="top-navigation flex justify-between">
      <div className="flex">
        <nav>
          <button onClick={handleHomeClick}>
            <AiOutlineHome size="40" className="text-secondary my-auto" />
          </button>
        </nav>
        <h1 className="font-extrabold font-heavy text-lg ml-1 my-2">LUSH</h1>
      </div>
      <Search />
    </header>
  );
};

export default TopNav;
