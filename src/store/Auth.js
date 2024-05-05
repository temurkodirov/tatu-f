import axios from "axios";

export default ({
    namespaced: true,
    state: {
        token: '',
        loginState: '',
        userState: {
            id: 0,
            ism: '',
            familiya: '',
            kasblar_id: 0,
            login: '',
            token: ''
        }
    },
    getters: {

        user (state) {
            return state.userState
        }
    },
    mutations: {

        SET_USER (state, data) {
            state.user = data
        }
    },
    actions: {
        async signIn ({ dispatch }, credentials) {
            try {
                let result = await axios.post('login', credentials);
                if (result.data.msg === '404 - user not found') {
                    throw new Error('404 - user not found');
                }
                return dispatch('attempt', result.data);
            } catch (error) {
                // Handle error
                throw error; // Rethrow the error to be caught by the calling code
            }
        },

        async attempt ({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token);
            }
            if (!state.token) {
                return
            }
            try {
                let result = await axios.get('odamlar.php?login',{
                    headers: {
                        'Authorization': token
                    }
                });
                commit('SET_USER', result.data);

            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', {
                    id: 0,
                    fullName: '',
                    emailOrPhoneNumber: '',
                    userRole: ''
                })
            }
        },

        signOut ({ commit }) {
            commit('SET_TOKEN', '')
            commit('SET_USER', {
                id: 0,
                ism: '',
                familiya: '',
                kasblar_id: 0,
                login: '',
                token: ''
            })
            localStorage.clear()
        }
    }
})