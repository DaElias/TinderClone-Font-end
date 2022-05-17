import React, { useState } from "react";
import Nav from "../components/Nav";
import {
  Section,
  ContainerOnboarding,
  Form,
  Input,
  Label,
  MultipleInputs,
  PhotoContainer,
  InputRadio,
  Container,
  Img,
} from "../components/style/page_styles/OnboardingStyles";

const initialState = {
  user_id: "",
  first_name: "",
  dob_day: "",
  dob_month: "",
  dob_year: "",
  show_gender: false,
  gender_identity: "",
  gender_interest: "",
  email: "",
  url: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  about: "",
  matches: [],
};

const Onboarding = () => {
  const [formDat, setFormDat] = useState(initialState);
  const handleSumbmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const type = e.target.name;
    const value = type === "show_gender" ? e.target.checked : e.target.value;

    setFormDat({
      ...formDat,
      [type]: value,
    });

    // setFormDat((prevState) => ({
    //   ...prevState,
    //   [type]: type === "show_gender" ? e.target.checked : value,
    // }));

    // switch (type) {
    //   case "first_name":
    //     setFormDat({ ...formDat, first_name: value });
    //     break;
    //   case "url":
    //     setFormDat({ ...formDat, url: value });

    //     break;
    //   case "dob_day":
    //     setFormDat({ ...formDat, dob_day: value });

    //     break;
    //   case "dob_month":
    //     setFormDat({ ...formDat, dob_month: value });

    //     break;
    //   case "dob_year":
    //     setFormDat({ ...formDat, dob_year: value });

    //     break;
    //   case "gender":
    //     setFormDat({ ...formDat, gender_identity: value });

    //     break;

    //   case "gender-interest":
    //     setFormDat({ ...formDat, gender_interest: value });

    //     break;
    //   case "about":
    //     setFormDat({ ...formDat, about: value });

    //     break;
    //   case "show_gener":
    //     const { checked } = e.target;
    //     setFormDat({ ...formDat, show_gender: checked });

    //     break;
    //   default:
    //     break;
    // }
  };

  return (
    <Container>
      <Nav minimal={true} setIsSignUp={() => {}} showAuthModal={false} />
      <ContainerOnboarding>
        <h2>CREATE ACCOUTN</h2>
        <Form onSubmit={handleSumbmit}>
          <Section>
            <Label htmlFor="first_name">First Name</Label>
            <Input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              onChange={handleChange}
              value={formDat.first_name}
            />
            <Label htmlFor="dob_day">Birthday</Label>
            <MultipleInputs>
              <Input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required
                onChange={handleChange}
                value={formDat.dob_day}
              />
              <Input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="HH"
                required
                onChange={handleChange}
                value={formDat.dob_month}
              />
              <Input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required
                onChange={handleChange}
                value={formDat.dob_year}
              />
            </MultipleInputs>
            <MultipleInputs>
              <InputRadio
                id="woman_gender"
                type="radio"
                name="gender_identity"
                // checked={false}
                onChange={handleChange}
                value="woman"
              />
              <Label inputCheck htmlFor="woman_gender">
                Woman
              </Label>
              <InputRadio
                id="man_gender"
                type="radio"
                name="gender_identity"
                // checked={false}
                onChange={handleChange}
                value="man"
              />
              <Label inputCheck htmlFor="man_gender">
                Man
              </Label>
              <InputRadio
                id="more_gender"
                type="radio"
                name="gender_identity"
                // checked={false}
                onChange={handleChange}
                value="more"
              />
              <Label inputCheck htmlFor="more_gender">
                More
              </Label>
            </MultipleInputs>

            <Label htmlFor="show_gener">Show gander on my profile</Label>
            <Input
              id="show_gener"
              type="checkbox"
              name="show_gender"
              onChange={handleChange}
              value="show_gener"
            />
            <Label>Show Me</Label>
            <MultipleInputs>
              <InputRadio
                id="woman_gender-interest"
                type="radio"
                name="gender_interest"
                // checked={false}
                onChange={handleChange}
                value="woman"
              />
              <Label inputCheck htmlFor="woman_gender-interest">
                Woman
              </Label>
              <InputRadio
                id="man_gender-interest"
                type="radio"
                name="gender_interest"
                // checked={false}
                onChange={handleChange}
                value="man"
              />
              <Label inputCheck htmlFor="man_gender-interest">
                Man
              </Label>

              <InputRadio
                id="more_gender-interest"
                type="radio"
                name="gender_interest"
                // checked={false}
                onChange={handleChange}
                value="more"
              />
              <Label inputCheck htmlFor="more_gender-interest">
                Everyone
              </Label>
            </MultipleInputs>
            <Label htmlFor="about">About Me</Label>
            <Input
              id="about"
              type="text"
              name="about"
              placeholder="I like walks..."
              onChange={handleChange}
            />
            <Input type="submit" />
          </Section>
          <Section>
            <Label htmlFor="about">Profile Profile</Label>
            <Input
              profile
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              value={formDat.url}
            />
            <PhotoContainer>
              <Img
                src={formDat.url}
                alt="profile pic preview"
                animation={formDat.url !== "" && true}
              />
            </PhotoContainer>
          </Section>
        </Form>
      </ContainerOnboarding>
    </Container>
  );
};

export default Onboarding;
