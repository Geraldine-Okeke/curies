import hands from './images/hands.png';

export default function SecOne() {
  return (
    <>
      <div className="w-full z-0 relative mt-16 overflow-visible">
        <img className="w-full auto" src={hands} alt="hands" />
        <div className="absolute overflow-visible top-6 md:top-1/4 left-3 md:left-20 flex flex-col text-start float-left w-full md:w-1/4 gap-8 font-bold text-blue-800">
          <h1 className="font-bold text-3xl sm:text-6xl leading-8 overflow-visible brightness-200 animate-text">
            Unlocking Tomorrow’s Discoveries:
          </h1>
          <span className="text-2xl whitespace-nowrap overflow-visible sm:text-3xl animate-right-to-left animate-span brightness-200">
            Your trusted research partners
          </span>
        </div>
      </div>
    </>
  );
}
