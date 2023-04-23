import { useState } from "react";
import Start from "./Start";
import Countdown from "./countdown";

export default function Main() {
  const [bidDefault, setBidDefault] = useState(0);
  const [randomName, setRandomName] = useState('0');
  const [randomMast, setRandomMast] = useState('0');
  const [rateHi,setRateHi] =useState('0');
  const [rateLo,setRateLo] =useState('0')
  const [percentageshi, setPercentagesHi] = useState('0');
  const [percentageslo, setPercentagesLo] = useState('0');
  const [div,setdiv] = useState();
  const [div1,setdiv1] = useState()
  const [div2,setdiv2] = useState()
  const [div3,setdiv3] = useState()
  const [div4,setdiv4] = useState()
  const [div5,setdiv5] = useState()
  const [div6,setdiv6] = useState()
  const [div7,setdiv7] = useState()
  const [div8,setdiv8] = useState()
  const cardMast = ['xar', 'xach', 'sirt', 'qyap'];
  const cardName = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
  const percentagesHiArr = [0, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 0];
  const percentagesLoArr = percentagesHiArr.slice().reverse();
  const rateHiArr = [ 0, 1.2, 1.33, 1.5, 1.71, 2, 2.5, 3, 4, 6, 12,0];
  const rateLoArr = rateHiArr.slice().reverse();
  const consoleArr = [];

  async function setRandom() {
    setRandomName(Math.floor(Math.random() * 12));
    setRandomMast(Math.floor(Math.random() * 4));
    return Promise.resolve
  }
  async function hiLo () {
    setPercentagesHi(`${percentagesLoArr[cardName.indexOf(document.getElementById('topr').innerText)]}%`);
    setPercentagesLo(`${percentagesHiArr[cardName.indexOf(document.getElementById('topr').innerText)]}%`);
    setRateHi(`${rateHiArr[cardName.indexOf(document.getElementById('topr').innerText)]}x`);
    setRateLo(`${rateLoArr[cardName.indexOf(document.getElementById('topr').innerText)]}x`);
    return Promise.resolve
  }
  async function consCards() {
    consoleArr.push(document.getElementById('topr').innerHTML)
    const consoleOutput = consoleArr.reverse().slice(0,consoleArr.length/2).slice(0,9);
    setdiv(<span className="console_card">{consoleOutput[0]}</span>)
    setdiv1((cardName.indexOf(consoleOutput[0]) < cardName.indexOf(consoleOutput[1])) ? <span className="console_card_orange">{consoleOutput[1]}</span> :
          (cardName.indexOf(consoleOutput[0]) === cardName.indexOf(consoleOutput[1])) ? <span className="console_card">{consoleOutput[1]}</span> :
          <span className="console_card_gren">{consoleOutput[1]}</span>);
    setdiv2((cardName.indexOf(consoleOutput[1]) < cardName.indexOf(consoleOutput[2])) ? <span className="console_card_orange">{consoleOutput[2]}</span> :
          (cardName.indexOf(consoleOutput[1]) === cardName.indexOf(consoleOutput[2])) ? <span className="console_card">{consoleOutput[2]}</span> :
          <span className="console_card_gren">{consoleOutput[2]}</span>);
    setdiv3((cardName.indexOf(consoleOutput[2]) < cardName.indexOf(consoleOutput[3])) ? <span className="console_card_orange">{consoleOutput[3]}</span> :
          (cardName.indexOf(consoleOutput[2]) === cardName.indexOf(consoleOutput[3])) ? <span className="console_card">{consoleOutput[3]}</span> :
          <span className="console_card_gren">{consoleOutput[3]}</span>);
    setdiv4((cardName.indexOf(consoleOutput[3]) < cardName.indexOf(consoleOutput[4])) ? <span className="console_card_orange">{consoleOutput[4]}</span> :
          (cardName.indexOf(consoleOutput[3]) === cardName.indexOf(consoleOutput[4])) ? <span className="console_card">{consoleOutput[4]}</span> :
          <span className="console_card_gren">{consoleOutput[4]}</span>);
    setdiv5((cardName.indexOf(consoleOutput[4]) < cardName.indexOf(consoleOutput[5])) ? <span className="console_card_orange">{consoleOutput[5]}</span> :
          (cardName.indexOf(consoleOutput[4]) === cardName.indexOf(consoleOutput[5])) ? <span className="console_card">{consoleOutput[5]}</span> :
          <span className="console_card_gren">{consoleOutput[5]}</span>);
    setdiv5((cardName.indexOf(consoleOutput[4]) < cardName.indexOf(consoleOutput[5])) ? <span className="console_card_orange">{consoleOutput[5]}</span> :
          (cardName.indexOf(consoleOutput[4]) === cardName.indexOf(consoleOutput[5])) ? <span className="console_card">{consoleOutput[5]}</span> :
          <span className="console_card_gren">{consoleOutput[5]}</span>);
    setdiv6((cardName.indexOf(consoleOutput[5]) < cardName.indexOf(consoleOutput[6])) ? <span className="console_card_orange">{consoleOutput[6]}</span> :
          (cardName.indexOf(consoleOutput[5]) === cardName.indexOf(consoleOutput[6])) ? <span className="console_card">{consoleOutput[6]}</span> :
          <span className="console_card_gren">{consoleOutput[6]}</span>);
    setdiv7((cardName.indexOf(consoleOutput[6]) < cardName.indexOf(consoleOutput[7])) ? <span className="console_card_orange">{consoleOutput[7]}</span> :
          (cardName.indexOf(consoleOutput[6]) === cardName.indexOf(consoleOutput[7])) ? <span className="console_card">{consoleOutput[7]}</span> :
          <span className="console_card_gren">{consoleOutput[7]}</span>);
    setdiv8((cardName.indexOf(consoleOutput[7]) < cardName.indexOf(consoleOutput[8])) ? <span className="console_card_orange">{consoleOutput[8]}</span> :
          (cardName.indexOf(consoleOutput[7]) === cardName.indexOf(consoleOutput[8])) ? <span className="console_card">{consoleOutput[8]}</span> :
          <span className="console_card_gren">{consoleOutput[8]}</span>);
    // return Promise.resolve
  }
  async function cart () {
    await setRandom()
    await hiLo()
    await consCards()
  }

  return (
    <div className="main">
      <div className="contein_main">
        <div className="console_cards">
          {div}
          {div1}
          {div2}
          {div3}
          {div4}
          {div5}
          {div6}
          {div7}
          {div8}
          </div>
        <section className="section_x12">
          <div className="x12_bg"></div>
          <div className="x12_txt">x12</div>
          <div>
            <span className="x12">2</span>
            <span className="x12">3</span>
            <span className="x12">4</span>
            <span className="x12">5</span>
            <span className="x12">6</span>
            <span className="x12">7</span>
            <span className="x12">8</span>
            <span className="x12">9</span>
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
        </section>
        <section className="cards">
          <div className="card" id="card">
            <div className="card_top">
              <div className="cards_top" id="topr">{cardName[randomName]}</div>
              <div id="top" className={cardMast[randomMast]}></div>
            </div>            
            <div className='center' id="second">
              <Countdown cart={cart}/>
            </div>
            <div className="card_content">
              <div id="botom" className={cardMast[randomMast]}></div>
              <div className="cards_bottom" id="name">{cardName[randomName]}</div>
            </div>
          </div>
        </section>
        <section className="section_hilo">
          <div className="hi">
          <div className="conteiner_x">
              <span id="hi_%">{percentageslo}</span>
              <span id="hi_x" className="x">{rateHi}</span>
            </div>
            <div className="hi_txt">HI</div>
          </div>
          <div className="lo">
            <div className="lo_txt">LO</div>
            <div className="conteiner_x">
              <span id="lo_%">{percentageshi}</span>
              <span id="lo_x" className="x">{rateLo }</span>
            </div>
          </div>
        </section>
        </div>
      </div>
      <Start bidDefault ={bidDefault} setBidDefault = {setBidDefault} />
  </div>
  );
}
