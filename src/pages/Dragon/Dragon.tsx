import { useParams } from "react-router-dom";
import DragonContent from "../../components/DragonContent/DragonContent";
import Loader from "../../components/Loader/Loader";
import { dragonAPI } from "../../services/DragonService";
import styles from "./Dragon.module.scss";

const Dragon = () => {
    const {id} = useParams();

    const {data, error, isLoading} = dragonAPI.useGetDragonDetailsQuery(id);

    return (
        <div className={styles.dragon}>
            <div className="container">
                <div className={styles.dragon__wrapper}>
                    {isLoading && <Loader />}
                    {data && <DragonContent data={data}/>}
                    {error && <p>Error</p>}
                </div>
            </div>
        </div>
    );
};

export default Dragon;
