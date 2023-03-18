const container = document.querySelector('#container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(item => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.classList.add('user-block');
            div.id = item.id;
            div.innerHTML = `${item.id}  ${item.name}`;
            li.append(div);
            const btn = document.createElement('a');
            btn.classList.add('btn');
            btn.href = 'user-details.html';
            btn.innerHTML = `More info  <span class="arrow">=></span>`
            li.append(btn)
            container.append(li);
        });
        container.addEventListener('click', (e)=> {
            if(e.target.classList.contains('btn')) {
                localStorage.setItem('el', JSON.stringify(data[e.target.previousSibling.id-1]));
            }
        });
    })

