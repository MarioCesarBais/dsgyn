import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './content/home/Home'
import Artigos from '../components/content/Artigos'
import Eventos from './content/Eventos'
import Noticias from './content/Noticias'

export default props =>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artigos' element={<Artigos />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/noticias' element={<Noticias />} />
        {/* <Route path='/documentos' element={<Documentos />} />
        <Route path='/quemsomos' element={<QuemSomos />} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
