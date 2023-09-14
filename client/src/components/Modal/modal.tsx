import React, { useState } from 'react';
import {client} from '../../service/Service';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: { 
    _id: any;
    name: string;
    price: string;
    image: string;
    income: string;
  };
  onDataChange: (data: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, onDataChange }) => {
    const [editedData, setEditedData] = useState(data);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSave = async () => {
        try {
            console.log('Before update:', editedData);
            const { _id, ...updatedData } = editedData;
            const patchOperation = {
                set: updatedData,
            };

            
            await client.patch(_id, patchOperation);
            
            console.log('Updated data:', updatedData);
            onDataChange(updatedData);

            console.log(updatedData);
            
            const postOperation = {
                method: 'POST',
                data: updatedData, 
            };
            console.log(postOperation);
            
            await client.fetch(`*[ _type=="tenacyTable"]`, postOperation); 

            onClose();
        } catch (error: any) {
            console.error('Error updating data:', error);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Data</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={editedData.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={editedData.price} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id="image" name="image" value={editedData.image} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="income">Income:</label>
                    <input type="text" id="income" name="income" value={editedData.income} onChange={handleInputChange} />
                </div>
                <div className='btngroup'>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
