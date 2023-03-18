const post = JSON.parse(localStorage.getItem('postID'));
const bodyBox = document.querySelector('.body-box');
const commentsList = document.querySelector('.comments-list');

for (const postKey in post) {
    const div = document.createElement('div');
    div.textContent = `${postKey}: ${post[postKey]}`
    bodyBox.append(div);
}
const id = JSON.parse(localStorage.getItem('el')).id;
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((item, i) => {
            const li = document.createElement('li');
            li.classList.add('comments-link');
            for (const itemKey in item) {
                const div1 = document.createElement('div');
                div1.textContent = `${itemKey}: ${item[itemKey]}`
                li.append(div1);
            }
            commentsList.append(li);
        });
    });