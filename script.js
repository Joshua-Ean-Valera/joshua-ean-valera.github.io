// Placeholder data
const skills = [
  "HTML5", "CSS3", "JavaScript", "Networking", "Data Analytics", "Machine Learning"
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    link: "#"
  },
  {
    title: "Networking Lab",
    description: "A hands-on project involving physical network setup and configuration.",
    link: "#"
  }
];

// Populate skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Populate projects
const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `<h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>`;
  projectsList.appendChild(div);
});
