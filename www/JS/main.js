key = "datas";
init();

function init() {



    let url = "http://griffis.edumedia.ca/mad9022/tundra/get.profiles.php?gender=female";




    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.imgBaseURL)
            uri = decodeURIComponent(data.imgBaseURL)
            console.log(uri)

            displayProfiles(data);


        })
        .catch((error) => console.log(error));

    if (window.hasOwnProperty("cordova")) {
        console.log("You're on a mobile device");
    }

    let isReady = (window.hasOwnProperty("cordova")) ? 'deviceready' : 'DOMContentLoaded';

    document.addEventListener(isReady, ready);



}

function ready() {
    navigate = document.querySelectorAll(".page");
    console.log(navigate);
    navigate[0].classList.add("active");

    document.getElementById("SavedPg").addEventListener("click", SavedPage);
    document.getElementById("Home").addEventListener("click", takeHome);

    let target = document.querySelector("div");
    let tiny = new tinyshell(target);
    //document.getElementById("page1").addEventListener("click", Delete);

    tiny.addEventListener("swipeleft", Delete);
    tiny.addEventListener("swiperight", NextProf);



}


function displayProfiles(data) {

    let name = document.getElementById("profiles");
    var putid = data.profiles[0].id;
    console.log(putid);
    var img = document.createElement("img");
    img.className = "photo";
    img.id = "picture";
    img.src = "http:" + uri + data.profiles[0].avatar;
    name.appendChild(img);
    var nm = document.createElement("h3");
    nm.className = "nameone";
    nm.id = "names";
    nm.innerHTML = data.profiles[0].first + " " + data.profiles[0].last;
    //sessionStorage.setItem("nm", nm);
    name.appendChild(nm);
    //    let ln = document.createElement("h3");
    //    ln.className = "lastname";
    //    ln.innerHTML = "Last Name: " + data.profiles[0].last;
    //    name.appendChild(ln);
    var gender = document.createElement("h4");
    gender.className = "gender";
    gender.id = "gen";
    gender.innerHTML = "Gender: " + data.profiles[0].gender;
    name.appendChild(gender);
    //     let btn = document.createElement("button");
    //     btn.id = "SavedBtn";
    //     btn.textContent = "SAVE";
    //     btn.addEventListener("click", SavedPage);
    //     name.appendChild(btn);
    //     let Homebtn = document.createElement("button");
    //     btn.id = "HomeBtn";
    //     btn.textContent = "HOME";
    //     btn.addEventListener("click", takeHome);
    //     name.appendChild(Homebtn);

}

function SavedPage(ev) {

    ev.preventDefault();
    let tapped = ev.currentTarget; //the clicked h1
    console.log(tapped);

    document.querySelector('.active').classList.remove('active');
    //hide the only active page
    let target = tapped.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
    //     let pg2 = document.getElementById("page2");
    //     let name = document.createElement("h1");
    //     name.className = "name";
    //     var nm = sessionStorage.getItem("nm");
    //    console.log(nm);
    //     //nm.innerHTML = "First Name: " + data.profiles[0].first;
    //     name.innerHTML = nm;
    ////     nm.innerHTML = getting;
    //     pg2.appendChild(name);
    //    console.log(name);

}

function takeHome(ev) {
    console.log("jabojijo");

    ev.preventDefault();
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page1").classList.add("active");

}

function Delete(ev) {

    alert("Profile Deleted");

    let clearImg = document.getElementById("profiles");
    clearImg.innerHTML = "";


    let url = "http://griffis.edumedia.ca/mad9022/tundra/get.profiles.php?gender=female";




    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.imgBaseURL)
            uri = decodeURIComponent(data.imgBaseURL)
            console.log(uri)

            displayProfiles(data);
            console.log(data);


        })
        .catch((error) => console.log(error));

}

function NextProf(ev) {
    alert("Profile Saved");

    let clearImg = document.getElementById("profiles");
    clearImg.innerHTML = "";


    let url = "http://griffis.edumedia.ca/mad9022/tundra/get.profiles.php?gender=female";




    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.imgBaseURL)
            uri = decodeURIComponent(data.imgBaseURL)
            console.log(uri)

            displayProfiles(data);
            console.log(data);


        })
        .catch((error) => console.log(error));
    
//                let titledata = document.querySelector("#picture").innerHTML;
//                console.log(titledata);
    
                let call = ev.currentTarget;
                let callid = call.id;
                let ratedata = document.getElementById("names").innerHTML;
                console.log(ratedata);
                let gend = document.getElementById("gen").innerHTML;
                console.log(gend);
                 
                let ImgPath = document.getElementById("picture").src;
                 
                let maindata={
                    "id":callid,
                    "name" : ratedata,
                    "gender" : gend,
                    "img" : ImgPath 
                };
                sessionStorageObj.push(maindata);
                let str=JSON.stringify(sessionStorageObj);
                sessionStorage.setItem(key,str);

}









