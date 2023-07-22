
const Search = () => {
    return (
        <div className="mb-12">
            <div className=" flex justify-center gap-5 m-4">
                <input type="text" placeholder="Search" className="input input-bordered w-[500px] border-none bg-gray-300 " />
                <input type="submit" className="btn btn-secondary px-9" value="Submit" />
                
            </div>
        </div>
    );
};

export default Search;