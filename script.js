
// Seleccionamos el botón hamburguesa y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.getElementById('navbar');

// Añadimos un evento de clic para activar/desactivar el menú
menuToggle.addEventListener('click', function() {
	navbar.classList.toggle('active');
});

// Seleccionar los elementos necesarios
const categoryToggle = document.getElementById('categoryToggle');
const developmentProjects = document.querySelector('.development-projects');
const designProjects = document.querySelector('.design-projects');
const projectCategoryLabel = document.getElementById('projectCategoryLabel');

// Función para alternar entre los proyectos de desarrollo y diseño
categoryToggle.addEventListener('change', function() {
    if (this.checked) {
        // Mostrar proyectos de diseño
        designProjects.classList.remove('hidden');
        developmentProjects.classList.add('hidden');
        projectCategoryLabel.textContent = 'de diseño';
    } else {
        // Mostrar proyectos de desarrollo
        developmentProjects.classList.remove('hidden');
        designProjects.classList.add('hidden');
        projectCategoryLabel.textContent = 'de desarrollo';
    }
});

