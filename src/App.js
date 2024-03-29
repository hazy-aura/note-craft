import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {
    return(
<>
<BrowserRouter>
<Routes>
    {/* <Route path="/" component={Home}/> */}
    <Route path="/" element={<Home />} >
        
    </Route>
    </Routes>
</BrowserRouter>
{/* <Home/> */}
</>
    )
}

export default App