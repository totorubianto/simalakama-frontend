import React, { useState } from "react";
import { TextField, Text, PrimaryButton } from "office-ui-fabric-react";
import { connect } from "react-redux";
import ForgotPasswordStyle from "./styles/ForgotPasswordStyle";
import { checkErrors, errorData } from "../../global/common/error";
import { requestForgotPassword } from "../../../stores/auth/action";
interface Props {
  error: any;
  requestForgotPassword: any;
}

const ForgotPassword: React.FC<Props> = ({ error, requestForgotPassword }) => {
  const [forgotPassword, setForgotPassword] = useState({
    email: ""
  });
  const { email } = forgotPassword;
  const onChangeTextField = (e: any) => {
    setForgotPassword({ ...forgotPassword, [e.target.name]: e.target.value });
  };
  const onSubmitForgotPassword = () => {
    requestForgotPassword({ email });
  };

  return (
    <ForgotPasswordStyle>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card">
            <Text className="card-field" variant="xxLarge">
              Forgot Password
            </Text>
            <form onSubmit={() => onSubmitForgotPassword()}>
              <TextField
                className="card-field"
                label="Email"
                type="email"
                placeholder="Masukan email"
                name="email"
                onChange={e => onChangeTextField(e)}
                onRenderDescription={() =>
                  errorData({ error: checkErrors("email", error) })
                }
                value={email}
              />
              <PrimaryButton onClick={() => onSubmitForgotPassword()}>
                Forgot Password
              </PrimaryButton>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </ForgotPasswordStyle>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(mapStateToProps, { requestForgotPassword })(
  ForgotPassword
);
