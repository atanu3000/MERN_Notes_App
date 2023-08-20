import Head from "./components/Head";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import NoteDetails from "./pages/NoteDetails";
import EditForm from "./pages/EditForm";

function App() {
    return (
        <>
            <Router>
                <Head />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/add"} element={<AddForm />}/>
                    <Route path={"/details/:id"} element={<NoteDetails />} />
                    <Route path={"/edit/:id"} element={<EditForm />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
