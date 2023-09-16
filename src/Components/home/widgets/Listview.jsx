import React from 'react';
// import ItemContainer from './ItemContainer';
import ItemButton from './ItemButton';
import HomeService from '../services/home_service';

const Listview = ({ data , shouldBeShown , RetrieveData }) => {
    const arrdata = Object.entries(data.items);

  async function deleteItem(id)
  {
    const res = await HomeService.DeleteItem(id);
    if(res===true) RetrieveData();
  }
  function updateItem(id)
  {
    console.log(id,"update me!");
  }

  return (
    <>
        <p>user items list</p>
        <ul>
          {arrdata.map((item, index) => (
            // <div key={index}>
            //   <ItemContainer itemName={item[1].itemName} itemLink={item[1].itemLink}></ItemContainer>
            //    {shouldBeShown===true ?(<ItemButton onDelete={() => deleteItem(item[1]._id)} onUpdate={() => updateItem(item[1]._id)}></ItemButton>):(<></>)}
            // </div>
            
            <li key={index}>
              <span>Name: {item[1].itemName}</span>
              <br></br>
              <a href={item[1].itemLink}>Link: {item[1].itemLink}</a>
              {shouldBeShown===true ?(<ItemButton onDelete={() => deleteItem(item[1]._id)} onUpdate={() => updateItem(item[1]._id)}></ItemButton>):(<></>)}
            </li>
          ))}
        </ul>
    </>
  );
};

export default Listview;