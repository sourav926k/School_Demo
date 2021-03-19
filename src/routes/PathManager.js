import React from "react";
import { Route, Switch } from "react-router-dom";
import Contactus from "../components/contacts/Contactus";
import Landingpage from "../components/landingpage/Landingpage";
import LoginPage from "../components/logins/LoginPage";
import LogoutPage from "../components/logins/LogoutPage";
import Managment from "../components/managment/Managment";
import AdmissionForm from "../components/AdmissionForm";
// Imported Components
// import NoticePost from "../components/NoticePost";
import NoticePost from '../components/NoticePost'
import NoticeBoard from "../components/Home/NoticeBoard";

import ListView from "../components/ListView";
// import NoticeBoard from "../components/NoticeBoard";
import Imguploads from "../components/imageuploads/Imguploads";
import requireAuth from '../components/requireAuth'

function PathManager() {
  return (
    <div>
      {/* <NavLinks /> */}
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/notice-post" component={requireAuth(NoticePost)} />
        <Route exact path="/management" component={requireAuth(Managment)} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/admissionForm" component={(AdmissionForm)} />
        <Route exact path="/listView" component={requireAuth(ListView)} />
        <Route exact path="/notice" component={NoticeBoard} />
        <Route exact path="/logout" component={requireAuth(LogoutPage)} />
        <Route exact path="/uploadsimg" component={requireAuth(Imguploads)} />
      </Switch>
    </div>
  );
}

export default PathManager;
