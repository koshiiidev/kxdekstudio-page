
let accessibilityState = {
    menuOpen: false,
    contrast: false,
    textSize: false,
    darkMode: false,
    reduceMotion: false,
    focusIndicators: false,
    dyslexiaFont: false
};


function loadAccessibilitySettings() {
    const saved = localStorage.getItem('accessibilitySettings');
    if (saved) {
        accessibilityState = { ...accessibilityState, ...JSON.parse(saved) };
        applyAllSettings();
    }
}


function saveAccessibilitySettings() {
    localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilityState));
}


function toggleAccessibilityMenu() {
    accessibilityState.menuOpen = !accessibilityState.menuOpen;
    const content = document.getElementById('accessibilityContent');
    content.classList.toggle('active', accessibilityState.menuOpen);
}


function applyAllSettings() {
    updateSliders();
    
    if (accessibilityState.contrast) {
        document.body.classList.add('high-contrast');
    }
    if (accessibilityState.textSize) {
        document.body.classList.add('large-text');
    }
    if (accessibilityState.darkMode) {
        document.body.classList.add('dark-mode');
    }
    if (accessibilityState.reduceMotion) {
        document.body.classList.add('reduce-motion');
    }
    if (accessibilityState.focusIndicators) {
        document.body.classList.add('focus-indicators');
    }
    if (accessibilityState.dyslexiaFont) {
        document.body.classList.add('dyslexia-font');
    }
}


function updateSliders() {
    const elements = {
        contrastSlider: accessibilityState.contrast,
        textSizeSlider: accessibilityState.textSize,
        darkModeSlider: accessibilityState.darkMode,
        motionSlider: accessibilityState.reduceMotion,
        focusSlider: accessibilityState.focusIndicators,
        fontSlider: accessibilityState.dyslexiaFont
    };

    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('active', elements[id]);
        }
    });
}


function toggleContrast() {
    accessibilityState.contrast = !accessibilityState.contrast;
    document.body.classList.toggle('high-contrast', accessibilityState.contrast);
    updateSliders();
    saveAccessibilitySettings();
}

function toggleTextSize() {
    accessibilityState.textSize = !accessibilityState.textSize;
    document.body.classList.toggle('large-text', accessibilityState.textSize);
    updateSliders();
    saveAccessibilitySettings();
}

function toggleDarkMode() {
    accessibilityState.darkMode = !accessibilityState.darkMode;
    document.body.classList.toggle('dark-mode', accessibilityState.darkMode);
    updateSliders();
    saveAccessibilitySettings();
}

function toggleMotion() {
    accessibilityState.reduceMotion = !accessibilityState.reduceMotion;
    document.body.classList.toggle('reduce-motion', accessibilityState.reduceMotion);
    updateSliders();
    saveAccessibilitySettings();
}

function toggleFocus() {
    accessibilityState.focusIndicators = !accessibilityState.focusIndicators;
    document.body.classList.toggle('focus-indicators', accessibilityState.focusIndicators);
    updateSliders();
    saveAccessibilitySettings();
}

function toggleFont() {
    accessibilityState.dyslexiaFont = !accessibilityState.dyslexiaFont;
    document.body.classList.toggle('dyslexia-font', accessibilityState.dyslexiaFont);
    updateSliders();
    saveAccessibilitySettings();
}

function resetAccessibility() {
    accessibilityState = {
        menuOpen: accessibilityState.menuOpen,
        contrast: false,
        textSize: false,
        darkMode: false,
        reduceMotion: false,
        focusIndicators: false,
        dyslexiaFont: false
    };
    
  
    const classesToRemove = ['high-contrast', 'large-text', 'dark-mode', 'reduce-motion', 'focus-indicators', 'dyslexia-font'];
    classesToRemove.forEach(className => {
        document.body.classList.remove(className);
    });
    
    updateSliders();
    saveAccessibilitySettings();
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && accessibilityState.menuOpen) {
        toggleAccessibilityMenu();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    loadAccessibilitySettings();
});