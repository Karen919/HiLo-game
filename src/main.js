import { useState } from "react";
import Start from "./Start";
import Countdown from "./countdown";

export default function Main() {
  const [bidDefault, setBidDefault] = useState(0);
  const [randomName, setRandomName] = useState();
  const [randomMast, setRandomMast] = useState();
  const [rateHi,setRateHi] =useState();
  const [rateLo,setRateLo] =useState()
  const [percentageshi, setPercentagesHi] = useState();
  const [percentageslo, setPercentagesLo] = useState();
  const cardMast = ['xar', 'xach', 'sirt', 'qyap'];
  const cardName = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
  const percentagesHiArr = [0, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 0];
  const percentagesLoArr = percentagesHiArr.slice().reverse();
  const rateHiArr = [ 0, 1.2, 1.33, 1.5, 1.71, 2, 2.5, 3, 4, 6, 12,0];
  const rateLoArr = rateHiArr.slice().reverse();
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

  async function cart () {
    await setRandom()
    await hiLo()
  }

  return (
    <div className="main">
      <div className="contein_main">
        <div className="console_cards"></div>
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
