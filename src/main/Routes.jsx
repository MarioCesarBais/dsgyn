import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../components/content/home/Home'
import Artigos from '../components/content/Artigos'
import Eventos from '../components/content/Eventos'
import Noticias from '../components/content/Noticias'
import Documentos from '../components/content/Documentos'
import Mat from '../components/content/Mat'
import QuemSomos from '../components/content/QuemSomos'
import CrudEventos from '../components/content/crud/CrudEventos'
import CrudNoticias from '../components/content/crud/CrudNoticias'
import CrudArtigos from '../components/content/crud/CrudArtigos'

export default () =>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artigos' element={<Artigos />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/documentos' element={<Documentos />} />
        <Route path='/mat' element={<Mat />} />
        <Route path='/quemsomos' element={<QuemSomos />} />
        <Route path='/crudeventos' element={<CrudEventos />} />
        <Route path='/crudnoticias' element={<CrudNoticias />} />
        <Route path='/crudartigos' element={<CrudArtigos />} />
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
