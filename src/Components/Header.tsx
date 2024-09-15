
export default function Header() {


    return (
        <>
            <div className="background text-color-white"
                 style={{borderBottom: "2px solid white", display: "flex", justifyContent: "space-between", alignItems: "center",
                height: "10vh"}}>
                <div style={{marginLeft: "10vw"}}>
                    <img src="../../public/logo_name.png" alt="logo-name" width={400}/>
                </div>
                <nav style={{marginRight: "10vw"}}>
                    <ul style={{listStyleType: "none", display: "flex", justifyContent: "space-between"}}>
                        <li className="nav-item" style={{marginLeft: "100px"}}>
                            <a className="text-color-white" href="#" style={{textDecoration: "none", fontWeight: "bold", fontSize: 20}}>Bio</a>
                        </li>
                        <li className="nav-item" style={{marginLeft: "100px"}}>
                            <a className="text-color-white" href="#" style={{textDecoration: "none", fontWeight: "bold", fontSize: 20}}>Projects</a>
                        </li>
                        <li className="nav-item" style={{marginLeft: "100px"}}>
                            <a className="text-color-white" href="#" style={{textDecoration: "none", fontWeight: "bold", fontSize: 20}}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}