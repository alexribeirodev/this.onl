import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        component="div"
        sx={{
          p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%', height: 100
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontSize: '2rem', textAlign: 'center' }}
          placeholder='example.com'
          inputProps={{ 'aria-label': 'input url to shortener' }}
          type="url"
          onKeyDown={() => { }} />
      </Paper>
      <Button>Reduzir</Button>
    </Box>
  )
}
