const sidebarActive = document.querySelectorAll('.sidebar-nav-icon, #searchInput, .user, .sidebar .sidebarHeader figure, .sidebar');
const btnNavMenu = document.querySelector('#sidebarMenuButton');
const navWidth = document.querySelector('nav');

btnNavMenu.onclick = () => {
  console.log(sidebarActive);
  Array.from(sidebarActive).forEach(icons => {
    icons.classList.toggle('active');
  })
}