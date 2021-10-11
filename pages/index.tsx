import { NextPage } from "next";
import { useContext, useEffect } from "react";
import DropBox from "../components/dropbox";
import FormBox from "../components/formbox";
import { SubmissionContext } from "../contexts/submit";
import genZip from "../functions/create_zip";

const Index: NextPage = () => {
  const { mForm, setMForm, fileForm, setFileForm } = useContext(SubmissionContext);

  useEffect(() => {
    if(mForm && fileForm) {
      console.log(mForm);
      console.log(fileForm);
      genZip(fileForm, mForm);
    }

    else {
      setMForm(null);
      setFileForm(null);
    } 
  }, [mForm, fileForm]);

  return (
    <div className="w-full h-full flex flex-col lg:justify-center md:items-center">
      <div className="w-full lg:w-3/4 h-3/5 lg:h-3/4 flex-none lg:flex sm:px-6 lg:px-0">
        <div className="w-full h-full bg-white rounded-l-lg">
          <FormBox />
        </div>
        <div className="w-full h-full bg-gray-600 px-8 md:px-16 py-8 rounded-r-lg">
          <DropBox />
        </div>
      </div>
    </div>
  );
}

export default Index;