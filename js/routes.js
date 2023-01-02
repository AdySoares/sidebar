export class Routes {
  constructor(root){
  this.app = document.querySelector(root)
  this.listRoutes = {}
  console.log(this.listRoutes)
  }

  add(pathname, link){
    this.listRoutes[pathname] = link
  }
  
  route(event){
    event = event || window.event
    event.preventDefault()
  
    const link = event.target.closest('a')
    const href = link.href

    window.history.pushState({}, "", href)

    this.click()
  }

click(){
    const {pathname} = window.location
    const route = this.listRoutes[pathname] || this.listRoutes[404]
    fetch(route).then((data) => data.text()).then(html => {this.app.innerHTML = html})
  }
}