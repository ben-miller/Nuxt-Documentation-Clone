export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Hi from middleware auth');
});
