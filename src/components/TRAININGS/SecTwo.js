import train1 from './Images/train1.png';
import train2 from './Images/train2.png';
import train3 from './Images/train3.png';

export default function SecTwo() {
  return (
    <>
      <h1 className="font-bold text-4xl text-center my-10">PAST TRAINING</h1>
      <div className="flex flex-col md:flex-row gap-6 px-4">
        <div className="w-full md:w-1/3">
          <img src={train1} alt="train" className="w-full md:w-auto" />
        </div>
        <div className="w-full md:w-1/3">
          <img src={train2} alt="train" className="w-full md:w-auto" />
        </div>
        <div className="w-full md:w-1/3">
          <img src={train3} alt="train" className="w-full md:w-auto" />
        </div>
      </div>
    </>
  );
}
