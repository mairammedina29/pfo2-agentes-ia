document.addEventListener('DOMContentLoaded', () => {

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    const modal = document.getElementById('modalPrompt');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (modal && openModalBtn && closeModalBtn) {

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        openModalBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que la página salte al inicio por usar '#'
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
        });


        closeModalBtn.addEventListener('click', closeModal);

        // Cerrar modal si hacen clic en cualquier parte oscura fuera de la caja
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    const instituteLogo = document.querySelector('.institute-logo');
    if (instituteLogo) {
        instituteLogo.addEventListener('error', () => {
            instituteLogo.style.display = 'none'; // Si no encuentra el logo, se oculta solo
        });
    }
});