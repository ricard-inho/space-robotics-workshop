import React from "react";
import { Link } from "gatsby";
import * as style from "./page-header.module.scss";
import { Popover, Button } from "antd";
import { DownOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";
import SeattleCover from "../../static/images/cvpr2020/cover-transparent.svg";
import { css } from "@emotion/react";

//Show the challenges as a dropdown
export const Challenges = (props: {
  onLeft?: boolean;
  conference: string;
  challengeData: React.ReactNode[];
}) => (
  <div className={props.onLeft === true ? style.left : style.right}>
    <Popover
      placement={props.onLeft === true ? "bottomLeft" : "bottomRight"}
      content={
        <div>
          {props.challengeData.map((challenge: React.ReactNode) => (
            <div
              css={css`
                text-align: ${props.onLeft === true ? "left" : "right"};
              `}
            >
              {challenge}
            </div>
          ))}
        </div>
      }
      trigger="hover"
    >
      <Button
        css={css`
          background: none !important;
          color: inherit;
          border: none;
          box-shadow: none;
          padding: 0px;
          font-size: 15px;
          &:hover {
            color: #1d3d7e;
          }
        `}
      >
        {props.onLeft === true ? (
          <>
            <DownOutlined style={{ fontSize: "14px" }} /> {props.conference}{" "}
            Challenges
          </>
        ) : (
          <>
            {props.conference} Challenges{" "}
            <DownOutlined style={{ fontSize: "14px" }} />{" "}
          </>
        )}
      </Button>
    </Popover>
  </div>
);

// This will eventually allow the old workshops (e.g., CVPR 2020)
// to be accessible from the header. Waiting until 2021 info is up
// for this to display anything.
export const OtherYears = (props: { onConference: string }) => (
  <div className={style.left}>
    <Popover
      placement={"bottomLeft"}
      content={
        <div>
          <div>
            {props.onConference === "Space Robotics 2025" ? (
              <>Space Robotics 2025</>
            ) : (
              <Link to="/spacerobotics2025">Space Robotics 2025</Link>
            )}
          </div>
        </div>
      }
      trigger="hover"
    >
      <Button
        css={css`
          background: none !important;
          color: inherit;
          border: none;
          box-shadow: none;
          padding: 0px;
          font-size: 15px;
          &:hover {
            color: #1d3d7e !important;
          }
        `}
      >
        <DownOutlined style={{ fontSize: "14px" }} /> Space Robotics Workshops
      </Button>
    </Popover>
  </div>
);

// Sets the page title and the dynamic header. Eventually, this will
// probably be modularized even further, when future versions come out.
// For now, were just using a single cover image.
export const Header = (props: {
  conference: string;
  rightSide: React.ReactNode;
  leftSide: React.ReactNode;
  imageContent: any;
  headerGradient: string;
  headerStyle: any;
  headerContainer: any;
}) => (
  <>
    <div
      css={css`
        background: ${props.headerGradient};
        ${props.headerStyle};
      `}
      className={style.header}
    >
      <div className={style.headerContent}>
        {props.leftSide}
        <div className={style.middle}>
          <div className={style.workshopTitle}>Space Robotics Workshop</div>
          <div className={style.conference}>{props.conference}</div>
        </div>
        {props.rightSide}
        <div id="headerContainer" {...props.headerContainer}>
          <div {...props.imageContent} />
        </div>
      </div>
    </div>
  </>
);

export default Header;
