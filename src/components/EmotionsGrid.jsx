import {
	Paper,
	Grid,
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	TextField,
} from '@mui/material';
import { useState, useEffect } from 'react';
const url = '';
export default function EmotionsGrid() {
	const [array, setArray] = useState([]);
	const [currentEl, setCurrentEl] = useState(null);
	const [wizardRes, setWizardRes] = useState(null);
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const emotions = [
		'😄', // Alegría
		'😢', // Tristeza
		'😡', // Enojo
		'😨', // Miedo
		'🤢', // Asco
		'🍔', // Hambre
		'😴', // Sueño
		'😰', // Ansiedad
		'😍', // Enamoramiento
		'😐', // Neutralidad
		'😒', // Fastidio
		'😏', // Horny
	];
	const emotionStrings = [
		'Feliz',
		'Triste',
		'Enojadx',
		'Asustadx',
		'Asqueadx',
		'Hambre',
		'Sueño',
		'Ansiosx',
		'Amor',
		'Neutrx',
		'Fastidio',
		'Horny',
	];

	useEffect(() => {
		let arr = [];
		for (let i = 0; i < emotions.length; i++) {
			arr.push(
				<Grid item key={i} xs={4} sm={4} md={4}>
					<Paper
						dataobj={JSON.stringify({
							emotion: emotionStrings[i],
							emoji: emotions[i],
						})}
						sx={{
							p: 2,
							textAlign: 'center',
							maxWidth: '90px',
							maxHeight: '130px',
							elevation: currentEl === i ? 8 : 4,
							cursor: isCheckboxChecked ? 'not-allowed' : 'pointer',
							backgroundColor: currentEl === i ? '#1976D2' : 'inherit',
							opacity: isCheckboxChecked ? 0.5 : 1,
						}}
						onClick={event => {
							event.preventDefault();
							if (!isCheckboxChecked) {
								const dataObjString =
									event.currentTarget.getAttribute('dataobj');
								const dataObj = JSON.parse(dataObjString);
								setWizardRes(dataObj);
								setCurrentEl(i);
							}
						}}
					>
						<span
							role='img'
							aria-label={emotionStrings[i]}
							style={{ fontSize: '2em' }}
						>
							{emotions[i]}
						</span>
						<Typography variant='body2' sx={{ mt: 1 }}>
							{emotionStrings[i]}
						</Typography>
					</Paper>
				</Grid>
			);
		}
		setArray(arr);
	}, [currentEl, isCheckboxChecked, setWizardRes]);

	return (
		<>
			<Grid container spacing={2} alignContent={'center'}>
				{!isCheckboxChecked && array}
				{isCheckboxChecked && (
					<TextField
						margin='normal'
						required
						fullWidth
						name='message'
						label='Contanos que te esta pasando'
						type='text'
						id='message'
						multiline
						onChange={e => setInputValue(e.target.value)}
					/>
				)}
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox
								color='primary'
								checked={isCheckboxChecked}
								onChange={e => {
									setIsCheckboxChecked(e.target.checked);
								}}
							/>
						}
						label='No lo sé.'
					/>
				</Grid>
			</Grid>
			<Button
				fullWidth
				variant='contained'
				sx={{ mt: 2, mb: 2 }}
				onClick={e => {
					e.preventDefault();
					const input = {
						emotion: isCheckboxChecked ?? null,
						emoji: isCheckboxChecked ?? null,
						message: isCheckboxChecked ?? inputValue,
						...wizardRes,
					};
					const requestOptions = {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(input),
					};
					fetch(url, requestOptions);
				}}
			>
				Compartir
			</Button>
		</>
	);
}
