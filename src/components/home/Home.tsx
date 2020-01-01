import React, { useState } from "react";
import Card from "../global/style/Card";
import { Text, TextField } from "office-ui-fabric-react";
import { PrimaryButton } from "office-ui-fabric-react";
import { Nav, INavLink } from "office-ui-fabric-react/lib/Nav";
import SettingStyle from "./styles/SettingStyle";
import { checkErrors, errorData } from "../global/common/error";
import { connect } from "react-redux";
import { updateProfile } from "../../stores/user/action";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";

interface Props {
  error: any;
  updateProfile: any;
  auth: any;
  history: any;
}

const Home: React.FC<Props> = ({
  error,
  updateProfile,
  auth: { user },
  history
}) => {
  const [menuSidebar, setMenuSidebar] = useState("account");
  const [formUpdateProfile, setFormUpdateProfile] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [tabQuery, setTabQuery] = useState("account");

  const onChangeTextField = (e: any) => {
    setFormUpdateProfile({
      ...formUpdateProfile,
      [e.target.name]: e.target.value
    });
  };

  const {
    email: emailData,
    firstName: firstNameData,
    lastName: lastNameData
  } = user;

  const { email, firstName, lastName } = formUpdateProfile;
  const onUpdateProfile = () => {
    updateProfile({ firstName, lastName, email });
  };
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const _onLinkClick = (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    const queryPage = item && item.page;
    history.push(`?page=${queryPage}`);
    setTabQuery(queryPage);
    console.log(queryPage);
    if (item && item.key) {
      setMenuSidebar(item.key);
    }
  };
  return (
    <SettingStyle className="container">
      <Card height="100" margin="20,0,0,0">
        <div className="row no-gutters">
          <div className="col-md-3">
            <Nav
              onLinkClick={(ev: any, item: any) => _onLinkClick(ev, item)}
              selectedKey={menuSidebar}
              selectedAriaLabel="Selected"
              ariaLabel="Nav basic example"
              styles={{
                root: {
                  width: "100%",
                  height: 350,
                  boxSizing: "border-box",
                  border: "1px solid #eee",
                  overflowY: "auto",
                  backgroundColor: "white"
                }
              }}
              groups={[
                {
                  links: [
                    {
                      page: "account",
                      name: "Account",
                      url: "#",
                      icon: "UserFollowed",
                      key: "account",
                      isExpanded: true
                    },
                    {
                      page: "security",
                      name: "Security",
                      url: "#",
                      icon: "LaptopSecure",
                      key: "security",
                      isExpanded: true
                    }
                  ]
                }
              ]}
            />
          </div>
          <div className="col-md-9">
            {console.log(tabQuery)}
            {tabQuery === "account" ? (
              <div className="tab">
                <Text variant="xLarge">General</Text>
                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      label="First Name"
                      name="firstName"
                      onRenderDescription={() =>
                        errorData({ error: checkErrors("firstName", error) })
                      }
                      onChange={(e: any) => onChangeTextField(e)}
                      value={firstName}
                      placeholder={firstNameData}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Last Name"
                      name="lastName"
                      onRenderDescription={() =>
                        errorData({ error: checkErrors("lastName", error) })
                      }
                      onChange={(e: any) => onChangeTextField(e)}
                      value={lastName}
                      placeholder={lastNameData}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      onRenderDescription={() =>
                        errorData({ error: checkErrors("email", error) })
                      }
                      onChange={(e: any) => onChangeTextField(e)}
                      value={email}
                      placeholder={emailData}
                    />
                  </div>
                </div>
                <PrimaryButton onClick={() => onUpdateProfile()}>
                  Save the Changes
                </PrimaryButton>
              </div>
            ) : (
              <div>toto</div>
            )}
          </div>
        </div>
      </Card>
    </SettingStyle>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  error: state.error
});
export default withRouter(connect(mapStateToProps, { updateProfile })(Home));
