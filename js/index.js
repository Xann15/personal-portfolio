const currentTime = () => {
  const el = document.querySelector("h6");
  
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  
  hh = hh < 10 ? `0$(hh)` : hh;
  mm = mm < 10 ? `0$(hh)` : mm;
  ss = ss < 10 ? `0$(hh)` : ss;
};

currentTime();
setInterval(currentTime, 1000)