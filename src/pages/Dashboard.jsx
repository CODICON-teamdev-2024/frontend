import { Box, Typography, Container } from '@mui/material';
import EmotionsGrid from '../components/EmotionsGrid';
export default function Dashboard() {
	return (
		<>
			<Container component='main' maxWidth='xs'>
				<Box
					sx={{
						marginTop: 2,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component='h1' variant='h4' marginBottom={4}>
						¿Cómo te sientes hoy?
					</Typography>
					<EmotionsGrid />
				</Box>
			</Container>
		</>
	);
}
