import { MdAdd } from "react-icons/md";
import NodeCard from "../../components/Cards/NodeCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NodeCard
            title="Meeting Tomorrow"
            date="20th April 2024"
            content="meeting on this morning"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500  hover:bg-blue-600 absolute right-10 bottom-10 "
        onClick={() => {}}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <AddEditNotes />
    </>
  );
};

export default Home;
