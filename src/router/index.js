import Vue from "vue";
import VueRouter from 'vue-router'
import PaginaPrincipal from '../components/PaginaPrincipal.vue'
import Formulario from '../components/Formulario.vue'
import Paginacion from '../components/Paginacion.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: PaginaPrincipal,
            children:[
                {
                    path: '/formulario',
                    name: 'formulario',
                    component: Formulario
                },
                {
                    path: '/paginacion',
                    name: 'paginacion',
                    component: Paginacion
                }
            ]
        }
    ]
})

export default(router)