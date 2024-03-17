import { Button, TextField, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
export default function SingUpForm({ handleSubmit }) {
	return (
		<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						autoComplete='given-name'
						name='firstName'
						required
						fullWidth
						id='firstName'
						label='Nombre'
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						fullWidth
						id='lastName'
						label='Apellido'
						name='lastName'
						autoComplete='family-name'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id='email'
						label='Email'
						name='email'
						autoComplete='email'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						name='password'
						label='Contraseña'
						type='password'
						id='password'
						autoComplete='new-password'
					/>
				</Grid>
			</Grid>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Registrarse
			</Button>
			<Grid container justifyContent='flex-end'>
				<Grid item>
					<Link to='/' variant='body2'>
						Ya tienes una cuenta? Inicia sesión!
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}
