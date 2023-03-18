const container = document.querySelector('#container');
const element = JSON.parse(localStorage.getItem('el'));
const list = document.querySelector('.list');
const btn = document.querySelector('.btn')
const postBtn = document.querySelector('.post-btn')

getResult(element);

const id = JSON.parse(localStorage.getItem('el')).id;
postBtn.addEventListener('click', (e)=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => response.json())
        .then((data) => {
            const ul = document.createElement('ul');
            ul.classList.add('title-list')
            data.forEach((item, i) => {
                const li = document.createElement('li');
                li.classList.add('title-link');
                const liText = document.createElement('div')
                liText.textContent = item.title;
                const liBtn = document.createElement('a');
                liBtn.classList.add('li-btn');
                liBtn.id = i;
                liBtn.href = 'post-details.html';
                liBtn.textContent = 'More details';
                li.append(liText, liBtn);
                ul.append(li);
            });
            container.append(ul);
            container.addEventListener('click', (e)=> {
                if (e.target.classList.contains('li-btn')) {
                    localStorage.setItem('postID', JSON.stringify(data[e.target.id]));
                }
            });
        })
    e.target.disabled = true;
});

function getResult(obj) {
    getProp(obj);
    function getProp(element) {
        for(let elementKey in element) {
            if(typeof(element[elementKey]) === 'object') {
                getProp(element[elementKey]);
            } else {
                const li = document.createElement('li');
                li.textContent = `${elementKey}: ${element[elementKey]}`;
                list.append(li);
            }
        }
    }
}