import List from "../../components/List/List";
import Loader from "../../components/Loader/Loader";
import { dragonAPI } from "../../services/DragonService";
import styles from "./Home.module.scss";

const Home = () => {
    const {data, error, isLoading, refetch} = dragonAPI.useGetAllDragonsQuery("");

    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__wrapper}>
                    <h1>SPACE X Dragons</h1>
                    <div style={{width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, .4)", margin: "15px 0"}}></div>
                    {isLoading && <Loader />}
                    {data && <List dragons={data}/>}
                    {error && <p>Error</p>}
                </div>
            </div>
        </section>
    );
};

export default Home;
