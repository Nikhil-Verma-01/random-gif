import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className="bg-white  rounded-lg w-11/12 text-center mt-[40px]
      text-4xl font-bold py-2 px-10 ">Random GIFs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
