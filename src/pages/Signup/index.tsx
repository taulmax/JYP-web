import styled from "styled-components";
import { useState, useEffect } from "react";
import { Nav } from "../../components/Nav";

export const Signup = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [validPw, setValidPw] = useState(false);

  return (
    <>
      <SuContainer>
        <SuBg>
          <LoginWrapper>
            <LoginTitle>LOGIN</LoginTitle>
            <LoginProfile>
              <svg
                width="358"
                height="358"
                viewBox="0 0 358 358"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="179" cy="179" r="179" fill="#11376D" />
              </svg>
            </LoginProfile>
            <InputWrapper>
              <LoginInput>
                <InputBox
                  onChange={(e) => setInputEmail(e.target.value)}
                  type="text"
                  placeholder="아이디를 입력해 주세요."
                  value={inputEmail}
                />
              </LoginInput>

              <LoginInput style={{ marginTop: "10px" }}>
                <InputBox
                  onChange={(e) => setInputEmail(e.target.value)}
                  type="text"
                  placeholder="비밀번호를 입력해 주세요."
                  value={inputEmail}
                />
              </LoginInput>
            </InputWrapper>
          </LoginWrapper>
          <LoginWrapper>
            <LoginTitle>JOIN US</LoginTitle>
            <LoginProfile>
              <svg
                width="358"
                height="358"
                viewBox="0 0 358 358"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="179" cy="179" r="179" fill="#11376D" />
              </svg>
            </LoginProfile>
            <LoginInput>
              <InputBox
                onChange={(e) => setInputEmail(e.target.value)}
                type="text"
                placeholder="아이디를 입력해 주세요."
                value={inputEmail}
              />
            </LoginInput>
            <LoginInput style={{ marginTop: "10px" }}>
              <InputBox
                onChange={(e) => setInputEmail(e.target.value)}
                type="text"
                placeholder="비밀번호를 입력해 주세요."
                value={inputEmail}
              />
            </LoginInput>
          </LoginWrapper>
        </SuBg>
      </SuContainer>
    </>
  );
};

const SuContainer = styled.div`
  display: flex;
  margin-left: 241px;
  width: 1920px;
  height: 1080px;
`;

const SuBg = styled.div`
  display: flex;
  width: 1920px;
  height: 1080px;
  margin-left: -91px;
  background-color: #fff;
`;

const LoginWrapper = styled.div`
  position: relative;
  top: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  width: 254px;
  height: 67px;
  padding: 20px;
  span {
    font-weight: 900;
    font-size: 20px;
  }
  font-size: 40px;
  font-weight: 700;
`;

const LoginProfile = styled.div`
  width: 358px;
  height: 358px;
  margin-top: 100px;
  margin-bottom: 44px;
  margin-left: 110px;
`;

const InputWrapper = styled.div`
  text-align: center;
`;

const LoginInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 280px;
  height: 48px;
  padding-bottom: 22px;
  i {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
  }
`;

const InputBox = styled.input`
  position: absolute;
  width: 280px;
  height: 50px;
  padding: 0 15px;
  margin-top: 11px;
  border-radius: 35px;
  font-size: 15px;
  color: #333;
  background-color: #fff;
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px "#3a68f9";
  }
  ::placeholder {
    color: #767676;
    opacity: 0.5;
  }
`;

const SignupTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  span {
    font-weight: 900;
    font-size: 20px;
  }
`;
