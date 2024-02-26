import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-96 ">
      <div className="border-double border-8 border-black p-10 text-center text-2xl font-bold  text-red-700 tracking-wide">
        <div className="flex items-center justify-center mb-4">
          <BiErrorCircle className="w-24 h-16" />
        </div>

        <p>Unexpected error.</p>

        <p className="pt-4">Try it later.</p>
      </div>
    </div>
  );
};

export default Error;
