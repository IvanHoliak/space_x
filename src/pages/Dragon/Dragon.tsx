import { useParams } from "react-router-dom";

const Dragon = () => {
    const {id} = useParams();
    return <div>DRAGON {id}</div>;
};

export default Dragon;
