import { Sidebar } from "./nav.js";
import { Routes } from "./routes.js";

const navLinks = document.querySelector('.navLinks')

new Sidebar('body')
const route = new Routes('#app','.navLinks')

route.add("/", "/pages/home.html")
route.add('/dashboard', './pages/dashboard.html')
route.add('/clientes', './pages/clientes.html')
route.add('/settings', './pages/settings.html')
route.add('/pets', './pages/pets.html')
route.add('/veterinarios', './pages/vets.html')
route.add(404, './pages/404.html')

route.click()

window.onpopstate = () => route.click()
window.rota = links => route.route()


