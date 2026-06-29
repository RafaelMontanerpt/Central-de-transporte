// dropdown para touch/mobile
document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');
    if (!dropbtn || !dropdown) return;

    dropbtn.addEventListener('click', e => {
        e.preventDefault();
        dropdown.classList.toggle('abierto');
    });

    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('abierto');
        }
    });
});
