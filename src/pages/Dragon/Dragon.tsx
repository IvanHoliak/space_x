import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
import { dragonAPI } from "../../services/DragonService";
import styles from "./Dragon.module.scss";

const Dragon = () => {
    const {id} = useParams();

    const {data, error, isLoading, refetch} = dragonAPI.useGetDragonDetailsQuery(id);

    return (
        <div className={styles.dragon}>
            <div className="container">
                <div className={styles.dragon__wrapper}>
                    {isLoading && <Loader />}
                    {data && (
                        <>
                            <a href={data.wikipedia} target="_blank" rel="noreferrer">
                                <h2 className={styles.dragon__title}>{data.name}</h2>
                            </a>
                            <Carousel images={data.flickr_images}/>
                            <article className={styles.dragon__info}>
                                <p className={styles.dragon__info_desc}>
                                    {data.description}
                                </p>
                                <table className={styles.dragon__info_details}>
                                    <tbody>
                                        <tr>
                                            <td>First flight</td>
                                            <td colSpan={2} >{data.first_flight}</td>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th>kg.</th>
                                            <th>lb.</th>
                                        </tr>
                                        <tr>
                                            <td>Dry mass</td>
                                            <td>{data.dry_mass_kg}</td>
                                            <td>{data.dry_mass_lb}</td>
                                        </tr>
                                        <tr>
                                            <td>Launch payload mass</td>
                                            <td>{data.launch_payload_mass.kg}</td>
                                            <td>{data.launch_payload_mass.lb}</td>
                                        </tr>
                                        <tr>
                                            <td>Return payload mass</td>
                                            <td>{data.return_payload_mass.kg}</td>
                                            <td>{data.return_payload_mass.lb}</td>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <th>m.</th>
                                            <th>ft.</th>
                                        </tr>
                                        <tr>
                                            <td>Height with trunk</td>
                                            <td>{data.height_w_trunk.meters}</td>
                                            <td>{data.height_w_trunk.feet}</td>
                                        </tr>
                                        <tr>
                                            <td>Diameter</td>
                                            <td>{data.diameter.meters}</td>
                                            <td>{data.diameter.feet}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                        </>
                    )}
                    {error && <p>Error</p>}
                </div>
            </div>
        </div>
    );
};

export default Dragon;
