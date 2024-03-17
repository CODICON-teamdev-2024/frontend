import { Paper, Box } from '@mui/material';
export default function Error({ element }) {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 100,
					width: '100vw',
					height: '100vh',
					bgcolor: 'white',
				}}
			>
				<Paper
					elevation={3}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '50vw',
						height: '15vh',
					}}
				>
					{element}
				</Paper>
			</Box>
		</>
	);
}
