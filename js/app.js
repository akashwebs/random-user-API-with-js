const inputSearch = document.getElementById('search-user');
inputSearch.addEventListener('keyup', async() => {
        if (isNaN(inputSearch.value) || inputSearch.value == "") {
            inputSearch.value = ''

            const userContainer = document.getElementById('user-container');
            userContainer.textContent = ''
        } else {
            const searchValue = inputSearch.value;
            const url = `https://randomuser.me/api/?results=${searchValue}`
            const res = await fetch(url);
            const data = await res.json();
            displayUser(data);
        }
    })
    // display user result
const displayUser = data => {
    const users = data.results;
    const userContainer = document.getElementById('user-container');
    userContainer.textContent = ''
    users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'col'
        div.innerHTML = `
        <div class="card">
            <img src="${user.picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <strong>location</strong>
                <ul>
                    <li>time Zone: ${user.location.timezone.offset} </li>
                    <li>state: ${user.location.state}</li>
                    <li>street Number:${user.location.street.name} , street Name: ${user.location.street.number}</li>
                    <li>country: ${user.location.country}</li>

                </ul>
            </div>
        </div>
        
        `
        userContainer.appendChild(div)
            // console.log(user)
    })
}