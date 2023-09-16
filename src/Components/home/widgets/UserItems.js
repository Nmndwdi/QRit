import React, { useState , useEffect } from 'react'
import HomeService from '../services/home_service'
import Listview from './Listview';
// import PropTypes from 'prop-types';

function UserItems({isChanged,toggleStateChanged}) {

  const shouldBeShown = true;

  const [localIsChanged , setLocalIsChanged] = useState(isChanged);
  const [data,setData] = useState(null);
  async function RetrieveData()
  {
    const resdata = await HomeService.GetItems();
    setData(resdata);
  }

  useEffect(() => {
    setLocalIsChanged(isChanged);
  }, [isChanged]);

  const handleToggle = () => {
    const updatedValue = !localIsChanged;
    setLocalIsChanged(updatedValue);
    setTimeout(() => {
      toggleStateChanged(updatedValue);
    });
  };

  if(localIsChanged===true)
  {
    RetrieveData();
    handleToggle();
  }

  if(data==null) RetrieveData();

  return (
    <div>
        {data!=null ?(<Listview data={data} shouldBeShown={shouldBeShown}/>):(<></>)}
    </div>
  )
}

// UserItems.propTypes = {
//   isChanged: PropTypes.bool.isRequired,
//   toggleStateChanged: PropTypes.func.isRequired,
// };


export default UserItems