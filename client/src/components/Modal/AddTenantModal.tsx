import React, { useState } from 'react';
import styles from './addTenantModal.module.scss';
import { client } from '../../service/Service';
import Swal from 'sweetalert2';

interface AddTenantModalProps {
  onClose: () => void;
}

const AddTenantModal: React.FC<AddTenantModalProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    image: '', 
    date: '',
    price: '',
    slug: '',
    income: '',
  });

  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setForm({...form,[event.target.value]:event.target.value})
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddTenant = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (
      form.name === '' ||
      form.image === '' ||
      form.date === '' ||
      form.income === '' ||
      form.price === ''
    ) {
      Swal.fire({
        title: 'Error!',
        html: 'Please fill all fields!',
        icon: 'error',
      });
    } else {
      client.create({
        _type: 'tenacyTable',
        name: form.name,
        image: form.image, 
        date: form.date,
        price: form.price,
        slug: form.slug,
        income: form.income,
      });
  
      Swal.fire({
        title: 'Good job!',
        html: 'You added successfully!',
        icon: 'success',
      });
  
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Add Tenant</h2>
        <form onSubmit={handleAddTenant}>
          <input
            type="text"
            name="name"
            placeholder="Tenant Name"
            value={form.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="image"
           value={form.image}
           placeholder='Image'
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={form.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleInputChange}
          />
          <input
            type="slug"
            name="slug"
            placeholder="Slug"
            value={form.slug}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="income"
            placeholder="Income"
            value={form.income}
            onChange={handleInputChange}
          />
          <button type="submit">Add Tenant</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddTenantModal;
