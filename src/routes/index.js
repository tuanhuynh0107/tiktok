import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Footer from '~/components/Layout/DefaultLayout/Footer';
// public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component:Profile},
    { path: '/upload', component:Upload , layout: HeaderOnly},
    { path: '/search', component:Search , layout: null},
    { path: '/footer', component:Footer },

]
const privateRoutes = {
    
}

export { publicRoutes, privateRoutes}