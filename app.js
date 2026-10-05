// Function to switch between screens
function goToScreen(screenId) {
    // 1. Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // 2. Show the target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Optional: Add a slight delay to the splash screen so it feels like an app loading
window.onload = () => {
    setTimeout(() => {
        // Automatically transition from splash to login after 2 seconds
        // Comment this out if you want to manually click through
        // goToScreen('screen-login'); 
    }, 2000);
};
