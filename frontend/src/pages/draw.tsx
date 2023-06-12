const Draw = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-xl">
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Çekilişe Hoş Geldiniz</h1>
          </div>
          <div>
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
              alt=""
            />
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> Çekilişe Katıl
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Draw;
