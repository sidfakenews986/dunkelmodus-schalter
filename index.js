class Dunkelmodus {
    constructor() {
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.toggle(); // Set initial mode based on local storage
        this.applyStyles();
    }

    toggle() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyStyles();
    }

    applyStyles() {
        if (this.isDarkMode) {
            document.body.classList.add('dunkelmodus');
        } else {
            document.body.classList.remove('dunkelmodus');
        }
    }
}

export default Dunkelmodus;