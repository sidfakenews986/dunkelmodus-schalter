class Dunkelmodus {
    constructor() {
        this.isDarkMode = localStorage.getItem('dunkelmodus') === 'true';
        this.toggle(); // Set initial mode based on local storage
        this.applyStyles();
    }

    toggle() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('dunkelmodus', this.isDarkMode);
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