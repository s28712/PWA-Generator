import { NextPage } from "next";
import DropBox from "../components/dropbox";

const Index: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col lg:justify-center md:items-center">
      <div className="w-full lg:w-3/4 h-3/5 lg:h-3/4 flex-none lg:flex sm:px-6 lg:px-0">
        <div className="w-full h-full bg-white rounded-l-lg">
        </div>
        <div className="w-full h-full bg-gray-600 px-8 md:px-16 py-8 rounded-r-lg">
          <DropBox />
        </div>
      </div>
    </div>
  );
}

export default Index;