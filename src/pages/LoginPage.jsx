import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginEl from '../components/LoginEl';
import Logo from '../asset/Logo.svg';

const defaultTheme = createTheme();

export default function LoginPage() {
	useEffect(() => {
		document.title = 'Ingresar a EmoTranf';
	}, []);
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
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
					<LoginEl />
				</Box>
			</Container>
		</ThemeProvider>
	);
}
