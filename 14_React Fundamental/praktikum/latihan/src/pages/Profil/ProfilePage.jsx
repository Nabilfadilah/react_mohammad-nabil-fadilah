// import Header from "./components/Header"
// import ProfilCard from "./components/ProfileCard"
// import Navbar from "./components/Navbar"

import Header from "./components/Header"
import ProfilCard from "./components/ProfileCard"
// import Navbar from "./components/Navbar"

export default function ProfilePage ({users}) {
    return (
        <>
            {/* <Navbar/> */}
            <Header text="Profile Page"/>
            {/* <ProfilCard users={users[0]}/> */}
            {users.map((user)=> <ProfilCard user={user}/>)}
        </>   
    ) 
}
