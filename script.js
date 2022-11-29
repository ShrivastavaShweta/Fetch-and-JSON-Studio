// TODO: add code here

window.addEventListener("load", function(){
    // fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    //     response.json().then(function(data){
    //         console.log(data);
    //     })
    // })
    
    const container = document.getElementById("container");
    const count = document.getElementById("count");

    async function getData(){
        let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        let data = await response.json();
        console.log(data);

        count.innerHTML = `Total number of astronauts: ${data.length}`;

        data.sort(function(a, b){
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
        });

        let length = data.length;
        for(let i=0; i<length; i++){
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li class = "${data[i].active ? "green" : ""}">Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src=${data[i].picture}>
            </div>
            `
        }
    }

    getData();

});
         