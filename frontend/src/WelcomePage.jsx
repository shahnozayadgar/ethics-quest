import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material"; // Keep MUI for layout
import { Button } from "antd"; // Import Button from Ant Design
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleTakeTest = () => {
    navigate("/registration");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "600", marginBottom: 2 }}>
              Discover your ethical stance
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 6, marginTop: 5 }}>
            Explore different campus-life situations and find out your ethical MBTI. 
            Reflect on your values and see what drives your decisions!
            </Typography>
            <Button
              type="primary" // Ant Design primary button style
              style={{
                width: "281px",
                height: "73px",
                borderRadius: "40px",
                backgroundColor: "#4F51FD",
                color: "#FFF",
                fontWeight: "600",
                textTransform: "none",
                fontSize: "16px",
                marginTop: "16px",
                boxShadow: "0px 4px 8px rgba(79, 81, 253, 0.2)", // Optional shadow for aesthetics
              }}
              onClick={handleTakeTest} // Navigate to registration page
            >
              TAKE A TEST NOW
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              marginRight: "-90px",
            }}
          >
            <img
              src="/illustration.svg"
              alt="Ethics Illustration"
              style={{
                maxWidth: "90%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WelcomePage;