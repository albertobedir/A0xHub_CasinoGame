import React, { useState } from "react";
import { translate } from "../../translations/translate";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignIn(props) {
  const { lang } = props;
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [visible, setVisible] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  function handleChange(type, e) {
    switch (type) {
      case "user":
        setUser(e.target.value);
        break;
      case "pass":
        setPass(e.target.value);
        break;
      default:
    }
  }

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        return accounts[0];
      } catch (error) {
        alert(translate({ lang: lang, info: "wallet_connect_rejected" }));
        return null;
      }
    } else {
      alert(translate({ lang: lang, info: "wallet_not_found" }));
      return null;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const wallet = await connectWallet();
    if (wallet) {
      if (typeof props.signSubmit === "function") {
        props.signSubmit({
          emit: "signin_send",
          payload: { user, pass, wallet },
        });
      }
    }
  }

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <div className="sign_in_container">
      <Form>
        <Row>
          <Col sm={4} className="label_container d-none d-sm-block">
            <div className="label">
              {translate({ lang: lang, info: "user" })}
            </div>
          </Col>
          <Col sm={8} className="input_container">
            <input
              placeholder={translate({ lang: lang, info: "user" })}
              className="input_light"
              type="text"
              value={user}
              onChange={(e) => {
                handleChange("user", e);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="label_container d-none d-sm-block">
            <div className="label">
              {translate({ lang: lang, info: "password" })}
            </div>
          </Col>
          <Col sm={8} className="input_container">
            <input
              placeholder={translate({ lang: lang, info: "password" })}
              className="input_light"
              type={visible ? "text" : "password"}
              value={pass}
              onChange={(e) => {
                handleChange("pass", e);
              }}
            />
            <div className="input_eye" onClick={() => handleVisible()}>
              {visible ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="button"
              onClick={(e) => handleSubmit(e)}
              className="mybutton button_fullcolor"
            >
              {translate({ lang: lang, info: "sign_in" })}
            </Button>
          </Col>
        </Row>
      </Form>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
    </div>
  );
}

export default SignIn;
