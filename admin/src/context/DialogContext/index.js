import { createContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Buttons, Popup } from "../../component";

export const DialogContext = createContext();

export default function Dialog({ children }) {
    const initialValue = {
        isShow: false,
        title: "This is title",
        message: "This is message",
        onSuccess() { },
        onFailure() { },
    };
    const [dialogInfo, setDialogInfo] = useState(initialValue);

    const contextValue = {
        dialogInfo,
        setDialogInfo,
    };

    return (
        <DialogContext.Provider value={contextValue}>
            {children}

            <Popup isShow={dialogInfo.isShow}>
                <div className="dialog">
                    <p className="dialog__title">{dialogInfo.title}</p>
                    <p className="dialog__message">{dialogInfo.message}</p>
                    <div className="dialog__btns">
                        <Buttons
                            size="small"
                            radius
                            bgcolor="gray"
                            onClick={() => {
                                setDialogInfo(initialValue);
                                dialogInfo.onFailure();
                            }}
                        >
                            Close
                        </Buttons>
                        <Buttons
                            size="small"
                            radius
                            bgcolor="main"
                            onClick={() => {
                                setDialogInfo(initialValue);
                                dialogInfo.onSuccess();
                            }}
                        >
                            Save changes
                        </Buttons>
                    </div>
                    <div
                        className="dialog__close"
                        onClick={() => {
                            setDialogInfo(initialValue);
                            dialogInfo.onFailure();
                        }}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
            </Popup>
        </DialogContext.Provider>
    );
}
