window.onload = function () {

    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtnBurger = document.querySelector('.menu-btn__burger');

    let showMenu = false;

    menuBtn.addEventListener('click', function () {
        if (!showMenu) {
            navbar.style.display = 'flex';
            menuBtn.classList.add('menu-btn__fixed');
            menuBtnBurger.classList.add('open');
            showMenu = true;
        }
        else {
            navbar.style.display = '';
            menuBtn.classList.remove('menu-btn__fixed');
            menuBtnBurger.classList.remove('open');
            dropdown[0].style.display = 'none';
            dropdown[1].style.display = 'none';
            showMenu = false;
        }
    });

    
    const navLink = document.querySelectorAll('.navbar > li > a');
    const dropdown = document.querySelectorAll('.dropdown');
    const featuresArrow = document.querySelector('.features img');
    const companyArrow = document.querySelector('.company img');

    navLink[0].addEventListener('click', function () {

        dropdown[1].style.display = 'none';
        companyArrow.src = 'images/icon-arrow-down.svg';

        if (dropdown[0].style.display === 'none') {
            featuresArrow.src = 'images/icon-arrow-up.svg';
            dropdown[0].style.display = 'flex';
            // dropdown[0].addEventListener('mouseleave', function () {
            //     featuresArrow.src = 'images/icon-arrow-down.svg';
            //     dropdown[0].style.display = 'none';
            // });
        }
        else {
            featuresArrow.src = 'images/icon-arrow-down.svg';
            dropdown[0].style.display = 'none';
        }
    });

    navLink[1].addEventListener('click', function () {

        dropdown[0].style.display = 'none';
        featuresArrow.src = 'images/icon-arrow-down.svg';

        if (dropdown[1].style.display === 'none') {
            companyArrow.src = 'images/icon-arrow-up.svg';
            dropdown[1].style.display = 'flex';
            // dropdown[1].addEventListener('mouseleave', function () {
            //     companyArrow.src = 'images/icon-arrow-down.svg';
            //     dropdown[1].style.display = 'none';
            // });
        }
        else {
            companyArrow.src = 'images/icon-arrow-down.svg';
            dropdown[1].style.display = 'none';
        }
    });
};