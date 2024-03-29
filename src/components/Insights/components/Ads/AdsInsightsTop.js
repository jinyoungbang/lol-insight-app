import React, { useEffect } from "react";
import styled from "styled-components";

const AdsInsightsTop = () => {
  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");
    ins.className = "kakao_ad_area";
    ins.style = "display:none;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "100");
    ins.setAttribute("data-ad-unit", "DAN-oUMcZ3QRZ4GcpZLx");
    document.querySelector(".adfitTop").appendChild(ins);
    document.querySelector(".adfitTop").appendChild(scr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderContainer>
      <ContentContainer>
        <MockAd>
          <div className="adfitTop" />
        </MockAd>
      </ContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: #f5f9fc;
  flex-direction: row;
  display: flex;
`;

const ContentContainer = styled.div`
  margin: 0 100px;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-self: center;
  align-content: center;
  vertical-align: middle;
  text-align: center;
  padding: 30px 0;
  ${"" /* margin-bottom: -50px; */}
`;

const MockAd = styled.div`
  margin: 0 auto;
  height: 120px;
  width: 700px;
  ${"" /* background: #d4ccfc; */}
`;

export default AdsInsightsTop;
