import { AiFillFileImage } from "react-icons/ai";
import { IoIosTrash } from "react-icons/io";
import { BsCloudArrowUpFill } from "react-icons/bs";
const App = () => {
  return (
    <div className="flex items-center justify-center bg-[#1E77CC] h-screen bg-opacity-30">
        
        <div className="flex flex-col justify-center bg-white items-center rounded-2xl sm:bg-white sm:w-[650px] sm:h-[550px] md:bg-white md:w-[700px] md:h-[600px] lg:bg-white lg:w-[750px] lg:h-[650px] xl:bg-white xl:w-[1020px] xl:h-[750px] pb-2 w-[550px] h-[450px]">
        <div className="bg-white border-dashed sm:p-28 sm:pl-52 sm:pr-52 md:p-32 md:pl-56 md:pr-56  lg:p-36 lg:pl-60 lg:pr-60 xl:pl-96 xl:pr-96 xl:p-48 pl-40 pr-40 p-16 rounded-xl border-[#1E77CC] border-[5px]">

          <div className="">
           <a href="#"><BsCloudArrowUpFill className="ml-7" size={100} color={"1E77CC"} /></a>
             <p>Browse Files to upload</p>
          </div>
            
        </div>
            <div className="flex mt-14 bg-[#1E77CC] sm:w-[570px] sm:p-2 md:w-[600px] md:p-2 lg:w-[650px] lg:p-2 xl:w-[900px] xl-p-3 bg-opacity-30 rounded-3xl p-1 w-[500px] justify-between">
               <a href="#"><AiFillFileImage size={40} color={"1E77CC"} /></a> 
                <div className="flex">
                  <p className="pt-2">No selected File - </p>
                 <a href="#"><IoIosTrash size={40} /></a>
                </div>
            </div>
        </div>

    </div>
  )
}
export default App 
