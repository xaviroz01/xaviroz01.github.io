for (let i = 0; i < 5; i++) {
    const body = document.getElementsByTagName("BODY")[0]

    const card = document.createElement('div');

    const text = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    const img = document.createElement('img')
    img.src = 'https://random.imagecdn.app/250/250'

    h3.textContent = "Name Image";
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sunt.";
    card.classList.add('card');
    text.classList.add('text');
    

    card.appendChild(img);
    card.appendChild(text);    
    text.appendChild(h3);    
    text.appendChild(p);    

    body.appendChild(card);
    

    const element = i;
    console.log(element)
    
}