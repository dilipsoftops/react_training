// import React from "react";
import { ExpandMore } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styled from "styled-components";
import ImageCarousel from "../components/ImageCarousel";

import Cards from "../components/Cards.js";
import Footer from "../components/Footer.js";

import { Box, Button, Container, Divider, List, ListItem, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
`;

const StyledBadgeList = styled(List)`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export default class HomePage extends Component {
  render() {
    return (
      <Box>
        <Container>
          <StyledBox>
            <StyledList>
              <ListItem>For me</ListItem>
              <ListItem>FOR MY BUSINESS</ListItem>
              <ListItem>FOR INVESTORS</ListItem>
            </StyledList>
            <Box>
              <Typography variant="p">Explore Airtel</Typography>
            </Box>
          </StyledBox>
        </Container>
        <Divider />
        <Container>
          <StyledBox>
            <Box>
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
            </Box>
            <Box>
              <StyledList>
                <Button endIcon={<ExpandMore>send</ExpandMore>}>Airtel Black</Button>
                <Button endIcon={<ExpandMore>send</ExpandMore>}>Prepaid</Button>
                <Button endIcon={<ExpandMore>send</ExpandMore>}>Postpaid</Button>
                <Button endIcon={<ExpandMore>BROADBAND</ExpandMore>}>BROADBAND</Button>
                <Button endIcon={<ExpandMore>DTH</ExpandMore>}>DTH</Button>
                <Button endIcon={<ExpandMore>Bank</ExpandMore>}>Bank</Button>
                <Button endIcon={<ExpandMore>Airtel Finance</ExpandMore>}>Airtel Finance</Button>
                <Button startIcon={<AccountCircleIcon></AccountCircleIcon>}>Account</Button>
              </StyledList>
            </Box>
          </StyledBox>
        </Container>
        <Divider />
        <ImageCarousel />

        <Box bgcolor="#f7f7fa">
          <Box display="flex" flexDirection="column" padding="10px" alignItems="center">
            <Typography variant="h4" align="center">
              Recharge or pay bills
            </Typography>
            <StyledBadgeList>
              <Button variant="contained" startIcon={<AddCircleIcon></AddCircleIcon>}>
                Airtel Black
              </Button>
              <Button variant="contained" startIcon={<AddCircleIcon></AddCircleIcon>}>
                Airtel Black
              </Button>
              <Button variant="contained" startIcon={<AddCircleIcon></AddCircleIcon>}>
                Airtel Black
              </Button>
              <Button variant="contained" startIcon={<AddCircleIcon></AddCircleIcon>}>
                Airtel Black
              </Button>
              <Button variant="contained" startIcon={<AddCircleIcon></AddCircleIcon>}>
                Airtel Black
              </Button>
            </StyledBadgeList>
            <TextField
              variant="outlined"
              style={{ width: "300px", marginTop: "5px", marginBottom: "30px" }}
              required
              size="medium"
              placeholder="Enter mobile Number"
            ></TextField>
            <Button variant="contained" color="primary" size="large" style={{ width: "300px", marginBottom: "30px" }}>
              RECHARGE
            </Button>
          </Box>
        </Box>

        <Box bgcolor="#ff4949" height="44px">
          <Box display="flex" justifyContent="center" alignItems="center" gridGap="5px">
            <img
              src="https://assets.airtel.in/static-assets/home-recast/images/offer-icon.png"
              loading="lazy"
              class="wt-img offer-icon"
              width="44"
              height="44"
              alt="offer icon"
              draggable="false"
            />
            <Typography variant="p">Free 2 GB data coupons on select recharges via Thanks app</Typography>
            <Button variant="contained" size="small">
              Get App
            </Button>
          </Box>
        </Box>

        <Box bgcolor="#f7f7fa" padding="5px">
          <Box
            display="flex"
            flexDirection="column"
            padding="10px"
            alignItems="center"
            marginBottom="10px"
            gridGap="20px"
          >
            <Typography variant="h4" align="center" margin="dense">
              Buy a new connection
            </Typography>
            <StyledBadgeList>
              <Box display="flex" flexDirection="column" gridGap="5px" alignItems="center">
                <Button variant="contained">
                  <AddCircleIcon></AddCircleIcon>
                </Button>
                <Typography variant="p">PrePaid</Typography>
              </Box>
              <Box display="flex" flexDirection="column" gridGap="5px" alignItems="center">
                <Button variant="contained">
                  <AddCircleIcon></AddCircleIcon>
                </Button>
                <Typography variant="p">PostPaid</Typography>
              </Box>
              <Box display="flex" flexDirection="column" gridGap="5px" alignItems="center">
                <Button variant="contained">
                  <AddCircleIcon></AddCircleIcon>
                </Button>
                <Typography variant="p">DTH</Typography>
              </Box>
              <Box display="flex" flexDirection="column" gridGap="5px" alignItems="center">
                <Button variant="contained">
                  <AddCircleIcon></AddCircleIcon>
                </Button>
                <Typography variant="p">Fiber</Typography>
              </Box>
              <Box display="flex" flexDirection="column" gridGap="5px" alignItems="center">
                <Button variant="contained">
                  <AddCircleIcon></AddCircleIcon>
                </Button>
                <Typography variant="p">Airtel Black</Typography>
              </Box>
              <Box display="flex" flexDirection="column" gridGap="5px" alignItems="center">
                <Button variant="contained">
                  <AddCircleIcon></AddCircleIcon>
                </Button>
                <Typography variant="p">Xsafe</Typography>
              </Box>
            </StyledBadgeList>
            <Box
              display="flex"
              flexDirection="row"
              bgcolor="error.main"
              borderRadius="16px"
              padding="10px"
              alignItems="center"
              gridGap="10px"
            >
              <img
                height="60px"
                width="60px"
                src="https://assets.airtel.in/static-assets/home-recast/images/switch-to-airtel-web.png"
                loading="lazy"
                class="wt-img switch-image"
                draggable="false"
                alt="switch to airtel image"
              />

              <Typography variant="subtitle1" gutterBottom>
                Switch to airtel
                <br />
                Select a plan & order SIM, Get SIM home-delivered
              </Typography>

              <Box>
                <Button variant="contained" size="small">
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Cards />
        <Footer />
      </Box>
    );
  }
}
