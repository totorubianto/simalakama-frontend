import React, { useState } from "react";
import Card from "../global/style/Card";
import { Text, TextField } from "office-ui-fabric-react";
import { Nav, INavLink } from "office-ui-fabric-react/lib/Nav";
import SettingStyle from "./styles/SettingStyle";
interface Props {}

export const Home: React.FC<Props> = () => {
  const [menuSidebar, setMenuSidebar] = useState("account");
  const _onLinkClick = (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => {
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
                      value: "value",
                      name: "Account",
                      url: "#",
                      icon: "UserFollowed",
                      key: "account",
                      isExpanded: true
                    },
                    {
                      value: "value",
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
            <div className="tab">
              <Text variant="xLarge">General</Text>
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    label="First Name"
                    placeholder="Masukan firstname "
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Last Name"
                    placeholder="Masukan lastname "
                  />
                </div>
                <div className="col-md-6">
                  <TextField label="Email" placeholder="Masukan email mu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </SettingStyle>
  );
};
