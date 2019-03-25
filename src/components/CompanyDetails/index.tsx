import * as React from "react";
import styled from "styled-components";
import location from "../../assets/location.svg";
import link from "../../assets/link.svg";
import Logo from "../Logo";
import Flex, { FlexColumn } from "../Flex";
import Link from "../Link";
import Icon from "../Icon";

interface CompanyDetailsProps {
  name: string;
  logo: string;
  url: string;
  location: string;
}

const CompanyDetailsWrapper = styled(Flex)`
  align-items: center;
  padding: 20px;
`;

const CompanyInfoWrapper = styled(FlexColumn)`
  height: 100px;
  justify-content: space-evenly;

  h4 {
    color: #666;
  }
`;

const CompanyDetails = (props: CompanyDetailsProps) => (
  <CompanyDetailsWrapper>
    <Logo src={props.logo} />
    <CompanyInfoWrapper className="mg-left-10">
      <h1>{props.name}</h1>
      <Icon src={location}>
        <h4 className="mg-left-10">{props.location}</h4>
      </Icon>

      <Icon src={link}>
        <h4 className="mg-left-10">
          <Link href={props.url}>{props.url}</Link>
        </h4>
      </Icon>
    </CompanyInfoWrapper>
  </CompanyDetailsWrapper>
);

export default CompanyDetails;
