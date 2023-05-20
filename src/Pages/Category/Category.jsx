import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../CategoryCard/CategoryCard';


const Category = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/example')
    .then(res => res.json())
    .then(data => setCars(data))
  }, [])
  // console.log(cars)
  return (
    <div>
      <h3 className='text-5xl text-center font-bold'>Shop By Category</h3>
          <Tabs>
    <TabList>
      <div className='flex justify-center gap-4 mt-5'>
      <Tab><button className='bg-indigo-500 p-3 rounded'>Police Car</button></Tab>
      <Tab><button className='bg-purple-500 p-3 rounded'>Spots Cars</button></Tab>
      <Tab><button className='bg-orange-500 p-3 rounded'>Regular Cars</button></Tab>
      </div>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
     
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      {
        cars.map(car => <CategoryCard
        
          key={car._id}
            cate={car}
        ></CategoryCard>
 
       )
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Category;