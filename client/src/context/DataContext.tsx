import React, { createContext, useContext, useState, ReactNode } from 'react';

type Data = {
  selectedData: any;
  setSelectedData: React.Dispatch<React.SetStateAction<any>>;
};

const DataContext = createContext<Data | undefined>(undefined);


type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
    const initialSelectedData = {
        name: 'Nick Thompson', 
       image: 'https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=',
        date:'Dec 9, 11.00 AM',
        price:'4,500',
        income:'2.3'
      };
    
      const [selectedData, setSelectedData] = useState(initialSelectedData);

  const handleSetSelectedData = (data: any) => {
    try {
      setSelectedData(data);
    } catch (error) {
      console.error('Error setting selected data:', error);
    }
  };

  return (
    <DataContext.Provider value={{ selectedData, setSelectedData: handleSetSelectedData }}>
      {children}
    </DataContext.Provider>
  );
};


export const useDataContext = (): Data => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

