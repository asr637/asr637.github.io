function navigateToFilmPage() {
    // Add fade-out effect before navigating
    document.querySelector('.landing-page').style.animation = 'fadeOut 0.5s forwards';
    
    // After animation, navigate to the film page 
    setTimeout(() => {
        window.location.href = 'film-page.html'; 
    }, 500);
}
