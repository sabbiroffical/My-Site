let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let logoutForm = document.querySelector('.header .logout-form');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    logoutForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    logoutForm.classList.remove('active');
};

document.querySelector('#account-btn').onclick = () =>{
    logoutForm.classList.toggle('active');
    searchForm.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    logoutForm.classList.remove('active');
}

var typed = new Typed (".auto-type", {
    strings: ["Web developer", "Web Desinger", "WordPress Theme Developer", "Digital Marketer", "SEO Specalist"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

let darkLight =  document.getElementById('dark-light-mode');

darkLight.onclick = () => {
    darkLight.classList.toggle('fa-sun');

    if(darkLight.classList.contains("fa-sun")){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

let searchBox = document.querySelector('#search-box');
let gallery = document.querySelectorAll('.gallery .gallery-container .box');

searchBox.oninput = () =>{
    gallery.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;
    gallery.forEach(filter=>{
        let title = filter.getAttribute('data-title');
        if(value == title){
            filter.style.display = 'block';
        }
        if(searchBox.value == ''){
            filter.style.display = 'block';
        }
    })
}


document.querySelector('.switcher-btn').onclick = () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
}

let buttons = document.querySelectorAll('.buttons');

buttons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--black',   dataColor);
    });
});