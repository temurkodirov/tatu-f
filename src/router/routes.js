export default [
    {
        path: "/",
        component: () => import("@/layouts/defaultLayout.vue"),
        children: [
            {
                path: "dashboard",
                name: "home",
                component: () => import("@/views/dashboard/home.vue")
            },
            {
                path: "rooms",
                name: "rooms",
                component: () => import("@/views/rooms/rooms.vue")
            }
        ],
        redirect: '/dashboard'
    },
    {
        path: "/auth",
        component: () => import("@/layouts/authLayout.vue"),
        children: [
            {
                path: "/auth/login",
                name: "login",
                component: () => import("@/views/account/login.vue")
            },
            {
                path: "/auth/register",
                name: "register",
                component: () => import("@/views/account/register.vue")
            }
        ],
        redirect: '/auth/login'
    }

];
