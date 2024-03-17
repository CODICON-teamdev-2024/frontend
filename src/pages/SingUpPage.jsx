import { Avatar, Box, Typography, Container } from '@mui/material';
import { useEffect } from 'react';
import Logo from '../asset/Logo.svg';
import SingUpForm from '../components/SingUpForm';
export default function SignUpPage() {
	useEffect(() => {
		document.title = 'Registrate en EmoTranf';
	}, []);
	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<img
						src={Logo}
						alt='Logo'
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</Avatar>
				<Typography component='h1' variant='h5'>
					Registrate en EmoTranf
				</Typography>
				<SingUpForm />
			</Box>
		</Container>
	);
}
