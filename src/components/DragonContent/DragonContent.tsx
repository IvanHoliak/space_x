import React, { FC } from "react";
import { IDragon } from "../../types";
import Carousel from "../Carousel/Carousel";
import styles from "./DragonContent.module.scss";
import LinkArrow from "../../assets/svg/arrow_link.svg";
import useAppSelector from "../../hooks/useAppSelector";
import AddFavoritesButton from "../Button/AddFavoritesButton";

interface IDragonContent {
    data: IDragon
};

const DragonContent: FC<IDragonContent> = ({data}) => {
    const {isAuth, id} = useAppSelector(state => state.user);

    return (
        <div className={styles.dragon__content}>
            {isAuth && <AddFavoritesButton userId={id as string} dragonId={data.id} title={data.name}/>}
            <a href={data.wikipedia} target="_blank" rel="noreferrer">
                <div className={styles.dragon__content_header}>
                    <h2 className={styles.dragon__content_header_title}>
                        {data.name}
                        <img src={LinkArrow} alt="Link arrow to wiki" />
                    </h2>
                </div>
            </a>
            <Carousel images={data.flickr_images}/>
            <article className={styles.dragon__content_info}>
                <p className={styles.dragon__content_info_desc}>
                    {data.description}
                </p>
                <table className={styles.dragon__content_info_details}>
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
        </div>
    );
};

export default DragonContent;
