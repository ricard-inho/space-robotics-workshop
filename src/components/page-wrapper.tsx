import React from "react";
import Header, { OtherYears } from "./page-header";
import { headerId } from "./text-helpers";
import { Helmet } from "react-helmet";
import * as style from "./page-wrapper.module.scss";
import { YoutubeFilled, GithubFilled, SlackOutlined } from "@ant-design/icons";

// This brings both the header, page content, section contents
// in a way that they are clickable. Note, all children
// must be sections: <Section></Section>.
export default class PageWrapper extends React.Component<
  {
    conference: string;
    children: any;
    rightSide: React.ReactNode;
    imageContent: any;
    headerGradient: string;
    headerStyle?: string;
    headerContainer?: any;
  },
  { headerIdLocations: number[]; focusedHeaderI: number }
> {
  updateSidebarScroll: { (): void };

  constructor(props) {
    super(props);
    this.state = {
      focusedHeaderI: -1,
      headerIdLocations: [],
    };

    // workaround so that this.state can be accessed within event listeners.
    const self = this;
    this.updateSidebarScroll = () => {
      // scrolled to absolute bottom of page, set last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        self.setState({
          focusedHeaderI: self.state.headerIdLocations.length - 1,
        });
      } else {
        // updates which section should be highlighted.
        let scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : ((document.documentElement ||
                document.body.parentNode ||
                document.body) as HTMLElement).scrollTop;

        // give some extra padding to the sections
        scrollTop += 50;

        // above the first section
        if (
          self.state.headerIdLocations.length > 0 &&
          scrollTop < self.state.headerIdLocations[0]
        ) {
          self.setState({ focusedHeaderI: -1 });
        }

        // find which section
        for (let i = 0; i < self.state.headerIdLocations.length; i++) {
          if (scrollTop > self.state.headerIdLocations[i]) {
            self.setState({ focusedHeaderI: i });
          }
        }
      }
    };
  }

  updateHeaderLocations() {
    this.setState({
      headerIdLocations: this.props.children.map(
        (section: any) =>
          document
            .getElementById(headerId(section.props.title))
            .getBoundingClientRect().top + window.scrollY
      ),
    });
  }

  sidebarHeaderClick(header: string) {
    window.location.hash = headerId(header);
  }

  componentDidMount() {
    this.updateHeaderLocations();
    window.addEventListener("scroll", this.updateSidebarScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateSidebarScroll);
  }

  render() {
    // formats the page title, header, main content, and right sidebar content.
    return (
      <>
        <Helmet>
          <title>Space Robotics Workshop</title>
        </Helmet>
        <Header
          conference={this.props.conference}
          leftSide={<OtherYears onConference={this.props.conference} />}
          rightSide={this.props.rightSide}
          imageContent={this.props.imageContent}
          headerGradient={this.props.headerGradient}
          headerStyle={this.props.headerStyle}
          headerContainer={this.props.headerContainer}
        />
        <div className={style.contentWrapper}>
          <div className={style.mainContent}>{this.props.children}</div>
          <div className={style.toc}>
            {this.props.children.map((section, i: number) => (
              <div
                className={style.tocHeader}
                key={section.props.title}
                onClick={this.sidebarHeaderClick.bind(
                  this,
                  section.props.title
                )}
                style={
                  this.state.focusedHeaderI == i
                    ? { borderLeft: "2px solid #000" }
                    : {}
                }
              >
                {section.props.title}
              </div>
            ))}
          </div>
        </div>
        <footer>
          <a
            href="//github.com/ricard-inho/space-robotics-workshop"
            target="_blank"
          >
            <GithubFilled className={style.footerIcon} />
          </a>
          <a
            href="//"
            target="_blank"
          >
            <YoutubeFilled className={style.footerIcon} />
          </a>
          <a
            href="//"
            target="_blank"
          >
            <SlackOutlined className={style.footerIcon} />
          </a>
        </footer>
      </>
    );
  }
}
