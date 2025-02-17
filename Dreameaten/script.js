function navigateToFilmPage() {
    // Add fade-out effect before navigating
    document.querySelector('.landing-page').style.animation = 'fadeOut 0.5s forwards';
    
    // After animation, navigate to the film page (you can change the URL accordingly)
    setTimeout(() => {
        window.location.href = 'film-page.html'; // Change this URL to your film page's URL
    }, 500);
}
