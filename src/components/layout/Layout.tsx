import NavBar from "../navbar/Navbar"

interface Ilayout {
    children: React.ReactNode
}

function Layout({children}:Ilayout){
    return (
        <>
        <NavBar/>
       {children}
        </>
    )
}

export default Layout