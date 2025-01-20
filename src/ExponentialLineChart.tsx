import React, { useState } from 'react'
import { Slider, Box, Typography } from '@mui/material'

const marks = [
	{ value: 0, label: '100k' },
	{ value: 25, label: '200k' },
	{ value: 50, label: '500k' },
	{ value: 75, label: '1m' },
	{ value: 100, label: '2m' },
]

const mapValueToActual = (value: number): number => {
	if (value === 0) return 100000
	if (value === 25) return 200000
	if (value === 50) return 500000
	if (value === 75) return 1000000
	if (value === 100) return 2000000
	return 100000 // Default fallback
}

const Stats: React.FC = () => {
	const [sliderValue, setSliderValue] = useState<number>(0)

	const handleSliderChange = (_event: Event, value: number | number[]) => {
		if (typeof value === 'number') {
			setSliderValue(value)
		}
	}

	// Map the slider's value to the actual value
	const actualValue = mapValueToActual(sliderValue)

	// Format potential money without decimals
	const potentialMoney = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
	}).format(actualValue * 0.07)

	return (
		<Box
			sx={{
				backgroundColor: '#c8c4fc73',
				paddingLeft: '100px',
				paddingRight: '100px',
				paddingTop: '50px',
				paddingBottom: '50px',
				display: 'flex',
				justifyContent: 'center',
				margin: '0 auto',
				width: '100%',
				borderRadius: '10px',
			}}
		>
			<div style={{ maxWidth: '800px' }}>
				{/* Title */}
				<Typography
					variant="h5"
					gutterBottom
					fontWeight={'700'}
					fontSize={52}
					color="#150B3F"
					align="center"
					fontFamily={
						"'Barlow', 'Playfair Display', Georgia, 'Times New Roman', serif"
					}
				>
					My share of revenue per year from subscriptions*
				</Typography>

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div
						style={{
							backgroundColor: '#150B3F',
							borderRadius: '10px',
							paddingBottom: '15px',
							paddingTop: '15px',
							marginTop: '50px',
							marginBottom: '75px',
							width: '60%',
						}}
					>
						<Typography
							variant="h6"
							color="#FBCA48"
							fontWeight={'800'}
							align="center"
							fontSize={56}
							fontFamily={
								"'Barlow', 'Playfair Display', Georgia, 'Times New Roman', serif"
							}
						>
							{potentialMoney}
							<span style={{ fontWeight: '300' }}>**</span>
						</Typography>
					</div>
				</div>
				<div
					style={{
						backgroundColor: 'white',
						padding: '30px 60px 30px 60px',
						filter: 'drop-shadow(rgba(0, 0, 0, 0.2), 5px 5px 10px)',
						borderRadius: '10px',
					}}
				>
					{/* Slider */}
					<Slider
						value={sliderValue}
						onChange={handleSliderChange}
						marks={marks}
						step={null} // Prevent in-between values
						min={0}
						max={100}
						sx={{
							color: '#150B3F', // Custom color for slider
							'& .MuiSlider-rail': {
								opacity: 0.5,
								backgroundColor: '#D3D3D3', // Rail color
							},
							'& .MuiSlider-thumb': {
								backgroundColor: '#150B3F', // Thumb color
								'&:hover': {
									boxShadow: '0 0 10px #150B3F', // Hover effect
								},
							},
							'& .MuiSlider-track': {
								backgroundColor: '#150B3F', // Track color
							},
						}}
						valueLabelDisplay="off" // Hide default value tooltip
					/>

					{/* Stats Display */}
					<Box sx={{ marginTop: 2, textAlign: 'center' }}>
						<Typography
							variant="h6"
							fontFamily={
								"'Playfair Display', Georgia, 'Times New Roman', serif"
							}
						>
							Subscribers at{' '}
							<span style={{ fontWeight: '700' }}>$199USD per annum</span>
						</Typography>
					</Box>
				</div>
				<Typography
					align="center"
					marginTop="60px"
					fontSize="12px"
					fontFamily={
						"'Barlow', 'Playfair Display', Georgia, 'Times New Roman', serif"
					}
				>
					*As per the Pioneer Program’s terms and conditions
					<br />
					**Products and services are sold in USD and payouts are in USD.
				</Typography>
			</div>
		</Box>
	)
}

export default Stats
