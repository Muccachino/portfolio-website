
import {
    FaReact,
    FaJsSquare,
    FaGit,
    FaGithub,
    FaNpm,
    FaPhp,
    FaHtml5,
    FaCss3Alt, FaJava,
} from "react-icons/fa";
import {
    SiTypescript,
    SiDotnet,
    SiMysql,
    SiCsharp,
    SiMariadb,
    SiMongodb,
} from "react-icons/si";

const items = [
    <FaReact key="react" size={100} color="#61DBFB" />,
    <SiTypescript key="typescript" size={100} color="#3178C6" />,
    <FaJsSquare key="javascript" size={100} color="#F7DF1E" />,
    <SiDotnet key="dotnet" size={100} color="#512BD4" />,
    <FaJava key="java" size={100} color="#E91E6E" />,
    <FaCss3Alt key="css3" size={100} color="#1572B6" />,
    <FaGit key="git" size={100} color="#F05032" />,
    <FaGithub key="github" size={100} color="#6e5494" />,
    <FaNpm key="npm" size={100} color="#CB3837" />,
    <FaPhp key="php" size={100} color="#777BB4" />,
    <SiMysql key="mysql" size={100} color="#4479A1" />,
    <SiCsharp key="csharp" size={100} color="#239120" />,
    <SiMariadb key="mariadb" size={100} color="#4E90A4" />,
    <SiMongodb key="mongodb" size={100} color="#47A248" />,
    <FaHtml5 key="html5" size={100} color="#E34F26" />,
];

export default function HomePage() {


    return (
        <div className="background text-color-white" style={{height: "80vh", padding: "5vh"}}>
            <div style={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center"}}>
                <div style={{marginBottom: "20px"}}>
                    <h1>Lucas Staszewski</h1>
                    <h2>Full Stack Developer</h2>
                </div>

                <div style={{display: "flex"}}>
                    {items.map((item, index) => (
                        <div className="scroll-item" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <h2 style={{marginTop: "80px", marginBottom: "20px", textDecoration: "underline"}}>Project Examples</h2>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <a className="text-color-white" href="#" style={{textDecoration: "none"}}>
                        <img src="../../public/OnlineShop_Example.png" alt="online-shop" width="450" height="300" />
                        <h3>Online Shop written in PHP</h3>
                    </a>
                </div>
                <div>
                    <a className="text-color-white" href="#" style={{textDecoration: "none", color: "white"}}>
                        <img src="../../public/ManagementSystem_Example.png" alt="management-system" width="450" height="300" />
                        <h3>Rebuild of Microsoft's EF-Core Tutorial using C#, ReactTS and RestAPI</h3>
                    </a>
                </div>
                <div>
                    <a className="text-color-white" href="#" style={{textDecoration: "none", color: "white"}}>
                        <img src="../../public/Risk_Example.png" alt="risk" width="450" height="300"/>
                        <h3>Alternative Version of the board game "Risk" written in Java</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}