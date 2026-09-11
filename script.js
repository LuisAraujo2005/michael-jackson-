// Dados detalhados para revelação nos cards de estatísticas
const detailsData = [
  "13 Grammys em competição + Prêmio Grammy Legend & Lifetime Achievement Award.",
  "Mais de 70 milhões de cópias vendidas mundialmente, certificado como o álbum mais vendido da história.",
  "Apoiou mais de 39 instituições de caridade e doou mais de 500 milhões de dólares ao longo da vida.",
  "Estimativa de mais de 750 milhões de recordes de vendas acumulados globalmente."
];

// Revelação dinâmica das informações
function toggleStat(element) {
  const allBoxes = document.querySelectorAll('.stat-box');
  const index = Array.from(allBoxes).indexOf(element);
  const detailElem = element.querySelector('.stat-detail');

  if (element.classList.contains('revealed')) {
    element.classList.remove('revealed');
    detailElem.textContent = "Clique para saber mais";
  } else {
    element.classList.add('revealed');
    detailElem.textContent = detailsData[index];
  }
}

// Alterações do cabeçalho e ativação do menu ao rolar a página
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 50) {
    header.style.padding = '0.8rem 8%';
    header.style.background = 'rgba(7, 7, 8, 0.95)';
  } else {
    header.style.padding = '1.2rem 8%';
    header.style.background = 'var(--glass-bg)';
  }

  // Identifica a seção ativa no menu
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});