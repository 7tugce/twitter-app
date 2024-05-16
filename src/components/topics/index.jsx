import { topics } from "~/utils/consts";
import Topic from "./topic";

export default function Topics() {
  return (
    <section className=" w-[350px] bg-[#F8E8EE] mb-4 rounded-2xl">
      <h5 className="py-3 px-4 flex items-center leading-6 font-extrabold text-xl">
        İlgini çekebilecek gündemler
      </h5>
      <div className="grid">
      {topics.map((topic,index)=><Topic item={topic} key={index}/>)}</div>
    </section>
  );
}
