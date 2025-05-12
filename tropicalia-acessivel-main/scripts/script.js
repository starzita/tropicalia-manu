document.addEventListener('DOMContentLoaded', function() {
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityOptions = document.getElementById('accessibility-options');

    accessibilityBtn.addEventListener('click', function() {
        accessibilityBtn.classList.toggle('rotated-button');
        accessibilityOptions.classList.toggle('d-none');
        accessibilityOptions.classList.toggle('show');
        
        // Atualização do valor do atributo aria-expanded
        const isExpanded = accessibilityBtn.getAttribute('aria-expanded') === 'true';
        accessibilityBtn.setAttribute('aria-expanded', !isExpanded);
    });

    const increaseFontBtn = document.getElementById('increase-font');
    const resetFontBtn = document.getElementById('reset-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    let currentFontSize = 1;

    increaseFontBtn.addEventListener('click', function() {
        currentFontSize += 0.1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    resetFontBtn.addEventListener('click', function() {
        currentFontSize = 1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    decreaseFontBtn.addEventListener('click', function() {
        currentFontSize -= 0.1;
        document.body.style.fontSize = `${currentFontSize}rem`;
    });

    toggleContrastBtn.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});
