export default [
    {
        path: "/auth",
        component: () => import("@/layouts/authLayout.vue"),
        children: [
            {
                path: "/auth/login",
                name:"login",
                component: () => import("@/views/account/login.vue")
            },
            {
                path: "/auth/register",
                name:"register",
                component: () => import("@/views/account/register.vue")
            },

        ]
    }
]