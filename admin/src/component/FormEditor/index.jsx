import { AiOutlineClose } from "react-icons/ai";
import { Popup } from "../../component";

const FormEditor = ({info, setInfo, children, ...props }) => {
  
  return (
    <Popup isShow={info.isShow}>
      <div className="formEditor">
        <div className="formEditor__title">
          {info.title}
          <div className="formEditor__close">
            <AiOutlineClose onClick={() => setInfo({...info, isShow: false})} />
          </div>
        </div>
        <div className="formEditor__form" style={props.style}>
          {children}
        </div>
      </div>
    </Popup>
  );
};

export default FormEditor;
