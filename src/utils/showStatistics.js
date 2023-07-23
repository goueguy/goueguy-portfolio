const animateStatistics =()=>{
    const speed = 200;
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter)=>{
      function updateCount(){
            const initiaNumber = Number(counter.innerText);
            const targetNumber =  Number(counter.getAttribute("data-value"));
            let incrementPerCount = targetNumber / speed;
            if(initiaNumber < targetNumber){
                counter.innerText = Math.ceil(initiaNumber + incrementPerCount);
                setTimeout(updateCount, 200);
            }else{
                counter.innerText = targetNumber;
            }
        }
        updateCount();
    })
  }
export default animateStatistics;