import './Styles/RatingsContainer.scss'
import {StarRatings, RatingsComponent} from '../../defs'

import * as BsIcons from 'react-icons/bs'

type RatingsContainerProps = {
	className:string
	ratingsIndex:number
}

export const RatingsContainer = ({className, ratingsIndex}: RatingsContainerProps) => {
	const rating:RatingsComponent = StarRatings[ratingsIndex]
	
	let icons:number[] = []
	for(let i:number = 0; i < rating.stars; i++) {
		icons.push(i)
	}

	return (
		<>
			<div className={className}>

				{/* {for(let t:number = 0; t < rating.stars; t++) {
					<BsIcons.BsStarFill key={t} className='star-icon'></BsIcons.BsStarFill>
				}} */}

				{icons.map(num =>(
					<BsIcons.BsStarFill key={num} className='star-icon'></BsIcons.BsStarFill>
				))}

				<span className='rating-statement'>{rating.statement}</span>
			</div>
		</>
	)
}
