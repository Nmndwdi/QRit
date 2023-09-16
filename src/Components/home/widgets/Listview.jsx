import React from 'react';

const Listview = ({ data , shouldBeShown }) => {
    // console.log(data);
    const arrdata = Object.entries(data.items);
    // console.log(arrdata);
    // const arrDataName = [];
    // const arrDataLink = [];
    // const newArr = [];

    // for(let i=0;i<arrdata.length;i++)
    // {
    //     arrDataName.push(arrdata[i][1].itemName);
    //     arrDataLink.push(arrdata[i][1].itemLink);
    //     newArr.push([arrdata[i][1].itemName, arrdata[i][1].itemLink]);
    // }

  function buttonClicked(id)
  {
    console.log(id);
  }

  return (
    <>
        <p>user items list</p>
        <ul>
          {arrdata.map((item, index) => (
            <li key={index}>
              <span>Name: {item[1].itemName}</span>
              <br></br>
              <a href={item[1].itemLink}>Link: {item[1].itemLink}</a>
              {shouldBeShown===true ?(<button onClick={() => buttonClicked(item[1]._id)}>give command</button>):(<></>)}
            </li>
          ))}
        </ul>
    </>
  );
};

export default Listview;