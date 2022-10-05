import React, { useState } from "react";
import useAction from "../../hooks/useAction";
import useAppSelector from "../../hooks/useAppSelector";
import { AuthType } from "../../types";
import { updateUserProfile } from "../../utils/crud";
import styles from "./Form.module.scss";

interface IFormValue {
    email: string,
    old_password: string,
    password: string,
    name: string,
    photoURL: string
};

type IsSuccessful = "pending" | "success" | "failed";

const Update = () => {
    const {id, email, name, photoURL} = useAppSelector(state => state.user);
    const {login, setIsOpen} = useAction();
    const [formValue, setFormValue] = useState<IFormValue>({
        email: email || "",
        name: name || "Anonim",
        photoURL: photoURL || "",
        old_password: "",
        password: ""
    });
    const [isSuccessful, setIsSuccessful] = useState<IsSuccessful>("pending")

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
            case("old_password"):
                copyFormField.old_password = e.target.value;        
                break;
            case("password"):
                copyFormField.password = e.target.value;        
                break;
            default:
                return;
        };

        setFormValue({...copyFormField});
    };

    const onSubmitHandler = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await updateUserProfile(formValue.name, formValue.email, formValue.photoURL, formValue.old_password, formValue.password);
        
        if(result){
            login({uid: id, email: formValue.email, name: formValue.name, photoURL: formValue.photoURL});
            setIsSuccessful("success");
            // setIsOpen({isOpen: false, type: AuthType.update});
        }else{
            setIsSuccessful("failed");
        }
    };

    if(isSuccessful === "success"){
        setTimeout(() => {
            setIsOpen({isOpen: false, type: AuthType.update});
        }, 3000);
        return (
            <h2 className={styles.success}>Success!</h2>
        );
    };

    if(isSuccessful === "failed"){
        setTimeout(() => {
            setIsOpen({isOpen: false, type: AuthType.update});
        }, 3000);
        return (
            <h2 className={styles.failed}>Failed!</h2>
        );
    };
    
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
                        placeholder="Enter photo url"
                        onChange={(e) => onChangeInputHandler(e, "photoURL")}
                        value={formValue.photoURL}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter email"
                        onChange={(e) => onChangeInputHandler(e, "email")}
                        value={formValue.email}
                    />
                    <h2 className={styles.auth__title}>Reset password</h2>
                    <div style={{width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, .4)", margin: "10px 0"}}></div>
                    <input 
                        type="text" 
                        placeholder="Enter old password"
                        onChange={(e) => onChangeInputHandler(e, "old_password")}
                        value={formValue.old_password}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter new password"
                        onChange={(e) => onChangeInputHandler(e, "password")}
                        value={formValue.password}
                    />
                    <button
                        onClick={onSubmitHandler}
                        type="submit"
                    >
                        OK
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
