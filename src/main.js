import { useState} from "react";
import Start from "./Start";
import Countdown from 'react-countdown';


export default function Main() {
  const [bidDefault, setBidDefault] = useState(0);
  const cardName = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const cardMast = ['xar','xach','sirt','qyap'];
  const [random1, setRandom1] = useState(0);
  const [random2,setrandom2] = useState(0)
  const b = [];
  function foo (){
    setRandom1(Math.floor(Math.random() * 14))
    setrandom2(Math.floor(Math.random() * 4))
    b.push(random1)
    document.getElementById('top').className = `${cardMast[random2]}`
    document.getElementById('botom').className = `${cardMast[random2]}`;
 
  }

  const  renderer = ({seconds}) =>{
    if (seconds ===0) {
      foo()
    }
    return seconds;
  };

 
  





  
  return (
    <div className="main">
      <div className="contein_main">
        <div className="console_cards"></div>
        <section className="section_x12">
          <div className="x12_bg"></div>
          <div className="x12_txt">x12</div>
          <div>
            <span className="x12">1</span>
            <span className="x12">2</span>
            <span className="x12">3</span>
            <span className="x12">4</span>
            <span className="x12">5</span>
            <span className="x12">6</span>
            <span className="x12">7</span>
            <span className="x12">8</span>
            <span className="x12">9</span>
            <span className="x12">10</span>
            <span className="x12">J</span>
            <span className="x12">Q</span>
            <span className="x12">K</span>
            <span className="x12">A</span>
          </div>
        </section>
        <div className="section_contein">
        <section className="section_left">
          <div className="section_left_intro"><span>2-9</span><span className="x">x1.5</span></div>
          <div className="section_left_intro"><span>JQKA</span><span className="x">X3</span></div>
          <div className="section_left_intro"><span>KA</span><span className="x">x6</span></div>
          <div className="section_left_intro"><span>A</span><span className="x">x12</span></div>
          <div className="section_left_intro xred"><span>Կարմիր</span><span className="x">x2</span></div>
          <div className="section_left_intro xblack"><span>Սև</span><span className="x">x2</span></div>
          <div className="section_left_intro xblue"><span>Ջոկեռ</span><span className="x"> x24</span></div>
        </section>
        <section className="cards">
          <div className="card">
            <div className="card_top">
              <div className="cards_top" id="topr">{cardName[random1]}</div>
              <div id="top"></div>
            </div>            
            <div className='center' id="second"><Countdown date={Date.now() + 5000} renderer={renderer}/> </div>
            <div className="card_content">
              <div id="botom"></div>
              <div className="cards_bottom">{cardName[random1]}</div>
            </div>
          </div>
        </section>
        <section className="section_hilo">
          <div className="hi">
          <div className="conteiner_x">
              <span id="hi_%">{}</span>
              <span id="hi_x" className="x">x</span>
            </div>
            <div className="hi_txt">HI</div>
          </div>
          <div className="lo">
            <div className="lo_txt">LO</div>
            <div className="conteiner_x">
              <span id="lo_%">{}</span>
              <span id="lo_x" className="x">x</span>
            </div>
          </div>
        </section>
        </div>
      </div>
      <Start bidDefault ={bidDefault} setBidDefault = {setBidDefault}/>
  </div>
  );
}
