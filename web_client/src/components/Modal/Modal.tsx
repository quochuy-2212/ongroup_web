import { AiOutlineClose } from 'react-icons/ai';

interface IModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: IModalProps) {
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`fixed inset-0 z-[50] flex justify-center items-end xl:items-center transition-colors duration-500
        ${open ? 'visible bg-black/50' : 'invisible'}`}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={` w-full h-auto xl:w-2/3 xl:rounded-lg
                } bg-white shadow transition-all duration-500
                            ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
                <button
                    onClick={onClose}
                    className="xl:invisible absolute -top-20 left-1/2 -translate-x-1/2 flex justify-center items-center font-bold rounded-full 
                    border-2 border-solid border-white w-12  h-12    "
                >
                    <AiOutlineClose title="Close" size="48" className="hover:text-red-600 text-white p-2" />
                </button>

                <div className="h-[92%] overflow-y-auto  space-y-5 rounded-xl">{children}</div>
            </div>
        </div>
    );
}
