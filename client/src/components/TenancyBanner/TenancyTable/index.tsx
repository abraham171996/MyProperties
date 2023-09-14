import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import styles from '../../TenancyBanner/tenancy.module.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { client } from '../../../service/Service';
import SkeletonLoader from '../../SkeletonLoader';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDataContext } from '../../../context/DataContext';
import { useSearchContext } from '../../../context/SearchContext';
import Modal from '../../Modal/modal';


const TenancyTable: React.FC = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedData, setSelectedDatas] = useState<any | null>(null);
    const [editedData, setEditedData] = useState<any | null>(null);
    const [showRowBtns, setShowRowBtns] = useState<number | null>(null);
    const { setSelectedData } = useDataContext();
    const { data, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            try {
                const response = await client.fetch(`*[ _type=="tenacyTable"]`);
                return response;
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        },
        cacheTime: 1000 * 60,
    });
    const deleteRow = useMutation(async (id: any) => {
        try {
            await client.delete(id);
        } catch (err) {
            console.error(err);
        }
    });
    const { searchTerm } = useSearchContext();

    const handleEditClick = (table: any) => {
        setSelectedDatas(table); 
        setEditedData(table); 
        setShowEditModal(true);
    };
    
    const filteredData = data
        ? data.filter((tabel: any) =>
            tabel.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];


    const handleRowClick = (table: object) => {
        setSelectedData({ ...table });


    };
    const handleShowBtnGroup = (event: React.MouseEvent, index: number) => {

        event.stopPropagation();


        setShowRowBtns((prevIndex) => (prevIndex === index ? null : index));
    };
    const handleDataChange = (newData: any) => {

        setSelectedData({ ...selectedData, ...newData });
    };
    return (
        <div className={styles.TenancyBanner__TenancyTable}>
            <div className={styles.TenancyBanner__TenancyTable__left}>
                <div className={styles.TenancyBanner__TenancyTable__left__title}>
                    {isLoading ? (
                        <SkeletonLoader width={70} height={25} />
                    ) : (
                        <h4>Applied</h4>
                    )}
                    {isLoading ? (
                        <SkeletonLoader width={70} height={25} />
                    ) : (
                        <h4>Tenant</h4>
                    )}
                    {isLoading ? (
                        <SkeletonLoader width={70} height={25} />
                    ) : (
                        <h4>Total Income</h4>
                    )}
                    {isLoading ? (
                        <SkeletonLoader width={70} height={25} />
                    ) : (
                        <h4>Income to Rent</h4>
                    )}
                </div>
                {filteredData.map((table: any, index: number) => (
                    isLoading ? (
                        <SkeletonLoader style={{ marginTop: "10px", marginLeft: '15px' }} width={"95%"} height={56} />
                    ) : (



                        <div key={index} className={styles.TenancyBanner__TenancyTable__left__row} onClick={() => handleRowClick(table)}>
                            <div className={`${styles.TenancyBanner__TenancyTable__left__row__col } ${styles.date}`}>
                                <span>{table.date}</span>
                            </div>
                            <div style={{ width: "180px", display: "flex", justifyContent: "start", textAlign: "start" }} className={styles.TenancyBanner__TenancyTable__left__row__col}>
                                <figure>
                                    <img src={table.image} alt="" />
                                </figure>
                                <p>{table.name}</p>
                            </div>
                            <div id='price' className={styles.TenancyBanner__TenancyTable__left__row__col}>
                                <p>${table.price}/mo</p>
                            </div>
                            <div id='income' className={styles.TenancyBanner__TenancyTable__left__row__col}>
                                <p>{table.income}X</p>
                            </div>
                            <div  className={`${styles.TenancyBanner__TenancyTable__left__row__col} ${styles.hdot}`}>
                                <BiDotsHorizontalRounded onClick={(event: any) => handleShowBtnGroup(event, index)} />
                                <div className={showRowBtns === index ? styles.horizontalBtn : styles.showBtns}>
                                    <button onClick={() => handleEditClick(table)} className={styles.edit}>Edit</button>
                                    {showEditModal && selectedData && (
                                        <Modal
                                            isOpen={showEditModal}
                                            onClose={() => setShowEditModal(false)}
                                            data={editedData}
                                            onDataChange={handleDataChange}
                                        />
                                    )}
                                    <button onClick={() => deleteRow.mutate(table._id)} className={styles.delete}>Delete</button>
                                </div>
                            </div>
                        </div>

                    )
                ))}
            </div>
        </div>

    );
};

export default TenancyTable;
