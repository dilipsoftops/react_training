import {
  Accordion,
  AccordionSummary,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  createStyles,
  withStyles,
  AccordionDetails,
  Box,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";

const useStyles = createStyles((theme) => ({
  section: {
    width: "91.6%",
    height: "auto",
    margin: "0 auto",
  },
}));

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsMobile: false,
    };
  }

  resize() {
    this.setState({ IsMobile: window.innerWidth >= 750 });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    var data = [
      {
        heading: "Quick Access",
        subHeading: [
          "Airtel Black Bill Payment",
          "Prepaid Recharge",
          "Postpaid Bill Payment",
          "DTH Recharges",
          "Broadband Payment",
          "Exciting Offers",
          "Personal Loans",
          "Airtel Payments Bank",
          "Airtel Thanks App",
          "Free Sim Delivery",
          "Telecom Tariff",
          "Rights Issue",
          "QIP & FCCB Issue",
          "Terms & Conditions",
          "Airtel Blogs",
        ],
      },
      {
        heading: "Help At Hand",
        subHeading: [
          "Find a store",
          "Check Coverage",
          "Ownership Transfer",
          "Manage Your account",
          "ISP Near Me",
          "Wynk Music",
          "Broadband FAQs",
          "DTH FAQs",
          "Airtel Xstream FAQs",
          "Postpaid FAQs",
          "Stores near me",
          "DTH Consumer Corner",
          "Do not disturb",
        ],
      },
      {
        heading: " About Airtel",
        subHeading: [
          "Brand",
          "Career",
          "Partner",
          "Business",
          "About Airtel",
          "Press Release",
          "Investor",
          "Investor Support",
          "Telecom Charter",
        ],
      },
      {
        heading: " New Connections",
        subHeading: [
          "Buy DTH New Connection",
          "Buy Prepaid New Connection",
          "Buy Postpaid New Connection",
          "Buy Fiber New Connection",
          "Buy Airtel Black Plan",
          "Buy Xstream Box",
          "Switch to Airtel",
          "International Roaming",
        ],
      },
    ];

    const { classes } = this.props;

    return (
      <div style={{ backgroundColor: "rgb(255,255,255)" }}>
        <div className={classes.section}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #e8e8eb",
            }}
          >
            {data.map((d, i) => {
              return (
                <div>
                  <List component="ul" disablePadding>
                    <ListItem>
                      <ListItemText primary={<Typography variant="caption">{d.heading}</Typography>} />
                    </ListItem>
                    {d.subHeading.map((s, i) => (
                      <ListItem>
                        <ListItemText primary={s} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <a href="#5" style={{ zoom: 5 }}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 64 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="wt-header-afi-i"
              >
                <path
                  d="M5.719 15.461c.9-.318 1.617-.761 2.308-1.189l.187-.113c.731-.45 1.443-.977 2.177-1.604 1.624-1.389 2.599-2.753 3.158-4.417.226-.676.546-1.99.155-3.226-.288-.899-.843-1.64-1.654-2.2-.093-.075-1.104-.868-3.01-.868-1.742 0-3.655.658-5.68 1.959l-.064.04-.008.008a3.97 3.97 0 0 0-.181.112 1.663 1.663 0 0 1-.157.1 11.64 11.64 0 0 0-1.177.893C.92 5.764-.057 7.119.003 8.268c.025.486.232.886.617 1.18.346.266.779.4 1.287.4 1.036 0 2.174-.553 2.953-1.018.05-.033.1-.067.149-.097.135-.088.27-.174.406-.265l.134-.088c1.105-.724 2.25-1.475 3.536-1.913.336-.112.628-.166.895-.166.133 0 .265.012.387.04.392.088.68.307.85.648.3.598.226 1.536-.18 2.397-.554 1.172-1.509 2.327-2.832 3.434-.675.562-1.297.998-1.852 1.292l-.05.026c-.26.139-.55.296-.858.41l-.043.015c-.09.033-.168.063-.24.086-1.296.339-.508-.777-.508-.777.286-.33.576-.597.884-.875.174-.162.355-.326.538-.505l.04-.04c.226-.221.536-.524.517-.958-.026-.576-.624-.938-1.188-.953h-.04c-.54 0-1.053.312-1.388.57-.336.263-.69.657-.93 1.027-.344.535-1.069 1.899-.363 2.987.282.435.755.656 1.403.656.454 0 .987-.107 1.592-.32ZM30.869 0c-1.026 0-1.863.808-1.863 1.801 0 1.01.809 1.804 1.837 1.804 1.03 0 1.84-.79 1.84-1.791a1.727 1.727 0 0 0-.504-1.271A1.808 1.808 0 0 0 30.869 0ZM29.395 15.77h2.891V4.507l-2.891.46v10.805ZM23.094 4.304c-1.38 0-2.622.383-3.898 1.003l-.325.165.777 1.696.439-.202c.901-.396 1.865-.661 2.73-.625 1.047.042 1.478.511 1.478 1.494v.576h-1.717c-2.754 0-4.468 1.43-4.515 3.645 0 2.109 1.794 3.923 4.291 3.923 2.016 0 3.722-.64 4.873-1.768V8.195c.002-2.93-2.136-3.891-4.133-3.891Zm1.196 9.341c-.284.196-.867.364-1.501.364-1.162 0-1.687-.873-1.667-1.89.021-.841.557-1.795 2.007-1.795h1.16v3.321h.001ZM53.566 13.988c-.791 0-1.329-.255-1.678-.623-.52-.551-.75-1.681-.688-2.88h6.234v-.283c-.053-3.992-1.443-5.81-4.491-5.81-3.4 0-4.724 3.06-4.748 5.932-.022 1.816.68 3.65 1.964 4.691.78.636 1.86.985 3.115.985.686 0 1.398-.097 2.05-.297 1.252-.376 2.175-1.033 2.175-1.033l-.818-1.641c-.148.109-1.398.96-3.114.96Zm-.626-7.49c1.285 0 1.474 1.364 1.474 2.212h-3.13c.05-1.09.514-2.211 1.657-2.211ZM34.602 6.524l-.005 9.255h2.95V7.067c.385-.366 1.202-.688 1.977-.72.718-.027 1.185.118 1.185.118l.815-1.791c-.316-.154-1.071-.343-1.947-.343-1.271.002-3.22.366-4.975 2.193ZM63.564 13.997c-1.203-.09-1.455-.607-1.455-1.467V1.385l-2.9.484v10.478c0 2.483 1.38 3.548 3.686 3.548.492 0 1.105-.114 1.105-.114v-1.778c.002-.002-.27.006-.436-.006ZM45.267 1.4l-2.964.465v10.528c0 2.36 1.409 3.474 3.77 3.474.569 0 1.102-.105 1.102-.105V14.01c-.032-.002-.251-.002-.417-.008-1.246-.042-1.489-.714-1.489-1.49V6.587h1.909v-2.08h-1.909V1.4h-.002Z"
                  fill="#e90000"
                ></path>
              </svg>
            </a>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                verticalAlign: "right",
              }}
            >
              <h4 style={{ marginRight: "10px", marginTop: "25px" }}>Get the app</h4>
              <span style={{ zoom: 5, display: "inline-block" }}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 81 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="wt-sf-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M77.999 24H3a3.009 3.009 0 0 1-3-3V3c0-1.653 1.347-3 3.001-3H78a3.006 3.006 0 0 1 3 3v18c0 1.647-1.349 3-3.001 3Z"
                    fill="#000"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M77.999.48A2.528 2.528 0 0 1 80.522 3v18a2.523 2.523 0 0 1-2.523 2.52H3A2.528 2.528 0 0 1 .478 21V3A2.523 2.523 0 0 1 3.001.48H78Zm0-.48H3a3.009 3.009 0 0 0-3 3v18c0 1.653 1.347 3 3.001 3H78a3.006 3.006 0 0 0 3-3V3c0-1.647-1.349-3-3.001-3Z"
                    fill="#A6A6A6"
                  ></path>
                  <path
                    d="M42.671 7.94c-.54 0-.997-.19-1.357-.565A1.925 1.925 0 0 1 40.765 6c0-.547.185-1.009.549-1.375a1.81 1.81 0 0 1 1.356-.565c.535 0 .99.19 1.357.565.364.378.548.84.548 1.375-.005.547-.19 1.01-.548 1.375-.359.377-.815.565-1.356.565Zm-16.095 0c-.529 0-.988-.188-1.363-.557-.373-.368-.562-.834-.562-1.383s.19-1.014.562-1.382c.368-.37.827-.557 1.363-.557.263 0 .517.052.762.159.24.103.435.243.58.416l.035.043-.404.398-.041-.05c-.228-.272-.534-.405-.938-.405-.36 0-.675.129-.934.383-.26.256-.393.591-.393.997 0 .405.132.74.393.996.26.254.574.383.934.383a1.3 1.3 0 0 0 .96-.383c.149-.15.241-.359.274-.624H26.51v-.56h1.851l.008.051c.013.095.026.192.026.282 0 .516-.155.933-.462 1.242-.348.365-.804.55-1.356.55Zm21.4-.08h-.57l-1.749-2.809.015.506v2.301h-.57V4.14h.65l.019.029 1.643 2.645-.015-.504V4.14h.577v3.72Zm-9.593 0h-.579V4.7h-1.002v-.56h2.582v.56H38.38v3.16h.002Zm-2.052 0h-.577V4.14h.577v3.72Zm-3.241 0h-.577V4.7H31.51v-.56h2.582v.56H33.09v3.16Zm-1.945-.006h-2.211V4.14h2.211v.56h-1.633v1.02h1.474v.554h-1.474v1.02h1.633v.56Zm10.592-.863c.258.258.57.389.934.389.374 0 .68-.128.934-.39.254-.254.382-.587.382-.99 0-.402-.128-.738-.38-.99a1.276 1.276 0 0 0-.934-.39c-.374 0-.68.128-.933.39-.254.254-.382.588-.382.99 0 .403.127.738.379.99Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.712 13.053c-1.409 0-2.55 1.073-2.55 2.553 0 1.466 1.149 2.553 2.55 2.553 1.408 0 2.55-1.08 2.55-2.553 0-1.48-1.142-2.553-2.55-2.553Zm0 4.094c-.77 0-1.434-.64-1.434-1.547 0-.92.665-1.547 1.434-1.547.77 0 1.433.627 1.433 1.547.002.913-.663 1.547-1.433 1.547Zm-5.563-4.094c-1.408 0-2.55 1.073-2.55 2.553 0 1.466 1.15 2.553 2.55 2.553 1.408 0 2.55-1.08 2.55-2.553 0-1.48-1.143-2.553-2.55-2.553Zm0 4.094c-.77 0-1.434-.64-1.434-1.547 0-.92.665-1.547 1.434-1.547.77 0 1.434.627 1.434 1.547 0 .913-.664 1.547-1.434 1.547Zm-6.62-3.314v1.08h2.583c-.079.606-.278 1.054-.584 1.36-.378.38-.962.793-1.992.793-1.587 0-2.828-1.286-2.828-2.88 0-1.594 1.24-2.88 2.828-2.88.857 0 1.481.34 1.944.773l.763-.766c-.643-.62-1.5-1.094-2.701-1.094-2.177 0-4.004 1.781-4.004 3.961 0 2.186 1.825 3.96 4.004 3.96 1.175 0 2.058-.385 2.755-1.113.71-.713.936-1.72.936-2.533 0-.253-.02-.48-.06-.673h-3.645c.002-.002.002.012.002.012Zm27.075.84c-.213-.572-.857-1.626-2.177-1.626-1.309 0-2.396 1.034-2.396 2.553 0 1.433 1.076 2.553 2.523 2.553a2.521 2.521 0 0 0 2.117-1.133l-.863-.58c-.286.426-.684.706-1.249.706-.57 0-.97-.26-1.235-.774l3.4-1.414-.12-.284Zm-3.466.854c-.027-.986.763-1.488 1.328-1.488.445 0 .816.22.943.54l-2.271.948ZM49.377 18h1.116v-7.5h-1.116V18Zm-1.833-4.38h-.04c-.252-.3-.73-.573-1.341-.573-1.269 0-2.437 1.121-2.437 2.56 0 1.434 1.162 2.541 2.437 2.541.603 0 1.089-.274 1.34-.58h.04v.366c0 .974-.518 1.5-1.354 1.5-.684 0-1.108-.494-1.281-.907l-.97.407c.278.673 1.022 1.506 2.25 1.506 1.308 0 2.417-.773 2.417-2.66V13.2H47.55v.42h-.006Zm-1.282 3.527c-.77 0-1.414-.646-1.414-1.54 0-.9.644-1.553 1.414-1.553.763 0 1.355.66 1.355 1.553.007.894-.59 1.54-1.355 1.54Zm14.568-6.646h-2.67V18h1.117v-2.84h1.554c1.235 0 2.45-.9 2.45-2.327s-1.21-2.332-2.451-2.332Zm.032 3.612h-1.587v-2.574h1.587c.837 0 1.309.693 1.309 1.287 0 .588-.478 1.287-1.309 1.287Zm6.892-1.073c-.81 0-1.646.36-1.992 1.146l.99.413c.213-.413.603-.554 1.016-.554.578 0 1.162.348 1.175.967v.08a2.492 2.492 0 0 0-1.162-.288c-1.068 0-2.152.587-2.152 1.686 0 1.007.877 1.654 1.853 1.654.75 0 1.162-.34 1.42-.733h.04v.58h1.076v-2.873c0-1.337-.99-2.078-2.264-2.078Zm-.14 4.107c-.365 0-.876-.18-.876-.64 0-.58.638-.8 1.182-.8.492 0 .724.105 1.016.252a1.346 1.346 0 0 1-1.322 1.188Zm6.329-3.947-1.282 3.253h-.04L71.293 13.2h-1.2l1.992 4.547-1.136 2.527h1.162l3.066-7.074h-1.234ZM63.896 18h1.117v-7.5h-1.117V18Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.235 4.52c-.173.187-.273.473-.273.847v13.267c0 .374.1.66.279.84l.046.04 7.403-7.433v-.166L6.28 4.48l-.045.04Z"
                    fill="url(#google-play-badge-icon_svg__a)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m16.153 14.566-2.47-2.48v-.173l2.47-2.48.054.034 2.92 1.667c.836.472.836 1.253 0 1.732l-2.92 1.667-.054.033Z"
                    fill="url(#google-play-badge-icon_svg__b)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.207 14.533 13.684 12l-7.45 7.48c.273.293.73.326 1.242.04l8.73-4.987Z"
                    fill="url(#google-play-badge-icon_svg__c)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m16.207 9.467-8.731-4.98c-.511-.293-.97-.253-1.241.04L13.684 12l2.523-2.533Z"
                    fill="url(#google-play-badge-icon_svg__d)"
                  ></path>
                  <path
                    opacity=".2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m16.153 14.48-8.671 4.946c-.484.28-.916.26-1.195.006l-.046.046.046.04c.279.254.71.275 1.195-.005l8.73-4.98-.06-.054Z"
                    fill="#000"
                  ></path>
                  <path
                    opacity=".12"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m19.127 12.78-2.982 1.7.054.053 2.92-1.667c.42-.24.625-.553.625-.866-.025.287-.238.56-.617.78Z"
                    fill="#000"
                  ></path>
                  <path
                    opacity=".25"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m7.476 4.574 11.651 6.646c.379.214.592.494.625.78 0-.313-.206-.627-.625-.866L7.476 4.487c-.836-.48-1.514-.079-1.514.88v.087c0-.96.678-1.354 1.514-.88Z"
                    fill="#fff"
                  ></path>
                  <defs>
                    <linearGradient
                      id="google-play-badge-icon_svg__a"
                      x1="13.026"
                      y1="5.224"
                      x2="1.161"
                      y2="8.372"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00A0FF"></stop>
                      <stop offset=".007" stop-color="#00A1FF"></stop>
                      <stop offset=".26" stop-color="#00BEFF"></stop>
                      <stop offset=".512" stop-color="#00D2FF"></stop>
                      <stop offset=".76" stop-color="#00DFFF"></stop>
                      <stop offset="1" stop-color="#00E3FF"></stop>
                    </linearGradient>
                    <linearGradient
                      id="google-play-badge-icon_svg__b"
                      x1="20.217"
                      y1="12"
                      x2="5.759"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFE000"></stop>
                      <stop offset=".409" stop-color="#FFBD00"></stop>
                      <stop offset=".775" stop-color="orange"></stop>
                      <stop offset="1" stop-color="#FF9C00"></stop>
                    </linearGradient>
                    <linearGradient
                      id="google-play-badge-icon_svg__c"
                      x1="14.835"
                      y1="13.378"
                      x2="5.257"
                      y2="29.432"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF3A44"></stop>
                      <stop offset="1" stop-color="#C31162"></stop>
                    </linearGradient>
                    <linearGradient
                      id="google-play-badge-icon_svg__d"
                      x1="4.359"
                      y1=".107"
                      x2="8.632"
                      y2="7.277"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#32A071"></stop>
                      <stop offset=".069" stop-color="#2DA771"></stop>
                      <stop offset=".476" stop-color="#15CF74"></stop>
                      <stop offset=".801" stop-color="#06E775"></stop>
                      <stop offset="1" stop-color="#00F076"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span
                style={{
                  zoom: 5,
                  display: "inline-block",
                  verticalAlign: "right",
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 81 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="wt-sf-icon"
                >
                  <path
                    d="M80.463 21.167a2.298 2.298 0 0 1-2.302 2.298H2.84a2.303 2.303 0 0 1-2.305-2.298V2.836A2.304 2.304 0 0 1 2.84.534h75.322a2.302 2.302 0 0 1 2.301 2.302v18.33Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M78.161 24H2.84A2.84 2.84 0 0 1 0 21.167V2.837A2.84 2.84 0 0 1 2.839 0H78.16a2.843 2.843 0 0 1 2.838 2.836v18.33A2.839 2.839 0 0 1 78.161 24Z"
                    fill="#A6A6A6"
                  ></path>
                  <path
                    d="M80.463 21.167a2.298 2.298 0 0 1-2.302 2.298H2.84a2.303 2.303 0 0 1-2.305-2.298V2.836A2.304 2.304 0 0 1 2.84.534h75.322a2.302 2.302 0 0 1 2.301 2.302v18.33Z"
                    fill="#000"
                  ></path>
                  <path
                    d="M18.087 11.874c-.018-1.935 1.584-2.876 1.657-2.92-.907-1.322-2.313-1.502-2.807-1.517-1.18-.124-2.326.707-2.928.707-.613 0-1.54-.695-2.538-.674-1.285.02-2.487.763-3.146 1.918-1.36 2.354-.346 5.814.958 7.717.652.933 1.414 1.973 2.41 1.936.976-.04 1.34-.62 2.518-.62 1.166 0 1.508.62 2.525.597 1.047-.016 1.706-.936 2.336-1.877.753-1.067 1.056-2.12 1.068-2.174-.024-.008-2.033-.776-2.053-3.093Zm-1.921-5.689c.524-.656.883-1.548.784-2.454-.76.034-1.71.525-2.256 1.167-.484.565-.917 1.492-.805 2.363.853.064 1.729-.43 2.277-1.076Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M78.161 0H37.816L53.62 24H78.16A2.841 2.841 0 0 0 81 21.165V2.836A2.841 2.841 0 0 0 78.161 0Z"
                    fill="url(#app-store-badge-icon_svg__a)"
                  ></path>
                  <path
                    d="M32.216 18.908h-1.363l-.747-2.346H27.51l-.71 2.346h-1.328l2.572-7.987h1.589l2.583 7.987Zm-2.335-3.33-.675-2.086c-.072-.213-.206-.715-.403-1.505h-.024c-.08.34-.206.841-.38 1.505l-.663 2.085h2.145Zm8.938.38c0 .979-.266 1.753-.799 2.321-.476.506-1.069.759-1.775.759-.763 0-1.312-.272-1.645-.817v3.022h-1.28V15.04c0-.615-.016-1.246-.048-1.893h1.126l.071.913h.024c.427-.688 1.075-1.031 1.944-1.031.68 0 1.247.268 1.701.805.453.538.68 1.245.68 2.122Zm-1.304.046c0-.56-.126-1.023-.38-1.387a1.311 1.311 0 0 0-1.114-.568c-.316 0-.602.105-.859.314-.257.21-.425.484-.504.824a1.672 1.672 0 0 0-.059.39v.96c0 .418.129.772.386 1.061.256.288.59.433 1 .433.483 0 .858-.187 1.126-.557.27-.372.404-.861.404-1.47Zm7.93-.047c0 .98-.266 1.754-.799 2.322-.477.506-1.07.759-1.776.759-.763 0-1.312-.272-1.645-.817v3.022h-1.28V15.04c0-.615-.016-1.246-.047-1.893h1.125l.072.913h.024c.426-.688 1.074-1.031 1.944-1.031.678 0 1.246.268 1.7.805.453.538.681 1.245.681 2.122Zm-1.305.047c0-.56-.127-1.023-.38-1.387a1.31 1.31 0 0 0-1.113-.568c-.316 0-.603.105-.86.314-.257.21-.425.484-.503.824a1.71 1.71 0 0 0-.06.39v.96c0 .418.129.772.385 1.061.256.288.59.433 1.002.433.483 0 .858-.187 1.126-.557.269-.372.403-.861.403-1.47Zm8.712.663c0 .68-.237 1.233-.71 1.66-.52.465-1.245.699-2.176.699-.86 0-1.549-.166-2.069-.498l.296-1.066a3.561 3.561 0 0 0 1.85.498c.482 0 .857-.11 1.125-.326.268-.217.404-.508.404-.87 0-.325-.112-.597-.333-.818-.221-.221-.587-.427-1.102-.616-1.398-.521-2.099-1.284-2.099-2.288 0-.655.248-1.192.741-1.611.494-.42 1.148-.629 1.962-.629.727 0 1.333.127 1.814.38l-.321 1.043a3.171 3.171 0 0 0-1.535-.367c-.452 0-.806.11-1.06.331a.95.95 0 0 0-.32.724c0 .315.122.577.367.782.213.19.6.395 1.161.616.688.277 1.194.6 1.517.971.327.37.489.834.489 1.385Zm4.243-2.558h-1.41v2.796c0 .711.248 1.066.746 1.066.229 0 .419-.02.569-.06l.035.972c-.252.094-.584.142-.995.142-.506 0-.9-.155-1.186-.463-.284-.309-.427-.825-.427-1.553v-2.903h-.84v-.96h.84v-1.055l1.257-.379v1.434h1.411v.963Zm6.353 1.872c0 .885-.254 1.612-.76 2.18-.528.585-1.232.877-2.109.877-.846 0-1.52-.28-2.021-.84-.502-.562-.753-1.268-.753-2.121 0-.893.26-1.624.776-2.192.518-.57 1.216-.854 2.093-.854.845 0 1.524.281 2.038.842.491.544.736 1.246.736 2.108Zm-1.327.029c0-.528-.114-.98-.343-1.359-.268-.457-.652-.686-1.15-.686-.513 0-.906.229-1.174.686-.229.379-.343.84-.343 1.383 0 .528.114.982.343 1.36.277.457.663.685 1.163.685.49 0 .873-.233 1.15-.697.236-.388.354-.843.354-1.372Zm5.489-1.736a2.227 2.227 0 0 0-.404-.036c-.45 0-.798.17-1.043.51-.213.3-.32.68-.32 1.138v3.022h-1.28v-3.946c.002-.604-.01-1.209-.037-1.813h1.115l.047 1.102h.035c.136-.379.349-.684.64-.913.267-.2.592-.308.926-.308.118 0 .225.008.32.023v1.22Zm5.724 1.482c.003.194-.013.388-.047.58h-3.84c.015.569.2 1.005.557 1.305.324.267.742.402 1.256.402.569 0 1.087-.09 1.554-.272l.2.887c-.545.238-1.188.356-1.93.356-.894 0-1.595-.262-2.106-.787-.509-.525-.764-1.23-.764-2.115 0-.868.237-1.591.712-2.168.497-.616 1.17-.923 2.014-.923.83 0 1.46.307 1.886.923.338.488.508 1.093.508 1.811Zm-1.22-.332a1.732 1.732 0 0 0-.25-.984c-.22-.356-.562-.534-1.019-.534-.418 0-.759.173-1.018.521a1.91 1.91 0 0 0-.38.995l2.666.002ZM27.141 8.097c-.356 0-.664-.018-.92-.047V4.189c.358-.056.72-.083 1.084-.082 1.467 0 2.143.722 2.143 1.899 0 1.357-.798 2.09-2.307 2.09Zm.215-3.495c-.198 0-.367.012-.507.04v2.936c.076.012.221.018.426.018.961 0 1.509-.548 1.509-1.573 0-.914-.495-1.42-1.428-1.42Zm4.199 3.524c-.827 0-1.363-.617-1.363-1.456 0-.874.547-1.497 1.41-1.497.815 0 1.363.589 1.363 1.451 0 .885-.565 1.502-1.41 1.502Zm.024-2.493c-.454 0-.746.425-.746 1.02 0 .582.298 1.007.74 1.007s.74-.454.74-1.02c0-.576-.292-1.007-.734-1.007Zm6.103-.401-.885 2.83h-.577l-.367-1.23a9.324 9.324 0 0 1-.227-.913h-.012a6.129 6.129 0 0 1-.227.914l-.39 1.229h-.583l-.834-2.83h.647l.32 1.345c.076.32.14.623.193.909h.012c.046-.238.121-.536.232-.903l.403-1.35h.512l.385 1.321c.093.32.169.635.228.932h.017c.04-.29.105-.6.192-.932l.344-1.322h.617Zm3.26 2.83h-.629V6.437c0-.5-.192-.752-.57-.752-.374 0-.63.32-.63.694v1.683h-.63V6.041c0-.25-.005-.519-.023-.81h.554l.03.437h.017c.169-.303.512-.495.897-.495.595 0 .985.455.985 1.194v1.695Zm1.735 0h-.63v-4.13h.63v4.13Zm2.294.064c-.827 0-1.363-.617-1.363-1.456 0-.874.547-1.497 1.41-1.497.815 0 1.362.589 1.362 1.451.001.885-.564 1.502-1.41 1.502Zm.023-2.493c-.454 0-.745.425-.745 1.02 0 .582.297 1.007.739 1.007.443 0 .74-.454.74-1.02 0-.576-.29-1.007-.734-1.007Zm3.867 2.429-.046-.326H48.8c-.193.262-.473.39-.828.39-.507 0-.868-.355-.868-.833 0-.698.606-1.06 1.655-1.06v-.052c0-.373-.198-.56-.588-.56-.28 0-.524.07-.74.21l-.127-.413c.261-.163.588-.245.972-.245.74 0 1.113.39 1.113 1.171v1.043c0 .285.012.507.04.676l-.567-.001Zm-.086-1.41c-.7 0-1.05.17-1.05.571 0 .297.18.442.432.442.32 0 .618-.244.618-.576v-.437Zm3.668 1.41-.03-.454h-.017c-.18.343-.485.518-.91.518-.682 0-1.187-.6-1.187-1.444 0-.886.524-1.51 1.24-1.51.378 0 .647.129.798.386h.012V3.933h.63v3.366c0 .274.007.53.024.763h-.56Zm-.093-1.665c0-.397-.263-.734-.663-.734-.467 0-.752.413-.752.995 0 .571.296.962.74.962.395 0 .675-.344.675-.752v-.471Zm4.622 1.73c-.827 0-1.363-.618-1.363-1.457 0-.874.548-1.497 1.41-1.497.816 0 1.363.589 1.363 1.451 0 .885-.564 1.502-1.41 1.502Zm.023-2.494c-.453 0-.745.425-.745 1.02 0 .582.298 1.007.74 1.007s.739-.454.739-1.02c.001-.576-.29-1.007-.734-1.007Zm4.77 2.429h-.63V6.437c0-.5-.191-.752-.57-.752-.373 0-.629.32-.629.694v1.683h-.63V6.041c0-.25-.005-.519-.023-.81h.554l.03.437h.017c.168-.303.512-.495.897-.495.594 0 .985.454.985 1.194v1.695ZM66 5.703h-.693v1.375c0 .35.122.524.367.524.11 0 .204-.012.279-.03l.017.479c-.122.046-.285.07-.488.07-.496 0-.792-.274-.792-.99V5.703h-.413v-.471h.413v-.519l.617-.187v.705H66v.472Zm3.33 2.359h-.628V6.449c0-.507-.192-.763-.571-.763-.326 0-.63.221-.63.67v1.706h-.629v-4.13h.629v1.701h.013a.955.955 0 0 1 .85-.46c.6 0 .966.466.966 1.206v1.683Zm3.412-1.264h-1.888c.012.536.367.838.892.838.28 0 .536-.046.763-.133l.098.437a2.364 2.364 0 0 1-.95.174c-.885 0-1.409-.56-1.409-1.426 0-.868.537-1.52 1.339-1.52.723 0 1.177.535 1.177 1.345.004.096-.003.191-.022.285Zm-.577-.448c0-.437-.22-.746-.622-.746-.362 0-.647.315-.688.746h1.31Z"
                    fill="#fff"
                  ></path>
                  <defs>
                    <linearGradient
                      id="app-store-badge-icon_svg__a"
                      x1="59.407"
                      y1="24.064"
                      x2="59.407"
                      y2="-62.492"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1A1A1A" stop-opacity=".1"></stop>
                      <stop offset=".123" stop-color="#212121" stop-opacity=".151"></stop>
                      <stop offset=".308" stop-color="#353535" stop-opacity=".227"></stop>
                      <stop offset=".532" stop-color="#575757" stop-opacity=".318"></stop>
                      <stop offset=".783" stop-color="#858585" stop-opacity=".421"></stop>
                      <stop offset="1" stop-color="#B3B3B3" stop-opacity=".51"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>

            <Box display="flex">
              <Typography style={{ marginTop: "15px" }}>Follow us On</Typography>
              <ul style={{ listStyle: "none", display: "flex" }}>
                <li>
                  <FacebookIcon />
                </li>

                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
              </ul>
            </Box>

            <Button
              variant="outlined"
              style={{
                height: "50px",
                width: "auto",
                marginTop: "8px",
                borderRadius: "10%",
                padding: "10px",
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              BACK TO TOP <ArrowUpwardIcon />{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Footer);