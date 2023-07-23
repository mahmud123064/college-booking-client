import { Link } from "react-router-dom";

const ResearchDetails = ({ research }) => {
    console.log(research);
    const { name, title, link } = research;
    return (
        <div >
            <div className="bg-gray-300 rounded-xl text-start p-8">
                <h3 className=""><span className="font-bold">Title: </span>{title} </h3>
                <h3><span className="font-bold">Name: </span> {name}</h3>
              <Link to={link}><h3 className="text-blue-500 ">Live Link</h3></Link>
            </div>
        </div>
    );
};

export default ResearchDetails;