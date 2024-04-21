function Cards() {
  return (
    <div className=" bg-zinc-300 gap-10 w-full flex h-screen items-center px-20">
      <div className="cardcontainer w-1/2 h-[50vh] mt-8">
        <div className="card relative w-full h-full rounded-lg bg-[#224D44] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-10 px-5 py-2 rounded-full border-[1.5px] border-yellow-200 text-[0.9vw]">
            @2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-10 w-1/2 h-[50vh] mt-8">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-lg bg-[#212121]">
          {" "}
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-10 px-3 py-1 rounded-full border-[2px] border-zinc-400 uppercase text-[0.9vw] font-semibold">
            Rating5.0 on clucth
          </button>
        </div>
        <div className="card w-1/2 relative flex items-center justify-center h-full bg-[#212121] rounded-lg">
          {" "}
          <img
            className="w-28 object-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute bottom-5 left-10 px-3 py-1 rounded-full border-[2px] border-zinc-400 uppercase text-[0.9vw] font-semibold">
            Business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
