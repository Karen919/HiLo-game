
// export default function Start (props) {

//      function fuu () {

//         document.getElementById('header').innerText = localStorage.getItem('btn');
//         document.getElementById('header').style.opacity = '1'
//         alert(localStorage.getItem('btn'))
//     }
//     return(
//         <div className="start">
//         <div className="startConteiner">
//             <div className="bid">
//                 <div className="bid_plus_minus">
//                     <button className="bid_plus" onClick={() => props.setBidDefault(props.bidDefault - 10)}>-</button>
//                     <div className="bidDefault">{props.bidDefault}</div>
//                     <button className="bid_minus" onClick={() => props.setBidDefault( props.bidDefault +10)} >+</button>
//                 </div>
//                 <div className="bids_all_conteiner">
//                     <button className="bids_all" onClick={() => props.setBidDefault( props.bidDefault * 2)}>x2</button>
//                     <button className="bids_all" onClick={() => props.setBidDefault( props.bidDefault +50)}>+50</button>
//                     <button className="bids_all" onClick={() => props.setBidDefault( props.bidDefault +250)}>+250</button>
//                 </div>
//             </div>
//             <div className='start_btn' onClick={fuu}>START</div>
//         </div>
//         </div>
//     )
// }
