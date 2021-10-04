const Browse = ({ browsedatas }) => {

    return (
        <>
            {
                browsedatas.map((e) => {
                    return (
                        <div key={e.id} className="w-52 h-52 rounded-lg flex justify-center items-center text-white cursor-pointer" style={{backgroundColor: e.bgColor}}>
                            <div className="w-full h-full relative overflow-hidden">
                                <h3 className="text-2xl p-4 font-bold break-words">{e.text}</h3>
                                <div className="absolute -bottom-2 -right-4 rotate-[25deg] w-28 h-28">
                                    <img src={e.picURL} alt="spotify" className="w-28 h-28" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Browse;