var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.send()
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(data);
        total = 0
        for (let i = 0; i < data.length; i++) {
            total += data[i].amount
        }
        for (let i = 0; i < data.length; i++) {
            dayamount = data[i].amount*3 / Math.floor(total)
            dayheight = Math.ceil(dayamount * 100)
            element = document.querySelector(`.${data[i].day}-Colored`)
            element.classList.add(`h-[${dayheight}%]`)
            document.querySelector(`#tooltip-${data[i].day}`).innerHTML = `$${data[i].amount}`
            element.addEventListener('mouseenter',()=>{
                document.querySelector(`#tooltip-${data[i].day}`).classList.remove("hidden")
            })
            element.addEventListener('mouseout',()=>{
                document.querySelector(`#tooltip-${data[i].day}`).classList.add("hidden")
            })
            // console.log(`${data[i].day}-Colored`)
        }
    }
};