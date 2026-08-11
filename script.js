const integrantes = ['Carlos Sánchez', 'Katherine Almengor', 'Pablo Turcios', 'Rodrigo Godínez', 'Adrián Garzóna', 'Óscar Ymbert'];

const videosMatematicas = {
    'Carlos Sánchez': 'https://drive.google.com/file/d/1add5mmLg559UIhoZ783Rkx-j5MkKVtKC/preview',
    'Katherine Almengor': 'https://drive.google.com/file/d/1mVd8Fg-ApmTyCPZmpCeqOj0qb28kw1yy/preview',
    'Pablo Turcios': 'https://drive.google.com/file/d/1P725mopnRAE9VVcTy9EXa3p5l-s7TaIH/preview',
    'Rodrigo Godínez': 'https://drive.google.com/file/d/1iBkAjbA9f5AeQL7-MxbsaxBfjdL428mz/preview',
    'Adrián Garzóna': 'https://drive.google.com/file/d/1K9AXPw2SXEXgjlVoTebMIwX6pfRX6rKp/preview',
    'Óscar Ymbert': 'https://drive.google.com/file/d/1OG4FDSnizSjObXnZhLRsbBUbFPwFvIgg/preview'
};

const videoGeneral = 'https://drive.google.com/file/d/1Sek8ujjYmqzR-mU0FXooQIFprI6-m1Hw/preview';

const contenedor = document.getElementById('secciones-container');

// --- MATEMÁTICAS ---
let htmlMatematicas = `
    <section id="matematicas" class="subject-group">
        <div class="subject-content">
            <div class="subject-header">
                <h2>Matemáticas</h2>
                <div class="welcome-msg">Bienvenido al curso de Matemáticas</div>
            </div>
            <div class="grid-6">
                ${integrantes.map((nombre) => `
                    <div class="card">
                        <div class="video-box">
                            ${videosMatematicas[nombre] 
                                ? `<iframe src="${videosMatematicas[nombre]}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>` 
                                : `<div style="display:flex; align-items:center; justify-content:center; height:100%; color:#555;">SIN VIDEO</div>`}
                        </div>
                        <strong>${nombre}</strong>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
`;

// --- INGLÉS ---
let htmlIngles = `
    <section id="ingles" class="subject-group">
        <div class="subject-content">
            <div class="subject-header">
                <h2>Inglés</h2>
                <div class="welcome-msg">Bienvenido al curso de Inglés</div>
            </div>
            <div class="single-video-container">
                <div class="single-video-box">
                    <iframe src="${videoGeneral}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
`;

// --- LENGUA Y LITERATURA ---
let htmlLengua = `
    <section id="lengua" class="subject-group">
        <div class="subject-content">
            <div class="subject-header">
                <h2>Lengua y Literatura</h2>
                <div class="welcome-msg">Bienvenido al curso de Lengua y Literatura</div>
            </div>
            <div class="single-video-container">
                <div class="single-video-box">
                    <iframe src="${videoGeneral}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
`;

// Inyectar todo al contenedor principal
contenedor.innerHTML = htmlMatematicas + htmlIngles + htmlLengua;
