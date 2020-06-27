import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";

function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <div>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </div>
        <div>
          <Link href="/dashboard" color="secondary">
            Go to the dashboard page
          </Link>
        </div>
        <div>
          <Link href="/sticky-footer" color="secondary">
            Go to the sticky-footer page
          </Link>
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default Index;
