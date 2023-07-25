import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  Hidden,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import MobileNavbarDrawer from "components/common/MobileNavbarDrawer";
import UserIcon from "components/icons/UserIcon";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import UserPopper from "./UserPopper";

export const Header = () => {
  const [isMobileNavbarDrawerOpen, setIsMobileNavbarDrawerOpen] =
    useState<boolean>(false);
  const [isMenuItemDrawerOpen, setIsMenuItemDrawerOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          px: 2,
          zIndex: "appBar",
          backgroundImage:
            "linear-gradient(143.27deg, rgb(0, 94, 166) 0%, rgb(21, 70, 160) 100%)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Hidden mdUp>
            {isMenuItemDrawerOpen ? (
              <ArrowBackIosIcon
                onClick={() => {
                  setIsMenuItemDrawerOpen(false);
                  setCurrentMenuItem("");
                }}
                sx={{
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 25,
                }}
              />
            ) : (
              <Logo color="light" />
            )}
          </Hidden>
          <Typography color="#fff">{currentMenuItem || "John Doe"}</Typography>
          <Hidden mdDown>
            <Box display="flex" alignItems="center" gap={2}>
              <Box display="flex" gap={1.5}>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Developer
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  sx={{ display: "flex", alignItems: "center" }}
                  underline="hover"
                  color="#fff"
                >
                  Help
                </MuiLink>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ffffff6b",
                  width: "1px",
                  height: 18,
                }}
              ></Box>
              <UserPopper
                el={
                  <Box display="flex" gap={1} alignItems="center">
                    <Box
                      sx={{
                        backgroundColor: "#018065",
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                      }}
                    >
                      <UserIcon />
                    </Box>
                    <Typography color="#fff">John Doe</Typography>
                  </Box>
                }
              />
            </Box>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              onClick={() => {
                setIsMobileNavbarDrawerOpen((prev) => !prev);
                setIsMenuItemDrawerOpen(false);
                setCurrentMenuItem("");
              }}
            >
              {!isMobileNavbarDrawerOpen ? (
                <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
              ) : (
                <CloseIcon sx={{ color: "#fff" }} fontSize="large" />
              )}
            </IconButton>
          </Hidden>
        </Container>
      </Box>
      <Hidden mdDown>
        <Paper
          elevation={3}
          sx={{
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Container maxWidth="xl">
            <Box display="flex" alignItems="center" gap={3}>
              <Logo />
              <Box display="flex" gap={3}>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  sx={{
                    borderBottom: `3px solid #0070ba`,
                    py: "5px",
                  }}
                >
                  Home
                </MuiLink>
                <MuiLink
                  component={Link}
                  href=""
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  id="basic-menu"
                  className="activity-link"
                  onClick={handleClick}
                  sx={{
                    py: "5px",
                    borderBottom: `3px solid transparent`,
                  }}
                >
                  Activity
                </MuiLink>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className="activity-menu"
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <div className="d-flex gap-3">
                    <div>
                      <MenuItem className="fw-bold" aria-readonly>
                        Transaction
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        <Link
                          href="/activity/allTransactions"
                          className="text-decoration-none text-black"
                          // style={{ color: "#000" }}
                        >
                          All Transaction
                        </Link>
                      </MenuItem>
                    </div>
                    <div>
                      <MenuItem className="fw-bold" aria-readonly>
                        Resolution Center
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        <Link
                          href="/activity"
                          className="text-decoration-none text-black"
                          // style={{ color: "#000" }}
                        >
                          Open Cases
                        </Link>
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        Closed Cases
                      </MenuItem>
                    </div>
                    <div>
                      <MenuItem className="fw-bold" aria-readonly>
                        Reports
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        All reports
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        Insights
                      </MenuItem>
                    </div>
                    <div>
                      <MenuItem className="fw-bold" aria-readonly>
                        Operations
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        Customere With Transaction
                      </MenuItem>
                      <MenuItem className="" onClick={handleClose}>
                        API access
                      </MenuItem>
                    </div>
                  </div>
                </Menu>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  sx={{
                    py: "5px",
                    borderBottom: `3px solid transparent`,
                  }}
                >
                  Pay & Get Paid
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  sx={{
                    py: "5px",
                    borderBottom: `3px solid transparent`,
                  }}
                >
                  Marketing For Growth
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="#0070ba"
                  fontWeight={500}
                  sx={{
                    py: "5px",
                    borderBottom: `3px solid transparent`,
                  }}
                >
                  Business Tools
                </MuiLink>
              </Box>
            </Box>
          </Container>
        </Paper>
      </Hidden>
      <MobileNavbarDrawer
        isDrawer={isMobileNavbarDrawerOpen}
        setIsDrawer={setIsMobileNavbarDrawerOpen}
        isMenuItemDrawerOpen={isMenuItemDrawerOpen}
        setIsMenuItemDrawerOpen={setIsMenuItemDrawerOpen}
        setCurrentMenuItem={setCurrentMenuItem}
      />
    </Box>
  );
};
