import {
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
export default function LogingForm({ handleSubmit }) {
	return (
		<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			<TextField
				margin='normal'
				required
				fullWidth
				id='email'
				label='Email'
				name='email'
				autoComplete='email'
				autoFocus
			/>
			<TextField
				margin='normal'
				required
				fullWidth
				name='password'
				label='Contraseña'
				type='password'
				id='password'
				autoComplete='current-password'
			/>
			<FormControlLabel
				control={<Checkbox name='remember' color='primary' />}
				label='Mantener sesión inciada en este equipo'
			/>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Ingresar
			</Button>
			<Grid container>
				<Grid item>
					<Link to='/' variant='body2'>
						{'No tienes cuenta? Registrate!'}
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}
