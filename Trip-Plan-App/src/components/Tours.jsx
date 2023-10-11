import Card from "./Card";
function Tours({ tours , removeTour}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h2 className="text-[3rem] m-[6vh] border-dotted border-cyan-400 border-8 rounded-lg py-[1vh] px-[5vw] font-bold ">Trip Plan</h2>
      </div>
      <div className="flex items-center justify-center flex-wrap max-w-[1300px] mx-auto">
        {tours.map((tours) => {
          return <Card {...tours} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
