function createCard(title, cName, views, monthOld, duration, thumbnail){

    let viewStr;

    if(views < 1000){
        viewStr = views.toString();
    }

    else if(views >= 100000000){
        viewStr = (views / 100000000).toFixed(0) + "B"
    }
    else if(views >= 1000000){
        viewStr = (views / 100000).toFixed(0) + "M";
    }

    else{
        viewStr = (views / 1000).toFixed(0) + "K";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} views • ${monthOld} • month ago</p>
            </div>

        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
