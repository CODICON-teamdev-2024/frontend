import { useEffect } from 'react';
import { Avatar, Box, Typography, Container } from '@mui/material';
import LoginEl from '../components/LoginEl';
import Logo from '../asset/Logo.svg';
import { UserPovider } from '../context/UserProvider';
export default function LoginPage() {
	useEffect(() => {
		document.title = 'Ingresar a EmoTranf';
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
				<Avatar sx={{ m: 1 }}>
					<img
						src={Logo}
						alt='Logo'
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</Avatar>
				<Typography component='h1' variant='h5'>
					Ingresar a EmoTranf
				</Typography>
				<UserPovider>
					<LoginEl />
				</UserPovider>
			</Box>
		</Container>
	);
}
