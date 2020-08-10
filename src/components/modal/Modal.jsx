import React from 'react';
import ReactDOM from 'react-dom';

import { useContext } from 'react';
import { UiContext } from '../../context/uiContext';

import './styles/Modal.css'

export const Modal = (props) => {

    const { ui, setUi } = useContext(UiContext);

    const handleCloseModal = () => {
        setUi({
            isOpen: !ui.isOpen
        })
    }

    if (!ui.isOpen) {
        return null
    }

    return (
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <button 
                        className="Modal__close-button"
                        onClick={handleCloseModal}    
                    >
                        x
                    </button>
                    {props.children}
                </div>
            </div>,
            document.getElementById('root')
        )
    );
}
