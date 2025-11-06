class Dunkelmodus {
    constructor() {
        this.isDark = localStorage.getItem('dunkelmodus') === 'true';
        this.toggle(); // Set initial mode based on local storage
        this.applyStyles();
    }

    toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('dunkelmodus', this.isDark);
        this.applyStyles();
    }

    applyStyles() {
        if (this.isDark) {
            document.body.classList.add('dunkelmodus');
        } else {
            document.body.classList.remove('dunkelmodus');
        }
    }
}

export default Dunkelmodus;
