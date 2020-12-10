let Search_Title = document.getElementById('Search_Title');
let Search_Body1 = document.getElementById('Search_Body1');
let Search_Body2 = document.getElementById('Search_Body2');
let Search_Body3 = document.getElementById('Search_Body3');
let link = document.querySelector('.link');

 async function apiCall(){
    let word_searched = document.getElementById('input').value;
    word_searched = word_searched.split(" ").join("_");
    if (word_searched === ''){
        alert('Please input something to search');
        return false;
    }
    //api endpoint
    let endPoint = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27' + word_searched);
    let data = await endPoint.json();
    console.log(data);

    //Search Result
    Search_Title.innerText =  data.query.search[0].title;
    Search_Body1.innerHTML = "1. " + data.query.search[0].snippet;
    Search_Body2.innerHTML = "2. " + data.query.search[1].snippet;
    Search_Body3.innerHTML = "3. " + data.query.search[2].snippet;
    link.href = "https://en.wikipedia.org/wiki/" + word_searched;
    link.innerText = "See More";
}