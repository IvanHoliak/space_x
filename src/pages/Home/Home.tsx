import { useEffect, useState } from "react";
import List from "../../components/List/List";
import styles from "./Home.module.scss";

export interface IDragons {
    id: string;
    name: string;
    flickr_images: string[];
};

const Home = () => {
    const [dragons, setDragons] = useState<IDragons[]>([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/dragons", {method: "GET"}).then(res => res.json()).then(result => setDragons(result)).catch(err => console.log("ERROR FETCH", err));
    }, []);

    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__wrapper}>
                    <h1>SPACE X Dragons</h1>
                    <div style={{width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, .4)", margin: "15px 0"}}></div>
                    {dragons ? 
                        <List dragons={dragons}/>
                    : null}
                </div>
            </div>
        </section>
    );
};

export default Home;
