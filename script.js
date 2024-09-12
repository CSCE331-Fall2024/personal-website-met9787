function toggleStyle() {
    const stylesheet = document.getElementById('stylesheet');
    const currentStyle = stylesheet.getAttribute('href');
    
    if (currentStyle === 'styles.css') {
        stylesheet.setAttribute('href', 'styles2.css');
        localStorage.setItem('preferredStyle', 'styles2.css');
    } else {
        stylesheet.setAttribute('href', 'styles.css');
        localStorage.setItem('preferredStyle', 'styles.css');
    }
}

// Apply the preferred stylesheet on page load
window.onload = function() {
    const preferredStyle = localStorage.getItem('preferredStyle');
    if (preferredStyle) {
        document.getElementById('stylesheet').setAttribute('href', preferredStyle);
    }
};