// // // import React, { useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Navbar from "./components/Navbar";

// // // import SessionList from "./pages/SessionList";
// // // import SessionForm from "./pages/SessionForm";
// // // import SessionDetail from "./pages/SessionDetail";
// // // import Login from "./pages/Login";
// // // import Register from "./pages/Register";
// // // import MySessions from "./pages/MySessions";
// // // import MySessionDetail from "./pages/MySessionDetail";
// // // import SessionEdit from "./pages/SessionEdit";

// // // function App() {
// // //   const [user, setUser] = useState(null);

// // //   return (
// // //     <Router>
// // //       <Navbar user={user} setUser={setUser} />
// // //       <div className="container mt-4">
// // //         <Routes>
// // //           {/* Public Sessions */}
// // //           <Route path="/" element={<SessionList />} />
// // //           <Route path="/sessions/:id" element={<SessionDetail />} />

// // //           {/* My Sessions */}
// // //           <Route path="/my-sessions" element={<MySessions />} />
// // //           <Route path="/my-sessions/:id" element={<MySessionDetail />} />
// // //           <Route path="/my-sessions/new" element={<SessionForm mode="draft" />} />
// // //           <Route path="/my-sessions/edit/:id" element={<SessionForm mode="edit" />} />
// // //           <Route path="/sessions/edit/:id" element={<SessionEdit />} />

// // //           {/* Auth */}
// // //           <Route path="/login" element={<Login setUser={setUser} />} />
// // //           <Route path="/register" element={<Register />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;




// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";

// // import SessionList from "./pages/SessionList";
// // import SessionForm from "./pages/SessionForm";
// // import SessionDetail from "./pages/SessionDetail";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import MySessions from "./pages/MySessions";
// // import MySessionDetail from "./pages/MySessionDetail";
// // import HomePage from "./pages/HomePage";

// // function App() {
// //   const [user, setUser] = useState(null);

// //   return (
// //     <Router>
// //       <Navbar user={user} setUser={setUser} />
// //       <div className="container mt-4">
// //         <Routes>
// //           {/* Public Sessions */}
// //           <Route path="/" element={<SessionList />} />
// //           <Route path="/sessions/:id" element={<SessionDetail />} />
// //           <Route path="/" element={<HomePage />} /> 

// //           {/* My Sessions */}
// //           <Route path="/my-sessions" element={<MySessions />} />
// //           <Route path="/my-sessions/:id" element={<MySessionDetail />} />
// //           <Route path="/my-sessions/new" element={<SessionForm mode="draft" />} />
// //           <Route path="/my-sessions/edit/:id" element={<SessionForm mode="edit" />} /> {/* Edit route */}

// //           {/* Auth */}
// //           <Route path="/login" element={<Login setUser={setUser} />} />
// //           <Route path="/register" element={<Register />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import SessionList from "./pages/SessionList";
// import SessionForm from "./pages/SessionForm";
// import SessionDetail from "./pages/SessionDetail";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import MySessions from "./pages/MySessions";
// import MySessionDetail from "./pages/MySessionDetail";
// import HomePage from "./pages/HomePage"; // Ensure that HomePage is imported

// function App() {
//   const [user, setUser] = useState(null); // Track if the user is logged in

//   return (
//     <Router>
//       <Navbar user={user} setUser={setUser} />
//       <div className="container mt-4">
//         <Routes>
//           {/* Home page route */}
//           <Route path="/" element={<HomePage />} /> {/* Home page for non-logged-in users */}

//           {/* Public Sessions */}
//           <Route path="/sessions" element={<SessionList />} />
//           <Route path="/sessions/:id" element={<SessionDetail />} />

//           {/* My Sessions (only accessible if user is logged in) */}
//           {user && (
//             <>
//               <Route path="/my-sessions" element={<MySessions />} />
//               <Route path="/my-sessions/:id" element={<MySessionDetail />} />
//               <Route path="/my-sessions/new" element={<SessionForm mode="draft" />} />
//               <Route path="/my-sessions/edit/:id" element={<SessionForm mode="edit" />} />
//             </>
//           )}

//           {/* Auth Routes */}
//           <Route path="/login" element={<Login setUser={setUser} />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import SessionList from "./pages/SessionList";
import SessionForm from "./pages/SessionForm";
import SessionDetail from "./pages/SessionDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MySessions from "./pages/MySessions";
import MySessionDetail from "./pages/MySessionDetail";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  const [user, setUser] = useState(null); // track logged-in user

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="container mt-4">
        <Routes>
          {/* Show HomePage if not logged in, otherwise show SessionList */}
          <Route
            path="/"
            element={user ? <SessionList /> : <HomePage />}
          />

          {/* Public sessions */}
          <Route path="/sessions/:id" element={<SessionDetail />} />

          {/* My Sessions (only when logged in) */}
          {user && (
            <>
              <Route path="/my-sessions" element={<MySessions />} />
              <Route path="/my-sessions/:id" element={<MySessionDetail />} />
              <Route path="/my-sessions/new" element={<SessionForm mode="draft" />} />
              <Route path="/my-sessions/edit/:id" element={<SessionForm mode="edit" />} />
            </>
          )}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />

          {/* Redirect unknown paths to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
