import React, { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import styles from "./Form.module.scss";

interface IFormValue {
    email: string,
    name: string,
    photoURL: string
};

const Update = () => {
    const {email, name, photoURL} = useAppSelector(state => state.user);
    const [formValue, setFormValue] = useState<IFormValue>({
        email: email || "",
        name: name || "",
        photoURL: photoURL || ""
    });

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const copyFormField: IFormValue = {...formValue};

        switch(type){
            case("name"):
                copyFormField.name = e.target.value;        
                break;
                case("email"):
                copyFormField.email = e.target.value;        
                break;
                case("photoURL"):
                copyFormField.photoURL = e.target.value;        
                break;
            default:
                return;
        };

        setFormValue({...copyFormField});
    };

    useEffect(() => {
        console.log(formValue);
    }, [formValue]);
    
    return (
        <div className={styles.auth}>
            <h2 className={styles.auth__title}>Update</h2>
            <div style={{width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, .4)", margin: "10px 0"}}></div>
            <div
                className={styles.auth__form_wrapper}
            >
                <form
                    className={styles.auth__form}
                >
                    <input 
                        type="email" 
                        placeholder="Enter name"
                        onChange={(e) => onChangeInputHandler(e, "name")}
                        value={formValue.name}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter email"
                        onChange={(e) => onChangeInputHandler(e, "email")}
                        value={formValue.email}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter photo url"
                        onChange={(e) => onChangeInputHandler(e, "photoURL")}
                        value={formValue.photoURL}
                    />
                    <button
                    >
                        OK
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
