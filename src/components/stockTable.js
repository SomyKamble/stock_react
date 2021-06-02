import Firebase from "firebase";
import config from "./config";
import React, { useEffect, useState} from "react";
import LazyLoad from 'react-lazyload';
import styles from './stockTable.css';



const StockTable = (props) => {
    const [content, setContent] = useState({});

    // useEffect(() => {
    //     if (!Firebase.apps.length) {
    //         Firebase.initializeApp(config);
    //     }
        
    //     let ref = Firebase.database().ref();
    //     ref.on("value", (snapshot) => {
    //       const state = snapshot.val();
    //       setContent(state);
    //     });
    //   });


      useEffect(() => {
        (async () => {
            if (!Firebase.apps.length) {
                Firebase.initializeApp(config);
            }
            
            let ref = Firebase.database().ref();
            ref.on("value", (snapshot) => {
              const state = snapshot.val();
              setContent(state);
            });
          })();
      }, []);


    //   console.log(content['Stock']);



// for(let i=0;i<content['Stock'].length;i++){
//     console.log(i);
// }


  return (
    <div className="container" style={{textAlign:"center"}}>
      <h1 style={{fontSize:'50px'}}>Stock Table</h1>

      <table className="table-custom">
        <tbody>
        <tr className="tr-custom">
          <th className="th-custom">Token</th>
          <th className="th-custom">Change</th>
          <th className="th-custom">Close</th>
          <th className="th-custom">Last Price</th>
        </tr>
        {Object.keys(content).length !== 0&&Object.keys(content['Stock']).map((keyName, id) => {
            return (
                <tr className="tr-custom" key={id}>
                <td className="td-custom">{keyName}</td>
                <td className="td-custom">{content['Stock'][keyName]['change']}</td>
                <td className="td-custom">{content['Stock'][keyName]['close']}</td>
                <td className="td-custom">{content['Stock'][keyName]['last_price']}</td>
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;