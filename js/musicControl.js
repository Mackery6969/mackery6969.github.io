document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');
    const muteIcon = document.getElementById('mute-icon');

    // Function to update icon based on mute state
    const updateIcon = () => {
        muteIcon.src = bgMusic.muted ? 'assets/images/ui/Play.png' : 'assets/images/ui/Pause.png';
        muteIcon.alt = bgMusic.muted ? 'Play' : 'Pause';
    };

    // Function to handle music mute/unmute
    const handleMusic = () => {
        bgMusic.muted = !bgMusic.muted;
        updateIcon();
        // Save the state to localStorage
        localStorage.setItem('isMuted', bgMusic.muted);
    };

    // Check localStorage for saved state
    const savedState = localStorage.getItem('isMuted');
    if (savedState !== null) {
        bgMusic.muted = (savedState === 'true');
        updateIcon();
    } else {
        // Initial play on user interaction for first-time visit
        bgMusic.play();
    }

    muteBtn.addEventListener('click', handleMusic);
});
