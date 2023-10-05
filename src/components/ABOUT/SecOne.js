export default function SecOne(props) {
  const showDetails = props.showDetails !== undefined ? props.showDetails : true;
  const imageWidth = props.imageWidth || 'w-3/4';
  const imageHeight = props.imageHeight || 'h-72';

  return (
    <>
      <div className="bg-gray-300 h-auto overflow-visible">
        <h1 className={`font-bold text-center overflow-visible pb-4 text-4xl text-blue-800 ${props.marginTop}`}>
          {props.title}
        </h1>
        <div className={`flex flex-col md:flex-row gap-4 px-4 ${showDetails ? '' : 'items-center'}`}>
          <div className={`w-full md:w-1/2 overflow-visible ${showDetails ? '' : 'md:w-full'}`}>
            <img className={`${imageWidth} ${imageHeight} ${showDetails ? '' : 'w-full'}`} src={props.image} alt="curie" />
          </div>
          {showDetails && (
            <div className="w-full md:w-1/2 overflow-visible">
              <p className="w-full leading-loose overflow-visible">
                {props.details}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
