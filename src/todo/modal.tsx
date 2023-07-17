import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../stores/modal";
import { RootState } from "../stores";
import modals from "../components/modals";

export default function Modal() {
  const dispatch = useDispatch();
  const { name, data } = useSelector((state: RootState) => state.modal);
  const modal = modals.find((modal:any) => modal.name === name);

  const close = () => {
    dispatch(closeModal());
  };

  if (!modal) {
    return null;
  }

  const ModalComponent = modal.element;

  return (
    <div className="modal">
      <div className="modal-inner">
        <ModalComponent close={close} data={data} />
      </div>
    </div>
  );
}
