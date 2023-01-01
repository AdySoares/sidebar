class SidebarComponent{
  constructor(root){
    this.root = document.querySelector(root)
    console.log(this.root)
    this.navItems = ['.sidebar-nav-icon', '#searchInput', '.user', '.businessLogo','#sidebarMenuButton', '#logoutButton', '.sidebar']
    this.imgLinksHover = this.root.querySelectorAll('.navLinks img, .search label, .navLinks')
    this.sidebarActive = this.root.querySelectorAll(this.navItems);
    this.btnNavMenu = this.root.querySelector('#sidebarMenuButton');
  }
      
}
export class Sidebar extends SidebarComponent{
  constructor(root){
    super(root)
      this.activeSidebar()
    };
    
  activeSidebar(){
    this.btnNavMenu.addEventListener('click', () => {
      this.sidebarON()
      this.HoverButtonsOn()
    })
  }
  sidebarON() {
    Array.from(this.sidebarActive).forEach(icons => {
      icons.classList.toggle('active');
    })
  }
  HoverButtonsOn() {
    Array.from(this.imgLinksHover).forEach(imgLinksHover => {
      imgLinksHover.classList.toggle('on');
  })
  }
}

