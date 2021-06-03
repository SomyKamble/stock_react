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

      const [totalValue, setTotalValue] = useState(1);
      let total = 0;

      if(Object.keys(content).length !== 0){
          Object.keys(content['Stock']).slice(0, 20).map((keyName, id)=>{
            // console.log(content['Stock'][keyName]);
            total +=(content['Stock'][keyName]['last_price']*10);
          })

          
      }
      // setTotalValue(total);




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
          <th className="th-custom">Real Time Price</th>
          <th className="th-custom">Quantity</th>
          <th className="th-custom">Market Value</th>
          <th className="th-custom">Weight</th>
          <th className="th-custom">Total Return</th>
          <th className="th-custom">CTR</th>
          <th className="th-custom">%1D change</th>
        </tr>
        {Object.keys(content).length !== 0&&Object.keys(content['Stock']).slice(0, 20).map((keyName, id) => {
            return (
                <tr className="tr-custom" key={id}>
                <td className="td-custom">{keyName}</td>
                <td className="td-custom">{content['Stock'][keyName]['change'].toFixed(2)}</td>
                <td className="td-custom">{content['Stock'][keyName]['close'].toFixed(2)}</td>
                <td className="td-custom">{content['Stock'][keyName]['last_price'].toFixed(2)}</td>
                <td className="td-custom">10</td>
                <td className="td-custom">{((content['Stock'][keyName]['last_price'])*10).toFixed(2)}</td>
                <td className="td-custom">{((content['Stock'][keyName]['last_price'])*10/total).toFixed(2)}</td>
                <td className="td-custom">{((content['Stock'][keyName]['last_price']-10)*10).toFixed(2)}</td>
                <td className="td-custom">{((content['Stock'][keyName]['last_price'])*10/(total)*(content['Stock'][keyName]['last_price']-10)*10).toFixed(2)}</td>                
                <td className="td-custom">{((content['Stock'][keyName]['last_price']-content['Stock'][keyName]['close'])/content['Stock'][keyName]['close']).toFixed(2)}</td>
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;