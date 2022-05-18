import React, { useState } from "react";
// import Nav from "../components/Nav";
import TinderCard from "react-tinder-card";
import { Animation } from "../components/style";
import ChatContainer from "../components/ChatContainer";
import {
  DashboardContainer,
  SwiperContainer,
  CardContainer,
  Swipe,
  SwipeInfo,
} from "../components/style/page_styles/DashboardStyles";

const initialStateExample = [
  {
    user_id: "1",
    first_name: "Philip",
    dob_day: "11",
    dob_month: "05",
    dob_year: "2001",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "philip2@test.com",
    url: "https://www.w3schools.com/w3css/img_avatar3.png",
    about: "I'm Philip!!",
    matches: [],
  },
  {
    user_id: "2",
    first_name: "Juana",
    dob_day: "11",
    dob_month: "05",
    dob_year: "2001",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "philip2@test.com",
    url: "https://scme.mx/wp-content/uploads/2020/06/img_avatar2-2.png",
    about: "I'm Philip!!",
    matches: [],
  },
  {
    user_id: "5",
    first_name: "Lucas",
    dob_day: "11",
    dob_month: "05",
    dob_year: "2001",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "philip2@test.com",
    url: "https://static.vecteezy.com/system/resources/previews/002/369/549/large_2x/cartoon-avatar-of-smiling-politician-portrait-vector.jpg",
    about: "I'm Philip!!",
    matches: [],
  },
  {
    user_id: "3",
    first_name: "Maria",
    dob_day: "11",
    dob_month: "05",
    dob_year: "2001",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "philip2@test.com",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    about: "I'm Philip!!",
    matches: [],
  },
];

const Dashboard = () => {
  const [lastDirection, setLastDirection] = useState();

  const filteredGenderedUsers = initialStateExample;

  const swiped = (direction, nameToDelete) => {
    console.log("removin: " + nameToDelete);
    setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <Animation>
      {/* <Nav minimal={true} setIsSignUp={() => {}} showAuthModal={false} /> */}
      <DashboardContainer>
        <ChatContainer />
        <SwiperContainer>
          <CardContainer>
            {filteredGenderedUsers?.map((genderedUser) => (
              <Swipe key={genderedUser.user_id}>
                <TinderCard
                  onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                  onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
                >
                  <div
                    style={{
                      backgroundImage: "url(" + genderedUser.url + ")",
                      height: window.screen.width > 375 ? "650px" : "375px",
                      width: window.screen.width > 375 ? "400px" : "260px",
                      objectFit: "cover",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "30px",
                      boxShadow:
                        "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                    }}
                  >
                    <h3
                      style={{
                        marginTop: "0",
                        color: "white",
                        textShadow: " 1px 1px  black",
                      }}
                    >
                      {genderedUser.first_name}
                    </h3>
                  </div>
                </TinderCard>
              </Swipe>
            ))}
            <SwipeInfo>
              {lastDirection ? <p>You Swiped {lastDirection}</p> : <p>:</p>}
            </SwipeInfo>
          </CardContainer>
        </SwiperContainer>
      </DashboardContainer>
    </Animation>
  );
};

export default Dashboard;
