const navItems = ['.sidebar-nav-icon', '#searchInput', '.user', '.businessLogo', '.sidebar', '#sidebarMenuButton', '#logoutButton',]
const imgLinksHover = document.querySelectorAll('.navLinks img, .search label, .navLinks')
const sidebarActive = document.querySelectorAll(navItems);
const btnNavMenu = document.querySelector('#sidebarMenuButton');
const navWidth = document.querySelector('nav');

btnNavMenu.onclick = () => {
  console.log(sidebarActive);
  Array.from(sidebarActive).forEach(icons => {
    icons.classList.toggle('active');
  })

  Array.from(imgLinksHover).forEach(imgLinksHover => {
    imgLinksHover.classList.toggle('on');
})
};