const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => users(data))
}
loadUsers()
const users = usrdata => {
    // console.log(usrdata)
    const usersData = usrdata.results
    const section = document.getElementById('users-info');
    for (const user of usersData) {
        console.log(user)
        const div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `
        <p>Name: ${user.name.title, user.name.first, user.name.last}</p>
        <p>Cell: ${user.cell}</p>
        <p>Email: ${user.email}</p>
        `
        section.appendChild(div)
    }
}