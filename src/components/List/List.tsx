import { FC } from "react";
import { Link } from "react-router-dom";
import { IDragon } from "../../types";
import styles from "./List.module.scss";

interface IList {
    dragons: IDragon[];
};

const List: FC<IList> = ({dragons}) => {
    return (
        <div className={styles.list}>
            {dragons.map(dragon => (
                <Link 
                    key={dragon.id}
                    className={styles.list__item}
                    to={`${dragon.id}`}
                >
                    {/* <img src={dragon.flickr_images[0]} alt={`Space X ${dragon.name} Rocket`} style={{maxWidth: 236}}/> */}
                    <h2>{dragon.name}</h2>
                </Link>
            ))}
        </div>
    );
};

export default List;
