function enviarFormulario() {
    const nombre  = document.getElementById('input-nombre').value.trim();
    const email   = document.getElementById('input-email').value.trim();
    const motivo  = document.getElementById('input-motivo').value;
    const mensaje = document.getElementById('input-mensaje').value.trim();
    const btn     = document.getElementById('btn-enviar');

    if (!nombre || !email || !motivo || !mensaje) {
        alert('Por favor completá todos los campos antes de enviar.');
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        alert('El correo electrónico no tiene un formato válido.');
        return;
    }

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = '✓ Mensaje enviado';
        btn.style.background = '#00C853';

        document.getElementById('input-nombre').value  = '';
        document.getElementById('input-email').value   = '';
        document.getElementById('input-motivo').value  = '';
        document.getElementById('input-mensaje').value = '';

        setTimeout(() => {
            btn.textContent = 'Enviar mensaje';
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);
    }, 900);
}

// enter en los inputs también envía
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-contacto').addEventListener('keydown', e => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') enviarFormulario();
    });
});
