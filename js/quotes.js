const quotes = [
  {
    quote:
      "우리는 다른사람이 욕심을 낼때 겁을 내려하고 다른사람이 겁을 낼 때만 욕심을 부리곤 한다",
    author: "워렌 버핏",
  },
  {
    quote:
      "타고있는 배가 항상 샌다는 것을 알게 되면 구멍을 막느니 차라리 배를 바꿔 타는 것이 생산적이다.",
    author: "워렌 버핏",
  },
  {
    quote: "위험은 자신이 무엇을 하는지 모르는 데서 온다",
    author: "워렌 버핏",
  },
  {
    quote:
      "분산투자는 자신이 무엇을 하고 있는지 모르는 투자가에게만 알맞은 투자 방법이다",
    author: "워렌 버핏",
  },
  {
    quote: "끊임없이 도전하는 사람이 결국 게임의 승자가 된다",
    author: "피터 린치",
  },
  {
    quote: "아무도 어디가 바닥인지 모른다",
    author: "피터 린치",
  },
  {
    quote: "뛰어난 기업의 주식을 보유하고 있다면 시간은 당신의 편이다",
    author: "피터 린치",
  },
  {
    quote: " 대박은 꾸준한 수익률을 얻고자 하는 가운데서 탄생한다.",
    author: "피터 린치",
  },
  {
    quote: " 무릎에서 사서 어깨에 팔아라.",
    author: "벤자민 그레이엄",
  },
  {
    quote: " 위기가 기회임을 분명히 인식하라",
    author: "존 템플턴",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
