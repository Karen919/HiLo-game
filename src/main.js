import {useEffect, useState } from "react";

export default function Main(props) {
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
  const [btn,setBtn] = useState('')  
  const [count, setCount] = useState(3);
  const cardMast = ['xar', 'xach', 'sirt', 'qyap'];
  const cardName = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
  const percentagesHiArr = [0, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8, 0];
  const percentagesLoArr = percentagesHiArr.slice().reverse();
  const rateHiArr = [ 0, 1.2, 1.33, 1.5, 1.71, 2, 2.5, 3, 4, 6, 12,0];
  const rateLoArr = rateHiArr.slice().reverse();
  const buttons = document.querySelectorAll('.onClick');
  const header = document.getElementById('header');
  const finishTopInnerText = [];
  const finishTopInnerHtml = [];
  const consoleArr = [];
  const hi = [];
  const lo = [];
  const initialCount = 10;
  localStorage.setItem('x', randomName);
  localStorage.setItem('bid', bidDefault);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          cart()
            return initialCount;
        } else {
          return prevCount - 1;
        }; 
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [initialCount]);

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => {
          btn.classList.remove('click');
        });
        button.classList.toggle('click');
        localStorage.setItem('btn', button.id);
        setBtn(button.id)
      });
    }); 
  
async function cart () {
  async function setRandom() {
    setRandomMast(Math.floor(Math.random() * 4));
    setRandomName(Math.floor(Math.random() * 12)); 
    return Promise.resolve
  }

  async function hilo() {
    const topInnerText = document.getElementById('topr').innerText;
    const header = document.getElementById('header');

    setPercentagesHi(`${percentagesLoArr[cardName.indexOf(topInnerText)]}%`);
    setPercentagesLo(`${percentagesHiArr[cardName.indexOf(topInnerText)]}%`);
    setRateHi(`${rateHiArr[cardName.indexOf(topInnerText)]}`);
    setRateLo(`${rateLoArr[cardName.indexOf(topInnerText)]}`);

  consoleArr.unshift(document.getElementById('topr').innerHTML)
  setdiv(<span className="console_card">{consoleArr[0]}</span>)
  setdiv1((cardName.indexOf(consoleArr[0]) < cardName.indexOf(consoleArr[1])) ? <span className="console_card_orange">{consoleArr[1]}</span> :
        (cardName.indexOf(consoleArr[0]) === cardName.indexOf(consoleArr[1])) ? <span className="console_card">{consoleArr[1]}</span> :
        <span className="console_card_gren">{consoleArr[1]}</span>);
  setdiv2((cardName.indexOf(consoleArr[1]) < cardName.indexOf(consoleArr[2])) ? <span className="console_card_orange">{consoleArr[2]}</span> :
        (cardName.indexOf(consoleArr[1]) === cardName.indexOf(consoleArr[2])) ? <span className="console_card">{consoleArr[2]}</span> :
        <span className="console_card_gren">{consoleArr[2]}</span>);
  setdiv3((cardName.indexOf(consoleArr[2]) < cardName.indexOf(consoleArr[3])) ? <span className="console_card_orange">{consoleArr[3]}</span> :
        (cardName.indexOf(consoleArr[2]) === cardName.indexOf(consoleArr[3])) ? <span className="console_card">{consoleArr[3]}</span> :
        <span className="console_card_gren">{consoleArr[3]}</span>);
  setdiv4((cardName.indexOf(consoleArr[3]) < cardName.indexOf(consoleArr[4])) ? <span className="console_card_orange">{consoleArr[4]}</span> :
        (cardName.indexOf(consoleArr[3]) === cardName.indexOf(consoleArr[4])) ? <span className="console_card">{consoleArr[4]}</span> :
        <span className="console_card_gren">{consoleArr[4]}</span>);
  setdiv5((cardName.indexOf(consoleArr[4]) < cardName.indexOf(consoleArr[5])) ? <span className="console_card_orange">{consoleArr[5]}</span> :
        (cardName.indexOf(consoleArr[4]) === cardName.indexOf(consoleArr[5])) ? <span className="console_card">{consoleArr[5]}</span> :
        <span className="console_card_gren">{consoleArr[5]}</span>);
  setdiv6((cardName.indexOf(consoleArr[5]) < cardName.indexOf(consoleArr[6])) ? <span className="console_card_orange">{consoleArr[6]}</span> :
        (cardName.indexOf(consoleArr[5]) === cardName.indexOf(consoleArr[6])) ? <span className="console_card">{consoleArr[6]}</span> :
        <span className="console_card_gren">{consoleArr[6]}</span>);
  setdiv7((cardName.indexOf(consoleArr[6]) < cardName.indexOf(consoleArr[7])) ? <span className="console_card_orange">{consoleArr[7]}</span> :
        (cardName.indexOf(consoleArr[6]) === cardName.indexOf(consoleArr[7])) ? <span className="console_card">{consoleArr[7]}</span> :
        <span className="console_card_gren">{consoleArr[7]}</span>);
  setdiv8((cardName.indexOf(consoleArr[7]) < cardName.indexOf(consoleArr[8])) ? <span className="console_card_orange">{consoleArr[8]}</span> :
        (cardName.indexOf(consoleArr[7]) === cardName.indexOf(consoleArr[8])) ? <span className="console_card">{consoleArr[8]}</span> :
        <span className="console_card_gren">{consoleArr[8]}</span>);

        finishTopInnerText.unshift(topInnerText)
        if (finishTopInnerText.length>3) { finishTopInnerText.pop()};
        if (finishTopInnerText[0]==='J') {
          finishTopInnerText[0] = '10';
        }else if (finishTopInnerText[0]==='Q'){
          finishTopInnerText[0] = '11';
        }else if (finishTopInnerText[0]==='K'){
          finishTopInnerText[0] = '12';
        }else if (finishTopInnerText[0]==='A'){
          finishTopInnerText[0] = '13';
        }
        hi.unshift(rateHiArr[cardName.indexOf(topInnerText)]);
        if (hi.length>3) { hi.pop()};
        lo.unshift(rateLoArr[cardName.indexOf(topInnerText)]);
        if (lo.length>3){lo.pop()};
    
        if (Number(localStorage.getItem('btn')) === 21 && Number(finishTopInnerText[1]) > Number(finishTopInnerText[0])) {
          header.classList.add('consolebid1');
          header.innerText = `Դուք հախթեցիք ${Number(localStorage.getItem('bid')) * Number(lo[1])} fun`;
        } else if (Number(localStorage.getItem('btn')) === 20 && Number(finishTopInnerText[1]) < Number(finishTopInnerText[0])) {
          header.classList.add('consolebid1');
          header.innerText = `Դուք հախթեցիք ${Number(localStorage.getItem('bid')) * Number(hi[1])} fun`;
        }
        setTimeout(() => {
          header.classList.remove('consolebid1');
          header.innerText = 'Կատարեք խաղադրույք';
        }, 3000);
    console.log(finishTopInnerText);
    console.log(hi);
    console.log(lo);
    return Promise.resolve
  }
  await setRandom()
  await hilo()
}

  function alertWin(rate) {
    header.classList.add('consolebid1');
    header.innerText = 'Դուք հախթեցիք ' + bidDefault * rate + ' fun' ;
  }
  useEffect(()=>{
    finishTopInnerHtml.push(document.getElementById('topr').innerHTML)
    if( Number(btn) === ( randomName +2) ) {
      alertWin(12)
    }else if (Number(btn) ===14 && randomName<=7){
      alertWin(1.5)
    }else if(Number(btn) ===15 && Number(randomName) > 7  ){
      alertWin(3)
    }else if(Number(btn) ===16 && (Number(randomName) ===10 || Number(randomName) ===11 ) ){
      alertWin(6)
    }else if(Number(btn) ===17 && Number(randomName) ===11){
      alertWin(12)
    }else if(Number(btn) ===18 && Number(randomMast) >1){
      alertWin(2)
    }else if(Number(btn) ===19 && Number(randomMast) <=1){
      alertWin(2)
    }else {
    }
  
  },[randomName])

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
            <span className="x12 onClick" id='2'>2</span>
            <span className="x12 onClick" id="3">3</span>
            <span className="x12 onClick" id="4">4</span>
            <span className="x12 onClick" id="5">5</span>
            <span className="x12 onClick" id="6">6</span>
            <span className="x12 onClick" id="7">7</span>
            <span className="x12 onClick" id="8">8</span>
            <span className="x12 onClick" id="9">9</span>
            <span className="x12 onClick" id="10">J</span>
            <span className="x12 onClick" id="11">Q</span>
            <span className="x12 onClick" id="12">K</span>
            <span className="x12 onClick" id="13">A</span>
          </div>
        </section>
        <div className="section_contein">
        <section className="section_left">
          <div className="section_left_intro onClick" id="14"><span>2-9</span><span className="x">x1.5</span></div>
          <div className="section_left_intro onClick"id="15" ><span>JQKA</span><span className="x">X3</span></div>
          <div className="section_left_intro onClick" id="16"><span>KA</span><span className="x">x6</span></div>
          <div className="section_left_intro onClick" id="17"><span>A</span><span className="x">x12</span></div>
          <div className="section_left_intro xred onClick" id="18"><span>Կարմիր</span><span className="x">x2</span></div>
          <div className="section_left_intro xblack onClick" id="19"><span>Սև</span><span className="x">x2</span></div>
        </section>
        <section className="cards">
          <div className="card" id="card">
            <div className="card_top">
              <div className="cards_top" id="topr">{cardName[randomName]}</div>
              <div id="top" className={cardMast[randomMast]}></div>
            </div>            
            <div className='center' id="second">
              {count}
            </div>
            <div className="card_content">
              <div id="botom" className={cardMast[randomMast]}></div>
              <div className="cards_bottom" id="name">{cardName[randomName]}</div>
            </div>
          </div>
        </section>
        <section className="section_hilo">
          <div className="hi onClick" id="20">
          <div className="conteiner_x ">
              <span id="hi_%">{percentageslo}</span>
              <span id="hi_x" className="x">{rateHi}x</span>
            </div>
            <div className="hi_txt">HI</div>
          </div>
          <div className="lo onClick" id="21">
            <div className="lo_txt">LO</div>
            <div className="conteiner_x ">
              <span id="lo_%">{percentageshi}</span>
              <span id="lo_x" className="x">{rateLo}x</span>
            </div>
          </div>
        </section>
        </div>
      </div>
      <div className="start">
        <div className="startConteiner">
            <div className="bid">
                <div className="bid_plus_minus">
                    <button className="bid_plus" onClick={() => setBidDefault(bidDefault - 10)}>-</button>
                    <div className="bidDefault">{bidDefault}</div>
                    <button className="bid_minus" onClick={() => setBidDefault( bidDefault +10)} >+</button>
                </div>
                <div className="bids_all_conteiner">
                    <button className="bids_all" onClick={() => setBidDefault( bidDefault * 2)}>x2</button>
                    <button className="bids_all" onClick={() => setBidDefault( bidDefault +50)}>+50</button>
                    <button className="bids_all" onClick={() => setBidDefault( bidDefault +250)}>+250</button>
                </div>
            </div>
            <div className='start_btn' >START</div>
        </div>
        </div>  </div>

  );
}
