import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consultar'
import ConsultarCard from './pages/consultarCard'
import Detalhe from './pages/detalhe'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/admin' element={<Home />} />

                <Route path='/admin/cadastrar' element={<Cadastrar />} />
                <Route path='/admin/alterar/:idParam' element={<Cadastrar />} />

                <Route path='/admin/consultar' element={<Consultar />} />
<<<<<<< HEAD
                <Route path='/admin/detalhe/:idParam' element={<Detalhe />} />
=======
                <Route path='/admin/consultarCard' element={<ConsultarCard />} />
                <Route path='/admin/detalhe' element={<Detalhe />} />
>>>>>>> 8d541b4f741edf89c0f768a8fbdf1b816dfbf8d0
            </Routes>
        </BrowserRouter>
    )
}
