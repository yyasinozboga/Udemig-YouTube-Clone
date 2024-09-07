import { categories } from "../utils/constant";
import { VideoContext } from "../context/VideoContext";
import { useContext } from "react";

const Aside = ({ isOpen }) => {
  const { isSelected, setIsSelected } = useContext(VideoContext);

  return (
    <aside className="mr-3 h-[100vh] overflow-y-auto pr-2 pb-5">
      {categories.map((category, index) => (
        <div key={index}>
          <div
            className={`text-white flex items-center justify-center md:justify-normal gap-2 p-5 md:pe-16 ${
              !isOpen && "md:pe-5 md:justify-center"
            } hover:bg-[#2d2d2d] cursor-pointer rounded-md ${
              category.name === isSelected.name && "bg-[#242424]"
            }`}
            onClick={() => setIsSelected(category)}
          >
            <span className="text-2xl">{category.icon}</span>
            {isOpen && (
              <span className="max-md:hidden whitespace-nowrap">
                {category.name}
              </span>
            )}
          </div>
          {category.divider && (
            <div className="divider h-[1px] w-[100%] my-2"></div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Aside;
