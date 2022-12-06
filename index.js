//baseURL
let baseURL = 'https://jsonplaceholder.typicode.com'
//endpoints: all API endpoints are relative to the base URL -relative URL
let postsEndpoints = '/posts' //an array of objects
//postURL = [baseURL + endpoints]
let postsURL = `${baseURL}${postsEndpoints}`
// console.log(postsURL); //comment this out 

//fetch and iterate
let posts = fetch(postsURL)
 .then((posts) => posts.json())
//  .then(json => console.log(json))
.then((response) => {
    let posts = response

    for(post of posts){
        // console.log(post.title); 
        createAndAppendEl()
    }
});

//1. create a <ul> and append it to the <div> 
//2. create a <li> and append it to the <ul> 
//3. add the post.title to the <li> innerText

function createAndAppendEl(){
    let unorderedList = document.createElement('ul')
    let insideUnorderedList = document.createElement('li')
    let parentContent = document.getElementById('list-container')
    unorderedList.appendChild(insideUnorderedList)
    parentContent.appendChild(unorderedList)

    insideUnorderedList.innerText = post.title

    // console.log(insideUnorderedList);
    return insideUnorderedList
}