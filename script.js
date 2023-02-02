const h1 = document.querySelector('h1');
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get(' https://icanhazdadjoke.com/', config);
        h1.innerHTML = res.data.joke;
        return res.data.joke;
    }
    catch (e) {
        h1.innerHTML = "ERROR 404!!";
    }
}
getDadJoke();
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    getDadJoke();
})