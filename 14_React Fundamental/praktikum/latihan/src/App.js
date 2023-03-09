import ProfilePage from "./pages/Profil/ProfilePage";
import { mockUsers } from "./mockData";

function App() {
  return (
    <ProfilePage users={mockUsers}/>
  );
}

export default App;
