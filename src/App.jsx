 
import Login from "./components/login";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import AddExpence from "./pages/AddExpence";
import Group from "./pages/Group";
import GroupDetails from "./pages/GroupDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
   
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/add-expense" element={<AddExpence />} />
          <Route path="/groups" element={<Group />} />
          <Route path="/groups/:groupName" element={<GroupDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
