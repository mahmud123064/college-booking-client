
const Search = () => {
    return (
        <div className="">
            <div className=" flex justify-center gap-1 m-4">
                <input type="text" placeholder="Write Your College Name" className="input input-bordered w-[500px] border-none bg-gray-300 " />
                <input type="submit" className="btn btn-secondary px-9" value="Submit" />
                
            </div>
        </div>
    );
};

export default Search;