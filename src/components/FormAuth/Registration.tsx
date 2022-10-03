import { FC, useEffect, useState } from "react";
import useAction from "../../hooks/useAction";
import { AuthType } from "../../types";
import authorization from "../../utils/auth";
import styles from "./FormAuth.module.scss";

interface IFiendValue {
    value: string;
    isValid: boolean;
};

interface IFormValue {
    email: IFiendValue,
    password: IFiendValue,
    confirmPassword: IFiendValue
};

const Registration: FC = () => {
    const [formValue, setFormValue] = useState<IFormValue>({
        email: {
            value: "",
            isValid: false,
        },
        password: {
            value: "",
            isValid: false
        },
        confirmPassword: {
            value: "",
            isValid: false
        }
    });
    const [isActive, setIsActive] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const {setIsOpen, auth} = useAction();

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        e.preventDefault();
        const copyFormField: IFormValue = {...formValue};
        switch(field){
            case "email": 
                if(e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                    copyFormField.email = {
                        isValid: true,
                        value: e.target.value
                    };
                }else{
                    copyFormField.email = {
                        isValid: false,
                        value: e.target.value
                    };
                };
                break;
            case "password":
                if(e.target.value.length >= 6 && e.target.value.length <= 18) {
                    copyFormField.password = {
                        isValid: true,
                        value: e.target.value
                    };

                    if(formValue.confirmPassword.value.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()){
                        copyFormField.password = {
                            isValid: true,
                            value: e.target.value
                        };
                        copyFormField.confirmPassword = {
                            ...formValue.confirmPassword,
                            isValid: true
                        };
                    };
                }else{
                    copyFormField.password = {
                        isValid: false,
                        value: e.target.value
                    };
                };
                break;
            case "confirm":
                if(formValue.password.value.toLocaleLowerCase() === e.target.value.toLocaleLowerCase() && e.target.value.length >= 6 && e.target.value.length <= 18) {
                    copyFormField.confirmPassword = {
                        isValid: true,
                        value: e.target.value
                    };
                }else{
                    copyFormField.confirmPassword = {
                        isValid: false,
                        value: e.target.value
                    };
                };
                break;
            default:
                setFormValue(formValue);
        };
        setFormValue({...copyFormField});
    };

    useEffect(() => {
        if(formValue.email.isValid && formValue.password.isValid && formValue.confirmPassword.isValid){
            setIsActive(true);
        }else{
            setIsActive(false);
        };
    }, [formValue]);

    const onSubmitHandler = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const reg = await authorization(formValue.email.value, formValue.password.value, AuthType.registration);
        
        if(reg){
            auth(reg);
            setIsOpen({isOpen: false, type: AuthType.registration});
            setError(false);
        }else{
            setError(true);
        };
    };

    return (
        <div className={styles.auth}>
            <h2 className={styles.auth__title}>Registration</h2>
            <div style={{width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, .4)", margin: "10px 0"}}></div>
            <div
                className={styles.auth__form_wrapper}
            >
                <form
                    className={styles.auth__form}
                >
                    <input 
                        type="email" 
                        placeholder="Enter email"
                        onChange={(e) => onChangeInputHandler(e, "email")}
                        value={formValue.email.value}
                    />
                    <input 
                        type="password" 
                        placeholder="Enter password"
                        onChange={(e) => onChangeInputHandler(e, "password")}
                        value={formValue.password.value}
                    />
                    <input 
                        type="password" 
                        placeholder="Enter password"
                        onChange={(e) => onChangeInputHandler(e, "confirm")}
                        value={formValue.confirmPassword.value}
                    />
                    <button 
                        onClick={onSubmitHandler}
                        type="submit"
                        disabled={!isActive}
                        >
                        OK
                    </button>
                    {error && (<p style={{color: "red", fontSize: 16}}>Some error, retry late</p>)}
                </form>
            </div>
        </div>
    );
};

export default Registration;
