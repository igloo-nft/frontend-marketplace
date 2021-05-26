import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Candidate from 'src/components/candidates/Candidate';
import candidates from 'src/__mocks__/candidates';

const Candidates = () => (
  <>
    <Helmet>
      <title>Candidates | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {candidates.map((candidate) => (
            <Grid key={candidate.id} item lg={3} sm={6} xl={3} xs={12}>
              <Candidate {...candidate} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Candidates;
