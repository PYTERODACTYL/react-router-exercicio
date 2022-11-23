import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const goToProfilePage = () => {
        navigate("/profile")
    }


    const goToProductPage=() =>{
        let id = Math.floor(Math.random() * 200)
        navigate("/product/"+id)
    }
    return (
        <header>
            <button onClick={goToHomePage} >
                Ir para página inicial
            </button>
            <button onClick={goToProfilePage}>
                Ir para página de perfil
            </button>
            <button onClick={goToProductPage}>
                Ir para página de produto
            </button>
        </header>
    );
}

export default Header;