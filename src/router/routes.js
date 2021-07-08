
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/familia', component: () => import('src/pages/Familia.vue') },
      { path: '/ajuda', component: () => import('src/pages/Ajuda.vue') },
      { path: '/convidados', component: () => import('src/pages/Convidados.vue') },
      { path: '', component: () => import('src/pages/Home.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
