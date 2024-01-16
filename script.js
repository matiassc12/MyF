document.addEventListener('DOMContentLoaded', function () {
    const respuestas = document.querySelectorAll('.respuesta-btn');
    const respuestaCorrecta = "15";

    respuestas.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const respuestaSeleccionada = btn.getAttribute('data-respuesta');
            verificarRespuesta(respuestaSeleccionada);
        });
    });

    function verificarRespuesta(respuesta) {
        const mensajeRespuesta = document.getElementById('mensajeRespuesta');
        const imagenRespuesta = document.getElementById('imagenRespuesta');
        const videoFondo = document.getElementById('videoFondo');

        if (respuesta === respuestaCorrecta) {
            mensajeRespuesta.textContent = "¡Respuesta correcta!";
            document.getElementById('contenido').style.visibility = 'visible';
            document.getElementById('pregunta-container').style.display = 'none';
            // Oculta la imagen de respuesta incorrecta si se mostró previamente
            imagenRespuesta.style.display = 'none';
            // Oculta el video de fondo
            videoFondo.style.display = 'none';
        } else {
            mensajeRespuesta.textContent = "Respuesta incorrecta. Eres un impostor?🤨";
            // Muestra la imagen de respuesta incorrecta
            imagenRespuesta.style.display = 'block';
        }
    }

    // Configuración del calendario
    $('#calendario').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month'
        },
        events: [
            // Cumple Mes
            {
                title: 'Cumple Mes 4' ,
                start: '2024-01-15T10:00:00',
                end: '2024-01-15T12:00:00'
            },
            {
                title: 'Cumple Mes 5',
                start: '2024-02-15T10:00:00',
                end: '2024-02-15T12:00:00'
            },
            {
                title: 'Cumple Mes 6',
                start: '2024-03-15T10:00:00',
                end: '2024-03-15T12:00:00'
            },
            {
                title: 'Cumple Mes 7',
                start: '2024-04-15T10:00:00',
                end: '2024-04-15T12:00:00'
            },
            {
                title: 'Cumple Mes 8',
                start: '2024-05-15T10:00:00',
                end: '2024-05-15T12:00:00'
            },
            {
                title: 'Cumple Mes 9',
                start: '2024-06-15T10:00:00',
                end: '2024-06-15T12:00:00'
            },
            {
                title: 'Cumple Mes 10',
                start: '2024-07-15T10:00:00',
                end: '2024-07-15T12:00:00'
            },
            {
                title: 'Cumple Mes 11',
                start: '2024-08-20T10:00:00',
                end: '2024-08-15T12:00:00'
            },
            {
                title: 'Nuestro Primer Añitoooo',
                start: '2024-09-15T10:00:00',
                end: '2024-09-15T12:00:00'
            },
            {
                title: '1 Año y 1 Mes',
                start: '2024-10-15T10:00:00',
                end: '2024-10-15T12:00:00'
            },
            {
                title: '1 Año y 2 Meses',
                start: '2024-11-15T10:00:00',
                end: '2024-11-15T12:00:00'
            },
            {
                title: '1 Año y 3 Meses',
                start: '2024-12-15T10:00:00',
                end: '2024-12-15T12:00:00'
            },
            // Otros Eventos 
            {
                title: 'Cumpleaños Tomasito🎂',
                start: '2024-01-20T10:00:00',
                end: '2024-01-20T12:00:00'
            },
            {
                title: 'Cumpleaños De Mi Mujer🎂<3',
                start: '2024-01-24T10:00:00',
                end: '2024-01-24T12:00:00'
            },
            {
                title: 'Cumpleaños De Bastián🎂',
                start: '2024-07-11T10:00:00',
                end: '2024-07-11T12:00:00'
            },
        ],
        eventRender: function (event, element) {
            // Habilita el tooltip para mostrar el título completo del evento
            element.attr('data-toggle', 'tooltip');
            element.attr('title', event.title + '\n' + event.start.format('h:mm a'));
        }
    });

    // Inicializa los tooltips de Bootstrap
    $('[data-toggle="tooltip"]').tooltip();
});

