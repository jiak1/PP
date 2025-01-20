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
		<Box sx={{ padding: 4, maxWidth: 800, margin: '0 auto' }}>
			{/* Title */}
			<Typography variant="h5" gutterBottom>
				Subscribers
			</Typography>

			{/* Slider */}
			<Slider
				value={sliderValue}
				onChange={handleSliderChange}
				marks={marks}
				step={null} // Prevent in-between values
				min={0}
				max={100}
				valueLabelDisplay="off" // Hide default value tooltip
			/>

			{/* Stats Display */}
			<Box sx={{ marginTop: 2, textAlign: 'center' }}>
				<Typography variant="h6">
					{actualValue.toLocaleString()} Subscribers at $199/year
				</Typography>
				<Typography variant="h6" color="primary">
					Pioneers Share: {potentialMoney}/year
				</Typography>
			</Box>
		</Box>
	)
}

export default Stats
