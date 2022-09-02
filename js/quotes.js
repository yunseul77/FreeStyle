const quotes = [
    {
      quote: "삶이 있는 한 희망은 있다.",
      author: "키케로",
    },
    {
      quote: "산다는것 그것은 치열한 전투이다.",
      author: "로망로랑",
    },
    {
      quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
      author: "파울로 코엘료",
    },
    {
      quote: "피할수 없으면 즐겨라.",
      author: "로버트 엘리엇",
    },
    {
      quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
      author: "단테",
    },
    {
      quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
      author: "찰스다윈",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;